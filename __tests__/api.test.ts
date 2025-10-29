// Simple API tests to verify the structure and types
import { Product, User } from '@/lib/api'

describe('API Types and Structure', () => {
  describe('Product Type', () => {
    it('should have correct product structure', () => {
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

      expect(mockProduct.id).toBe(1)
      expect(mockProduct.title).toBe('Test Product')
      expect(mockProduct.price).toBe(29.99)
      expect(mockProduct.category).toBe('electronics')
      expect(mockProduct.description).toBe('A test product')
      expect(mockProduct.image).toBe('https://example.com/image.jpg')
      expect(mockProduct.rating.rate).toBe(4.5)
      expect(mockProduct.rating.count).toBe(10)
    })
  })

  describe('User Type', () => {
    it('should have correct user structure', () => {
      const mockUser: User = {
        id: 1,
        email: 'test@example.com',
        username: 'testuser',
        password: 'password123',
        name: {
          firstname: 'Test',
          lastname: 'User'
        },
        address: {
          city: 'Test City',
          street: '123 Test St',
          number: 123,
          zipcode: '12345',
          geolocation: {
            lat: '0.0',
            long: '0.0'
          }
        },
        phone: '123-456-7890'
      }

      expect(mockUser.id).toBe(1)
      expect(mockUser.email).toBe('test@example.com')
      expect(mockUser.username).toBe('testuser')
      expect(mockUser.password).toBe('password123')
      expect(mockUser.name.firstname).toBe('Test')
      expect(mockUser.name.lastname).toBe('User')
      expect(mockUser.address.city).toBe('Test City')
      expect(mockUser.address.street).toBe('123 Test St')
      expect(mockUser.address.number).toBe(123)
      expect(mockUser.address.zipcode).toBe('12345')
      expect(mockUser.address.geolocation.lat).toBe('0.0')
      expect(mockUser.address.geolocation.long).toBe('0.0')
      expect(mockUser.phone).toBe('123-456-7890')
    })
  })

  describe('API Functions Exist', () => {
    it('should have productsApi functions', async () => {
      const { productsApi } = await import('@/lib/api')
      
      expect(typeof productsApi.getAll).toBe('function')
      expect(typeof productsApi.getById).toBe('function')
      expect(typeof productsApi.getCategories).toBe('function')
      expect(typeof productsApi.create).toBe('function')
      expect(typeof productsApi.update).toBe('function')
      expect(typeof productsApi.delete).toBe('function')
    })

    it('should have usersApi functions', async () => {
      const { usersApi } = await import('@/lib/api')
      
      expect(typeof usersApi.getAll).toBe('function')
      expect(typeof usersApi.getById).toBe('function')
      expect(typeof usersApi.login).toBe('function')
    })
  })
})