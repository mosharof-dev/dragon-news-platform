# 🐉 Dragon News Platform

A modern, full-stack news platform built with Next.js 16, featuring real-time news updates, user authentication, and category-based news browsing. Designed for scalability and user engagement.

**🔗 [Live Demo](https://dragon-news-platform.vercel.app/category/01)** | **📦 [GitHub Repository](https://github.com/mosharof-dev/dragon-news-platform)**

## ✨ Features

- **🔐 User Authentication** - Secure authentication system with login and registration
- **📰 News Management** - Browse news by category and view detailed news articles
- **⚡ Real-Time Updates** - Breaking news marquee with latest updates
- **🎨 Modern UI/UX** - Built with HeroUI and Tailwind CSS for responsive design
- **📱 Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- **🔧 Form Handling** - Robust form validation using React Hook Form
- **⚙️ Database Integration** - MongoDB backend with optimized queries
- **🖼️ Image Optimization** - Automatic image optimization from multiple CDN sources

## 🛠️ Tech Stack

### Frontend
- **Next.js 16** - React framework with App Router
- **React 19** - Latest React with server components support
- **Tailwind CSS 4** - Utility-first CSS framework
- **HeroUI** - Beautiful component library built on Tailwind CSS
- **DaisyUI** - Additional UI components
- **React Hook Form** - Efficient form state management
- **React Icons** - Comprehensive icon library
- **Sonner** - Toast notifications
- **React Fast Marquee** - Marquee component for breaking news
- **React Spinners** - Loading animations

### Backend & Database
- **Next.js API Routes** - Serverless backend
- **MongoDB** - NoSQL database for data persistence
- **Better Auth** - Authentication library with MongoDB adapter

### Development Tools
- **ESLint** - Code quality and linting
- **Babel React Compiler** - React compiler optimization
- **PostCSS** - CSS processing

## 📋 Prerequisites

- Node.js 18+ or higher
- npm/yarn/pnpm package manager
- MongoDB instance (local or cloud-based like MongoDB Atlas)

## 🚀 Getting Started

### 1. Clone & Install

```bash
# Install dependencies
npm install
```

### 2. Environment Setup

Create a `.env.local` file in the root directory:

```env
# MongoDB Connection
MONGODB_URI=your_mongodb_connection_string

# Authentication
BETTER_AUTH_SECRET=your_random_secret_key
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 📂 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── (auth)/            # Authentication pages group
│   │   ├── login/         # Login page
│   │   └── register/      # Registration page
│   ├── (main)/            # Main application group
│   │   ├── page.js        # Home page
│   │   ├── about/         # About page
│   │   ├── career/        # Career page
│   │   ├── category/      # News by category
│   │   └── news/          # Individual news article page
│   ├── api/               # API routes
│   │   └── auth/          # Authentication endpoints
│   ├── globals.css        # Global styles
│   ├── layout.js          # Root layout
│   ├── loading.jsx        # Loading UI component
│   └── not-found.jsx      # 404 error page
├── Components/            # Reusable React components
│   ├── Home/
│   │   └── News/          # News-related components
│   │       ├── LeftSideBar.jsx
│   │       ├── NewsCard.jsx
│   │       └── RightSideBar.jsx
│   └── Shared/            # Shared components
│       ├── Header.jsx
│       ├── NavBar.jsx
│       ├── NavLink.jsx
│       └── BreakingNews.jsx
├── lib/                   # Utility libraries
│   ├── auth.jsx           # Backend auth utilities
│   └── auth-client.jsx    # Frontend auth utilities
├── assets/                # Static assets
│   └── dragon-news.fig    # Figma design file
└── proxy.js              # Proxy configuration
```

## 📜 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint to check code quality |

## 🔑 Key Features Deep Dive

### Authentication System
- User registration and login
- Secure session management with `better-auth`
- MongoDB integration for user storage
- Protected routes and API endpoints

### News Display
- Browse news articles by category
- Individual news article pages with detailed views
- Breaking news marquee feature
- Responsive news card layout
- Image optimization from multiple sources

### User Interface
- Modern navigation with custom NavLink components
- Responsive sidebar components
- Beautiful form styling with React Hook Form
- Toast notifications using Sonner
- Loading states and error handling

## 🌐 Image Optimization

The application supports images from multiple sources:
- Unsplash (unsplash.com)
- ImgBB (ibb.co)
- Any external image source

Configured in `next.config.mjs` with remote patterns for automatic optimization.

## 📦 Deployment

### Deploy on Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy with one click

```bash
# Vercel CLI alternative
npm i -g vercel
vercel
```

### Deploy on Other Platforms

The application can be deployed on any platform supporting Node.js:
- Heroku
- Railway
- Render
- AWS (Elastic Beanstalk, Lambda)
- DigitalOcean
- Netlify Functions

**Build for production:**
```bash
npm run build
npm start
```

## 🔒 Security Best Practices

- Never commit `.env.local` to version control
- Use strong `BETTER_AUTH_SECRET` (minimum 32 characters)
- Keep dependencies updated: `npm audit` and `npm update`
- Use HTTPS in production
- Enable MongoDB authentication and IP whitelisting
- Implement rate limiting for API routes
- Validate all user inputs on backend

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Create a feature branch: `git checkout -b feature/your-feature`
2. Commit changes: `git commit -m 'Add new feature'`
3. Push to branch: `git push origin feature/your-feature`
4. Open a Pull Request

## 📝 Code Standards

- Use ESLint for code quality
- Follow React best practices
- Use functional components with hooks
- Keep components modular and reusable
- Add meaningful comments for complex logic
- Write responsive CSS-first designs

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Change default port
npm run dev -- -p 3001
```

### MongoDB Connection Issues
- Verify connection string in `.env.local`
- Check MongoDB service is running
- Ensure IP is whitelisted (MongoDB Atlas)

### Build Errors
```bash
# Clear cache and reinstall
rm -rf .next node_modules
npm install
npm run build
```

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Better Auth Documentation](https://www.better-auth.com)
- [MongoDB Documentation](https://docs.mongodb.com)
- [HeroUI Documentation](https://www.heroui.com)

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

Created with ❤️ for the Dragon News Platform community.

## 🔗 Quick Links

- **[Live Demo](https://dragon-news-platform.vercel.app/category/01)** - Experience the platform
- **[GitHub Repository](https://github.com/mosharof-dev/dragon-news-platform)** - View source code
- **[Report Issues](https://github.com/mosharof-dev/dragon-news-platform/issues)** - Bug reports & feature requests

---

**Made with Next.js 16 | Powered by React 19 | Styled with Tailwind CSS**
