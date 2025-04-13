import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-background bg-gray-200 border-t border-border/10">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-foreground">Domel Produce</h3>
            <p className="text-sm text-foreground/70 leading-relaxed">Sabor Global, Calidad Sin Fronteras</p>
            <div className="flex space-x-4 pt-4">
              <a href="#" className="text-foreground/70 hover:text-foreground transition-colors duration-200">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-foreground/70 hover:text-foreground transition-colors duration-200">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-foreground/70 hover:text-foreground transition-colors duration-200">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
            <nav>
              <ul className="space-y-3">
                <li><Link href="/" className="text-sm text-foreground/70 hover:text-foreground transition-colors duration-200">Home</Link></li>
                <li><Link href="#about" className="text-sm text-foreground/70 hover:text-foreground transition-colors duration-200">About Us</Link></li>
                <li><Link href="#products" className="text-sm text-foreground/70 hover:text-foreground transition-colors duration-200">Products</Link></li>
                <li><Link href="#contact" className="text-sm text-foreground/70 hover:text-foreground transition-colors duration-200">Contact</Link></li>
                <li><Link href="/privacy-policy" className="text-sm text-foreground/70 hover:text-foreground transition-colors duration-200" target="_blank" rel="noopener noreferrer">Privacy Policy</Link></li>
              </ul>
            </nav>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Contact Info</h4>
            <address className="not-italic text-sm text-foreground/70 space-y-2">
              <p>Lima, Peru</p>
              <p>Email: info@domelproduce.com</p>
              <p>Phone: +51 123 456 789</p>
            </address>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border/10 text-center space-y-2">
          <p className="text-sm text-foreground/70">Domel Produce. All rights reserved.</p>
          <p className="text-sm text-foreground/70">&copy; {new Date().getFullYear()} Toro Developments Consulting S.A</p>
        </div>
      </div>
    </footer>
  );
}