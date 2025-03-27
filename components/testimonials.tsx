"use client";
import { useState } from 'react';
import { ExportCalendarModal } from './export-calendar-modal';
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from 'next/image';

export default function Testimonials() {
  const [isOpen, setIsOpen] = useState(false);

  const images = [
    '/domelmangoperation.jpg',
    '/domelproduceoperation.jpg',
    '/lemonprocessing.jpg',
    '/mangocrop.jpg',
    '/mangocroping.jpg',
  ];

  return (
    <section id="testimonials" className="py-24 bg-gray-200">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-6">Backed by our customers experience</h2>
          <p className="text-xl text-center text-foreground/70 mb-16 max-w-3xl mx-auto">
          +1000 successful international export programs. 
          </p>

          {/* Carousel */}
          <div className="mb-16">
            <Carousel className="w-full">
              <CarouselContent>
                {images.map((src, index) => (
                  <CarouselItem key={index}>
                    <div className="h-[400px] w-full relative overflow-hidden rounded-lg">
                      <Image 
                        src={src} 
                        alt={`Product ${index + 1}`} 
                        fill
                        style={{ objectFit: 'cover' }}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>
          </div>

          {/* Case study preview */}
          <div className="mt-16 bg-gradient-to-r from-green-300 to-green-400 rounded-xl overflow-hidden shadow-xl">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text- mb-4">Our Success: Avocado, Mango, and Grape</h3>
                <p className="text-black mb-6">
                Our star products have positioned Domel Produce as a reference in Peruvian fruit export. With revenues of 21 million dollars in 2024 and a clear vision of expansion in the European market, we are your best ally in fruit importation.
                </p>
                <div>
                  <button
                    className="bg-white text-purple-900 px-6 py-2 rounded-lg font-medium hover:bg-blue-50 transition-colors"
                    onClick={() => setIsOpen(true)}
                  >
                    Check our export calendar
                  </button>
                </div>
              </div>
              <div className="hidden md:block">
                <img
                  src="/manzanas.jpg"
                  alt="Case study preview"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ExportCalendarModal open={isOpen} onOpenChange={setIsOpen} />
    </section>
  )
}

