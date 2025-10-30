# Mr-Fixit

Vue 3 + TypeScript + Vite application with Docker support.

## Getting Started

### Prerequisites
- Node.js 20+ (for local development)
- Docker and Docker Compose (for containerized development)

## Running with Docker

### Development Mode
Run the development server with hot-reload:

```bash
docker-compose up dev
```

The application will be available at `http://localhost:5173`

### Production Mode
Build and run the production-optimized version:

```bash
docker-compose up prod
```

The application will be available at `http://localhost:8080`

### Building Docker Image Manually

For development:
```bash
docker build --target development -t mr-fixit:dev .
docker run -p 5173:5173 -v $(pwd):/app -v /app/node_modules mr-fixit:dev
```

For production:
```bash
docker build --target production -t mr-fixit:prod .
docker run -p 8080:80 mr-fixit:prod
```

## Local Development (without Docker)

### Install Dependencies
```bash
npm install
```

### Start Development Server
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm preview
```

## Project Structure

This template uses Vue 3 `<script setup>` SFCs. Learn more:
- [Script Setup Docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup)
- [Vue Docs TypeScript Guide](https://vuejs.org/guide/typescript/overview.html#project-setup)
# MR-fixit
