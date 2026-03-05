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

Example:

```ts
const { default: Chart } = await import('chart.js/auto');
