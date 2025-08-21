import Layout from '../components/Layout'
import { site, images } from '../data/autobot'

export default function PortableVacuumCleaner() {
  const title = 'Portable Vacuum Cleaner | AutoBot Cordless High Suction'
  const description = 'AutoBot portable vacuum: cordless high suction, USB‑C fast charging, washable HEPA, rich attachments. Lightweight and quiet for home and car.'
  const keywords = 'portable vacuum cleaner, cordless portable vacuum, usb-c portable vacuum, hepa portable vacuum, compact vacuum'
  const canonical = site.url + 'portable-vacuum-cleaner'

  return (
    <Layout title={title} description={description} keywords={keywords} canonical={canonical}>
      {/* Hero Section with Modern Theme */}
      <section className="relative bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        
        <div className="relative mx-auto max-w-7xl px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></span>
                Portable Design
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-blue-300 to-indigo-300 bg-clip-text text-transparent">
                  Portable Vacuum
                </span>
                <br />
                <span className="text-white">Clean Anywhere</span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                High suction in a compact body with USB‑C fast charging and washable HEPA. 
                Crevice/brush/hose tools handle sofas, carpets, keyboards and in‑car details with ease.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg" 
                   href={site.handheldCollection} target="_blank" rel="noreferrer">
                  <span>Explore All</span>
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white font-bold rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300 backdrop-blur-sm" 
                   href={site.products.vm5} target="_blank" rel="noreferrer">
                  Learn VM5
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-3xl blur-3xl"></div>
              <img className="relative w-full rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500" 
                   src={images.hero[2]} alt="AutoBot portable vacuum" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Portable Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Designed for maximum portability and convenience
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "📱",
                title: "Compact Design",
                description: "Small enough to fit in any space",
                color: "from-blue-500 to-blue-600"
              },
              {
                icon: "🔋",
                title: "USB‑C Fast Charge",
                description: "Charge with car chargers or power banks",
                color: "from-indigo-500 to-indigo-600"
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
                color: "from-blue-600 to-indigo-600"
              },
              {
                icon: "⚖️",
                title: "Lightweight",
                description: "Carry anywhere, store easily",
                color: "from-indigo-600 to-purple-600"
              },
              {
                icon: "🔧",
                title: "Rich Attachments",
                description: "Crevice/brush/hose cover multiple scenarios",
                color: "from-purple-600 to-blue-600"
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
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Portable Solutions</h2>
            <p className="text-xl text-gray-600">Take cleaning anywhere with our portable vacuums</p>
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
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Take Cleaning Anywhere!
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Portable, powerful, and convenient - perfect for modern lifestyles
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
