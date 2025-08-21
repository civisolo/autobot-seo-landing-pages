import Layout from '../components/Layout'
import { site, images } from '../data/autobot'

export default function CordlessVacuumCleaner() {
  const title = 'Cordless Vacuum Cleaner | AutoBot Wireless High Suction'
  const description = 'AutoBot cordless vacuum: wireless high suction, USB‑C fast charging, washable HEPA, rich attachments. Lightweight and quiet for home and car.'
  const keywords = 'cordless vacuum cleaner, wireless vacuum cleaner, usb-c cordless vacuum, hepa cordless vacuum, battery vacuum'
  const canonical = site.url + 'cordless-vacuum-cleaner'

  return (
    <Layout title={title} description={description} keywords={keywords} canonical={canonical}>
      {/* Hero Section with Tech Theme */}
      <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        
        <div className="relative mx-auto max-w-7xl px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-flex items-center px-4 py-2 bg-cyan-500/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2 animate-pulse"></span>
                Wireless Technology
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Cordless Vacuum
                </span>
                <br />
                <span className="text-white">Wireless Freedom</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                High suction in a compact body with USB‑C fast charging and washable HEPA. 
                Crevice/brush/hose tools handle sofas, carpets, keyboards and in‑car details with ease.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-xl hover:from-cyan-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg" 
                   href={site.handheldCollection} target="_blank" rel="noreferrer">
                  <span>Explore All</span>
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a className="inline-flex items-center justify-center px-8 py-4 border-2 border-cyan-400/30 text-white font-bold rounded-xl hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 backdrop-blur-sm" 
                   href={site.products.vx4} target="_blank" rel="noreferrer">
                  Learn VX4
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-3xl blur-3xl"></div>
              <img className="relative w-full rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500" 
                   src={images.hero[2]} alt="AutoBot cordless vacuum" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-900">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Wireless Features</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Cutting-edge technology for ultimate cleaning freedom
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🔋",
                title: "Long Battery Life",
                description: "Extended runtime for complete cleaning sessions",
                color: "from-cyan-500 to-cyan-600"
              },
              {
                icon: "⚡",
                title: "USB‑C Fast Charge",
                description: "Quick charging with universal USB-C compatibility",
                color: "from-blue-500 to-blue-600"
              },
              {
                icon: "🛡️",
                title: "Washable HEPA (H13)",
                description: "Advanced filtration for cleaner air",
                color: "from-purple-500 to-purple-600"
              },
              {
                icon: "🔇",
                title: "Ultra Quiet",
                description: "Silent operation for peaceful cleaning",
                color: "from-cyan-600 to-blue-600"
              },
              {
                icon: "⚖️",
                title: "Lightweight",
                description: "Ergonomic design for comfortable use",
                color: "from-blue-600 to-purple-600"
              },
              {
                icon: "🔧",
                title: "Smart Attachments",
                description: "Intelligent tools for every surface",
                color: "from-purple-600 to-cyan-600"
              }
            ].map((feature) => (
              <div key={feature.title} 
                   className="group bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-700">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${feature.color} text-white text-2xl rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-gray-800">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Wireless Solutions</h2>
            <p className="text-xl text-gray-400">Experience the future of cleaning</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {images.products.slice(0,4).map((src, idx) => (
              <a key={idx} 
                 href={idx<2? site.products.vx4 : site.products.vm5} 
                 target="_blank" 
                 rel="noreferrer" 
                 className="group block">
                <div className="bg-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-600">
                  <img src={src} 
                       alt={`product-${idx}`} 
                       className="w-full rounded-xl shadow-md group-hover:shadow-lg transition-shadow duration-300"/>
                  <div className="mt-4 text-center">
                    <span className="text-sm font-medium text-gray-400">View Details</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Experience Wireless Freedom!
          </h2>
          <p className="text-xl text-cyan-100 mb-8">
            Cut the cord and discover the future of cleaning technology
          </p>
          <a className="inline-flex items-center justify-center px-8 py-4 bg-white text-cyan-600 font-bold rounded-xl hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg" 
             href={site.handheldCollection} target="_blank" rel="noreferrer">
            Shop Now
          </a>
        </div>
      </section>
    </Layout>
  )
}
