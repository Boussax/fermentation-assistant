import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFermentComponent } from './new-ferment.component';

describe('NewFermentComponent', () => {
  let component: NewFermentComponent;
  let fixture: ComponentFixture<NewFermentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewFermentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewFermentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
