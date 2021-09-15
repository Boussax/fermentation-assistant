import { Component, OnInit } from '@angular/core';
import { Ferment } from '../ferment';
import { FermentService } from '../ferment.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  ferments: Ferment[] = [];

  constructor(private fermentService: FermentService) { }

  ngOnInit() {
    this.getFerments('ferments');
  }

  getFerments(fermentList:string): void {
    this.fermentService.getFerments(fermentList)
      .subscribe(ferments => this.ferments = ferments);
  }
}
