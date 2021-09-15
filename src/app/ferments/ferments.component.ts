import { Component, OnInit } from '@angular/core';
import { Ferment } from '../ferment';
import { FermentService } from '../ferment.service';

@Component({
  selector: 'app-ferments',
  templateUrl: './ferments.component.html',
  styleUrls: ['./ferments.component.css']
})
export class FermentsComponent implements OnInit {

  ferments: Ferment[] = [];

  constructor(private fermentService: FermentService) { }

  getFerments(): void {
    this.fermentService.getFerments('ferments')
        .subscribe(ferments => this.ferments = ferments);
  }

  delete(ferment: Ferment) : void {
    this.ferments = this.ferments.filter(h => h !== ferment);
    this.fermentService.deleteFerment(ferment.id).subscribe();
  }

  ngOnInit(): void {
    this.getFerments();
  }

}
