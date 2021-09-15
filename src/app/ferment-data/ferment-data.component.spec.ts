import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FermentDataComponent } from './ferment-data.component';

describe('FermentDataComponent', () => {
  let component: FermentDataComponent;
  let fixture: ComponentFixture<FermentDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FermentDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FermentDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
