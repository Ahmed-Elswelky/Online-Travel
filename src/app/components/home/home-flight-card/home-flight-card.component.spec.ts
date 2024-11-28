import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFlightCardComponent } from './home-flight-card.component';

describe('HomeFlightCardComponent', () => {
  let component: HomeFlightCardComponent;
  let fixture: ComponentFixture<HomeFlightCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeFlightCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeFlightCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
