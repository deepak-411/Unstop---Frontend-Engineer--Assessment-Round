



# Frontend Engineer - Assessment Round

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

---

# Author

Deepak Kumar

---

© 2026 All Rights Reserved, Deepak Kumar
