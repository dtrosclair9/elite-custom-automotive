'use client'

import { useState } from 'react'

type FormState = 'idle' | 'loading' | 'success' | 'error'

export default function ContactForm() {
  const [status, setStatus] = useState<FormState>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const res = await fetch('https://formspree.io/f/FORMSPREE_ID', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })

      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        const json = await res.json()
        setErrorMessage(json?.errors?.[0]?.message ?? 'Something went wrong. Please try again.')
        setStatus('error')
      }
    } catch {
      setErrorMessage('Network error. Please check your connection and try again.')
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-display uppercase tracking-wider text-chrome mb-1.5">
            Full Name <span className="text-accent" aria-hidden="true">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="w-full bg-primary border border-primary-light rounded-sm px-4 py-3 text-sm text-chrome placeholder-chrome-dark focus:outline-none focus:border-accent transition"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-display uppercase tracking-wider text-chrome mb-1.5">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className="w-full bg-primary border border-primary-light rounded-sm px-4 py-3 text-sm text-chrome placeholder-chrome-dark focus:outline-none focus:border-accent transition"
            placeholder="(985) 555-1234"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-display uppercase tracking-wider text-chrome mb-1.5">
          Email <span className="text-accent" aria-hidden="true">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="w-full bg-primary border border-primary-light rounded-sm px-4 py-3 text-sm text-chrome placeholder-chrome-dark focus:outline-none focus:border-accent transition"
          placeholder="you@example.com"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="vehicle" className="block text-sm font-display uppercase tracking-wider text-chrome mb-1.5">
            Year / Make / Model
          </label>
          <input
            id="vehicle"
            name="vehicle"
            type="text"
            className="w-full bg-primary border border-primary-light rounded-sm px-4 py-3 text-sm text-chrome placeholder-chrome-dark focus:outline-none focus:border-accent transition"
            placeholder="2023 Ford F-250"
          />
        </div>
        <div>
          <label htmlFor="service" className="block text-sm font-display uppercase tracking-wider text-chrome mb-1.5">
            Service
          </label>
          <select
            id="service"
            name="service"
            className="w-full bg-primary border border-primary-light rounded-sm px-4 py-3 text-sm text-chrome focus:outline-none focus:border-accent transition"
          >
            <option value="">Select a service...</option>
            <option>Lift Kit / Suspension Install</option>
            <option>Engine Rebuild / Swap</option>
            <option>Transmission Service / Swap</option>
            <option>Custom Wheels &amp; Tires</option>
            <option>Auto Repair / Maintenance</option>
            <option>Window Tinting</option>
            <option>Ceramic Coating</option>
            <option>Other / General Inquiry</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-display uppercase tracking-wider text-chrome mb-1.5">
          Tell Us About Your Project <span className="text-accent" aria-hidden="true">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full bg-primary border border-primary-light rounded-sm px-4 py-3 text-sm text-chrome placeholder-chrome-dark focus:outline-none focus:border-accent transition resize-y"
          placeholder="Tell us what you're looking to build, fix, or upgrade. The more detail, the better the quote."
        />
      </div>

      {status === 'error' && (
        <p role="alert" className="text-sm text-red-300 bg-red-950/40 border border-red-900 rounded-sm px-4 py-3">
          {errorMessage}
        </p>
      )}

      {status === 'success' ? (
        <div role="status" className="text-sm text-emerald-200 bg-emerald-950/40 border border-emerald-800 rounded-sm px-4 py-5 text-center">
          <p className="font-display uppercase tracking-wider text-lg mb-1">Message Sent</p>
          <p>Thanks for reaching out. Colin or one of the team will get back to you shortly.</p>
        </div>
      ) : (
        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full btn-accent text-center disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === 'loading' ? 'Sending...' : 'Send My Message'}
        </button>
      )}
    </form>
  )
}
