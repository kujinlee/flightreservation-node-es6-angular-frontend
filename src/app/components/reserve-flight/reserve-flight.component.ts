import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-reserve-flight',
  standalone: true, // Mark as standalone
  templateUrl: './reserve-flight.component.html',
  styleUrls: ['./reserve-flight.component.css'],
  imports: [FormsModule, CommonModule], // Import dependencies here
})
export class ReserveFlightComponent {
  flight: any;
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  phone: string = '';
  cardNumber: string = '';
  amount: number = 0;
  message: string = '';

  constructor(private router: Router, private http: HttpClient) {
    this.flight = this.router.getCurrentNavigation()?.extras.state?.['flight'];
    if (this.flight) {
      this.amount = this.flight.price; // Set the amount based on the flight price
    }
  }

  submitReservation() {
    const backendUrl = '/api/createReservation'; // Use the proxy path
    const reservationDetails = {
      flightId: this.flight.id,
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      phone: this.phone,
      cardNumber: this.cardNumber,
      amount: this.amount,
    };

    this.http.post(backendUrl, reservationDetails).subscribe(
      (response: any) => {
        console.log('Reservation successful:', response);
        this.router.navigate(['/confirmation'], { state: { reservation: response } });
      },
      (error) => {
        console.error('Error creating reservation:', error);
        this.message = 'Error creating reservation. Please try again.';
      }
    );
  }
}