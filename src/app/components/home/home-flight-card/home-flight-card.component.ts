import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home-flight-card',
  templateUrl: './home-flight-card.component.html',
  styleUrls: ['./home-flight-card.component.scss']
})
export class HomeFlightCardComponent {
  @Input() flight: any;


}
