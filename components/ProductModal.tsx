import React from 'react';
import Image from 'next/image';

interface ProductModalProps {
  product: { name: string; image: string };
  isOpen: boolean;
  onClose: () => void;
}

export default function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full">
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-4">{product.name} Export Presentation</h2>
          <div className="relative aspect-video mb-4">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover rounded"
            />
          </div>
          <p className="mb-4">Export details and specifications for {product.name} go here.</p>
          <button
            onClick={onClose}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}