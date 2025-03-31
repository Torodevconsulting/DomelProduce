import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-background bg-gray-200 border-t border-border/10">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h3 className="text-lg font-bold text-foreground mb-2">Domel Produce</h3>
            <p className="text-sm text-foreground/70">Sabor Global, Calidad Sin Fronteras</p>
          </div>
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h4 className="text-sm font-semibold text-foreground mb-2">Quick Links</h4>
            <nav>
              <ul className="space-y-2">
                <li><Link href="/" className="text-sm text-foreground/70 hover:text-foreground">Home</Link></li>
                <li><Link href="#about" className="text-sm text-foreground/70 hover:text-foreground">About Us</Link></li>
                <li><Link href="#products" className="text-sm text-foreground/70 hover:text-foreground">Products</Link></li>
                <li><Link href="#contact" className="text-sm text-foreground/70 hover:text-foreground">Contact</Link></li>
              </ul>
            </nav>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-sm font-semibold text-foreground mb-2">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-foreground/70 hover:text-foreground">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-foreground/70 hover:text-foreground">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-foreground/70 hover:text-foreground">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border/10 text-center">
          <p className="text-sm text-foreground/70">&copy; {new Date().getFullYear()} Domel Produce. All rights reserved.</p>
          <p className="text-sm text-foreground/70">Lima, Peru.</p>
        </div>
      </div>
    </footer>
  );
}