import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { CheckInConfirmationComponent } from './check-in-confirmation.component';
import { CommonModule } from '@angular/common';

describe('CheckInConfirmationComponent', () => {
  let component: CheckInConfirmationComponent;
  let fixture: ComponentFixture<CheckInConfirmationComponent>;
  let mockRouter: any;

  beforeEach(() => {
    // Mock the Router with a state containing confirmation data
    mockRouter = {
      getCurrentNavigation: jasmine.createSpy('getCurrentNavigation').and.returnValue({
        extras: {
          state: {
            confirmation: {
              message: 'Check-in completed successfully!',
              reservation: {
                id: 11,
                numberOfBags: 2,
                checkedIn: true,
              },
              flight: {
                flightNumber: 'AA1',
                departureCity: 'AUS',
                arrivalCity: 'NYC',
                dateOfDeparture: '2024-02-05',
                estimatedDepartureTime: '2024-02-05T03:14:07.000Z',
              },
              passenger: {
                firstName: 'John',
                lastName: 'Doe',
                email: 'john.doe@example.com',
              },
            },
          },
        },
      }),
    };

    TestBed.configureTestingModule({
      imports: [CheckInConfirmationComponent, CommonModule], // Add the standalone component to imports
      providers: [{ provide: Router, useValue: mockRouter }],
    });

    fixture = TestBed.createComponent(CheckInConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display confirmation details', () => {
    expect(component.confirmation).toBeTruthy();
    expect(component.confirmation.message).toBe('Check-in completed successfully!');
    expect(component.confirmation.reservation.id).toBe(11);
    expect(component.confirmation.flight.flightNumber).toBe('AA1');
    expect(component.confirmation.passenger.firstName).toBe('John');
  });

  it('should display fallback message if no confirmation details are available', () => {
    mockRouter.getCurrentNavigation.and.returnValue({ extras: {} }); // No state
    fixture = TestBed.createComponent(CheckInConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    expect(component.message).toBe('Check-in details are not available. Please go back and try again.');
  });
});