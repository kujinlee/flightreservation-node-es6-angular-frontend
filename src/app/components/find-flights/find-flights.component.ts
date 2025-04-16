import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-find-flights',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './find-flights.component.html',
  styleUrls: ['./find-flights.component.css'],
})
export class FindFlightsComponent {
  from: string = '';
  to: string = '';
  departureDate: string = '';
  flights: any[] = [];
  message: string = '';

  constructor(private http: HttpClient, private router: Router) {
    console.log('FindFlightsComponent initialized');
    debugger;
  }

  ngOnInit() {
    console.log('FindFlightsComponent ngOnInit called');
    debugger;
  }

  searchFlights() {
    if (!this.from || !this.to || !this.departureDate) {
      this.message = 'Please fill in all fields.';
      return;
    }

    console.log('Sending request to backend:', {
      from: this.from,
      to: this.to,
      departureDate: this.departureDate,
    });

    // Use the proxy path instead of the full backend URL
    const backendUrl = '/api/findFlights';
    this.http
      .post(backendUrl, {
        from: this.from,
        to: this.to,
        departureDate: this.departureDate,
      })
      .subscribe(
        (response: any) => {
          console.log('API Response:', response); // Log the response
          if (response && response.flights) {
            this.flights = response.flights;
            console.log('Flights:', this.flights); // Log the flights array
          } else {
            this.message = 'No flights found.';
          }
        },
        (error) => {
          console.error('Error fetching flights:', error);
          this.message = 'Error fetching flights. Please try again.';
        }
      );
  }

  reserveFlight(flight: any) {
    this.router.navigate(['/reserve'], { state: { flight } });
  }
}