# Development Setup Guide

This guide will help you set up the development environment for the Text to Everything project.

## Prerequisites

1. **Node.js and npm**
   - Install Node.js (version 18.0.0 or higher)
   - Verify installation:
     ```bash
     node --version
     npm --version
     ```

2. **Git**
   - Install Git for version control
   - Verify installation:
     ```bash
     git --version
     ```

3. **Code Editor**
   - We recommend Visual Studio Code
   - Required extensions:
     - ESLint
     - Prettier
     - Tailwind CSS IntelliSense
     - TypeScript and JavaScript Language Features

## Getting Started

1. **Clone the Repository**
   ```bash
   git clone [repository-url]
   cd frontend
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   - Copy `.env.example` to `.env.local`
   ```bash
   cp .env.example .env.local
   ```
   - Update environment variables as needed

4. **Start Development Server**
   ```bash
   npm run dev
   ```
   - Access the app at http://localhost:3000

## Project Structure

```
frontend/
├── src/
│   ├── app/
│   │   ├── (auth)/
│   │   │   └── (routes)/
│   │   │       ├── sign-in/
│   │   │       └── sign-up/
│   │   └── (main)/
│   │       └── (routes)/
│   │           ├── generate/
│   │           ├── advanced/
│   │           └── thanks/
│   ├── components/
│   │   ├── ui/
│   │   └── shared/
│   ├── lib/
│   ├── styles/
│   └── types/
├── public/
├── package.json
└── tsconfig.json
```

## Development Workflow

1. **Branch Strategy**
   - `main`: Production-ready code
   - `develop`: Development branch
   - Feature branches: `feature/feature-name`
   - Bug fixes: `fix/bug-name`

2. **Code Style**
   - Follow ESLint and Prettier configurations
   - Run linting before commits:
     ```bash
     npm run lint
     ```

3. **Commit Messages**
   - Format: `type(scope): description`
   - Types: feat, fix, docs, style, refactor, test, chore
   - Example: `feat(auth): add Google sign-in`

4. **Pull Requests**
   - Create PR against `develop` branch
   - Require code review before merging
   - Must pass all checks (lint, build, tests)

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build production version
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm test` - Run tests (when implemented)

## Adding New Components

1. **UI Components**
   - Add to `src/components/ui/`
   - Follow Shadcn UI patterns
   - Include TypeScript types
   - Add documentation comments

2. **Feature Components**
   - Add to appropriate feature directory
   - Include necessary tests
   - Update relevant documentation

## VS Code Setup

1. **Settings**
   ```json
   {
     "editor.formatOnSave": true,
     "editor.defaultFormatter": "esbenp.prettier-vscode",
     "editor.codeActionsOnSave": {
       "source.fixAll.eslint": true
     },
     "typescript.tsdk": "node_modules/typescript/lib"
   }
   ```

2. **Recommended Extensions**
   - ESLint
   - Prettier
   - Tailwind CSS IntelliSense
   - GitLens
   - Error Lens

## Troubleshooting

1. **Common Issues**
   - Node modules issues:
     ```bash
     rm -rf node_modules
     npm install
     ```
   - Cache issues:
     ```bash
     npm run dev -- --clear
     ```

2. **Type Errors**
   - Check TypeScript version
   - Rebuild types:
     ```bash
     npm run build:types
     ```

3. **Build Errors**
   - Clear Next.js cache:
     ```bash
     rm -rf .next
     ```
   - Verify environment variables

## Getting Help

1. **Documentation**
   - Check project README.md
   - Review component documentation
   - Consult [Next.js docs](https://nextjs.org/docs)

2. **Team Communication**
   - Use project issue tracker
   - Tag relevant team members
   - Include error messages and steps to reproduce

3. **Code Reviews**
   - Request early feedback
   - Use PR templates
   - Tag appropriate reviewers

## Performance Guidelines

1. **Code Optimization**
   - Use React.memo for expensive components
   - Implement proper code splitting
   - Optimize images and assets

2. **State Management**
   - Use appropriate React hooks
   - Implement proper caching
   - Minimize unnecessary rerenders

3. **Build Optimization**
   - Enable proper tree shaking
   - Optimize bundle size
   - Use dynamic imports when appropriate

## Security Best Practices

1. **Authentication**
   - Never store sensitive data in localStorage
   - Implement proper token management
   - Use secure HTTP-only cookies

2. **API Calls**
   - Validate all inputs
   - Implement proper error handling
   - Use appropriate HTTP methods

3. **Environment Variables**
   - Never commit .env files
   - Use appropriate naming conventions
   - Document required variables 