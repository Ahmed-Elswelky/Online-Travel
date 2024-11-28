import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFlightCardsComponent } from './home-flight-cards.component';

describe('HomeFlightCardsComponent', () => {
  let component: HomeFlightCardsComponent;
  let fixture: ComponentFixture<HomeFlightCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeFlightCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeFlightCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
