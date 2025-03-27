"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-24 pb-12">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Sobre Nosotros
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Comprometidos con la excelencia en la producción y distribución de frutas frescas
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-green-50 dark:bg-green-900/10">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Nuestra Misión
              </h2>
              <p className="text-gray-500 dark:text-gray-400">
                Proporcionar frutas frescas y de alta calidad a nuestros clientes, manteniendo los más altos estándares de seguridad alimentaria y sostenibilidad en nuestras operaciones.
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Nuestra Visión
              </h2>
              <p className="text-gray-500 dark:text-gray-400">
                Ser líderes en la industria frutícola, reconocidos por nuestra calidad, innovación y compromiso con la sostenibilidad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-12">
            Nuestros Valores
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="p-4 bg-green-100 rounded-full dark:bg-green-900/20">
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
              <h3 className="text-xl font-bold">Calidad</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Nos comprometemos a ofrecer productos de la más alta calidad.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="p-4 bg-green-100 rounded-full dark:bg-green-900/20">
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
              <h3 className="text-xl font-bold">Innovación</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Buscamos constantemente nuevas formas de mejorar nuestros procesos.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="p-4 bg-green-100 rounded-full dark:bg-green-900/20">
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
              <h3 className="text-xl font-bold">Sostenibilidad</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Trabajamos respetando el medio ambiente y las comunidades locales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-green-50 dark:bg-green-900/10">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-12">
            Nuestras Certificaciones
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            <Image
              src="/globalgap.png"
              alt="GlobalGAP Certification"
              width={150}
              height={150}
              className="object-contain"
            />
            <Image
              src="/haccp.png"
              alt="HACCP Certification"
              width={150}
              height={150}
              className="object-contain"
            />
            <Image
              src="/iso22000.png"
              alt="ISO 22000 Certification"
              width={150}
              height={150}
              className="object-contain"
            />
            <Image
              src="/organic.png"
              alt="Organic Certification"
              width={150}
              height={150}
              className="object-contain"
            />
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
              <Button className="bg-green-300 hover:bg-green-400 text-black">
                Contactar Ahora
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}