import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { Location } from '@angular/common';
import { FermentData } from '../ferment';
import { multi } from '../data';

@Component({
  selector: 'app-ferment-data',
  templateUrl: './ferment-data.component.html',
  styleUrls: ['./ferment-data.component.css']
})
export class FermentDataComponent{

  multi: FermentData[] = [{name: '', series : [{name: '',value: 0}]}];
  view: [number, number] = [700, 300];

  // options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = false;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Date';
  yAxisLabel: string = '';
  timeline: boolean = true;

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  constructor(private location: Location) {
    Object.assign(this, { multi });
  }

  onSelect(event: any) {
    console.log(event);
  }

  
  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  goBack():void {
    this.location.back();
  }

}
