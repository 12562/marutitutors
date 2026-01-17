import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How It Works - Maruti Tutors',
  description: 'Learn about our structured tutoring process: Assessment, Planning, Teaching, and Progress Tracking.',
}

export default function HowItWorks() {
  const steps = [
    {
      step: 1,
      title: 'Initial Assessment',
      description: 'We begin with a comprehensive assessment of your current knowledge, learning goals, and areas for improvement. This helps us understand your unique needs and create a tailored learning plan.'
    },
    {
      step: 2,
      title: 'Personalized Plan',
      description: 'Based on the assessment, we develop a customized learning roadmap. This includes specific objectives, timelines, and milestones to ensure steady progress toward your goals.'
    },
    {
      step: 3,
      title: 'Structured Teaching',
      description: 'Our sessions follow a proven methodology: Concept → Application → Practice → Mastery. We use engineering-inspired problem-solving frameworks to build deep understanding.'
    },
    {
      step: 4,
      title: 'Progress Tracking',
      description: 'Regular check-ins and assessments ensure you\'re on track. We adapt our approach based on your progress and provide detailed feedback to accelerate your learning.'
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
        <h1 className="text-3xl font-bold text-blue-900 mb-8 text-center">How It Works</h1>

        <div className="grid md:grid-cols-2 gap-8">
          {steps.map((step) => (
            <div key={step.step} className="bg-white p-8 rounded-lg shadow-sm border-l-4 border-orange-400">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center text-xl font-bold mr-4">
                  {step.step}
                </div>
                <h2 className="text-xl font-semibold text-blue-900">{step.title}</h2>
              </div>
              <p className="text-blue-700">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Why Choose Our Process */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-blue-900 mb-6 text-center">Why Our Process Works</h2>
          <div className="bg-white p-8 rounded-lg shadow-sm border-l-4 border-orange-400">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Engineering Approach</h3>
                <p className="text-blue-700">Structured problem-solving methods inspired by engineering practices</p>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Personalized Learning</h3>
                <p className="text-blue-700">Every plan is customized to your learning style and goals</p>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Measurable Results</h3>
                <p className="text-blue-700">Regular assessments ensure continuous improvement and success</p>
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