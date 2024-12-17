# Software Architect Collaboration Platform

A dynamic web application enabling software architects to collaborate and share projects, technologies, and roadmaps across organizations and teams.

## Features

- Organization and team management
- Project roadmap visualization
- Cross-team collaboration
- Timeline views
- Impact analysis
- Custom views and filters

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Lucide Icons
- Oracle Database (Production) / PostgreSQL (Development)

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- PostgreSQL (for local development)

### Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd roadmap-platform
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env` file in the root directory and add:
```env
REACT_APP_API_URL=http://localhost:8080/api
```

4. Start the development server:
```bash
npm start
```

The application will be available at `http://localhost:3000`

### Database Setup

For local development:
1. Install PostgreSQL
2. Create a new database
3. Run the schema migrations from `database/schema.sql`

For production:
- Oracle DB configuration will be handled by the infrastructure team

## Project Structure

```
/roadmap-platform
├── src/
│   ├── components/         # UI components
│   │   ├── cards/         # Card-related components
│   │   ├── timeline/      # Timeline components
│   │   ├── views/         # Main view components
│   │   └── common/        # Shared components
│   ├── types/             # TypeScript definitions
│   ├── services/          # API and service layers
│   ├── utils/             # Utility functions
│   ├── hooks/             # Custom React hooks
│   ├── context/           # React context providers
│   └── styles/            # Global styles
└── public/                # Static files
```

## Development Guidelines

### Code Style
- Use TypeScript for type safety
- Follow the existing component structure
- Use Tailwind CSS for styling
- Follow the established color scheme (#1C57A5 as primary color)

### Component Creation
1. Create new components in appropriate directories
2. Include TypeScript interfaces/types
3. Use functional components with hooks
4. Follow the established naming conventions

### Authentication
- Development: Local authentication
- Production: LDAP integration via Sailpoint

### Views
- Organization View: High-level overview of all teams
- Team View: Team-specific projects and roadmaps
- Project View: Detailed project information
- Impact View: Dependency and relationship analysis

## Available Scripts

- `npm start`: Start development server
- `npm build`: Build for production
- `npm test`: Run tests
- `npm run eject`: Eject from Create React App

## Contributing

1. Create a feature branch from `main`
2. Make your changes
3. Submit a pull request
4. Ensure CI checks pass

## Production Deployment

The application will be deployed using:
- Apigee for API management
- Kubernetes/Rancher for container orchestration
- Oracle DB for data storage

## Support

For issues:
1. Check existing GitHub issues
2. Contact the development team
3. For production support, contact the infrastructure team

## License

Internal use only - all rights reserved