import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Gift, Percent, Clock, Star } from 'lucide-react';
import Link from 'next/link';

export default function PromoPage() {
  const promos = [
    {
      id: 1,
      title: "Summer Sale",
      description: "Get up to 50% off on selected summer items",
      discount: "50%",
      category: "Seasonal",
      validUntil: "August 31, 2025",
      code: "SUMMER50",
      featured: true,
    },
    {
      id: 2,
      title: "New Customer Special",
      description: "Welcome offer for first-time shoppers",
      discount: "20%",
      category: "Welcome",
      validUntil: "December 31, 2025",
      code: "WELCOME20",
      featured: false,
    },
    {
      id: 3,
      title: "Electronics Flash Sale",
      description: "Limited time deals on electronics",
      discount: "30%",
      category: "Electronics",
      validUntil: "July 15, 2025",
      code: "TECH30",
      featured: false,
    },
    {
      id: 4,
      title: "Free Shipping Weekend",
      description: "No minimum purchase required",
      discount: "Free Shipping",
      category: "Shipping",
      validUntil: "July 7, 2025",
      code: "FREESHIP",
      featured: true,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <div className="mb-6">
          <Gift className="h-16 w-16 mx-auto text-primary mb-4" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Special Offers & Promotions
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Discover amazing deals and exclusive offers available for a limited time only
        </p>
      </section>

      {/* Featured Promotions */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Featured Deals
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {promos.filter(promo => promo.featured).map((promo) => (
            <Card key={promo.id} className="relative overflow-hidden border-2 border-primary/20">
              <div className="absolute top-4 right-4">
                <Badge variant="destructive" className="text-sm font-bold">
                  {promo.discount}
                </Badge>
              </div>
              <CardHeader className="pb-4">
                <div className="flex items-center gap-2 mb-2">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="text-sm font-medium text-primary">Featured</span>
                </div>
                <CardTitle className="text-2xl">{promo.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">{promo.description}</p>
                
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Clock className="h-4 w-4" />
                  <span>Valid until {promo.validUntil}</span>
                </div>
                
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">Use code:</p>
                  <p className="font-mono font-bold text-lg text-primary">{promo.code}</p>
                </div>
                
                <Link href="/products">
                  <Button className="w-full">
                    Shop Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* All Promotions */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          All Current Promotions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {promos.map((promo) => (
            <Card key={promo.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg">{promo.title}</CardTitle>
                  <Badge variant="secondary">
                    {promo.discount}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 text-sm">{promo.description}</p>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Percent className="h-4 w-4" />
                    <span>{promo.category}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Clock className="h-4 w-4" />
                    <span>Expires: {promo.validUntil}</span>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-2 rounded text-center">
                  <p className="text-xs text-gray-600 mb-1">Code:</p>
                  <p className="font-mono font-bold text-primary">{promo.code}</p>
                </div>
                
                <Link href="/products">
                  <Button variant="outline" className="w-full" size="sm">
                    Shop Deal
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Terms and Conditions */}
      <section className="bg-gray-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Terms & Conditions
        </h2>
        <div className="space-y-3 text-gray-600">
          <p>• All promotions are subject to availability and may be changed or withdrawn at any time.</p>
          <p>• Discount codes cannot be combined with other offers unless specified.</p>
          <p>• Some promotions may have minimum purchase requirements.</p>
          <p>• Free shipping promotions apply to standard shipping only.</p>
          <p>• RevoShop reserves the right to modify or cancel promotions at any time.</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center mt-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Don't Miss Out!
        </h2>
        <p className="text-gray-600 mb-6">
          These offers won't last forever. Start shopping now and save big!
        </p>
        <Link href="/products">
          <Button size="lg">
            Start Shopping
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </section>
    </div>
  );
}