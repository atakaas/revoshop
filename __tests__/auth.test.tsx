import { renderHook, act } from '@testing-library/react'
import { useAuthStore } from '@/store/authStore'
import { User } from '@/lib/api'

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

describe('Auth Store', () => {
  beforeEach(() => {
    // Clear localStorage before each test
    localStorage.clear()
  })

  it('should initialize with empty state', () => {
    const { result } = renderHook(() => useAuthStore())
    
    expect(result.current.user).toBeNull()
    expect(result.current.token).toBeNull()
    expect(result.current.isAuthenticated).toBe(false)
  })

  it('should login user successfully', () => {
    const { result } = renderHook(() => useAuthStore())
    const mockToken = 'mock-token'
    
    act(() => {
      result.current.login(mockUser, mockToken)
    })
    
    expect(result.current.user).toEqual(mockUser)
    expect(result.current.token).toBe(mockToken)
    expect(result.current.isAuthenticated).toBe(true)
  })

  it('should logout user successfully', () => {
    const { result } = renderHook(() => useAuthStore())
    const mockToken = 'mock-token'
    
    // First login
    act(() => {
      result.current.login(mockUser, mockToken)
    })
    
    expect(result.current.isAuthenticated).toBe(true)
    
    // Then logout
    act(() => {
      result.current.logout()
    })
    
    expect(result.current.user).toBeNull()
    expect(result.current.token).toBeNull()
    expect(result.current.isAuthenticated).toBe(false)
  })

  it('should update user information', () => {
    const { result } = renderHook(() => useAuthStore())
    const mockToken = 'mock-token'
    
    act(() => {
      result.current.login(mockUser, mockToken)
    })
    
    const updatedData = {
      email: 'updated@example.com'
    }
    
    act(() => {
      result.current.updateUser(updatedData)
    })
    
    expect(result.current.user?.email).toBe('updated@example.com')
    expect(result.current.user?.username).toBe(mockUser.username) // Other fields remain unchanged
  })

  it('should persist state in localStorage', () => {
    const { result } = renderHook(() => useAuthStore())
    const mockToken = 'mock-token'
    
    act(() => {
      result.current.login(mockUser, mockToken)
    })
    
    // Check if data is stored in localStorage
    const storedData = localStorage.getItem('auth-storage')
    expect(storedData).toBeTruthy()
    
    const parsedData = JSON.parse(storedData!)
    expect(parsedData.state.user).toEqual(mockUser)
    expect(parsedData.state.token).toBe(mockToken)
    expect(parsedData.state.isAuthenticated).toBe(true)
  })
})