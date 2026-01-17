import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Subjects & Services - Maruti Tutors',
  description: 'Explore our comprehensive tutoring subjects in Mathematics, Science, and Engineering for school and university levels.',
}

export default function Subjects() {
  const schoolSubjects = [
    {
      category: 'Mathematics',
      subjects: ['Algebra', 'Geometry', 'Calculus', 'Statistics']
    },
    {
      category: 'Science',
      subjects: ['Physics', 'Chemistry']
    }
  ]

  const universitySubjects = [
    {
      category: 'Engineering Mathematics',
      subjects: ['Differential Equations', 'Linear Algebra', 'Complex Analysis']
    },
    {
      category: 'Electrical Engineering',
      subjects: ['Circuits', 'Signals & Systems', 'Digital Logic']
    },
    {
      category: 'Computer Engineering',
      subjects: ['Programming Fundamentals', 'Algorithms', 'Computer Architecture', 'Digital Design']
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
        <h1 className="text-3xl font-bold text-blue-900 mb-8">Subjects & Services</h1>

        {/* School Level */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-blue-900 mb-6">School Level (Grades 1-12)</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {schoolSubjects.map((category) => (
              <div key={category.category} className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-orange-400">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">{category.category}</h3>
                <ul className="space-y-2">
                  {category.subjects.map((subject) => (
                    <li key={subject} className="text-blue-700">• {subject}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* University Level */}
        <section>
          <h2 className="text-2xl font-semibold text-blue-900 mb-6">University / Engineering Level</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {universitySubjects.map((category) => (
              <div key={category.category} className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-orange-400">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">{category.category}</h3>
                <ul className="space-y-2">
                  {category.subjects.map((subject) => (
                    <li key={subject} className="text-blue-700">• {subject}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Services */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-blue-900 mb-6">Our Services</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-orange-400">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">Online Tutoring</h3>
              <p className="text-blue-700">
                Convenient virtual sessions using modern video conferencing tools.
                Interactive whiteboards and screen sharing for effective learning.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-orange-400">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">In-Person Tutoring</h3>
              <p className="text-blue-700">
                Face-to-face sessions available in select locations. Personalized
                attention in a focused learning environment.
              </p>
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