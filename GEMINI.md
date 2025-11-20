# Project Overview

This is a NestJS backend application for the Khalkhal project. It uses a modular architecture with clear separation of concerns. The application is built with TypeScript and relies on several key technologies:

- **Framework:** NestJS
- **Database:** PostgreSQL with Prisma ORM
- **Authentication:** JWT-based authentication with Google OAuth2 integration.
- **File Storage:** Likely using a cloud provider like AWS S3.
- **Background Jobs:** Bull is used for processing background jobs.
- **Task Scheduling:** The application uses `@nestjs/schedule` for cron jobs.
- **Real-time Notifications:** Web Push notifications are implemented.
- **Email:** Nodemailer is used for sending emails.

The application is divided into the following modules:

- **Auth:** Handles user authentication and authorization.
- **User:** Manages user data and profiles.
- **Prisma:** Provides database services.
- **Storage:** Manages file uploads and storage.
- **AI:** Integrates AI-powered features.
- **Game:** Contains game-related logic.
- **Notification:** Manages sending notifications to users.
- **Cron:** Handles scheduled tasks.

# Building and Running

## Installation

```bash
npm install
```

## Running the application

```bash
# Development mode
npm run start:dev

# Production mode
npm run start:prod
```

## Testing

```bash
# Run all tests
npm run test

# Run end-to-end tests
npm run test:e2e
```

## Database

The project uses Prisma for database management.

```bash
# Reset and seed the database
npm run db:reset-seed
```

# Development Conventions

- **Code Style:** The project uses Prettier for code formatting and ESLint for linting. Use `npm run format` to format the code and `npm run lint` to check for linting errors.
- **Commits:** (TODO: Add commit message conventions if any).
- **Branching:** (TODO: Add branching strategy if any).
- **Testing:** All new features should be accompanied by unit tests. End-to-end tests should be written for critical user flows.
