import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Ferment, FermentData } from '../ferment';
import { BrowserModule } from '@angular/platform-browser';
import { FermentService } from '../ferment.service';
import { FormBuilder, FormControl, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-ferment',
  templateUrl: './new-ferment.component.html',
  styleUrls: ['../ferment-detail/ferment-detail.component.css']
})
export class NewFermentComponent implements OnInit {

  form: FormGroup;
  ferments: Ferment[] = [];
  lotNumber: string = '';
  endDate : Date = new Date(Date.now());

  fermentTypes = ['Ginger Ale','Sauerkraut','Kimchi','Kombucha','Garum','Vinegar'];
  physicalParameters = ['pH', 'temperature', 'CO2 concentration', 'sugar concentration'];
  
  constructor(
    private fermentService: FermentService,
    private location: Location,
    private readonly fb : FormBuilder) {
      
      this.form = this.fb.group ({
        newType: [null, Validators.required],
        newStartDate : [null, Validators.required],
        newDurationValue : [0, Validators.min(0)],
        newDurationUnit : [null, Validators.required],
        newParamOfInterest: this.fb.array([], [Validators.required])
      });
  }

  ngOnInit(): void {
    this.getFerments();
    console.log(this.endDate);
  }

  getFerments(): void {
    this.fermentService.getFerments('ferments')
        .subscribe(ferments => this.ferments = ferments);
  }

  goBack():void {
    this.location.back();
  }

  onCheckboxChange(parameter: string, e : Event) {
    const newParamOfInterest: FormArray = this.form.get('newParamOfInterest') as FormArray;
    if (e.target!= null){
      if ((e.target as HTMLInputElement).checked) {
        newParamOfInterest.push(new FormControl(parameter));
      } else {
        const index = newParamOfInterest.controls.findIndex(x => x.value === parameter);
        newParamOfInterest.removeAt(index);
      }
    }
  }

  onSubmit(): void {
    this.computeLotNumber();
    //this.computeEndDate();
    this.fermentService
      .addFerment('ferments',{
          type: this.form.value.newType, 
          startDate: this.form.value.newStartDate, 
          fermentationDuration: {value: this.form.value.newDurationValue, 
            unit: this.form.value.newDurationUnit},
          lotNumber: this.lotNumber, 
          parametersOfInterest: this.form.value.newParamOfInterest,
          fermentData: ([{name: '', series : [{name: '',value: 0}]}] as FermentData[])
        } as Ferment)
      .subscribe(ferment => {
        this.ferments.push(ferment);
      });
    this.goBack();
    
    console.log(this.form.value);
    console.log(this.lotNumber);
  }

  computeLotNumber(): void {
    this.lotNumber = this.form.value.newType[0]
              + this.form.value.newType[1] 
              + this.form.value.newStartDate.replace('-','').replace('-','');
  }

  computeEndDate(): void {
    switch (this.form.value.newDurationUnit) {
      case "days":
        this.endDate.setDate(this.form.value.newStartDate + this.form.value.newDurationValue * 24 * 60 *60);
        break;
      case "weeks":
        this.endDate = this.form.value.newStartDate + this.form.value.newDurationValue * 7 * 24 * 60 *60;
        break;
      case "months":
        this.endDate = this.form.value.newStartDate + this.form.value.newDurationValue * 30 * 7 * 24 * 60 *60;
        break;
      default:
        this.endDate = this.form.value.newStartDate;
        break;
    }
    console.log('endDate: '+ this.endDate);
  }

}
