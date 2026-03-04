# **App Name**: AdminWise Hub

## Core Features:

- User Dashboard Display: Renders a main dashboard view presenting a user table and a role distribution pie chart.
- Dynamic User Table: Displays user names, emails, and roles in a clear table format, automatically updating as new users are added or modified.
- Role Distribution Pie Chart: Visualizes the distribution of user roles (Admin, Editor, Viewer) using a dynamically updating Chart.js pie chart.
- Add User Modal & Form: A dedicated button to trigger a lazy-loaded modal containing a form for new user input (Name, Email, Role).
- Reactive User State Management: Manages user data using a client-side reactive state mechanism, ensuring instant updates across the table and chart upon data changes.
- Lazy Loading Optimizations: Optimizes performance by lazy-loading the user form component and the Chart.js library only when they are explicitly required.
- Form Input Validation: Implements client-side validation for required fields (Name, Email, Role) in the user creation form.

## Style Guidelines:

- Primary color: A clear, professional blue, representing trust and efficiency, '#4585e5'.
- Background color: A deep desaturated blue-grey, providing a calm and focused dark theme, '#2d3544'.
- Accent color: A vivid cyan-teal for highlighting interactive elements and crucial information, '#2ebfcb'.
- Primary font: 'Inter' (sans-serif), chosen for its modern, legible, and objective feel, suitable for both headlines and body text in data-rich dashboards.
- Utilize simple, clean, and functional geometric icons that maintain consistency with the professional dashboard aesthetic.
- The main layout positions the 'Add User' button prominently above the user table, with the role distribution pie chart displayed as a separate, clearly defined block.
- Incorporate subtle animations for UI transitions, such as modal openings, form submissions, and chart updates, to enhance user experience without being distracting.