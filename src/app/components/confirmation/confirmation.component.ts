import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class ConfirmationComponent {
  reservationDetails: any = {};
  flightDetails: any = {};
  passengerDetails: any = {};
  message: string = '';
  showConfirmButton: boolean = true;

  constructor(private router: Router, private http: HttpClient) {
    const state = this.router.getCurrentNavigation()?.extras.state;
    if (state?.['reservation']) {
      const reservation = state['reservation'];
      this.reservationDetails = {
        id: reservation.reservation.id,
        amount: reservation.reservation.amount,
        cardNumber: reservation.reservation.cardNumber,
      };
      this.flightDetails = {
        flightNumber: reservation.flightDetails.flightNumber,
        departureCity: reservation.flightDetails.departureCity,
        arrivalCity: reservation.flightDetails.arrivalCity,
        dateOfDeparture: reservation.flightDetails.dateOfDeparture,
        estimatedDepartureTime: reservation.flightDetails.estimatedDepartureTime,
      };
      this.passengerDetails = {
        name: reservation.passengerDetails.name,
        email: reservation.passengerDetails.email,
      };
      this.message = reservation.message || 'Reservation created successfully!';
    } else {
      this.message = 'Reservation details are not available. Please go back and try again.';
    }
  }

  confirmReservation() {
    console.log('Reservation confirmed!');
    this.message = 'Reservation confirmed successfully!';
    this.showConfirmButton = false; // Hide the confirm button after confirmation
  }

  navigateToCheckIn() {
    this.router.navigate(['/checkIn'], { state: { reservationId: this.reservationDetails.id } });
  }

  navigateToHome() {
    this.router.navigate(['/']);
  }
}