# Registration with Google OAuth - Backend

This project implements a backend server for registration with Google OAuth. It allows users to register and authenticate using their Google accounts. The backend is built with Node.js and utilizes the Passport.js library for OAuth authentication.

## Features

- Integration with Google OAuth for user registration and authentication.
- Secure storage of user information using MongoDB.
- Passport.js middleware for handling OAuth authentication.
- API endpoints for user registration, login, and profile retrieval.

## Technologies Used

- Node.js: A JavaScript runtime environment for executing server-side code.
- Express.js: A web application framework for building the server-side API.
- MongoDB: A NoSQL database for storing user information.
- Passport.js: A library for authentication with various strategies, including OAuth.

## Getting Started

Follow the instructions below to set up and run the project locally on your machine:

1. Clone the repository: `git clone https://github.com/mallick1126/node-google_oauth.git`
2. Install the dependencies: `npm install`
3. Create a `.env` file in the root directory and add the necessary configuration variables. For example:

   ```plaintext
   PORT=3000
   GOOGLE_CLIENT_ID=your-google-client-id
   GOOGLE_CLIENT_SECRET=your-google-client-secret
   MONGODB_URI=your-mongodb-connection-string
   ```

4. Start the server: `npm start`
5. The server should now be running at `http://localhost:3000`.

## API Endpoints

The backend provides the following API endpoints:

- `POST /auth/google`: Initiates the Google OAuth authentication process.
- `GET /auth/google/callback`: Handles the Google OAuth callback after successful authentication.
- `GET /api/user/profile`: Retrieves the authenticated user's profile information.

## Configuration

Ensure that you have the necessary credentials from the Google Developers Console. Create a project and enable the Google OAuth API, then obtain the Client ID and Client Secret. Update the `.env` file with your obtained credentials.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Make your changes and commit them: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Submit a pull request detailing your changes.



## Contact

For any inquiries or feedback, please contact [Rahul Mallick](mailto:rahulmallick1126@gmail.com).
