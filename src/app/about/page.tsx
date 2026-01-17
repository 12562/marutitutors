import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Maruti Tutors',
  description: 'Learn about our mission, teaching philosophy, and meet our experienced tutors.',
}

export default function About() {
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
        {/* Mission & Vision */}
        <section className="mb-12">
          <h1 className="text-3xl font-bold text-blue-900 mb-6">About Maruti Tutors</h1>
          <div className="bg-white p-8 rounded-lg shadow-sm border-l-4 border-orange-400">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">Our Mission</h2>
            <p className="text-blue-700 mb-6">
              To provide personalized, concept-driven education that bridges the gap between theoretical knowledge
              and real-world application. We believe in fostering deep understanding and critical thinking skills
              that prepare students for academic success and lifelong learning.
            </p>
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">Teaching Philosophy</h2>
            <p className="text-blue-700 mb-6">
              Our approach combines engineering precision with educational expertise. We focus on:
            </p>
            <ul className="list-disc list-inside text-blue-700 space-y-2">
              <li>Concept mastery before application</li>
              <li>Problem-solving frameworks inspired by engineering methodologies</li>
              <li>Personalized learning plans tailored to individual needs</li>
              <li>Regular progress tracking and adaptive teaching strategies</li>
            </ul>
          </div>
        </section>

        {/* Meet the Tutor */}
        <section>
          <h2 className="text-2xl font-semibold text-blue-900 mb-6">Meet Our Tutor</h2>
          <div className="bg-white p-8 rounded-lg shadow-sm border-l-4 border-orange-400">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3 mb-6 md:mb-0">
                <img
                  src="/mohit-photo.jpg"
                  alt="Mohit Sharma - Founder & Lead Tutor"
                  className="w-48 h-48 object-cover rounded-lg mx-auto md:mx-0 shadow-md"
                />
              </div>
              <div className="md:w-2/3 md:pl-8">
                <h3 className="text-xl font-semibold text-blue-900 mb-2">Mohit Sharma</h3>
                <p className="text-orange-600 mb-4 font-medium">Founder & Lead Tutor</p>
                <p className="text-blue-700 mb-4">
                  Mohit holds a MASc in Electrical Engineering from the University of Windsor and a B.Tech in
                  Electronics & Communication Engineering. With extensive experience as a Graduate Teaching Assistant
                  and professional online tutor, Mohit brings a unique blend of academic rigor and practical industry
                  knowledge to his teaching.
                </p>
                <div className="mb-4">
                  <h4 className="font-semibold text-blue-900 mb-2">Academic Credentials</h4>
                  <ul className="list-disc list-inside text-blue-700 space-y-1">
                    <li>MASc Electrical Engineering, University of Windsor</li>
                    <li>B.Tech Electronics & Communication Engineering</li>
                    <li>Graduate Teaching Assistant experience</li>
                    <li>Professional tutoring with Varsity Tutors (Canada)</li>
                  </ul>
                </div>
                <div className="mb-4">
                  <h4 className="font-semibold text-blue-900 mb-2">Industry Experience</h4>
                  <ul className="list-disc list-inside text-blue-700 space-y-1">
                    <li>Embedded systems development</li>
                    <li>Software development</li>
                    <li>VLSI and Digital Design</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-900 mb-2">Connect</h4>
                  <div className="flex space-x-4">
                    <a href="https://www.linkedin.com/in/mohit12562" className="text-orange-600 hover:text-orange-700 hover:underline font-medium transition-colors">LinkedIn</a>
                    <a href="https://github.com/12562" className="text-orange-600 hover:text-orange-700 hover:underline font-medium transition-colors">GitHub</a>
                    <a href="https://mohit-sharma-portfolio.web.app/" className="text-orange-600 hover:text-orange-700 hover:underline font-medium transition-colors">Portfolio</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
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