'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/lib/api';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Star } from 'lucide-react';
import { useCart } from '@/hooks/useCart';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <Link href={`/products/${product.id}`}>
      <Card className="group hover:shadow-lg transition-shadow duration-300 cursor-pointer overflow-hidden">
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <Badge
            variant="secondary"
            className="absolute top-2 left-2 bg-white/90 text-xs"
          >
            {product.category}
          </Badge>
        </div>
        
        <CardContent className="p-4">
          <h3 className="font-semibold text-lg line-clamp-2 mb-2 min-h-[3.5rem]">
            {product.title}
          </h3>
          
          <div className="flex items-center gap-2 mb-2">
            <div className="flex items-center">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm text-gray-600 ml-1">
                {product.rating.rate.toFixed(1)}
              </span>
            </div>
            <span className="text-sm text-gray-500">
              ({product.rating.count} reviews)
            </span>
          </div>
          
          <p className="text-2xl font-bold text-primary">
            ${product.price.toFixed(2)}
          </p>
        </CardContent>
        
        <CardFooter className="p-4 pt-0">
          <Button
            onClick={handleAddToCart}
            className="w-full"
            size="sm"
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
};