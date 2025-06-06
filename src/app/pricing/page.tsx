export default function Pricing() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Our Pricing Plans</h1>
          <p className="text-xl text-gray-600">
            Choose the perfect plan for your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Basic Plan */}
          <div className="border rounded-lg p-8 hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold mb-4">Basic</h3>
            <p className="text-3xl font-bold mb-6">$999</p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                5 Pages Website
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Responsive Design
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Basic SEO Setup
              </li>
            </ul>
            <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Get Started
            </button>
          </div>

          {/* Pro Plan */}
          <div className="border rounded-lg p-8 bg-blue-50 hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold mb-4">Pro</h3>
            <p className="text-3xl font-bold mb-6">$1,999</p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                10 Pages Website
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Custom Animations
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Advanced SEO
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Blog Setup
              </li>
            </ul>
            <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Get Started
            </button>
          </div>

          {/* Enterprise Plan */}
          <div className="border rounded-lg p-8 hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold mb-4">Enterprise</h3>
            <p className="text-3xl font-bold mb-6">Custom</p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Unlimited Pages
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Custom Features
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Priority Support
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Advanced Integrations
              </li>
            </ul>
            <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  )
} 