# Traces Table

A React application for viewing and analyzing LLM traces and spans with an interactive table interface.

## Getting Started

### Prerequisites

- Node.js (16+ recommended)
- Yarn package manager

### Installation

```bash
# Install dependencies
yarn install
```

### Development

```bash
# Start development server, will be available at `http://localhost:5173`
yarn dev
```

### Available Scripts

- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn preview` - Preview production build
- `yarn lint` - Run ESLint

## Project Structure

```
src/
|__components/
    |__ui/                    #Reusable UI components
    |__features/
      |__TracesTable.tsx    # Main traces table component
|__staticData.ts              # Sample trace data
|__App.tsx                    # Main application component
|__main.tsx                   # Application entry point
```

## Features

### Completed

- [x] Interactive data table for traces with sorting and filtering
- [x] Expandable rows to show span details
- [x] Full Trace-Span view as a side drawer to analyse traces and spans hierarchy and their individual properties

### Pending

- [ ] Add support for infinite scrolling and virtualization to handle large traces data
- [ ] Enable columns customisation (reorder, resize, show/hide columns)
- [ ] Add filters on various column fields
- [ ] Integrate keyboard shortcuts for power users
- [ ] Integrate Zod for runtime type validation

## UX

### Completed

- [x] Add smooth animation when side drawer appears/hides
- [x] Close the side drawer when clicked outside

### Pending

- [ ] Integrate the theme to match the visual consistency with other screens
- [ ] Implement consistent interactions states through out the table


## Tech Stack

- **React 19** with TypeScript
- **TanStack Table** for data tables
- **Vite** for build tooling
- **Zustand** for state management
- **Tailwind CSS** for styling
- **Radix UI** for accessible overlay components