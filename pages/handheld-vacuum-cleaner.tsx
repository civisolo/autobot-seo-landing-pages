import Layout from '../components/Layout'
import { site, images } from '../data/autobot'

export default function HandheldVacuumCleaner() {
  const title = 'Handheld Vacuum Cleaner | AutoBot Cordless High Suction'
  const description = 'AutoBot handheld vacuum: cordless high suction, USB‑C fast charging, washable HEPA, rich attachments. Lightweight and quiet for home and car.'
  const keywords = 'handheld vacuum cleaner, cordless handheld vacuum, usb-c handheld, hepa handheld vacuum, portable vacuum'
  const canonical = site.url + 'handheld-vacuum-cleaner'

  return (
    <Layout title={title} description={description} keywords={keywords} canonical={canonical}>
      {/* Hero Section with Gradient Background */}
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        
        <div className="relative mx-auto max-w-7xl px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                Cordless Technology
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Cordless Handheld
                </span>
                <br />
                <span className="text-white">Cleaning, Anywhere</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                High suction in a compact body with USB‑C fast charging and washable HEPA. 
                Crevice/brush/hose tools handle sofas, carpets, keyboards and in‑car details with ease.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-xl hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg" 
                   href={site.handheldCollection} target="_blank" rel="noreferrer">
                  <span>Explore All</span>
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white font-bold rounded-xl hover:bg-white hover:text-blue-900 transition-all duration-300 backdrop-blur-sm" 
                   href={site.products.vm5} target="_blank" rel="noreferrer">
                  Learn VM5
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-3xl"></div>
              <img className="relative w-full rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500" 
                   src={images.hero[0]} alt="AutoBot handheld vacuum" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section with Cards */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Key Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover what makes our handheld vacuum cleaners the perfect choice for modern homes
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "⚡",
                title: "High Suction",
                description: "12–20kPa class performance for daily quick clean",
                color: "from-blue-500 to-blue-600"
              },
              {
                icon: "🔋",
                title: "USB‑C Fast Charge",
                description: "Charge with car chargers or power banks",
                color: "from-green-500 to-green-600"
              },
              {
                icon: "🛡️",
                title: "Washable HEPA (H13)",
                description: "Effective filtration and easy maintenance",
                color: "from-purple-500 to-purple-600"
              },
              {
                icon: "🔇",
                title: "Low Noise",
                description: "Lower disturbance for families and pets",
                color: "from-indigo-500 to-indigo-600"
              },
              {
                icon: "⚖️",
                title: "Lightweight",
                description: "Carry anywhere, store easily",
                color: "from-pink-500 to-pink-600"
              },
              {
                icon: "🔧",
                title: "Rich Attachments",
                description: "Crevice/brush/hose cover multiple scenarios",
                color: "from-orange-500 to-orange-600"
              }
            ].map((feature) => (
              <div key={feature.title} 
                   className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${feature.color} text-white text-2xl rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Recommended Products</h2>
            <p className="text-xl text-gray-600">Choose the perfect handheld vacuum for your needs</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {images.products.slice(0,4).map((src, idx) => (
              <a key={idx} 
                 href={idx<2? site.products.vm5 : site.products.vx4} 
                 target="_blank" 
                 rel="noreferrer" 
                 className="group block">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100">
                  <img src={src} 
                       alt={`product-${idx}`} 
                       className="w-full rounded-xl shadow-md group-hover:shadow-lg transition-shadow duration-300"/>
                  <div className="mt-4 text-center">
                    <span className="text-sm font-medium text-gray-500">View Details</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Experience Cordless Freedom?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of satisfied customers who have upgraded to AutoBot handheld vacuum cleaners
          </p>
          <a className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg" 
             href={site.handheldCollection} target="_blank" rel="noreferrer">
            Shop Now
          </a>
        </div>
      </section>
    </Layout>
  )
}
