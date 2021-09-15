import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FermentDetailComponent } from './ferment-detail.component';

describe('FermentDetailComponent', () => {
  let component: FermentDetailComponent;
  let fixture: ComponentFixture<FermentDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FermentDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FermentDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
