# MERN-YourPlace

## Project Overview

**MERN-YourPlace** is a full-stack web application built with the MERN stack (MongoDB, Express.js, React.js, and Node.js). This project serves as a platform for users to share locations and photos, showcasing the implementation of a modern web application with RESTful APIs and a fully separated frontend and backend deployment.

Live Demo: [MERN-YourPlace](https://skychow-mern-563f9.web.app/)

---

## Features

- **User Sharing Platform**: Users can upload and share locations along with photos.
- **Google Maps Integration**: Leverages Google Maps API to store and display coordinates, locations, and satellite views.
- **Authentication & Authorization**: Secure user login, signup, and access control.
- **File Upload**: Supports image uploads and management.
- **Frontend-Backend Separation**: Independently deployed frontend and backend for optimal performance.

---

## Technology Stack

- **Frontend**: React.js (with Hooks & Functional Components)
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (NoSQL)
- **API**: RESTful API design
- **Map Service**: Google Maps API

---

## Key Functionalities

1. **Location and Photo Sharing**:

   - Users can add locations and upload photos.
   - View location details including images, descriptions, and geographic data.

2. **Google Maps Integration**:

   - Displays location on a map.
   - Automatically handles and stores geolocation data.

3. **User Authentication & Authorization**:

   - Supports user registration and login.
   - Protects resources and ensures privacy.

4. **File Upload**:

   - Enables users to upload images with seamless frontend-backend communication.

5. **Responsive Frontend**:
   - Built with React.js for a user-friendly experience.
   - Frontend and backend are separately deployed for enhanced scalability and performance.

---

## Deployment Guide

### Frontend Deployment

1. Install dependencies using `npm install`.
2. Build the production-ready version with `npm run build`.
3. Deploy the `build` folder to a static hosting service (e.g., Firebase Hosting).

### Backend Deployment

1. Install dependencies using `npm install`.
2. Ensure MongoDB is running and configure the database connection string in environment variables.
3. Start the server with `node server.js`.

---

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use and modify it for your own purposes.
