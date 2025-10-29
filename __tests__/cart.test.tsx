import { renderHook, act } from '@testing-library/react'
import { useCartStore } from '@/store/cartStore'
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

describe('Cart Store', () => {
  beforeEach(() => {
    // Clear localStorage before each test
    localStorage.clear()
    // Reset the store state
    useCartStore.setState({
      items: [],
      totalItems: 0,
      totalPrice: 0
    })
  })

  it('should initialize with empty cart', () => {
    const { result } = renderHook(() => useCartStore())
    
    expect(result.current.items).toEqual([])
    expect(result.current.totalItems).toBe(0)
    expect(result.current.totalPrice).toBe(0)
  })

  it('should add item to cart', () => {
    const { result } = renderHook(() => useCartStore())
    
    act(() => {
      result.current.addItem(mockProduct, 1)
    })
    
    expect(result.current.items).toHaveLength(1)
    expect(result.current.items[0].product).toEqual(mockProduct)
    expect(result.current.items[0].quantity).toBe(1)
    expect(result.current.getTotalItems()).toBe(1)
    expect(result.current.getTotalPrice()).toBe(29.99)
  })

  it('should add multiple quantities of the same item', () => {
    const { result } = renderHook(() => useCartStore())
    
    act(() => {
      result.current.addItem(mockProduct, 2)
    })
    
    expect(result.current.items).toHaveLength(1)
    expect(result.current.items[0].quantity).toBe(2)
    expect(result.current.getTotalItems()).toBe(2)
    expect(result.current.getTotalPrice()).toBe(59.98)
  })

  it('should add different items to cart', () => {
    const { result } = renderHook(() => useCartStore())
    
    const mockProduct2: Product = {
      ...mockProduct,
      id: 2,
      title: 'Test Product 2',
      price: 19.99
    }
    
    act(() => {
      result.current.addItem(mockProduct, 1)
      result.current.addItem(mockProduct2, 2)
    })
    
    expect(result.current.items).toHaveLength(2)
    expect(result.current.getTotalItems()).toBe(3)
    expect(result.current.getTotalPrice()).toBe(69.97) // 29.99 + (19.99 * 2)
  })

  it('should update item quantity', () => {
    const { result } = renderHook(() => useCartStore())
    
    act(() => {
      result.current.addItem(mockProduct, 1)
    })
    
    act(() => {
      result.current.updateQuantity(mockProduct.id, 3)
    })
    
    expect(result.current.items[0].quantity).toBe(3)
    expect(result.current.getTotalItems()).toBe(3)
    expect(result.current.getTotalPrice()).toBe(89.97)
  })

  it('should remove item when quantity is set to 0', () => {
    const { result } = renderHook(() => useCartStore())
    
    act(() => {
      result.current.addItem(mockProduct, 1)
    })
    
    act(() => {
      result.current.updateQuantity(mockProduct.id, 0)
    })
    
    expect(result.current.items).toHaveLength(0)
    expect(result.current.getTotalItems()).toBe(0)
    expect(result.current.getTotalPrice()).toBe(0)
  })

  it('should remove item from cart', () => {
    const { result } = renderHook(() => useCartStore())
    
    act(() => {
      result.current.addItem(mockProduct, 1)
    })
    
    act(() => {
      result.current.removeItem(mockProduct.id)
    })
    
    expect(result.current.items).toHaveLength(0)
    expect(result.current.getTotalItems()).toBe(0)
    expect(result.current.getTotalPrice()).toBe(0)
  })

  it('should clear all items from cart', () => {
    const { result } = renderHook(() => useCartStore())
    
    const mockProduct2: Product = {
      ...mockProduct,
      id: 2,
      title: 'Test Product 2',
      price: 19.99
    }
    
    act(() => {
      result.current.addItem(mockProduct, 1)
      result.current.addItem(mockProduct2, 2)
    })
    
    act(() => {
      result.current.clearCart()
    })
    
    expect(result.current.items).toHaveLength(0)
    expect(result.current.getTotalItems()).toBe(0)
    expect(result.current.getTotalPrice()).toBe(0)
  })

  it('should persist state in localStorage', () => {
    const { result } = renderHook(() => useCartStore())
    
    act(() => {
      result.current.addItem(mockProduct, 2)
    })
    
    // Check if data is stored in localStorage
    const storedData = localStorage.getItem('cart-storage')
    expect(storedData).toBeTruthy()
    
    const parsedData = JSON.parse(storedData!)
    expect(parsedData.state.items).toHaveLength(1)
    expect(parsedData.state.items[0].product).toEqual(mockProduct)
    expect(parsedData.state.items[0].quantity).toBe(2)
  })
})