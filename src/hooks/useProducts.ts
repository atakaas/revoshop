import { useState, useEffect } from 'react';
import { Product, productsApi } from '@/lib/api';

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await productsApi.getAll();
      setProducts(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch products');
    } finally {
      setLoading(false);
    }
  };

  const fetchProductById = async (id: number): Promise<Product | null> => {
    try {
      setLoading(true);
      setError(null);
      const product = await productsApi.getById(id);
      return product;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch product');
      return null;
    } finally {
      setLoading(false);
    }
  };

  const fetchProductsByCategory = async (category: string) => {
    try {
      setLoading(true);
      setError(null);
      const data = await productsApi.getByCategory(category);
      setProducts(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch products by category');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return {
    products,
    loading,
    error,
    fetchProducts,
    fetchProductById,
    fetchProductsByCategory,
  };
};