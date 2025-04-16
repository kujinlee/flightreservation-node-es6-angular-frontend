import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-check-in-confirmation',
  templateUrl: './check-in-confirmation.component.html',
  styleUrls: ['./check-in-confirmation.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class CheckInConfirmationComponent {
  confirmation: any = null;
  message: string = '';

  constructor(private router: Router) {
    const state = this.router.getCurrentNavigation()?.extras.state;
    if (state?.['confirmation']) {
      this.confirmation = state['confirmation'];
      this.message = this.confirmation.message || 'Check-in completed successfully!';
    } else {
      this.message = 'Check-in details are not available. Please go back and try again.';
    }
  }

  navigateToHome() {
    this.router.navigate(['/']);
  }
}