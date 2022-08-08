import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorCountrieComponent } from './por-countrie.component';

describe('PorCountrieComponent', () => {
  let component: PorCountrieComponent;
  let fixture: ComponentFixture<PorCountrieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PorCountrieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PorCountrieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
