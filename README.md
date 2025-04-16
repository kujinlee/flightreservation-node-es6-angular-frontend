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
│   │   ├── find-flights/
│   │   │   ├── find-flights.component.ts
│   │   │   ├── find-flights.component.html
│   │   │   ├── find-flights.component.spec.ts
│   │   ├── reserve-flight/
│   │   │   ├── reserve-flight.component.ts
│   │   │   ├── reserve-flight.component.html
│   │   │   ├── reserve-flight.component.spec.ts
│   │   ├── not-found/
│   │   │   ├── not-found.component.ts
│   │   │   ├── not-found.component.html
│   │   │   ├── not-found.component.spec.ts
├── assets/
├── environments/
├── polyfills.ts
├── test.ts
```

## Running the Application with the Backend

To try the frontend with the corresponding backend:

1. Clone and set up the backend repository:
   ```bash
   git clone <backend-repository-url>
   cd flightreservation-node-es6-react-backend
   npm install
   ```

2. Start the backend server:
   - If running on the host machine:
     ```bash
     npm start
     ```
     The backend will be accessible at:
     ```
     http://localhost:8080/flightreservation-node-es6-react-backend
     ```

   - If running in a Docker container:
     The backend will be accessible at:
     ```
     https://localhost:8082/flightreservation-node-es6-react-backend
     ```

3. Ensure the frontend is configured to communicate with the backend:
   - The `proxy.conf.json` file is already set up to route API requests to the backend:
     ```json
     {
       "/api": {
         "target": "https://localhost:8082/flightreservation-node-es6-react-backend",
         "secure": false,
         "changeOrigin": true,
         "pathRewrite": {
           "^/api": ""
         }
       }
     }
     ```

   - If the backend is running on the host machine, update the `target` in `proxy.conf.json` to:
     ```json
     "target": "http://localhost:8080/flightreservation-node-es6-react-backend"
     ```

4. Start the frontend server with the proxy configuration:
   ```bash
   ng serve --proxy-config proxy.conf.json
   ```

5. Open your browser and navigate to:
   ```
   http://localhost:4200
   ```

   The frontend will now interact with the backend through the proxy.

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