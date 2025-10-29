import { NextRequest, NextResponse } from 'next/server';
import { productsApi } from '@/lib/api';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    
    let products;
    if (category) {
      products = await productsApi.getByCategory(category);
    } else {
      products = await productsApi.getAll();
    }
    
    return NextResponse.json(products);
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch products' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const productData = await request.json();
    
    // Validate required fields
    const requiredFields = ['title', 'price', 'category', 'description', 'image'];
    for (const field of requiredFields) {
      if (!productData[field]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }
    
    const newProduct = await productsApi.create(productData);
    
    return NextResponse.json(newProduct, { status: 201 });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Failed to create product' },
      { status: 500 }
    );
  }
}