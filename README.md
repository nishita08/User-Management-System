# User Management System — React + TypeScript (CRUD)
A fully functional **User Management System** built using **React + TypeScript** that performs Create, Read, Update, and Delete (CRUD) operations with form validation and API integration.
Designed for technical assessments, portfolio projects, and learning React.

## Features
• Fetch user list from API
• Add new user
• Edit existing user
• Delete user with confirmation
• Search users by name or email
• Form validation using Yup + React Hook Form
• TypeScript interfaces for strong typing
• Component-based clean architecture

## Tech Stack
Framework: React (Create React App)
Language: TypeScript
State Management: React Hooks
API Calls: Axios
Form Validation: React Hook Form + Yup
Styling: CSS / Tailwind / DaisyUI (based on project)

## Project Structure
src
├ components
│ ├ UserTable.tsx
│ ├ UserForm.tsx
│ └ ConfirmDialog.tsx
├ hooks
│ └ useUsers.ts
├ types
│ └ User.ts
├ App.tsx
└ index.tsx

## API
This project uses the following API to fetch users:

[https://jsonplaceholder.typicode.com/users](https://jsonplaceholder.typicode.com/users)

Note: JSONPlaceholder does not permanently save new users — but the app maintains UI state to simulate backend changes.

## Getting Started
Step 1: Install dependencies
npm install

Step 2: Run the server
npm start
The app opens at: [http://localhost:3000](http://localhost:3000)

Step 3: Build for production
npm run build

## CRUD Workflow
Read: Users are fetched automatically on page load
Create: Open form → enter details → save user
Update: Click edit button → update details → save
Delete: Click delete → confirm popup → removed from list

## Component Responsibilities
UserForm.tsx – Handles adding and editing users
UserTable.tsx – Displays user list + options for edit/delete
ConfirmDialog.tsx – Shows confirmation popup before deleting
useUsers.ts – Manages API requests + user state
User.ts – Defines TypeScript types and interfaces
