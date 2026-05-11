'use client';

import Link from 'next/link';
import { useState } from 'react';

const contactMethods = [
  {
    label: 'Email',
    value: 'matthew@matthewsmithwebdesign.com',
    href: 'mailto:matthew@matthewsmithwebdesign.com',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    value: 'Connect professionally',
    href: 'https://linkedin.com/in/matthewsmithwebdesign/',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    value: 'Check out my code',
    href: 'https://github.com/MatthewSmithwebdesign',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <header className="mb-12">
          <Link href="/" className="text-accent hover:text-accent-hover transition-colors text-sm">&larr; Back to Home</Link>
          <h1 className="text-3xl sm:text-4xl font-bold text-fg mt-4 mb-3">Get in Touch</h1>
          <p className="text-muted text-lg">
            Have a project in mind? Let&apos;s talk about it.
          </p>
        </header>

        <div className="grid gap-8 lg:grid-cols-5">
          {/* Contact methods */}
          <div className="lg:col-span-2 space-y-4">
            {contactMethods.map((method) => (
              <a
                key={method.label}
                href={method.href}
                target={method.href.startsWith('http') ? '_blank' : undefined}
                rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-4 p-4 border border-border bg-card hover:border-accent/50 rounded-xl transition-all group"
                aria-label={method.label}
              >
                <span className="text-accent group-hover:scale-110 transition-transform">
                  {method.icon}
                </span>
                <div>
                  <p className="text-fg font-medium text-sm group-hover:text-accent transition-colors">{method.label}</p>
                  <p className="text-muted text-xs">{method.value}</p>
                </div>
              </a>
            ))}
          </div>

          {/* Form */}
          <div className="lg:col-span-3 border border-border bg-card rounded-2xl p-6">
            <h2 className="text-lg font-bold text-fg mb-5">Send a Message</h2>
            {submitted ? (
              <div className="text-center py-12" role="status" aria-live="polite">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                  <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-fg font-semibold mb-2">Thanks for reaching out!</p>
                <p className="text-muted text-sm">I&apos;ll get back to you soon.</p>
              </div>
            ) : (
              <form
                action={`https://formspree.io/f/${process.env.NEXT_PUBLIC_FORM_ID || 'mbdwqjjn'}`}
                method="POST"
                className="space-y-4"
                onSubmit={() => setSubmitted(true)}
                noValidate
              >
                <div>
                  <label htmlFor="name" className="block text-sm text-muted mb-1.5">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2.5 bg-bg border border-border rounded-xl text-fg placeholder:text-muted/50 focus:border-accent focus:ring-2 focus:ring-accent-ring focus:outline-none transition-all"
                    placeholder="Your name"
                    aria-required="true"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm text-muted mb-1.5">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2.5 bg-bg border border-border rounded-xl text-fg placeholder:text-muted/50 focus:border-accent focus:ring-2 focus:ring-accent-ring focus:outline-none transition-all"
                    placeholder="your@email.com"
                    aria-required="true"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm text-muted mb-1.5">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full px-4 py-2.5 bg-bg border border-border rounded-xl text-fg placeholder:text-muted/50 focus:border-accent focus:ring-2 focus:ring-accent-ring focus:outline-none transition-all resize-none"
                    placeholder="Tell me about your project..."
                    aria-required="true"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-2.5 bg-accent hover:bg-accent-hover text-accent-fg font-medium rounded-xl transition-all hover:scale-[1.02] active:scale-100 shadow-md shadow-accent/25"
                  aria-label="Send message"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="mt-10 p-6 border border-border bg-card rounded-2xl text-center">
          <p className="text-muted mb-3">Prefer a direct approach?</p>
          <a
            href="mailto:matthew@matthewsmithwebdesign.com?subject=Project%20Inquiry"
            className="text-accent hover:text-accent-hover transition-colors font-medium"
          >
            matthew@matthewsmithwebdesign.com
          </a>
        </div>
      </div>
    </div>
  );
}
