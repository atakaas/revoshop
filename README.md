# 🛍️ RevoShop - Modern E-Commerce Platform

A comprehensive, production-ready e-commerce application built with Next.js 15, TypeScript, and modern web technologies. RevoShop demonstrates full-stack development capabilities with authentication, state management, and admin functionality.

## ✨ Features

### 🏪 Core E-Commerce Features
- **Product Catalog**: Browse products with categories, search, and filtering
- **Product Details**: Detailed product pages with images and descriptions
- **Shopping Cart**: Add/remove items, update quantities, persistent storage
- **Checkout Process**: Complete purchase flow with payment simulation
- **User Authentication**: Secure login system with session management
- **Admin Dashboard**: CRUD operations for product management

### 🎨 User Experience
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern UI**: Beautiful components with shadcn/ui
- **Loading States**: Skeleton loaders and error handling
- **Search & Filter**: Real-time product search and category filtering
- **Promotions**: Special offers and discount codes
- **FAQ Section**: Comprehensive help documentation

### 🔧 Technical Features
- **Static Generation (SSG)**: Home page for optimal performance
- **Server-Side Rendering (SSR)**: Product detail pages
- **Incremental Static Regeneration (ISR)**: Admin product updates
- **API Routes**: RESTful endpoints for product management
- **Middleware**: Route protection for authenticated areas
- **State Management**: Zustand for cart and authentication
- **Type Safety**: Full TypeScript implementation
- **Testing**: Jest + React Testing Library with 50%+ coverage

## 🛠️ Technology Stack

### Core Framework
- **⚡ Next.js 15** - React framework with App Router
- **📘 TypeScript 5** - Type-safe development
- **🎨 Tailwind CSS 4** - Utility-first styling
- **🧩 shadcn/ui** - High-quality UI components

### State Management & Data
- **🐻 Zustand** - Lightweight state management
- **🔄 TanStack Query** - Server state management
- **🌐 Axios** - HTTP client for API calls
- **💾 Local Storage** - Cart persistence

### Authentication & Security
- **🔐 JWT** - Token-based authentication
- **🛡️ Middleware** - Route protection
- **🔒 Secure Storage** - Encrypted session data

### Testing & Quality
- **🧪 Jest** - JavaScript testing framework
- **⚛️ React Testing Library** - Component testing
- **📊 Coverage Reports** - 50%+ test coverage
- **🔍 ESLint** - Code quality assurance

### External APIs
- **🛒 FakeStoreAPI** - Product and user data
- **📦 RESTful Design** - Standard API patterns

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd revo-shop

# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000
```

### Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run lint         # Run ESLint

# Testing
npm run test         # Run tests
npm run test:watch   # Run tests in watch mode
npm run test:coverage # Run tests with coverage

# Production
npm run build        # Build for production
npm start           # Start production server
```

## 📁 Project Structure

```
revo-shop/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── admin/             # Admin dashboard
│   │   ├── api/               # API routes
│   │   │   └── products/      # Product CRUD endpoints
│   │   ├── cart/              # Shopping cart page
│   │   ├── checkout/          # Checkout flow
│   │   ├── faq/               # FAQ page (SSG)
│   │   ├── login/             # Authentication
│   │   ├── products/          # Product listing & detail
│   │   ├── promo/             # Promotions page (SSG)
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Home page (SSG)
│   ├── components/            # Reusable components
│   │   ├── ui/               # shadcn/ui components
│   │   ├── AdminForm.tsx     # Product management form
│   │   ├── CartSummary.tsx   # Cart totals
│   │   ├── Navbar.tsx        # Navigation
│   │   ├── ProductCard.tsx   # Product card
│   │   ├── ProductDetail.tsx # Product details
│   │   └── ProductGrid.tsx   # Product grid
│   ├── hooks/                # Custom React hooks
│   │   ├── useCart.ts        # Cart functionality
│   │   └── useProducts.ts    # Product data fetching
│   ├── lib/                  # Utilities
│   │   └── api.ts           # API client configuration
│   ├── store/               # Zustand stores
│   │   ├── authStore.ts     # Authentication state
│   │   └── cartStore.ts     # Cart state
│   └── middleware.ts        # Route protection
├── __tests__/               # Test files
├── public/                  # Static assets
├── jest.config.js          # Jest configuration
├── jest.setup.js           # Test setup
└── package.json            # Dependencies and scripts
```

## 🌐 Pages & Routes

### Public Routes
- `/` - Home page with featured products (SSG)
- `/products` - Product listing with search and filter
- `/products/[id]` - Product detail page (SSR)
- `/promo` - Promotions and special offers (SSG)
- `/faq` - Frequently asked questions (SSG)
- `/login` - User authentication

### Protected Routes
- `/cart` - Shopping cart (requires login for checkout)
- `/checkout` - Purchase process (authentication required)
- `/admin` - Product management dashboard (authentication required)

