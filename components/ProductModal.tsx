import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import Image from 'next/image';

// Define product varieties and their availability
const productVarieties = {
  'Avocados': {
    'Hass': { months: [true, true, true, true, true, true, true, true, false, false, false, false] },
    'Fuerte': { months: [true, true, true, true, true, false, false, false, false, false, false, false] },
    'Zutano': { months: [false, false, false, true, true, true, true, false, false, false, false, false] },
  },
  'Grapes Red Globe': {
    'Flame Seedless': { months: [false, false, false, false, false, false, false, false, false, false, true, true] },
    'Thompson Seedless': { months: [true, false, false, false, false, false, false, false, false, false, true, true] },
    'Sugraone Seedless': { months: [true, false, false, false, false, false, false, false, false, false, true, true] },
    'Crimson Seedless': { months: [true, false, false, false, false, false, false, false, false, false, true, true] },
    'Arra 15 Seedless': { months: [true, false, false, false, false, false, false, false, false, false, true, true] },
    'Red Globe': { months: [true, false, false, false, false, false, false, false, false, true, true, true] },
  },
  'Mangoes Kent, Edward and Haden': {
    'Kent': { months: [true, true, true, false, false, false, false, false, false, false, false, true] },
    'Haden': { months: [true, true, true, false, false, false, false, false, false, false, false, true] },
    'Edward': { months: [true, true, true, false, false, false, false, false, false, false, false, true] },
  },
  'Tahiti Lemons': {
    'Tahiti': { months: [true, true, true, true, true, true, true, true, true, true, true, true] },
    'Persa': { months: [true, true, true, true, true, true, true, true, true, true, true, true] },
  },
  'Tangerines W Murcot': {
    'Satsuma Okitsu': { months: [false, false, true, true, false, false, false, false, false, false, false, false] },
    'Satsuma Owari': { months: [false, false, false, false, true, true, false, false, false, false, false, false] },
    'W Murcott': { months: [false, false, false, false, false, true, true, true, false, false, false, false] },
  },
};

// Default availability for products without specific varieties (all year)
const defaultAvailability = { months: Array(12).fill(true) };

const monthNames = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Set', 'Oct', 'Nov', 'Dic'];

interface ProductModalProps {
  product: {
    name: string;
    image: string;
  };
  isOpen: boolean;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, isOpen, onClose }) => {
  // Check if this product has varieties defined
  const hasVarieties = Object.keys(productVarieties).includes(product.name);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[900px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">{product.name}</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-1 gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Image 
                src={product.image} 
                alt={product.name} 
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Product Description</h3>
              <p className="text-gray-600 mb-6">
                Premium quality {product.name.toLowerCase()} sourced from the finest farms in Peru. 
                Our rigorous quality control ensures you receive only the best produce.
              </p>
            </div>
          </div>
          
          <div className="w-full">
            <h3 className="text-xl font-semibold mb-4">Availability Calendar</h3>
            
            {hasVarieties ? (
              // Calendar for products with varieties
              <div className="overflow-x-auto pb-2">
                <div className="border rounded-lg overflow-hidden w-full min-w-[800px]">
                  <div className="grid grid-cols-[1.5fr_repeat(12,1fr)] bg-gray-100">
                    <div className="p-2 font-semibold"></div>
                    {monthNames.map((month, idx) => (
                      <div key={idx} className="p-2 text-center font-semibold">{month}</div>
                    ))}
                  </div>
                  
                  {Object.entries(productVarieties[product.name as keyof typeof productVarieties]).map(([variety, data], idx) => (
                    <div key={idx} className="grid grid-cols-[1.5fr_repeat(12,1fr)] border-t">
                      <div className="p-2 font-semibold">{variety}</div>
                      {data.months.map((available, monthIdx) => (
                        <div key={monthIdx} className="p-2 flex justify-center items-center">
                          <div className={`w-6 h-6 rounded-md ${available ? 'bg-green-400' : 'bg-green-100'}`}></div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              // Standard calendar for products without varieties (all year availability)
              <div className="overflow-x-auto pb-2">
                <div className="border rounded-lg overflow-hidden w-full min-w-[800px]">
                  <div className="grid grid-cols-[1.5fr_repeat(12,1fr)] bg-gray-100">
                    <div className="p-2 font-semibold"></div>
                    {monthNames.map((month, idx) => (
                      <div key={idx} className="p-2 text-center font-semibold">{month}</div>
                    ))}
                  </div>
                  
                  <div className="grid grid-cols-[1.5fr_repeat(12,1fr)] border-t">
                    <div className="p-2 font-semibold">{product.name}</div>
                    {defaultAvailability.months.map((available, idx) => (
                      <div key={idx} className="p-2 flex justify-center items-center">
                        <div className={`w-6 h-6 rounded-md ${available ? 'bg-green-400' : 'bg-green-100'}`}></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductModal;