import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-check-in',
  templateUrl: './check-in.component.html',
  styleUrls: ['./check-in.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class CheckInComponent {
  reservation: any = null;
  numberOfBags: number = 0;
  message: string = '';
  backendUrl: string = '/api'; // Replace with your backend URL

  constructor(private router: Router, private http: HttpClient) {
    const state = this.router.getCurrentNavigation()?.extras.state;
    if (state?.['reservationId']) {
      this.fetchReservationDetails(state['reservationId']);
    } else {
      this.message = 'No reservation ID provided.';
    }
  }

  fetchReservationDetails(reservationId: number) {
    this.http.get(`${this.backendUrl}/checkIn?reservationId=${reservationId}`).subscribe(
      (response: any) => {
        this.reservation = response.reservation;
      },
      (error) => {
        console.error('Error fetching reservation details:', error);
        this.message = 'Error fetching reservation details. Please try again.';
      }
    );
  }

  completeCheckIn() {
    if (!this.reservation) {
      this.message = 'Reservation details are missing.';
      return;
    }

    const requestBody = {
      reservationId: this.reservation.id,
      numberOfBags: this.numberOfBags,
    };

    this.http.post(`${this.backendUrl}/completeCheckIn`, requestBody).subscribe(
      (response: any) => {
        console.log('Check-in completed successfully:', response);
        this.router.navigate(['/checkInConfirmation'], { state: { confirmation: response } });
      },
      (error) => {
        console.error('Error during check-in:', error);
        this.message = 'Error during check-in. Please try again.';
      }
    );
  }

  navigateToHome() {
    this.router.navigate(['/']);
  }
}