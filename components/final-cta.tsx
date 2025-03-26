"use client"

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"

export default function FinalCTA() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [companyName, setCompanyName] = useState('')

  const handleWhatsAppContact = () => {
    const message = `Hola, me gustaría obtener información sobre las campañas de exportación de Domel Produce:

Nombre: ${name}
Empresa: ${companyName}
Email: ${email}

Por favor, contáctame para más detalles.`

    const whatsappUrl = `https://wa.me/+51941963705?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <section id="final-cta" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br bg-gray-200 rounded-2xl p-8 md:p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Explora Nuestras Campañas de Exportación
              </h2>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                Estamos listos para convertirnos en tu proveedor estratégico de frutas premium del Perú. Nuestra amplia experiencia en exportación y nuestro compromiso con la calidad nos permite ofrecer soluciones personalizadas que se adaptan perfectamente a tus necesidades de suministro
              </p>
            </div>

            <form className="max-w-md mx-auto space-y-4">
              <input
                type="text"
                placeholder="Nombre Completo"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-foreground"
                required
              />
              <input
                type="email"
                placeholder="Email Corporativo"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-foreground"
                required
              />
              <input
                type="text"
                placeholder="Nombre de la Empresa"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-foreground"
              />
              
              <div className="flex flex-col space-y-4">
                <Button 
                  size="lg" 
                  className="w-full bg-green-400 hover:bg-green-600 py-6 h-auto text-lg text-black"
                  onClick={handleWhatsAppContact}
                  disabled={!name || !email}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                    <path d="M17.5 19H9a7 7 0 1 1 0-14h9a4 4 0 0 1 4 4v3.5a2.5 2.5 0 0 1-2.5 2.5H9"/>
                    <path d="M9 13l4-4-4-4"/>
                  </svg>
                  Contáctanos por WhatsApp
                </Button>

                <Button 
                  variant="outline"
                  size="lg" 
                  className="w-full"
                >
                  Solicitar Información
                </Button>
              </div>

              <p className="text-xs text-center text-foreground/50 mt-4">
                Al contactarnos, aceptas nuestros Términos de Servicio y Política de Privacidad
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
