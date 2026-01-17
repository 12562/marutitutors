'use client'

import { useState, useEffect } from 'react'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '@/lib/firebase'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')
  const [isFirebaseReady, setIsFirebaseReady] = useState(false)

  useEffect(() => {
    // Check if Firebase is available on client side
    if (db) {
      setIsFirebaseReady(true)
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage('')

    if (!db) {
      setSubmitMessage('Service temporarily unavailable. Please try again later.')
      setIsSubmitting(false)
      return
    }

    try {
      await addDoc(collection(db, 'inquiries'), {
        ...formData,
        createdAt: serverTimestamp()
      })

      setSubmitMessage('Thank you for your inquiry! We\'ll get back to you within 24 hours.')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitMessage('There was an error submitting your inquiry. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <main className="min-h-screen bg-orange-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b-4 border-orange-400">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-30">
            <div className="flex items-center">
              <a href="/" className="flex items-center space-x-3">
                <img
                  src="/maruti-tutors-logo.png"
                  alt="Maruti Tutors"
                  className="h-32 w-auto"
                />
                <span className="text-2xl font-bold text-blue-900">Maruti Tutors</span>
              </a>
            </div>
            <div className="flex items-center space-x-8">
              <a href="/about" className="text-blue-700 hover:text-orange-600 font-medium transition-colors">About</a>
              <a href="/subjects" className="text-blue-700 hover:text-orange-600 font-medium transition-colors">Subjects</a>
              <a href="/how-it-works" className="text-blue-700 hover:text-orange-600 font-medium transition-colors">How It Works</a>
              <a href="/testimonials" className="text-blue-700 hover:text-orange-600 font-medium transition-colors">Testimonials</a>
              <a href="/pricing" className="text-blue-700 hover:text-orange-600 font-medium transition-colors">Pricing</a>
              <a href="/contact" className="text-blue-700 hover:text-orange-600 font-medium transition-colors">Contact</a>
            </div>
          </div>
        </nav>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h1 className="text-3xl font-bold text-blue-900 mb-8">Book a Free Consultation</h1>
            <div className="bg-white p-8 rounded-lg shadow-sm border-l-4 border-orange-400">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-blue-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-blue-200 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-blue-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-blue-200 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-blue-700 mb-2">
                    Subject of Interest
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-blue-200 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  >
                    <option value="">Select a subject</option>
                    <option value="Mathematics">Mathematics</option>
                    <option value="Physics">Physics</option>
                    <option value="Chemistry">Chemistry</option>
                    <option value="Engineering Mathematics">Engineering Mathematics</option>
                    <option value="Electrical Engineering">Electrical Engineering</option>
                    <option value="Computer Engineering">Computer Engineering</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-blue-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us about your learning goals, current level, and any specific challenges..."
                    className="w-full px-3 py-2 border border-blue-200 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || !isFirebaseReady}
                  className="w-full bg-orange-500 text-white py-3 px-6 rounded-md font-semibold hover:bg-orange-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                >
                  {isSubmitting ? 'Sending...' : !isFirebaseReady ? 'Loading...' : 'Send Message'}
                </button>

                {!isFirebaseReady && (
                  <div className="mt-2 text-sm text-blue-600">
                    Initializing contact form...
                  </div>
                )}

                {submitMessage && (
                  <div className={`mt-4 p-4 rounded-md ${submitMessage.includes('error') || submitMessage.includes('unavailable') ? 'bg-red-50 text-red-700 border border-red-200' : 'bg-green-50 text-green-700 border border-green-200'}`}>
                    {submitMessage}
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-semibold text-blue-900 mb-8">Get In Touch</h2>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-orange-400">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Response Time</h3>
                <p className="text-blue-700">We typically respond to inquiries within 24 hours during business days.</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-orange-400">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">What to Expect</h3>
                <ul className="text-blue-700 space-y-2">
                  <li>• Free initial consultation (30 minutes)</li>
                  <li>• Assessment of your current knowledge</li>
                  <li>• Discussion of learning goals</li>
                  <li>• Customized tutoring plan recommendation</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-orange-400">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Connect With Us</h3>
                <div className="space-y-2">
                  <a href="https://www.linkedin.com/in/mohit12562" className="block text-orange-600 hover:text-orange-700 hover:underline font-medium transition-colors">
                    LinkedIn Profile
                  </a>
                  <a href="https://github.com/12562" className="block text-orange-600 hover:text-orange-700 hover:underline font-medium transition-colors">
                    GitHub Profile
                  </a>
                  <a href="https://mohit-sharma-portfolio.web.app/" className="block text-orange-600 hover:text-orange-700 hover:underline font-medium transition-colors">
                    Portfolio Website
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2026 Maruti Tutors. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}