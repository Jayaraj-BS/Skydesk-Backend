📘 SkyDesk – Ticket Management System

A full-stack ticketing platform built with Angular, NestJS, and MySQL.
SkyDesk provides secure authentication, efficient ticket workflows, and a clean UI for managing user assignments, statuses, and support operations.

🚀 Features
----- Frontend (Angular) -----
JWT-based login & session handling
Route protection with Auth Guards
Reactive forms for ticket creation
Ticket listing with real-time updates
Dialog-based ticket details view
Ticket status update workflow
User assignment & reassignment
Ticket deletion
Clean, responsive UI

----- Backend (NestJS) -----
User authentication with JWT
Role-based access (Admin/User)
CRUD operations for tickets
Status update & assignment APIs
MySQL + TypeORM with relations
Secure routes via guards
Scalable modular architecture


🏗️ Tech Stack
----- Frontend -----
Angular 17+
RxJS
Angular Router
Reactive Forms

----- Backend -----
NestJS
TypeORM
MySQL
JWT Authentication
Bcrypt (Password hashing)

----- 📂 Project Structure -----
skydesk/
 ├── frontend/
 │   ├── src/app/
 │   │   ├── auth/
 │   │   ├── layout/
 │   │   ├── services/
 │   │   ├── models/
 │   │   └── guards/
 ├── backend/
 │   ├── src/
 │   │   ├── auth/
 │   │   ├── tickets/
 │   │   ├── users/
 │   │   └── database/

----- ⚙️ Setup Instructions -----
Backend =>
cd backend
npm install
npm run start:dev


Create .env =>
DB_HOST=localhost
DB_USER=root
DB_PASS=yourpassword
DB_NAME=skydesk
JWT_SECRET=your_secret

Frontend =>
cd frontend
npm install
ng serve -o
