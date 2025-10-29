import axios from 'axios';

const API_BASE_URL = 'https://fakestoreapi.com';

export interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface User {
  id: number;
  email: string;
  username: string;
  password: string;
  name: {
    firstname: string;
    lastname: string;
  };
  address: {
    city: string;
    street: string;
    number: number;
    zipcode: string;
    geolocation: {
      lat: string;
      long: string;
    };
  };
  phone: string;
}

export interface CartItem {
  productId: number;
  quantity: number;
}

export interface LoginCredentials {
  username: string;
  password: string;
}

export const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

// Products API
export const productsApi = {
  getAll: async (): Promise<Product[]> => {
    const response = await api.get('/products');
    return response.data;
  },
  
  getById: async (id: number): Promise<Product> => {
    const response = await api.get(`/products/${id}`);
    return response.data;
  },
  
  getCategories: async (): Promise<string[]> => {
    const response = await api.get('/products/categories');
    return response.data;
  },
  
  getByCategory: async (category: string): Promise<Product[]> => {
    const response = await api.get(`/products/category/${category}`);
    return response.data;
  },
  
  create: async (product: Omit<Product, 'id' | 'rating'>): Promise<Product> => {
    const response = await api.post('/products', product);
    return response.data;
  },
  
  update: async (id: number, product: Partial<Product>): Promise<Product> => {
    const response = await api.put(`/products/${id}`, product);
    return response.data;
  },
  
  delete: async (id: number): Promise<Product> => {
    const response = await api.delete(`/products/${id}`);
    return response.data;
  },
};

// Users API
export const usersApi = {
  getAll: async (): Promise<User[]> => {
    const response = await api.get('/users');
    return response.data;
  },
  
  getById: async (id: number): Promise<User> => {
    const response = await api.get(`/users/${id}`);
    return response.data;
  },
  
  login: async (credentials: LoginCredentials): Promise<{ token: string; user: User }> => {
    // FakeStoreAPI doesn't have a real login endpoint, so we'll simulate it
    const users = await usersApi.getAll();
    const user = users.find(
      u => u.username === credentials.username && u.password === credentials.password
    );
    
    if (!user) {
      throw new Error('Invalid credentials');
    }
    
    // Generate a mock token
    const token = btoa(JSON.stringify({ userId: user.id, username: user.username }));
    
    return { token, user };
  },
};

// Cart API
export const cartApi = {
  getUserCart: async (userId: number): Promise<any> => {
    const response = await api.get(`/carts/user/${userId}`);
    return response.data;
  },
  
  addToCart: async (userId: number, items: CartItem[]): Promise<any> => {
    const response = await api.post('/carts', {
      userId,
      date: new Date().toISOString(),
      products: items,
    });
    return response.data;
  },
};