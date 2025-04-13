"use client"

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { trackEvent, analyticsEvents } from '@/utils/analytics';
import { toast } from "@/components/ui/use-toast"

interface ContactFormProps {
  onClick: () => void;
}

export default function ContactForm({ onClick }: ContactFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleWhatsAppContact = (e: React.MouseEvent) => {
    e.preventDefault();
    trackEvent(analyticsEvents.WHATSAPP_CLICK, {
      source: 'contact_form'
    });
    const message = `Hello, I'm ${name} from ${companyName}. I'd like to learn more about your products.`;
    const whatsappUrl = `https://wa.me/+51969877761?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact-form" className="py-24 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-200 rounded-2xl p-8 md:p-12 shadow-lg">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Ready to Unlock Peru's Freshest Exports?
              </h2>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                Positioned as your premier partner in Peruvian fruit exports, we bring unparalleled expertise and a dedication to excellence. Our comprehensive understanding of global market dynamics allows us to craft bespoke supply solutions that precisely match your unique business requirements.
              </p>
            </div>

            <form className="max-w-md mx-auto space-y-4">
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
                placeholder="Email"
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
              
              <Textarea
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-foreground min-h-[100px]"
                required
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
                  Chat with us on WhatsApp
                </Button>

                <Button 
                  variant="outline"
                  size="lg" 
                  className="w-full"
                  onClick={async (e) => {
                    e.preventDefault();
                    if (!name || !email || !message) {
                      toast({
                        title: "Error",
                        description: "Please fill in all required fields",
                        variant: "destructive"
                      });
                      return;
                    }
                    
                    setIsSubmitting(true);
                    try {
                      const response = await fetch('/api/send-email', {
                        method: 'POST',
                        headers: {
                          'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                          name,
                          email,
                          companyName,
                          message
                        }),
                      });

                      if (!response.ok) throw new Error('Failed to send email');

                      toast({
                        title: "Success",
                        description: "Your message has been sent successfully!",
                      });

                      // Clear form
                      setName('');
                      setEmail('');
                      setCompanyName('');
                      setMessage('');
                    } catch (error) {
                      toast({
                        title: "Error",
                        description: "Failed to send message. Please try again later.",
                        variant: "destructive"
                      });
                    } finally {
                      setIsSubmitting(false);
                    }
                  }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Contact Us"}
                </Button>
              </div>

              <p className="text-xs text-center text-foreground/50 mt-4">
                By reaching out to us, you acknowledge and agree to our Terms of Service and Privacy Policy.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
