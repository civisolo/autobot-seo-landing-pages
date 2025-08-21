import Layout from '../components/Layout'
import { site, images } from '../data/autobot'

export default function CarVacuumCleaner() {
  const title = 'Car Vacuum Cleaner | AutoBot Cordless High Suction'
  const description = 'AutoBot car vacuum: cordless high suction, USB‑C fast charging, washable HEPA, rich attachments. Lightweight and quiet for home and car.'
  const keywords = 'car vacuum cleaner, cordless car vacuum, usb-c car vacuum, hepa car vacuum, portable car vacuum'
  const canonical = site.url + 'car-vacuum-cleaner'

  return (
    <Layout title={title} description={description} keywords={keywords} canonical={canonical}>
      {/* Hero Section with Car Theme */}
      <section className="relative bg-gradient-to-br from-gray-900 via-orange-900 to-red-900 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        
        <div className="relative mx-auto max-w-7xl px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-flex items-center px-4 py-2 bg-orange-500/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-orange-400 rounded-full mr-2 animate-pulse"></span>
                Automotive Grade
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                  Car Vacuum
                </span>
                <br />
                <span className="text-white">Professional Grade</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                High suction in a compact body with USB‑C fast charging and washable HEPA. 
                Crevice/brush/hose tools handle sofas, carpets, keyboards and in‑car details with ease.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold rounded-xl hover:from-orange-600 hover:to-red-700 transform hover:scale-105 transition-all duration-300 shadow-lg" 
                   href={site.handheldCollection} target="_blank" rel="noreferrer">
                  <span>Explore All</span>
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a className="inline-flex items-center justify-center px-8 py-4 border-2 border-orange-400/30 text-white font-bold rounded-xl hover:bg-orange-400 hover:text-gray-900 transition-all duration-300 backdrop-blur-sm" 
                   href={site.products.vx4} target="_blank" rel="noreferrer">
                  Learn VX4
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-3xl blur-3xl"></div>
              <img className="relative w-full rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500" 
                   src={images.hero[1]} alt="AutoBot car vacuum" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section with Car Theme */}
      <section className="py-20 bg-gray-100">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Car Cleaning Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Designed specifically for automotive cleaning challenges
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🚗",
                title: "High Suction",
                description: "12–20kPa class performance for daily quick clean",
                color: "from-orange-500 to-orange-600"
              },
              {
                icon: "🔋",
                title: "USB‑C Fast Charge",
                description: "Charge with car chargers or power banks",
                color: "from-red-500 to-red-600"
              },
              {
                icon: "🛡️",
                title: "Washable HEPA (H13)",
                description: "Effective filtration and easy maintenance",
                color: "from-gray-700 to-gray-800"
              },
              {
                icon: "🔇",
                title: "Low Noise",
                description: "Lower disturbance for families and pets",
                color: "from-orange-600 to-red-600"
              },
              {
                icon: "⚖️",
                title: "Lightweight",
                description: "Carry anywhere, store easily",
                color: "from-red-600 to-orange-600"
              },
              {
                icon: "🔧",
                title: "Rich Attachments",
                description: "Crevice/brush/hose cover multiple scenarios",
                color: "from-gray-800 to-orange-700"
              }
            ].map((feature) => (
              <div key={feature.title} 
                   className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-200">
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
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Recommended Car Vacuums</h2>
            <p className="text-xl text-gray-600">Professional grade cleaning for your vehicle</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {images.products.slice(0,4).map((src, idx) => (
              <a key={idx} 
                 href={idx<2? site.products.vx4 : site.products.vm5} 
                 target="_blank" 
                 rel="noreferrer" 
                 className="group block">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-200">
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
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Keep Your Car Spotless!
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Professional grade car cleaning with AutoBot vacuum cleaners
          </p>
          <a className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-600 font-bold rounded-xl hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg" 
             href={site.handheldCollection} target="_blank" rel="noreferrer">
            Shop Now
          </a>
        </div>
      </section>
    </Layout>
  )
}
