import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { FindFlightsComponent } from './components/find-flights/find-flights.component';
import { ReserveFlightComponent } from './components/reserve-flight/reserve-flight.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { CheckInComponent } from './components/check-in/check-in.component';
import { CheckInConfirmationComponent } from './components/check-in-confirmation/check-in-confirmation.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
  { path: '', redirectTo: '/findFlights', pathMatch: 'full' }, // Redirect root to /findFlights
  { path: 'findFlights', component: FindFlightsComponent },
  { path: 'reserve', component: ReserveFlightComponent },
  { path: 'confirmation', component: ConfirmationComponent },
  { path: 'checkIn', component: CheckInComponent },
  { path: 'checkInConfirmation', component: CheckInConfirmationComponent },
  { path: '**', component: NotFoundComponent }, // 404: Page Not Found
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {  
  constructor(router: Router) {
  console.log('Router configuration:', router.config);
}}