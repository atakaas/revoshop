import { ProductGrid } from '@/components/ProductGrid';
import { productsApi } from '@/lib/api';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Star, Truck, Shield } from 'lucide-react';
import Link from 'next/link';

export default async function Home() {
  let products = [];
  let error = null;

  try {
    products = await productsApi.getAll();
  } catch (err) {
    error = err instanceof Error ? err.message : 'Failed to fetch products';
    console.error('Error fetching products:', err);
  }

  const featuredProducts = products.slice(0, 8);

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
              Welcome to <span className="text-primary">RevoShop</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover amazing products at unbeatable prices. Shop with confidence on our modern e-commerce platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/products">
                <Button size="lg" className="text-lg px-8">
                  Shop Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/promo">
                <Button variant="outline" size="lg" className="text-lg px-8">
                  View Promotions
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <Truck className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-lg font-semibold mb-2">Free Shipping</h3>
                <p className="text-gray-600">Free shipping on all orders over $50</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <Shield className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-lg font-semibold mb-2">Secure Payment</h3>
                <p className="text-gray-600">100% secure payment processing</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <Star className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-lg font-semibold mb-2">Quality Products</h3>
                <p className="text-gray-600">Carefully curated selection of products</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Products
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Check out our hand-picked selection of the best products
            </p>
          </div>

          {error ? (
            <div className="text-center py-12">
              <div className="text-red-500 mb-4">
                <p>Unable to load products at the moment.</p>
                <p className="text-sm">Please try again later.</p>
              </div>
              <Link href="/products">
                <Button>View All Products</Button>
              </Link>
            </div>
          ) : (
            <>
              <ProductGrid products={featuredProducts} />
              <div className="text-center mt-12">
                <Link href="/products">
                  <Button size="lg" variant="outline">
                    View All Products
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Shop by Category
            </h2>
            <p className="text-xl text-gray-600">
              Find exactly what you're looking for
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['electronics', 'jewelery', "men's clothing", "women's clothing"].map((category) => (
              <Link key={category} href={`/products?category=${encodeURIComponent(category)}`}>
                <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <h3 className="font-semibold capitalize">{category}</h3>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Shopping?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of satisfied customers who trust RevoShop for their shopping needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Start Shopping
              </Button>
            </Link>
            <Link href="/faq">
              <Button size="lg" variant="outline" className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}