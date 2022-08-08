import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeCountrieComponent } from './see-countrie.component';

describe('SeeCountrieComponent', () => {
  let component: SeeCountrieComponent;
  let fixture: ComponentFixture<SeeCountrieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeeCountrieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeeCountrieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
