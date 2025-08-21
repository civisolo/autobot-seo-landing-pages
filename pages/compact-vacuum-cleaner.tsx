import Layout from '../components/Layout'
import { site, images } from '../data/autobot'

export default function CompactVacuumCleaner() {
  const title = 'Compact Vacuum Cleaner | AutoBot Mini High Suction'
  const description = 'AutoBot compact vacuum: mini high suction, USB‑C fast charging, washable HEPA, rich attachments. Lightweight and quiet for home and car.'
  const keywords = 'compact vacuum cleaner, mini vacuum cleaner, small vacuum cleaner, usb-c compact vacuum, hepa compact vacuum'
  const canonical = site.url + 'compact-vacuum-cleaner'

  return (
    <Layout title={title} description={description} keywords={keywords} canonical={canonical}>
      {/* Hero Section with Elegant Theme */}
      <section className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 to-orange-500/5"></div>
        
        <div className="relative mx-auto max-w-7xl px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-gray-900">
              <div className="inline-flex items-center px-4 py-2 bg-yellow-500/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6 text-yellow-700">
                <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2 animate-pulse"></span>
                Compact Design
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
                  Compact Vacuum
                </span>
                <br />
                <span className="text-gray-900">Big Performance</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                High suction in a compact body with USB‑C fast charging and washable HEPA. 
                Crevice/brush/hose tools handle sofas, carpets, keyboards and in‑car details with ease.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-600 text-white font-bold rounded-xl hover:from-yellow-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-300 shadow-lg" 
                   href={site.handheldCollection} target="_blank" rel="noreferrer">
                  <span>Explore All</span>
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a className="inline-flex items-center justify-center px-8 py-4 border-2 border-yellow-500/30 text-yellow-700 font-bold rounded-xl hover:bg-yellow-500 hover:text-white transition-all duration-300 backdrop-blur-sm" 
                   href={site.products.vm5} target="_blank" rel="noreferrer">
                  Learn VM5
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-3xl blur-3xl"></div>
              <img className="relative w-full rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500" 
                   src={images.hero[0]} alt="AutoBot compact vacuum" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Compact Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Small size, big capabilities for modern living
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "📏",
                title: "Mini Size",
                description: "Compact design fits anywhere",
                color: "from-yellow-500 to-yellow-600"
              },
              {
                icon: "🔋",
                title: "USB‑C Fast Charge",
                description: "Charge with car chargers or power banks",
                color: "from-orange-500 to-orange-600"
              },
              {
                icon: "🛡️",
                title: "Washable HEPA (H13)",
                description: "Effective filtration and easy maintenance",
                color: "from-amber-500 to-amber-600"
              },
              {
                icon: "🔇",
                title: "Low Noise",
                description: "Lower disturbance for families and pets",
                color: "from-yellow-600 to-orange-600"
              },
              {
                icon: "⚖️",
                title: "Ultra Lightweight",
                description: "Easy to carry and store anywhere",
                color: "from-orange-600 to-amber-600"
              },
              {
                icon: "🔧",
                title: "Rich Attachments",
                description: "Crevice/brush/hose cover multiple scenarios",
                color: "from-amber-600 to-yellow-600"
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
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Compact Solutions</h2>
            <p className="text-xl text-gray-600">Perfect for small spaces and big cleaning needs</p>
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
      <section className="py-20 bg-gradient-to-r from-yellow-500 to-orange-600">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Small Size, Big Impact!
          </h2>
          <p className="text-xl text-yellow-100 mb-8">
            Experience powerful cleaning in a compact package
          </p>
          <a className="inline-flex items-center justify-center px-8 py-4 bg-white text-yellow-600 font-bold rounded-xl hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg" 
             href={site.handheldCollection} target="_blank" rel="noreferrer">
            Shop Now
          </a>
        </div>
      </section>
    </Layout>
  )
}
