import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FlightResultComponent } from './components/flight-result/flight-result.component';
import { SelectedFlightComponent } from './bonus/selected-flight/selected-flight.component';
import { AboutUsComponent } from './components/about-us/about-us.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'home', redirectTo: ''},
  {path:'flights', component: FlightResultComponent},
  {path:'flights/:id', component: SelectedFlightComponent},
  {path:'about', component: AboutUsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
