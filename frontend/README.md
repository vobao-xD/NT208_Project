# Text to Everything

A modern web application that converts text into various formats including speech, images, and videos. Built with Next.js, TypeScript, Tailwind CSS, and Shadcn UI.

## Features

### 1. Text Conversion
- **Text to Speech**
  - Multiple voice options (Vietnamese and English)
  - Adjustable speed and pitch
  - High-quality audio output

- **Text to Image**
  - Multiple style options (Realistic, Artistic, Cartoon)
  - Adjustable quality settings
  - Various output formats

- **Text to Video**
  - Customizable video settings
  - Multiple quality options
  - Duration control

### 2. User Authentication
- Email/Password authentication
- Google Sign-in integration
- Secure session management
- User profile management

### 3. Advanced Settings
- Voice configuration
  - Voice selection
  - Speed control
  - Pitch adjustment

- Image generation settings
  - Style selection
  - Quality control
  - Output format options

- General preferences
  - Auto-save functionality
  - Theme preferences
  - Language settings

### 4. User Interface
- Clean, modern design
- Responsive layout
- Dark/Light mode support
- Intuitive navigation
- Loading states and feedback
- Error handling

## Technology Stack

### Frontend
- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn UI
- **State Management**: React Hooks
- **Form Handling**: React Hook Form (planned)
- **API Client**: Axios

### Backend Integration
- RESTful API endpoints
- JSON data format
- Error handling
- Rate limiting
- Authentication tokens

## Pages and Routes

1. **Public Pages**
   - `/` - Landing page
   - `/sign-in` - Login page
   - `/sign-up` - Registration page

2. **Protected Pages**
   - `/generate` - Text conversion interface
   - `/advanced` - Advanced settings
   - `/thanks` - Success confirmation

## Component Structure

1. **Layout Components**
   - Main layout
   - Auth layout
   - Navigation components

2. **UI Components**
   - Button
   - Card
   - Input
   - Select
   - Slider
   - Switch
   - Separator

3. **Feature Components**
   - Conversion form
   - Settings panels
   - Authentication forms

## State Management

1. **User Authentication**
   - Login state
   - User profile
   - Authentication tokens

2. **Application Settings**
   - Conversion preferences
   - UI preferences
   - User settings

3. **Conversion State**
   - Input validation
   - Processing state
   - Output handling

## API Integration

### Endpoints
1. **Authentication**
   - POST `/api/auth/sign-up`
   - POST `/api/auth/sign-in`
   - POST `/api/auth/google`

2. **Conversion**
   - POST `/api/text-to-speech`
   - POST `/api/text-to-image`
   - POST `/api/text-to-video`

3. **Settings**
   - GET `/api/user/settings`
   - PUT `/api/user/settings`

## Future Enhancements

1. **Features**
   - Batch processing
   - History tracking
   - Favorites system
   - Share functionality

2. **Technical**
   - Progressive Web App (PWA)
   - API caching
   - Performance optimization
   - Analytics integration

3. **UI/UX**
   - More themes
   - Custom animations
   - Keyboard shortcuts
   - Accessibility improvements

## Contributing

See [SETUP.md](./SETUP.md) for development setup and contribution guidelines.

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [Shadcn UI](https://ui.shadcn.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Radix UI](https://www.radix-ui.com/)
