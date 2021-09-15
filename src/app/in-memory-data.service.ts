import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Ferment } from './ferment';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const ferments = [
      {
        id: 11, 
        lotNumber: 'SK14052021',
        type: 'Sauerkraut', 
        startDate: '2021-12-02',
        fermentationDuration: {value: 5, unit: 'days'}
      },
      {
        id: 12, 
        lotNumber: 'SK14052021',
        type: 'Ginger Ale', 
        startDate: 14052021,
        fermentationDuration: {value: 5, unit: 'days'}
      },
      {
        id: 13, 
        lotNumber: 'SK14052021',
        type: 'Kimchi', 
        startDate: 14052021,
        fermentationDuration: {value: 5, unit: 'days'}
      }
    ];
    
    const archive = [
      {
        id: 111, 
        lotNumber: 'SK14052021',
        type: 'ddsfdsf', 
        startDate: '2021-12-02',
        fermentationDuration: {value: 5, unit: 'days'}
      },
      {
        id: 112, 
        lotNumber: 'SK14052021',
        type: 'Gingesdfsdr Ale', 
        startDate: 14052021,
        fermentationDuration: {value: 5, unit: 'days'}
      },
      {
        id: 113, 
        lotNumber: 'SK14052021',
        type: 'Kimsdfchi', 
        startDate: 14052021,
        fermentationDuration: {value: 5, unit: 'days'}
      }
    ];

    return {ferments, archive};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(ferments: Ferment[]): number {
    console.log('new id calculated ' +ferments.length+1);
    return ferments.length > 0 ? Math.max(...ferments.map(ferment => ferment.id)) + 1 : 11;
    
  }
  
}