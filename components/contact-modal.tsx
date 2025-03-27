import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import { Button } from "./ui/button";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Contáctanos</DialogTitle>
          <DialogDescription>
            Completa el formulario y nos pondremos en contacto contigo pronto.
          </DialogDescription>
        </DialogHeader>
        {/* Add your contact form here */}
        <form className="space-y-4">
          {/* Add form fields here */}
          <Button type="submit">Enviar</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;