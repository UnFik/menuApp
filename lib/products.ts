export interface FilterOptions {
    category: number[]
    price: {
      min: number
      max: number
    }
    rating: number
  }