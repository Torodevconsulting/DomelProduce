"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import ProductModal from '@/components/ProductModal';

const products = [
  { name: 'Avocados', image: '/palta.jpg' },
  { name: 'Blueberries', image: '/blueberries.webp' },
  { name: 'Grapes Red Globe', image: '/grapes.jpg' },
  { name: 'Mangoes Kent, Edward and Haden', image: '/mangos.png' },
  { name: 'Tahiti Lemons', image: '/lemons.jpg' },
  { name: 'Castile Beans', image: '/beans.jpg' },
  { name: 'Tangerines W Murcot', image: '/tangerines.webp' },
  { name: 'Ginger', image: '/ginger.jpg' },
  { name: 'Onions', image: '/onions.webp' },
  { name: 'Loctao Beans', image: '/loctaobeans.jpg' },
  { name: 'Bananas', image: '/bananas.webp' },
  { name: 'Valencian Oranges', image: '/orange.webp' },
];

export default function ProductsPage() {
  const [selectedProduct, setSelectedProduct] = useState<null | typeof products[0]>(null);

  return (
    <div className="container mx-auto px-4 py-16 pt-20">
      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-center mb-6">
        Our Premium Produce
      </h1>
      <p className="text-center text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
        Explore our diverse catalog of premium fruits and vegetables, sourced from the finest farms and delivered with uncompromising quality.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div key={index} className="group cursor-pointer" onClick={() => setSelectedProduct(product)}>
            <div className="relative aspect-[3/4] overflow-hidden rounded-lg shadow-md">
              <Image 
                src={product.image} 
                alt={product.name} 
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <h2 className="absolute bottom-4 left-4 right-4 text-xl font-semibold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {product.name}
              </h2>
            </div>
          </div>
        ))}
      </div>
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          isOpen={!!selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
}