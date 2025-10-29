'use client';

import { useState } from 'react';
import { Product } from '@/lib/api';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Trash2, Edit, Save, X } from 'lucide-react';

interface AdminFormProps {
  product?: Product;
  onSubmit: (product: Partial<Product>) => void;
  onDelete?: (id: number) => void;
  onCancel?: () => void;
  categories: string[];
}

export const AdminForm = ({ product, onSubmit, onDelete, onCancel, categories }: AdminFormProps) => {
  const [formData, setFormData] = useState({
    title: product?.title || '',
    price: product?.price || 0,
    category: product?.category || '',
    description: product?.description || '',
    image: product?.image || '',
  });

  const [isEditing, setIsEditing] = useState(!product);

  const handleChange = (field: string, value: string | number) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleDelete = () => {
    if (product && onDelete) {
      onDelete(product.id);
    }
  };

  if (!isEditing && product) {
    return (
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>{product.title}</CardTitle>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsEditing(true)}
              >
                <Edit className="h-4 w-4" />
              </Button>
              <Button
                variant="destructive"
                size="sm"
                onClick={handleDelete}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label>Price</Label>
            <p className="text-lg font-semibold">${product.price.toFixed(2)}</p>
          </div>
          <div>
            <Label>Category</Label>
            <p>{product.category}</p>
          </div>
          <div>
            <Label>Description</Label>
            <p className="text-sm text-gray-600">{product.description}</p>
          </div>
          <div>
            <Label>Image URL</Label>
            <p className="text-sm text-gray-600 break-all">{product.image}</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>
            {product ? 'Edit Product' : 'Add New Product'}
          </CardTitle>
          {product && (
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsEditing(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              value={formData.title}
              onChange={(e) => handleChange('title', e.target.value)}
              required
            />
          </div>

          <div>
            <Label htmlFor="price">Price</Label>
            <Input
              id="price"
              type="number"
              step="0.01"
              min="0"
              value={formData.price}
              onChange={(e) => handleChange('price', parseFloat(e.target.value))}
              required
            />
          </div>

          <div>
            <Label htmlFor="category">Category</Label>
            <Select
              value={formData.category}
              onValueChange={(value) => handleChange('category', value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => handleChange('description', e.target.value)}
              rows={4}
              required
            />
          </div>

          <div>
            <Label htmlFor="image">Image URL</Label>
            <Input
              id="image"
              type="url"
              value={formData.image}
              onChange={(e) => handleChange('image', e.target.value)}
              required
            />
          </div>

          <div className="flex gap-2">
            <Button type="submit" className="flex-1">
              <Save className="h-4 w-4 mr-2" />
              {product ? 'Update' : 'Create'} Product
            </Button>
            {onCancel && (
              <Button type="button" variant="outline" onClick={onCancel}>
                Cancel
              </Button>
            )}
          </div>
        </form>
      </CardContent>
    </Card>
  );
};