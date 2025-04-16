import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlightService {
  private backendUrl = environment.backendUrl;

  constructor(private http: HttpClient) {}

  findFlights(from: string, to: string, departureDate: string): Observable<any> {
    return this.http.post(`${this.backendUrl}/findFlights`, { from, to, departureDate });
  }

  reserveFlight(data: any): Observable<any> {
    return this.http.post(`${this.backendUrl}/createReservation`, data);
  }

  completeCheckIn(data: any): Observable<any> {
    return this.http.post(`${this.backendUrl}/completeCheckIn`, data);
  }

  getCheckInDetails(reservationId: string): Observable<any> {
    return this.http.get(`${this.backendUrl}/checkIn`, { params: { reservationId } });
  }
}