### API Routes
- `GET /api/products` - Fetch all products
- `POST /api/products` - Create new product
- `GET /api/products/[id]` - Fetch single product
- `PUT /api/products/[id]` - Update product
- `DELETE /api/products/[id]` - Delete product

## 🔐 Authentication

### Demo Accounts
The application includes demo accounts for testing:

```
Username: johnd     Password: m38rmF$
Username: mor_2314  Password: 83r5^_
```

### Authentication Flow
1. Users log in with valid credentials from FakeStoreAPI
2. JWT token is generated and stored in localStorage
3. Middleware protects sensitive routes
4. User session persists across page refreshes

## 🛒 Shopping Cart Features

### Cart Functionality
- **Add to Cart**: Click product cards to add items
- **Quantity Management**: Increase/decrease item quantities
- **Remove Items**: Delete products from cart
- **Persistent Storage**: Cart data saved in localStorage
- **Real-time Updates**: Cart count updates in navbar
- **Price Calculation**: Automatic total calculation

### Checkout Process
1. Review cart items and totals
2. Enter shipping information
3. Add payment details (simulation)
4. Confirm order and receive order number
5. Cart automatically clears after successful order

## 👨‍💼 Admin Dashboard

### Product Management
- **View Products**: List all products with search/filter
- **Create Products**: Add new products to catalog
- **Edit Products**: Update existing product information
- **Delete Products**: Remove products from catalog
- **Real-time Updates**: Changes reflect immediately in store

### Admin Features
- **Statistics**: Product count, categories, average price
- **Search**: Find products quickly
- **Category Filter**: Filter by product category
- **Form Validation**: Ensure data integrity
- **Error Handling**: Graceful error management

## 🧪 Testing

### Test Coverage
The application includes comprehensive tests covering:
- **Authentication Logic**: Login, logout, session management
- **Cart Functionality**: Add, remove, update items
- **API Integration**: Mocked API calls and responses
- **Component Rendering**: UI component behavior
- **State Management**: Zustand store operations

### Running Tests
```bash
# Run all tests
npm run test

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage
```

### Test Structure
- `__tests__/auth.test.tsx` - Authentication store tests
- `__tests__/cart.test.tsx` - Cart functionality tests
- `__tests__/hooks.test.tsx` - Custom hook tests
- `__tests__/api.test.ts` - API integration tests

## 🎯 Performance Optimizations

### Image Optimization
- **Next.js Image**: Automatic optimization and lazy loading
- **Responsive Images**: Proper sizing for different devices
- **Blur Placeholders**: Better loading experience

### Code Splitting
- **Dynamic Imports**: Load components on demand
- **Route-based Splitting**: Automatic with Next.js
- **Component Lazy Loading**: Reduce initial bundle size

### Caching Strategy
- **Static Generation**: Pre-built pages for better performance
- **ISR**: Update content without full rebuilds
- **API Caching**: TanStack Query for efficient data fetching

### Custom Hooks
- **useProducts**: Reusable product data fetching
- **useCart**: Centralized cart functionality
- **Error Handling**: Consistent error management

## 🚀 Deployment

### Vercel Deployment
1. Connect repository to Vercel
2. Configure environment variables
3. Deploy automatically on push to main branch
4. Custom domain configuration (optional)

### Environment Variables
```bash
# No additional environment variables required
# Uses FakeStoreAPI for all data operations
```

### Build Process
```bash
# Build for production
npm run build

# Start production server
npm start
```

## 📊 Grading Components Checklist

### ✅ Next.js Fundamentals
- [x] Components, state, props, lifecycle
- [x] Routing: dynamic routes, nested routes, next/link usage
- [x] Data fetching: SSG, SSR, ISR, client fetch
- [x] Loading & error states

### ✅ Advanced Features
- [x] Authentication + Middleware protection
- [x] State management: global store, localStorage persistence
- [x] CRUD operations via Next.js API Routes
- [x] ISR implementation after product CRUD

### ✅ Testing & Quality
- [x] Unit Testing ≥ 50% coverage
- [x] Component testing with React Testing Library
- [x] API testing with mocked responses
- [x] State management testing

### ✅ Performance & UX
- [x] Performance optimization (lazy load, caching, dynamic imports)
- [x] Custom hooks for reusable logic
- [x] Responsive design
- [x] Error handling and loading states

### ✅ Documentation & Deployment
- [x] Comprehensive README.md
- [x] Production-ready build
- [x] Clear project structure
- [x] Setup instructions

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Ensure all tests pass
6. Submit a pull request

## 📄 License

This project is for educational purposes to demonstrate full-stack Next.js development capabilities.

## 🙏 Acknowledgments

- **FakeStoreAPI** - For providing product and user data
- **Next.js Team** - For the amazing framework
- **shadcn/ui** - For beautiful UI components
- **Vercel** - For hosting and deployment platform

---

Built with ❤️ using Next.js 15, TypeScript, and modern web technologies. Demonstrating comprehensive full-stack development skills for e-commerce applications.