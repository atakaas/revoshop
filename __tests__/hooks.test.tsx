import { renderHook } from '@testing-library/react'
import { useCart } from '@/hooks/useCart'
import { Product } from '@/lib/api'

const mockProduct: Product = {
  id: 1,
  title: 'Test Product',
  price: 29.99,
  category: 'electronics',
  description: 'A test product',
  image: 'https://example.com/image.jpg',
  rating: {
    rate: 4.5,
    count: 10
  }
}

describe('useCart Hook', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('should return cart state and actions', () => {
    const { result } = renderHook(() => useCart())
    
    // Initially cart should be empty
    expect(result.current.items).toHaveLength(0)
    expect(result.current.totalItems).toBe(0)
    expect(result.current.totalPrice).toBe(0)
  })

  it('should provide addToCart function', () => {
    const { result } = renderHook(() => useCart())
    
    expect(typeof result.current.addToCart).toBe('function')
  })

  it('should provide removeFromCart function', () => {
    const { result } = renderHook(() => useCart())
    
    expect(typeof result.current.removeFromCart).toBe('function')
  })

  it('should provide updateItemQuantity function', () => {
    const { result } = renderHook(() => useCart())
    
    expect(typeof result.current.updateItemQuantity).toBe('function')
  })

  it('should provide clearAllItems function', () => {
    const { result } = renderHook(() => useCart())
    
    expect(typeof result.current.clearAllItems).toBe('function')
  })
})