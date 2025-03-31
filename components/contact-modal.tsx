import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [message, setMessage] = useState('');

  const handleWhatsAppContact = () => {
    const whatsappMessage = `Hola, me gustaría obtener información sobre las campañas de exportación de Domel Produce:

Nombre: ${name}
Empresa: ${companyName}
Email: ${email}

Mensaje: ${message}

Por favor, contáctame para que me puedas compartir la información.`;

    const whatsappUrl = `https://wa.me/+34632648270?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Contact Us</DialogTitle>
          <DialogDescription>
            Fill out the form below and we'll get back to you soon.
          </DialogDescription>
        </DialogHeader>
        <form className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Input id="name" placeholder="Your Name" className="col-span-4" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Input id="email" type="email" placeholder="Your Email" className="col-span-4" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Input id="company" placeholder="Company Name" className="col-span-4" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Textarea id="message" placeholder="Your Message" className="col-span-4" value={message} onChange={(e) => setMessage(e.target.value)} />
          </div>
          <Button type="submit" className="w-full bg-green-300 hover:bg-green-400 text-black">Send Message</Button>
        </form>
        <div className="mt-4">
          <Button 
            type="button" 
            className="w-full bg-green-500 hover:bg-green-600 text-white"
            onClick={handleWhatsAppContact}
          >
            Chat via WhatsApp
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;