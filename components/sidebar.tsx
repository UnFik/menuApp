"use client"

import { Slider } from '@/components/ui/slider'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { FilterOptions } from '@/lib/products'
import {  CategoryTypeSelect } from '@/types'

interface SidebarProps {
  categories: CategoryTypeSelect[]
  filters: FilterOptions
  setFilters: React.Dispatch<React.SetStateAction<FilterOptions>>
}

export function Sidebar({ filters, setFilters, categories }: SidebarProps) {
  const handleCategoryChange = (categoryId: number) => {
    setFilters((prev) => ({
      ...prev,
      category: prev.category.includes(categoryId)
        ? prev.category.filter((c) => c !== categoryId)
        : [...prev.category, categoryId],
    }))
  }

  const handlePriceChange = (value: number[]) => {
    setFilters((prev) => ({
      ...prev,
      price: { min: value[0], max: value[1] },
    }))
  }

  const handleRatingChange = (value: number[]) => {
    setFilters((prev) => ({
      ...prev,
      rating: value[0],
    }))
  }

  return (
    <div className="w-full md:w-64 space-y-6">
      <div>
        <h2 className="text-lg font-semibold mb-2">Categories</h2>
        {categories.map((category) => (
          <div key={category.name} className="flex items-center space-x-2 space-y-2">
            <Checkbox
              id={category.id.toString()}
              checked={filters.category.includes(category.id)}
              onCheckedChange={() => handleCategoryChange(category.id)}
            />
            <Label htmlFor={category.id.toString()}>{category.name}</Label>
          </div>
        ))}
      </div>
      <div>
        <h2 className="text-lg font-semibold mb-2">Price Range</h2>
        <Slider
          min={0}
          max={150000}
          step={10}
          value={[filters.price.min, filters.price.max]}
          onValueChange={handlePriceChange}
        />
        <div className="flex justify-between mt-2">
          <span>${filters.price.min}</span>
          <span>${filters.price.max}</span>
        </div>
      </div>
      <div>
        <h2 className="text-lg font-semibold mb-2">Minimum Rating</h2>
        <Slider
          min={0}
          max={5}
          step={0.5}
          value={[filters.rating]}
          onValueChange={handleRatingChange}
        />
        <div className="mt-2">
          <span>{filters.rating} stars and above</span>
        </div>
      </div>
    </div>
  )
}

