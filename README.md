# Hotel Booking Application Backend

This repository contains the backend system for a hotel booking application built using Node.js and MongoDB.

## API Documentation

### Base URL
The base URL for the API is: http://localhost:3000

### Authentication
#### POST /api/users/register
Register a new user.
Request Body:
json
{
  "username": "Krishna",
  "password": "password123",
  "email": "Krishna@example.com"
}

#### POST /api/users/login
Authenticate a user and receive a JWT token.
Request Body:
json
{
  "email": "Krishna@example.com",
  "password": "password123"
}


### User Management
#### POST /api/users/register
Register a new user. (Same as above)

#### POST /api/users/login
Authenticate a user and receive a JWT token. (Same as above)

### Hotel Management (Admin Only)
#### POST /api/hotels
Create a new hotel.
Request Body:
json
{
  "name": "Grand Hotel",
  "location": "New York",
  "rating": 5
}

#### GET /api/hotels
Retrieve a list of all hotels.

### Room Management (Admin Only)
#### POST /api/hotels/:hotelId/rooms
Add a new room to a specific hotel.
Request Body:
json
{
  "roomNumber": "101",
  "type": "single",
  "price": 100
}

#### GET /api/rooms
Retrieve a list of all rooms.

### Booking Management
#### POST /api/rooms/:roomId/book
Create a new booking for a specific room.
Request Body:
json
{
  "checkInDate": "2024-06-01",
  "checkOutDate": "2024-06-10"
}

#### GET /api/bookings
Retrieve a list of all bookings for the logged-in user.

### Authentication and Authorization
The API uses JWT-based authentication.
Certain routes (hotel and room management) are restricted to admin users only.

## Setup Instructions

### Prerequisites
- Node.js installed on your machine.
- MongoDB server running locally or accessible.

### Installation
1. Clone this repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Install dependencies using the command:
   bash
   npm install
   

### Environment Variables
Create a `.env` file in the root directory with the following variables:
makefile
PORT=3000
MONGO_URI=mongodb://localhost:27017/hotel_booking
JWT_SECRET=your_jwt_secret


### Run the Application
Use the following command to start the server:
bash
node server.js

The server will start running on http://localhost:3000.

## Example Requests

### Register a New User
bash
curl -X POST http://localhost:3000/api/users/register \
  -H "Content-Type: application/json" \
  -d '{
        "username": "Krishna",
        "password": "password123",
        "email": "Krishna@example.com"
      }'


### Login User
bash
curl -X POST http://localhost:3000/api/users/login \
  -H "Content-Type: application/json" \
  -d '{
        "email": "Krishna@example.com",
        "password": "password123"
      }'


### Create a New Hotel (Admin)
bash
curl -X POST http://localhost:3000/api/hotels \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <your_jwt_token>" \
  -d '{
        "name": "Grand Hotel",
        "location": "New York",
        "rating": 5
      }'

