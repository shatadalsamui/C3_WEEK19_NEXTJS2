# Next.js TypeScript + Tailwind CSS Project

## Project Overview
This is a Next.js application bootstrapped with `create-next-app`. The project follows modern web development practices with server-side rendering capabilities.

## Technology Stack
- **Framework**: Next.js
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: (Add if applicable)
- **Testing**: (Add if applicable)

## Getting Started

### Prerequisites
- Node.js (v16 or later recommended)
- npm or yarn

### Installation
1. Clone the repository
2. Install dependencies:
```bash
npm install
# or
yarn install
```
3. Create `.env.local` file with required environment variables

### Development Server
```bash
npm run dev
# or
yarn dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure
```
my-app/
├── app/            # Application routes (App Router)
├── public/         # Static files
├── src/
│   ├── components/ # Reusable components
│   ├── styles/     # Global styles
│   ├── types/      # TypeScript types
│   └── utils/      # Utility functions
├── .env.local      # Environment variables
├── next.config.js  # Next.js configuration
└── tailwind.config.js # Tailwind configuration
```

## Development Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Run production server
- `npm run lint` - Run ESLint
