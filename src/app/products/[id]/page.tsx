import { notFound } from 'next/navigation';
import { ProductDetail } from '@/components/ProductDetail';
import { productsApi } from '@/lib/api';

interface ProductPageProps {
  params: {
    id: string;
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const productId = parseInt(params.id);

  if (isNaN(productId)) {
    notFound();
  }

  let product = null;
  let error = null;

  try {
    product = await productsApi.getById(productId);
  } catch (err) {
    error = err instanceof Error ? err.message : 'Failed to fetch product';
    console.error('Error fetching product:', err);
  }

  if (!product) {
    notFound();
  }

  return <ProductDetail product={product} />;
}

export async function generateMetadata({ params }: ProductPageProps) {
  const productId = parseInt(params.id);

  if (isNaN(productId)) {
    return {
      title: 'Product Not Found',
    };
  }

  try {
    const product = await productsApi.getById(productId);
    
    return {
      title: `${product.title} - RevoShop`,
      description: product.description,
      openGraph: {
        title: product.title,
        description: product.description,
        images: [product.image],
      },
    };
  } catch (err) {
    return {
      title: 'Product - RevoShop',
    };
  }
}