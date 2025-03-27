"use client"

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

interface ContactModalProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
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
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogTrigger asChild>
        <Button variant="outline">Contact Us</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Contact Us</DialogTitle>
        </DialogHeader>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-foreground"
            required
          />
          <input
            type="email"
            placeholder="Bussiness Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-foreground"
            required
          />
          <input
            type="text"
            placeholder="Company Name"
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
              Contact via WhatsApp
            </Button>
          </div>

          <p className="text-xs text-center text-foreground/50 mt-4">
            Al contactarnos, aceptas nuestros Términos de Servicio y Política de Privacidad
          </p>
        </form>
      </DialogContent>
    </Dialog>
  )
}