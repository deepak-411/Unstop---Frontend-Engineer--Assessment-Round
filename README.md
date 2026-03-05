# Frontend Engineer - Assessment Round

![Angular](https://img.shields.io/badge/Angular-14+-red?logo=angular)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript)
![RxJS](https://img.shields.io/badge/RxJS-Reactive-purple?logo=reactivex)
![Chart.js](https://img.shields.io/badge/Chart.js-Visualization-orange?logo=chartdotjs)
![License](https://img.shields.io/badge/License-All%20Rights%20Reserved-black)
![Status](https://img.shields.io/badge/Project-Assessment%20Submission-success)

A **production-style Angular (v14+) frontend application** implementing authentication, lazy loading, reactive state management with RxJS, and real-time dashboard updates using Chart.js.

This project demonstrates **frontend architecture, performance optimization, and modern Angular best practices**.

---

# Project Overview

This application provides a **User Management Dashboard** where users can:

- Register a new account
- Login securely
- Access a protected dashboard
- Add users via a lazy-loaded modal form
- View role distribution using a **Chart.js pie chart**
- See **real-time updates** in the table and chart

The system is optimized using:

- Lazy Loading
- RxJS BehaviorSubject state management
- Angular Reactive Forms
- Dynamic library imports

---

# Features

## Authentication

### Registration Page
Fields:
- Full Name
- Email
- Password
- Confirm Password

Validation:
- Required fields
- Valid email format
- Minimum password length (6 characters)
- Password confirmation must match

On success:
- User stored via **local storage authentication service**
- Redirect to **Login Page**

---

### Login Page

Fields:
- Email
- Password

Validation:
- Required fields

On successful login:
- Redirect to **User Dashboard**

Security:
- Dashboard route protected using **Angular Route Guards**

---

# User Dashboard

## User Table

Displays users with the following columns:

| Name | Email | Role |
|-----|-----|-----|

Supported roles:

- Admin
- Editor
- Viewer

Requirement:
- Table updates automatically when new users are added.

---

## Role Distribution Chart

A **Chart.js Pie Chart** displays user role distribution.

Roles:

- Admin
- Editor
- Viewer

Requirement:
- Chart updates dynamically whenever users are added.

---

## Add User

The dashboard includes an **Add User button**.

Clicking it opens a **lazy-loaded modal form**.

Form fields:

- Name
- Email
- Role (Admin / Editor / Viewer)

Requirements:

- Built with **Angular Reactive Forms**
- Input validation
- Emit user data to dashboard
- Close modal on submission

---

# Lazy Loading

To improve performance, the following elements are lazy loaded.

## UserFormComponent

Loaded only when **Add User button is clicked**.

Implemented using Angular module lazy loading.

---

## Chart.js

Loaded dynamically when the dashboard initializes.





## Frontend Engineer - Assessment Round

This project is a **User Dashboard Application built with Angular (v14+)**.  
It demonstrates authentication pages, lazy loading, RxJS state management, and dynamic UI updates using Chart.js.

The goal of this project is to showcase **frontend architecture, performance optimization, and reactive programming skills**.

---

# Features

## Authentication

### Registration Page
Fields:
- Full Name
- Email
- Password
- Confirm Password

Validation:
- All fields required
- Valid email format
- Minimum password length: 6
- Passwords must match

On successful registration:
- User stored using a local storage service
- Redirect to Login page

---

### Login Page

Fields:
- Email
- Password

Validation:
- Required fields

On successful login:
- Redirect to User Dashboard

Security:
- Dashboard route protected using **Angular Route Guards**

---

# User Dashboard

The dashboard displays the following components.

### User Table

Columns:
- Name
- Email
- Role

Roles:
- Admin
- Editor
- Viewer

Requirement:
- Table updates automatically when a new user is added.

---

### Role Distribution Chart

A **Chart.js Pie Chart** displays role distribution:

- Admin
- Editor
- Viewer

Requirement:
- Chart updates dynamically when users are added.

---

### Add User

An **Add User** button opens a modal form.

Form fields:
- Name
- Email
- Role (Admin / Editor / Viewer)

Requirements:
- Reactive Forms
- Field validation
- Emit user data to dashboard on submit
- Close modal after submission

---

# Lazy Loading

To improve performance the following are lazy loaded:

### UserFormComponent
Loaded only when **Add User button** is clicked.

### Chart.js
Loaded dynamically using:


This prevents Chart.js from being included in the initial bundle.

---

# RxJS State Management

User state is managed using **BehaviorSubject**.

UserService responsibilities:

- Maintain user list
- Emit updates using `users$`
- Provide `addUser()` method

When a new user is added:

- Table updates automatically
- Chart updates automatically

---

# Technologies Used

- Angular 14+
- TypeScript
- RxJS
- Chart.js
- Angular Reactive Forms

---

# UI Theme

Primary Color  
`#1c4980`

Dark Accent  
`#383838`

UI Elements

Button height: `48px`  
Input height: `48px`

---

# Acceptance Criteria

- User table displays Name, Email, Role
- Pie chart displays role distribution
- Table updates when a user is added
- Chart updates dynamically
- Add User modal works correctly
- UserFormComponent is lazy loaded
- Chart.js is dynamically imported
- RxJS BehaviorSubject manages state
- No console errors

---

# Bonus (Optional)

- Table pagination
- Role filtering
- Loading indicators
- Modal animations
