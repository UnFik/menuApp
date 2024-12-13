'use client'

import { useState } from 'react'
import { Sidebar } from './sidebar'
import { ProductGrid } from './product-grid'
import {  FilterOptions } from '@/lib/products'
import { ProductTypeSelect } from '@/elysia/products/product.schema'
import { CategoryTypeSelect, ProductWithCategory } from '@/types'

interface ProductPageProps {
    products: ProductWithCategory[]
    categories: CategoryTypeSelect[]
}

export default function ProductPage( { products, categories }: ProductPageProps) {
  console.log(products);
  const [filters, setFilters] = useState<FilterOptions>({
    category: [],
    price: { min: 0, max: 150000 },
    rating: 0,
  })

  const filteredProducts = products.filter((product) => {
    const categoryId = typeof product.products.categoryId === 'string' 
      ? parseInt(product.products.categoryId) 
      : product.products.categoryId;
    
 

    const categoryMatch = filters.category.length === 0 || filters.category.includes(categoryId);
    const priceMatch = product.products.price >= filters.price.min && 
                      product.products.price <= filters.price.max;
    const ratingMatch = product.products.rating >= filters.rating;

    return categoryMatch && priceMatch && ratingMatch;
  })

  console.log('Filtered Products Length:', filteredProducts.length);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Our Products</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <Sidebar filters={filters} setFilters={setFilters} categories={categories} />
        <ProductGrid products={filteredProducts} />
      </div>
    </div>
  )
}

