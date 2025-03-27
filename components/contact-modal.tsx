import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] ">
        <DialogHeader>
          <DialogTitle>Contact Us</DialogTitle>
          <DialogDescription>
            Fill out the form below and we'll get back to you soon.
          </DialogDescription>
        </DialogHeader>
        <form className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Input id="name" placeholder="Your Name" className="col-span-4" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Input id="email" type="email" placeholder="Your Email" className="col-span-4" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Input id="company" placeholder="Company Name" className="col-span-4" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Textarea id="message" placeholder="Your Message" className="col-span-4" />
          </div>
          <Button type="submit" className="w-full bg-green-300 hover:bg-green-400 text-black">Send Message</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;