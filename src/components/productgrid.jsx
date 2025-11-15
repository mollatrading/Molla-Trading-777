import React from 'react'
import ProductCard from './ProductCard'

const products = [
  { id: 1, title: 'Cargo Shorts', priceStock: 'R150', priceRetail: 'R170', colors: ['Black','Khaki','Olive'], image: '/public/assets/product-placeholder.png' },
  { id: 2, title: 'Smocked Long Dress', priceStock: 'R75', priceRetail: 'R90', colors: ['Burgundy','White','Navy'], image: '/public/assets/dress1.png' },
  { id: 3, title: 'Tulle Skirt', priceStock: 'R45', priceRetail: 'R60', colors: ['Black','Burgundy','Navy'], image: '/public/assets/skirt.png' },
  { id: 4, title: 'Two-piece Set', priceStock: 'R125', priceRetail: 'R150', colors: ['Green','Black','Red'], image: '/public/assets/set.png' },
]

export default function ProductGrid(){
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map(p => <ProductCard key={p.id} product={p} />)}
    </div>
  )
}
