// Navigation component
export default function Navigation() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="text-xl font-bold text-gray-900">
              Maruti Tutors
            </a>
          </div>
          <div className="flex space-x-8">
            <a href="/about" className="text-gray-700 hover:text-gray-900">About</a>
            <a href="/subjects" className="text-gray-700 hover:text-gray-900">Subjects</a>
            <a href="/how-it-works" className="text-gray-700 hover:text-gray-900">How It Works</a>
            <a href="/testimonials" className="text-gray-700 hover:text-gray-900">Testimonials</a>
            <a href="/pricing" className="text-gray-700 hover:text-gray-900">Pricing</a>
            <a href="/contact" className="text-gray-700 hover:text-gray-900">Contact</a>
          </div>
        </div>
      </nav>
    </header>
  )
}