"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import ContactModal from "@/components/contact-modal"
import { useState } from "react"

export default function AboutPage() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-24 pb-12">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none p-10">
                ¿Who we are and what's the Domel Produce value to the market?
              </h1>
              <p className="mx-auto w-full text-gray-500 md:text-xl dark:text-gray-400 p-10">
              We're a family company, dedicated to the production of mango, avocado, lemon, ginger, onion, tangerine, orange and grape. Us have international quality certifications, guaranteeing the high quality of our products.
              We are located in the north of Peru, where a wide range of fruits, vegetables and legumes are grown and cared for with great responsibility every day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-200 dark:bg-green-900/10">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Our Mission
              </h2>
              <p className="text-gray-600 dark:text-gray-500">
              Domel Produce is committed to delivering premium quality products to consumers worldwide, fostering strong partnerships with producers and maintaining the highest industry standards in all aspects of our operations.
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Our Vision
              </h2>
              <p className="text-gray-600 dark:text-gray-500">
              To be the global leader in sustainable agricultural product distribution, recognized for our unwavering commitment to quality, innovation, and customer satisfaction, while empowering local producers and contributing to healthier communities worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Reason to Be Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 dark:bg-green-900/10">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
              <Image
                src="/proceso1.jpg"
                alt="Linea de procesamiento de aguacates"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
                  Our Reason to Be
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-lg">
                  At Domel Produce, we're driven by a commitment to deliver premium quality fruits and vegetables while fostering sustainable agriculture and supporting local communities.
                </p>
              </div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-green-100 rounded-lg dark:bg-green-900/20">
                    <svg
                      className="w-6 h-6 text-green-600 dark:text-green-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2">Quality Excellence</h3>
                    <p className="text-gray-600 dark:text-gray-400">We maintain rigorous quality standards throughout our supply chain, ensuring only the finest produce reaches your table.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-green-100 rounded-lg dark:bg-green-900/20">
                    <svg
                      className="w-6 h-6 text-green-600 dark:text-green-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2">Sustainable Practices</h3>
                    <p className="text-gray-600 dark:text-gray-400">Our commitment to environmental stewardship ensures responsible farming practices and resource conservation.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-green-100 rounded-lg dark:bg-green-900/20">
                    <svg
                      className="w-6 h-6 text-green-600 dark:text-green-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2">Innovation Leadership</h3>
                    <p className="text-gray-600 dark:text-gray-400">We pioneer advanced agricultural technologies and practices to enhance productivity and product quality while setting industry standards.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-green-100 rounded-lg dark:bg-green-900/20">
                    <svg
                      className="w-6 h-6 text-green-600 dark:text-green-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2">Global Impact</h3>
                    <p className="text-gray-600 dark:text-gray-400">We connect local farmers with international markets, creating sustainable economic opportunities for communities.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* We're going places Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-200 dark:bg-green-900/10">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-8">
            We're going places
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg text-center mb-12 max-w-3xl mx-auto">
            From our fields in Peru to tables around the world, we're proud to export premium quality produce to major markets globally.
          </p>
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border-2 border-green-200 bg-white dark:border-green-900/30 shadow-xl">
            <Image
              src="/mapaexport.png"
              alt="Global Export Operations Map"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="p-6 bg-white dark:bg-green-900/5 rounded-lg shadow-sm border border-green-100 dark:border-green-900/10">
              <h3 className="font-semibold text-xl mb-3 text-green-800 dark:text-green-200">Americas</h3>
              <p className="text-gray-600 dark:text-gray-400">Serving markets in North and South America with fresh produce year-round.</p>
            </div>
            <div className="p-6 bg-white dark:bg-green-900/5 rounded-lg shadow-sm border border-green-100 dark:border-green-900/10">
              <h3 className="font-semibold text-xl mb-3 text-green-800 dark:text-green-200">Europe</h3>
              <p className="text-gray-600 dark:text-gray-400">Strategic partnerships with major European distributors and retailers.</p>
            </div>
            <div className="p-6 bg-white dark:bg-green-900/5 rounded-lg shadow-sm border border-green-100 dark:border-green-900/10">
              <h3 className="font-semibold text-xl mb-3 text-green-800 dark:text-green-200">Asia Pacific</h3>
              <p className="text-gray-600 dark:text-gray-400">Growing presence in Asian markets with premium quality exports.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                ¿Interesado en nuestros productos?
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                Contáctanos para conocer más sobre nuestra oferta de productos y servicios.
              </p>
            </div>
            <div className="space-x-4">
              <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
            </div>
          </div>
        </div>
      </section>

      
    </main>
  )
}