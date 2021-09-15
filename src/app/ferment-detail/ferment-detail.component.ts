import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Ferment } from '../ferment';
import { FermentService } from '../ferment.service';

@Component({
  selector: 'app-ferment-detail',
  templateUrl: './ferment-detail.component.html',
  styleUrls: ['./ferment-detail.component.css']
})
export class FermentDetailComponent implements OnInit {

  @Input() ferment?: Ferment;
  ferments: Ferment[] = [];
  
  constructor(private route: ActivatedRoute,
    private fermentService: FermentService,
    private location: Location) { }

  ngOnInit(): void {
    this.getFerments('ferments');
    this.getFerment();
  }

  getFerment(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.fermentService.getFerment(id)
      .subscribe(ferment => this.ferment = ferment);
  }

  getFerments(fermentList: string): void {
    this.fermentService.getFerments(fermentList)
      .subscribe(ferments => this.ferments = ferments);
  }

  goBack():void {
    this.location.back();
  }

  save(): void {
    if (this.ferment) {
      this.fermentService.updateFerment('ferments', this.ferment)
        .subscribe(() => this.goBack());
    }
  }

  archive(ferment: Ferment): void {
    // TODO : find best way to archive this:
    this.fermentService.addFerment('archive',ferment).subscribe(ferment => {this.ferments.push(ferment);});
    this.delete(ferment);
  }

  delete(ferment: Ferment) : void {
    this.ferments = this.ferments.filter(h => h !== ferment);
    this.fermentService.deleteFerment(ferment.id).subscribe();
    this.goBack();
  }

}



