# Premier Properties - Luxury Real Estate Landing Page

## Overview

This is a modern, photography-first real estate landing page application built with a full-stack TypeScript architecture. The application showcases luxury properties through a clean, minimal design inspired by high-end platforms like Zillow and Redfin. The primary user journey is simple: browse beautiful property images and download a brochure for more information.

The tech stack consists of:
- **Frontend**: React with TypeScript, using Vite as the build tool
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Backend**: Express.js server
- **Database**: PostgreSQL with Drizzle ORM
- **Session Management**: PostgreSQL-based sessions via connect-pg-simple

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Build System & Framework**
- Uses Vite for fast development and optimized production builds
- React 18 with TypeScript for type-safe component development
- Wouter for lightweight client-side routing (not react-router)
- All client code lives in the `client/` directory

**UI Component Strategy**
- shadcn/ui component library (New York style variant) provides the base UI components
- Components are not installed via npm but are added directly to `client/src/components/ui/`
- Custom theme extends Tailwind with CSS variables for colors and design tokens
- Design system follows a "minimal modern" approach with generous whitespace and photography-first presentation

**Styling Architecture**
- Tailwind CSS for utility-first styling
- Custom CSS variables defined in `client/src/index.css` for theme colors
- Typography system uses 'DM Sans' as primary font and 'Playfair Display' as optional accent
- Color system uses HSL values with CSS custom properties for easy theming
- Spacing follows Tailwind's standard units (4, 6, 8, 12, 16, 20, 24)

**State Management**
- TanStack Query (React Query) for server state management
- Custom query client configuration with credential-based requests
- Toast notifications via shadcn/ui toast system
- No complex global state - relies on React Query for data fetching/caching

**Path Aliases**
- `@/` maps to `client/src/`
- `@shared/` maps to `shared/`
- `@assets/` maps to `attached_assets/`

### Backend Architecture

**Server Framework**
- Express.js with TypeScript
- Separation of concerns: routes, storage interface, and static file serving
- HTTP server created separately to allow WebSocket upgrades if needed
- Development mode uses Vite middleware for HMR and SSR-like development experience

**API Design Pattern**
- All API routes should be prefixed with `/api`
- RESTful conventions expected
- JSON request/response format
- Request logging middleware tracks response times and status codes

**Storage Interface Pattern**
- Abstract `IStorage` interface defines data access methods
- Default `MemStorage` implementation provides in-memory storage
- Designed to be swapped with database-backed implementation
- Current implementation includes basic user CRUD operations

**Development vs Production**
- Development: Vite dev server integrated via middleware for HMR
- Production: Serves pre-built static files from `dist/public`
- Build process (via `script/build.ts`) bundles server code with esbuild and client with Vite
- Server dependencies are selectively bundled to reduce cold start times

### Data Storage Solutions

**Database Setup**
- PostgreSQL as the primary database (configured via Neon serverless driver)
- Drizzle ORM for type-safe database queries and migrations
- Schema defined in `shared/schema.ts` for code sharing between client and server
- Migration files output to `./migrations` directory

**Current Schema**
- Users table with UUID primary keys, username, and password fields
- Drizzle-Zod integration for runtime validation of database operations
- Schema uses PostgreSQL-specific features like `gen_random_uuid()`

**Session Management**
- Designed for PostgreSQL-backed sessions via connect-pg-simple
- Sessions stored in database for persistence across server restarts
- Package included but session middleware not yet implemented

### Authentication & Authorization

**Current State**
- User schema exists with username/password fields
- No authentication middleware currently implemented
- Storage interface includes user lookup methods (by ID and username)
- Infrastructure ready for passport-local authentication strategy

**Planned Pattern**
- Session-based authentication (not JWT)
- Password hashing expected before storage
- Credential-based fetch requests (already configured in query client)

### External Dependencies

**UI Component Library**
- **Radix UI**: Headless component primitives for accessible UI components
  - Accordion, Alert Dialog, Avatar, Checkbox, Dialog, Dropdown Menu, etc.
  - All components are unstyled and wrapped by shadcn/ui

**Styling & Design**
- **Tailwind CSS**: Utility-first CSS framework
- **class-variance-authority**: For component variant management
- **clsx** & **tailwind-merge**: For conditional className handling

**Database & ORM**
- **@neondatabase/serverless**: Serverless PostgreSQL driver for Neon
- **Drizzle ORM**: Type-safe SQL ORM with migration support
- **drizzle-zod**: Zod schema generation from Drizzle schemas
- **drizzle-kit**: CLI tools for migrations and schema management

**Data Fetching & State**
- **@tanstack/react-query**: Server state management and caching
- **wouter**: Lightweight routing library (alternative to react-router)

**Forms & Validation**
- **react-hook-form**: Form state management
- **@hookform/resolvers**: Integration with validation libraries
- **zod**: Runtime type validation and schema definition
- **zod-validation-error**: Better error messages from Zod

**Date Handling**
- **date-fns**: Modern date utility library

**Development Tools**
- **Vite**: Frontend build tool and dev server
- **esbuild**: Fast JavaScript/TypeScript bundler for server code
- **tsx**: TypeScript execution for development
- **Replit plugins**: Runtime error modal, cartographer, dev banner

**Additional Libraries**
- **cmdk**: Command palette component
- **embla-carousel-react**: Carousel/slider functionality
- **lucide-react**: Icon library
- **nanoid**: Unique ID generation

**Assets**
- Stock property images stored in `attached_assets/stock_images/`
- Images include luxury home exteriors, interiors, kitchens, and backyards
- Image paths are imported directly in components using the `@assets` alias