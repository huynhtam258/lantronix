# Portal WebApp

A modern Angular web portal application with multi-tenant architecture, featuring separate admin and client interfaces with server-side rendering (SSR) support.

## Features

- **Multi-tenant Architecture**: Configurable tenant-based routing and services

- **Dual Interface**: Separate admin and client portals with dedicated layouts

- **Server-Side Rendering (SSR)**: Built with Angular Universal for improved SEO and performance

- **Modular Structure**: Organized into core, shared, admin, and client modules

- **Authentication & Authorization**: Built-in auth guards and interceptors

- **Global Error Handling**: Centralized error handling system

- **HTTP Interceptors**: API and error handling interceptors

- **Responsive Design**: Bootstrap 5 integration for mobile-friendly UI

- **Multi-Environment Support**: Development, staging, and production configurations


## Prerequisites

- Node.js (v20.x or higher recommended)

- npm (v10.x or higher)

- Angular CLI (v20.x)

## Installation

1. Clone the repository:

```bash

git clone <repository-url>

cd portal-webapp

```


2. Install dependencies:

```bash

npm install

```


## Running the Application

### Development Mode

```bash

npm run start:dev

```

The application will be available at `http://localhost:4200/`

### Staging Environment

```bash

npm run start:stg

```

### Production Environment

```bash

npm run start:prod

```

### Server-Side Rendering (SSR)

Build and serve the SSR version:

```bash

npm run build:prod

npm run serve:ssr:lantronix

```

## Build

### Development Build

```bash

npm run build:dev

```

### Staging Build

```bash

npm run build:stg

```

### Production Build

```bash

npm run build:prod

```

## Testing

Run unit tests:

```bash

npm test

```

Run tests with watch mode:

```bash

npm run watch

```

## Project Structure

```

src/

├── app/

│   ├── admin/              # Admin portal module

│   │   ├── pages/          # Admin pages (dashboard, etc.)

│   │   └── admin-routing.module.ts

│   ├── client/             # Client portal module

│   │   ├── pages/          # Client pages (home, about, product)

│   │   └── client-routing.module.ts

│   ├── core/               # Core module (singleton services)

│   │   ├── config/         # Configuration files

│   │   ├── guards/         # Route guards (auth.guard.ts)

│   │   ├── interceptors/   # HTTP interceptors

│   │   └── services/       # Core services (auth, api, tenant)

│   ├── layout/             # Layout components

│   │   ├── admin-layout/   # Admin layout wrapper

│   │   └── client-layout/  # Client layout wrapper

│   ├── shared/             # Shared module

│   │   └── components/     # Reusable components

│   └── environments/       # Environment configurations

├── styles/                 # Global styles

└── public/                 # Static assets

```

## Architecture

### Core Module

Contains singleton services and app-wide functionality:

- **Services**: API, Authentication, Tenant management

- **Guards**: Route protection (auth.guard.ts)

- **Interceptors**: HTTP request/response handling

- **Error Handling**: Global error handler

### Admin Module

Dedicated admin portal with:

- Dashboard and management pages

- Admin-specific routing

- Isolated layout component

### Client Module

Public-facing portal with:

- Home, About, Product pages

- Client-specific routing

- Dedicated layout component

### Shared Module

Reusable components across the application:

- Header & Footer components

- Product list component

- Page not found component

## Configuration

### Environment Files

- `environment.ts` - Production configuration

- `environment.development.ts` - Development configuration

- `environment.staging.ts` - Staging configuration

### Tenant Configuration

Multi-tenant settings can be configured in `src/app/core/config/tenant-config.ts`

## Styling

The project uses:

- **SCSS** for component and global styles

- **Bootstrap 5.3.8** for responsive layout and components

- Custom portal styles in `src/styles/_portal.scss`

## Authentication

The application includes:

- `AuthService` for authentication management

- `AuthGuard` for route protection

- HTTP interceptors for token handling

## Dependencies

### Main Dependencies

- **Angular 20.3.0**: Core framework

- **Angular SSR**: Server-side rendering

- **Bootstrap 5.3.8**: UI framework

- **Express 5.1.0**: SSR server

- **RxJS 7.8.0**: Reactive programming

### Development Dependencies

- **TypeScript 5.9.2**: Language

- **Jasmine & Karma**: Testing framework

- **Angular CLI**: Development tools

## Available Routes

- `/` - Client portal home

- `/about` - About page

- `/product` - Product pages

- `/admin` - Admin dashboard (protected)

## Code Quality

The project uses Prettier for code formatting with custom configuration:

- Print width: 100

- Single quotes: enabled

- Angular template parser for HTML files

## Contributing

1. Create a feature branch

2. Make your changes

3. Ensure tests pass

4. Submit a pull request

## License

This project is private and proprietary.

## Support

For support and questions, please contact the development team.