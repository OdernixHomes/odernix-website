# Odernix Nigeria Limited - Corporate Website

Modern, responsive React website for Odernix Nigeria Limited, featuring engineering services, project portfolios, and company information.

## Features

- 🚀 Built with React 18 + TypeScript + Vite
- 🎨 Styled with Tailwind CSS
- 🔍 Built-in search functionality
- 📱 Fully responsive design
- ⚡ Optimized images with lazy loading
- 📊 Google Analytics integration
- 🛡️ Error boundaries and loading states
- 🔧 SEO optimized with meta tags and structured data

## Quick Start

1. **Clone and install dependencies:**
   ```bash
   git clone <repository-url>
   cd odernix-bolt
   npm install
   ```

2. **Set up environment variables:**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` with your actual values:
   ```env
   VITE_GOOGLE_ANALYTICS_ID=your-ga-id
   VITE_SITE_URL=https://your-domain.com
   VITE_PHONE_NUMBER=your-phone-number
   # ... other variables
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

## Environment Variables

The following environment variables need to be configured in your `.env` file:

| Variable | Description | Example |
|----------|-------------|---------|
| `VITE_GOOGLE_ANALYTICS_ID` | Google Analytics 4 Measurement ID | `G-XXXXXXXXXX` |
| `VITE_SITE_URL` | Your website's canonical URL | `https://www.odernix.com` |
| `VITE_SITE_NAME` | Company name for SEO and branding | `Odernix Nigeria Limited` |
| `VITE_SITE_DESCRIPTION` | SEO meta description | `Leading Nigerian engineering company...` |
| `VITE_PHONE_NUMBER` | Primary contact phone number | `+2347034900069` |
| `VITE_EMAIL` | Primary contact email | `info@odernix.com` |
| `VITE_ODERNIX_HOMES_URL` | Subsidiary website URL | `https://www.odernixhomes.com` |

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ErrorBoundary.tsx
│   ├── LazyImage.tsx
│   ├── LoadingSpinner.tsx
│   └── SearchBox.tsx
├── hooks/              # Custom React hooks
│   └── useAnalytics.tsx
├── pages/              # Page components
│   ├── Home.tsx
│   ├── About.tsx
│   └── ...
└── ...
```

## Technical Features

### SEO & Analytics
- Comprehensive meta tags and Open Graph data
- Google Analytics 4 integration with event tracking
- Structured data markup for search engines
- Sitemap and robots.txt configuration

### Performance
- Lazy loading images with intersection observer
- Code splitting and tree shaking
- Optimized bundle size with Vite

### User Experience
- Global search functionality
- Error boundaries for graceful error handling
- Loading states and user feedback
- Mobile-first responsive design

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is proprietary software owned by Odernix Nigeria Limited.
