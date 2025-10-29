'use client';

import { Product } from '@/lib/api';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { ShoppingCart, Star, Truck, Shield, RefreshCw } from 'lucide-react';
import { useCart } from '@/hooks/useCart';
import Image from 'next/image';

interface ProductDetailProps {
  product: Product;
}

export const ProductDetail = ({ product }: ProductDetailProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="space-y-4">
          <div className="relative aspect-square overflow-hidden rounded-lg">
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <Badge variant="secondary" className="mb-2">
              {product.category}
            </Badge>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {product.title}
            </h1>
            
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <span className="ml-1 font-medium">
                  {product.rating.rate.toFixed(1)}
                </span>
              </div>
              <span className="text-gray-500">
                ({product.rating.count} customer reviews)
              </span>
            </div>

            <div className="text-3xl font-bold text-primary mb-6">
              ${product.price.toFixed(2)}
            </div>
          </div>

          <Separator />

          <div>
            <h3 className="text-lg font-semibold mb-2">Description</h3>
            <p className="text-gray-600 leading-relaxed">
              {product.description}
            </p>
          </div>

          <Separator />

          <div className="space-y-4">
            <Button
              onClick={handleAddToCart}
              size="lg"
              className="w-full"
            >
              <ShoppingCart className="h-5 w-5 mr-2" />
              Add to Cart
            </Button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Card>
              <CardContent className="p-4 text-center">
                <Truck className="h-6 w-6 mx-auto mb-2 text-primary" />
                <p className="text-sm font-medium">Free Shipping</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <Shield className="h-6 w-6 mx-auto mb-2 text-primary" />
                <p className="text-sm font-medium">Secure Payment</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <RefreshCw className="h-6 w-6 mx-auto mb-2 text-primary" />
                <p className="text-sm font-medium">Easy Returns</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};