# Personal Website for Aklesso Jonas Daou

## Overview

This is a modern, responsive personal website for Aklesso Jonas Daou, a Togolese entrepreneur and president of the ZENER Group. The website serves as a professional portfolio showcasing his biography, vision, articles, media appearances, projects, and provides contact capabilities. Built as a full-stack application with a React frontend and Express backend, it features a comprehensive content management system for articles, media, projects, and user engagement through contact forms, newsletter subscriptions, and mentorship requests.

**Status**: Production-ready and optimized for Vercel deployment with integrated video player, authentic photos, and responsive design.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent, modern UI components
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management and caching
- **Forms**: React Hook Form with Zod validation for robust form handling
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript for both frontend and backend consistency
- **API Pattern**: RESTful API design with structured routes for posts, media, projects, messages, subscribers, and mentorship requests
- **Data Storage**: In-memory storage implementation with interface for future database integration
- **Development**: Hot module replacement via Vite integration for seamless development experience

### Database Design
- **ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL with Neon serverless configuration
- **Schema**: Well-structured tables for users, posts (articles), media, projects, messages, subscribers, and mentorship requests
- **Validation**: Drizzle-Zod integration for runtime schema validation

### Component Architecture
- **Design System**: Radix UI primitives with custom styling via Tailwind CSS
- **Layout**: Section-based architecture with reusable components for navigation, hero, biography, vision, articles, media, projects, newsletter, mentorship, contact, and footer
- **Responsive Design**: Mobile-first approach with comprehensive breakpoint handling
- **Accessibility**: Built-in accessibility features through Radix UI components

### Content Management
- **Articles**: Full CRUD operations for blog posts with slug-based routing
- **Media**: Management of videos, podcasts, and interviews with external link support
- **Projects**: Portfolio showcase with detailed project information including impact metrics
- **Forms**: Contact form, newsletter subscription, and mentorship request handling

## External Dependencies

### Core Technologies
- **@neondatabase/serverless**: Serverless PostgreSQL database connection
- **drizzle-orm & drizzle-zod**: Type-safe ORM with validation
- **@tanstack/react-query**: Server state management and caching
- **@hookform/resolvers**: Form validation integration

### UI Components
- **@radix-ui/**: Comprehensive set of accessible, unstyled UI primitives including dialogs, dropdowns, navigation, forms, and layout components
- **tailwindcss**: Utility-first CSS framework for styling
- **class-variance-authority & clsx**: Dynamic class name handling
- **lucide-react**: Modern icon library

### Development Tools
- **vite**: Fast build tool and development server
- **typescript**: Static type checking
- **esbuild**: Fast JavaScript bundler for production builds
- **tsx**: TypeScript execution for development

### Fonts and Icons
- **Google Fonts**: Inter font family for modern typography
- **Font Awesome**: Additional icon support for enhanced visual elements

### Form Handling
- **react-hook-form**: Performant form library with minimal re-renders
- **zod**: TypeScript-first schema validation
- **date-fns**: Date manipulation and formatting utilities

The application is designed for easy deployment and scaling, with clear separation of concerns and modular architecture that supports future enhancements and integrations.