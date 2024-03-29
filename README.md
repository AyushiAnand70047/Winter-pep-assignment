# Winter-pep-assignment

https://github.com/AyushiAnand70047/Winter-pep-assignment/assets/98761798/698a416f-417d-4d58-8873-5db94f65ff30

In the project directory:
#### npm install
#### npm install bootstrap
#### npm install bootstrap@5 bootstrap-icons

Run the vite project:
#### npm run dev

## Code Structure:
### 1. Components:
#### Navbar:
A navigation bar component containing links for "Home" and "Form."
#### Home:
Displays a welcome message and user details if available.
Checks if the user prop is defined before rendering user information.
#### FormAction:
A form component to gather user input.
Uses state to manage form data and submission status.
Emits the form data to the parent component via a callback (onFormSubmit).

### 2. App Component:
#### Router Setup:
Utilizes react-router-dom for client-side routing.
Defines routes for the "Home" and "Form" components.
Passes a callback (handleFormSubmit) to update the user state.
#### State Management:
Maintains state for the user information (user) and form submission status.
Navbar, Home, and FormAction Integration:
Integrates the Navbar, Home, and FormAction components.

### 3. Entry Point (index.js):
Bootstrap Integration:
Imports Bootstrap CSS to apply styling.

## Challenges Faced:
#### Integration of Bootstrap:
Challenge: Ensuring Bootstrap is correctly installed and imported.
Solution: Used npm to install Bootstrap and imported it in the entry point.
#### React Router Configuration:
Challenge: Configuring routes with react-router-dom.
Solution: Defined routes using Route components and specified the corresponding elements.
#### Styling Challenges:
Challenge: Balancing aesthetics and responsiveness.
Solution: Utilized Bootstrap classes for a responsive layout and styling. Adjusted margins and spacing as needed.
#### State Management:
Challenge: Managing state for user information and form submissions.
Solution: Utilized React state hooks (useState) to manage state and passed callbacks to update the state.
