"use client"

import React from 'react'

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 pt-24 pb-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-12 text-foreground">Privacy Policy</h1>
      
      <div className="space-y-8 text-foreground/80">
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-foreground">Introduction</h2>
          <p className="mb-4">
            At Domel Produce, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-foreground">Information We Collect</h2>
          <p className="mb-4">We collect information that you voluntarily provide to us when you:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Fill out forms on our website</li>
            <li>Subscribe to our newsletter</li>
            <li>Request information about our products</li>
            <li>Contact us via WhatsApp or email</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-foreground">How We Use Your Information</h2>
          <p className="mb-4">We use the information we collect to:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Respond to your inquiries and fulfill your requests</li>
            <li>Send you updates about our products and services</li>
            <li>Improve our website and services</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-foreground">Cookies and Tracking Technologies</h2>
          <p className="mb-4">
            We use cookies and similar tracking technologies to track activity on our website and improve your experience. You can control cookie preferences through your browser settings.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-foreground">Information Sharing</h2>
          <p className="mb-4">
            We do not sell or rent your personal information to third parties. We may share your information with:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Service providers who assist in our operations</li>
            <li>Legal authorities when required by law</li>
            <li>Business partners with your consent</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-foreground">Data Security</h2>
          <p className="mb-4">
            We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-foreground">Your Rights</h2>
          <p className="mb-4">You have the right to:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Access your personal information</li>
            <li>Correct inaccurate information</li>
            <li>Request deletion of your information</li>
            <li>Opt-out of marketing communications</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-foreground">Contact Us</h2>
          <p className="mb-4">
            If you have questions about this Privacy Policy or our privacy practices, please contact us at:
          </p>
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
            <p>Domel Produce</p>
            <p>Email: info@domelproduce.com</p>
            <p>WhatsApp: +51 969 877 761</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-foreground">Updates to This Policy</h2>
          <p className="mb-4">
            We may update this Privacy Policy from time to time. The updated version will be indicated by an updated "Last revised" date and the updated version will be effective as soon as it is accessible.
          </p>
        </section>
      </div>
    </div>
  )
}