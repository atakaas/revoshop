'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { useCart } from '@/hooks/useCart';
import Link from 'next/link';

export const CartSummary = () => {
  const { items, totalItems, totalPrice, clearAllItems } = useCart();

  if (items.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Cart Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-500 text-center py-4">Your cart is empty</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="sticky top-24">
      <CardHeader>
        <CardTitle>Cart Summary</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex justify-between">
          <span>Items ({totalItems})</span>
          <span>${totalPrice.toFixed(2)}</span>
        </div>
        
        <Separator />
        
        <div className="flex justify-between font-semibold text-lg">
          <span>Total</span>
          <span>${totalPrice.toFixed(2)}</span>
        </div>

        <div className="space-y-2">
          <Link href="/checkout">
            <Button className="w-full" size="lg">
              Proceed to Checkout
            </Button>
          </Link>
          
          <Button
            variant="outline"
            className="w-full"
            onClick={clearAllItems}
          >
            Clear Cart
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};