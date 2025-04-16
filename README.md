# Flight Reservation System - Angular Frontend

This is the Angular frontend for the Flight Reservation System. It provides a user interface for managing flight reservations, check-ins, and confirmations.

## Prerequisites

- [Node.js](https://nodejs.org/) (v16 or later)
- [Angular CLI](https://angular.io/cli) (v15 or later)

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd flightreservation-node-es6-angular-frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Running the Application

1. Start the development server:
   ```bash
   ng serve
   ```

2. Open your browser and navigate to:
   ```
   http://localhost:4200
   ```

## Running Tests

1. Run unit tests:
   ```bash
   ng test
   ```

2. Generate a code coverage report:
   ```bash
   ng test --watch=false --code-coverage
   ```

3. The coverage report will be available in the `coverage/` directory.

## Building the Application

1. Build the application for production:
   ```bash
   ng build --prod
   ```

2. The production-ready files will be available in the `dist/` directory.

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── confirmation/
│   │   │   ├── confirmation.component.ts
│   │   │   ├── confirmation.component.html
│   │   │   ├── confirmation.component.spec.ts
│   │   ├── check-in/
│   │   │   ├── check-in.component.ts
│   │   │   ├── check-in.component.html
│   │   │   ├── check-in.component.spec.ts
│   │   ├── check-in-confirmation/
│   │   │   ├── check-in-confirmation.component.ts
│   │   │   ├── check-in-confirmation.component.html
│   │   │   ├── check-in-confirmation.component.spec.ts
├── assets/
├── environments/
├── polyfills.ts
├── test.ts
```

## Troubleshooting

- If you encounter issues with missing dependencies, run:
  ```bash
  npm install
  ```

- If tests fail to run, ensure that `karma` and `jasmine` dependencies are installed:
  ```bash
  npm install --save-dev karma jasmine-core karma-jasmine karma-chrome-launcher karma-jasmine-html-reporter
  ```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.