import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Testimonials - Maruti Tutors',
  description: 'Read what our students say about their tutoring experience with Maruti Tutors.',
}

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      review: 'Mohit\'s engineering background really shines through in his teaching. He helped me understand circuit analysis concepts that I struggled with for months. His structured approach made complex topics much more manageable.',
      rating: 5
    },
    {
      name: 'Alex Chen',
      review: 'The personalized attention and real-world examples made all the difference. Mohit doesn\'t just teach formulas—he explains why they work and how to apply them. My calculus grades improved significantly.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      review: 'As a computer engineering student, I needed help with digital logic design. Mohit\'s industry experience was invaluable. He taught me not just the theory, but also practical design considerations.',
      rating: 5
    }
  ]

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
        <h1 className="text-3xl font-bold text-blue-900 mb-8 text-center">What Our Students Say</h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-orange-400">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-orange-400">★</span>
                ))}
              </div>
              <p className="text-blue-700 mb-4 italic">"{testimonial.review}"</p>
              <p className="text-blue-900 font-semibold">- {testimonial.name}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-orange-50 p-8 rounded-lg border-2 border-orange-200">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">Ready to Join Our Success Stories?</h2>
            <p className="text-blue-700 mb-6">
              Experience personalized tutoring that delivers real results. Book your free consultation today.
            </p>
            <a
              href="/contact"
              className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors shadow-lg"
            >
              Book Free Consultation
            </a>
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