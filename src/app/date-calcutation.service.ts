import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MessageService } from './messages.service';


@Injectable({
  providedIn: 'root'
})
export class DateCalcutationService {

  constructor() { }

  calculateAge(startDate: Date): Date {
    //return Date.now().toString();
  }
}
