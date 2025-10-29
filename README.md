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

## 🚀 Getting Started

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

## 📁 Project Structure

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

Username: johnd Password: m38rmF$
Username: mor*2314 Password: 83r5^*

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
