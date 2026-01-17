import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-orange-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b-4 border-orange-400">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-30">
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-3">
                <img
                  src="/maruti-tutors-logo.png"
                  alt="Maruti Tutors"
                  className="h-32 w-auto"
                />
                <span className="text-2xl font-bold text-blue-900">Maruti Tutors</span>
              </Link>
            </div>
            <div className="flex items-center space-x-8">
              <Link href="/about" className="text-blue-700 hover:text-orange-600 font-medium transition-colors">About</Link>
              <Link href="/subjects" className="text-blue-700 hover:text-orange-600 font-medium transition-colors">Subjects</Link>
              <Link href="/how-it-works" className="text-blue-700 hover:text-orange-600 font-medium transition-colors">How It Works</Link>
              <Link href="/testimonials" className="text-blue-700 hover:text-orange-600 font-medium transition-colors">Testimonials</Link>
              <Link href="/pricing" className="text-blue-700 hover:text-orange-600 font-medium transition-colors">Pricing</Link>
              <Link href="/contact" className="text-blue-700 hover:text-orange-600 font-medium transition-colors">Contact</Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-blue-900 mb-6">
            Engineer-Led Personalized Tutoring
          </h1>
          <p className="text-xl text-blue-700 mb-8 max-w-3xl mx-auto">
            Professional tutoring in Mathematics, Science, and Engineering subjects.
            Bridging the gap between theoretical concepts and real-world applications.
          </p>
          <Link
            href="/contact"
            className="bg-orange-500 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors shadow-lg"
          >
            Book a Free Consultation
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2026 Maruti Tutors. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
