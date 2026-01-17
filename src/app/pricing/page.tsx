import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing & Packages - Maruti Tutors',
  description: 'Flexible pricing options for personalized tutoring sessions. Custom plans available to meet your learning goals.',
}

export default function Pricing() {
  const packages = [
    {
      name: 'Single Session',
      price: '$60',
      duration: '60 minutes',
      features: [
        'One-on-one tutoring',
        'Personalized lesson plan',
        'Homework help',
        'Progress notes'
      ]
    },
    {
      name: 'Package of 5',
      price: '$275',
      duration: '5 x 60 minutes',
      features: [
        'Five tutoring sessions',
        'Comprehensive assessment',
        'Custom learning plan',
        'Regular progress updates',
        'Flexible scheduling'
      ],
      popular: true
    },
    {
      name: 'Package of 10',
      price: '$500',
      duration: '10 x 60 minutes',
      features: [
        'Ten tutoring sessions',
        'Detailed initial assessment',
        'Tailored curriculum',
        'Weekly progress reports',
        'Priority scheduling',
        'Additional resources'
      ]
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
        <h1 className="text-3xl font-bold text-blue-900 mb-8 text-center">Pricing & Packages</h1>

        <div className="text-center mb-12">
          <p className="text-xl text-blue-700 mb-4">
            Flexible pricing designed to fit your learning needs and budget
          </p>
          <p className="text-blue-700">
            All packages include personalized attention, customized lesson plans, and proven teaching methodologies.
            Custom packages available for intensive preparation or long-term learning goals.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`bg-white p-8 rounded-lg shadow-sm border-l-4 border-orange-400 ${pkg.popular ? 'border-orange-500 border-l-8' : ''}`}
            >
              {pkg.popular && (
                <div className="bg-orange-500 text-white text-center py-1 px-4 rounded-full text-sm font-semibold mb-4">
                  Most Popular
                </div>
              )}
              <h2 className="text-2xl font-semibold text-blue-900 mb-2">{pkg.name}</h2>
              <div className="text-3xl font-bold text-orange-600 mb-2">{pkg.price}</div>
              <div className="text-blue-600 mb-6 font-medium">{pkg.duration}</div>
              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <span className="text-orange-500 mr-2">✓</span>
                    <span className="text-blue-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="/contact"
                className={`block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
                  pkg.popular
                    ? 'bg-orange-500 text-white hover:bg-orange-600 shadow-lg'
                    : 'bg-blue-50 text-blue-700 hover:bg-blue-100 border border-blue-200'
                }`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>

        {/* Custom Plans */}
        <section className="mt-12">
          <div className="bg-white p-8 rounded-lg shadow-sm text-center border-l-4 border-orange-400">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">Custom Learning Plans</h2>
            <p className="text-blue-700 mb-6">
              Need something different? We offer customized packages for:
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div className="text-blue-700">• Exam preparation</div>
              <div className="text-blue-700">• Intensive summer programs</div>
              <div className="text-blue-700">• Long-term skill development</div>
              <div className="text-blue-700">• Group sessions</div>
            </div>
            <a
              href="/contact"
              className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors shadow-lg"
            >
              Discuss Custom Plan
            </a>
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