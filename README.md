# PawaShare Frontend

A Next.js application for connecting solar energy producers with their community.

## 🚀 Local Setup

```bash
# Install dependencies
npm install
# Run development server
npm run dev
# Build for production
npm run build
# Start production server
npm start
```
Visit [http://localhost:3000](http://localhost:3000) to view the application.

## 🛠 Tech Stack

- **Framework**: Next.js
- **Styling**: Tailwind CSS
- **UI Components**: Custom components with Radix UI
- **Authentication**: Built-in Next.js authentication
- **Deployment**: Vercel

## 📁 Project Structure

```
frontend/
├── app/                    # Next.js app router
│   ├── page.tsx           # Home page
│   └── login/             # Login routes
├── components/            # Reusable components
│   ├── ui/               # Base UI components
│   ├── about-us.tsx      # About section
│   ├── contact-form.tsx  # Contact form
│   ├── faq.tsx          # FAQ section
│   ├── features.tsx     # Features section
│   ├── how-it-works.tsx # How it works section
│   ├── key-features.tsx # Key features section
│   ├── pricing.tsx      # Pricing section
│   └── theme-provider.tsx # Theme context
├── lib/                  # Utility functions and hooks
├── public/              # Static assets
├── .github/             # GitHub Actions workflows
├── tailwind.config.ts   # Tailwind configuration
├── next.config.mjs      # Next.js configuration
└── tsconfig.json       # TypeScript configuration
```

## 🔄 CI/CD Pipeline

### Current Development Setup

The current CI/CD pipeline is optimized for MVP development:

```yaml
name: Build and Test
jobs:
  build-and-test:
    - Checkout code
    - Setup Node.js 18.17
    - Install dependencies
    - Build project
    - Deploy to Vercel
```

### 🔒 Production Enhancements (Future)

For production deployment, consider implementing these additional security and monitoring features:

1. **Security Scanning**
   ```yaml
   security:
     - Snyk vulnerability scanning
     - Dependency auditing
     - Code quality checks
   ```

2. **Monitoring & Notifications**
   ```yaml
   notifications:
     - Slack integration
     - Deployment status alerts
     - Error reporting
   ```

3. **Performance Optimization**
   ```yaml
   optimization:
     - Build caching
     - Parallel job execution
     - Asset optimization
   ```

4. **Environment Management**
   ```yaml
   environments:
     development:
       - Local environment variables
       - Development API endpoints
     production:
       - Secure secrets management
       - Production API endpoints
       - SSL/TLS configuration
   ```

## 🔐 Environment Variables

### Development
```env
NEXT_PUBLIC_API_URL=http://localhost:3000
NEXT_PUBLIC_AUTH_DOMAIN=http://localhost:3000
```

### Production (Future)
Additional variables needed for production:
```env
VERCEL_TOKEN=           # Vercel deployment token
ORG_ID=                 # Vercel organization ID
PROJECT_ID=             # Vercel project ID
SNYK_TOKEN=            # Security scanning
SLACK_BOT_TOKEN=       # Deployment notifications
```

## 📈 Future Improvements

### 1. Docker Optimizations
When moving to containerized deployment:
```dockerfile
# Build stage
FROM node:18.17-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci  # More reliable than npm install
COPY . .
ENV NODE_ENV production
RUN npm run build

# Production stage
FROM node:18.17-alpine AS runner
WORKDIR /app
# Copy only necessary files
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
ENV NODE_ENV production
CMD ["node", "server.js"]
```

Benefits:
- Multi-stage builds for smaller images
- Production-only dependencies
- Optimized for security and performance
- Standalone output mode
- Faster startup times

Required Next.js config:
```javascript
// next.config.mjs
{
  output: 'standalone',
  experimental: {
    // Performance optimizations
    webpackBuildWorker: true,
    parallelServerBuildTraces: true
  }
}
```

### 2. Enhanced CI/CD Pipeline
```yaml
jobs:
  build:
    - Lint checking
    - Type checking
    - Unit tests
    - Integration tests
  
  security:
    - Snyk vulnerability scanning
    - Dependency auditing
    - Code quality checks
  
  monitoring:
    - Performance metrics
    - Error tracking
    - Usage analytics
```

### 3. Infrastructure Improvements
- Container orchestration (Kubernetes)
- Load balancing
- Auto-scaling
- CDN integration
- Database replication
- Backup strategies

### 4. Monitoring Setup
- Application performance monitoring
- Error tracking
- User analytics
- Server metrics
- Cost optimization

## 📝 License

[MIT](LICENSE)

## 👥 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🤝 Support

For support, email support@pawashare.com or join our Slack channel.
