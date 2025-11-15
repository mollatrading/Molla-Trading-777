import React from 'react'

export default function ProductCard({ product }){
  return (
    <div className="bg-white rounded shadow overflow-hidden">
      <img src={product.image} alt={product.title} className="w-full h-44 object-cover"/>
      <div className="p-4">
        <h4 className="font-semibold">{product.title}</h4>
        <p className="text-sm text-gray-600">Stock: <span className="font-medium">{product.priceStock}</span> — Retail: <span className="font-medium">{product.priceRetail}</span></p>
        <p className="text-sm mt-2">Colors: {product.colors.join(', ')}</p>
        <div className="mt-3 flex gap-2">
          <a href="https://wa.me/27842685484" target="_blank" rel="noreferrer" className="flex-1 text-center bg-green-500 text-white px-3 py-2 rounded">Order</a>
          <button className="flex-1 text-center border border-gray-200 px-3 py-2 rounded">Details</button>
        </div>
      </div>
    </div>
  )
}
