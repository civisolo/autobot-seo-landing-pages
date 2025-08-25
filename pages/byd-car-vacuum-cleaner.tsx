import Layout from '../components/Layout'
import { site, images } from '../data/autobot'

export default function BYDCarVacuumCleaner() {
  const title = 'BYD Car Vacuum Cleaner | AutoBot Professional Automotive Cleaning Solutions'
  const description = 'Professional car vacuum cleaner designed for BYD owners, high suction, USB-C fast charging, washable HEPA filter, perfect for BYD car interior cleaning needs.'
  const keywords = 'BYD car vacuum cleaner,BYD automotive vacuum,car vacuum cleaner,automotive cleaning,BYD interior cleaning'
  const canonical = site.url + 'byd-car-vacuum-cleaner'

  return (
    <Layout title={title} description={description} keywords={keywords} canonical={canonical}>
      {/* Hero Section - Tech Design */}
      <section className="relative min-h-screen bg-gradient-to-br from-blue-900 via-cyan-900 to-teal-900 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        
        {/* Dynamic Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-32 w-24 h-24 bg-cyan-500/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-32 left-1/3 w-28 h-28 bg-teal-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>
        
        <div className="relative mx-auto max-w-7xl px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
            <div className="text-white">
              <div className="inline-flex items-center px-6 py-3 bg-blue-500/20 backdrop-blur-sm rounded-full text-lg font-medium mb-8 border border-blue-400/30">
                <span className="w-3 h-3 bg-blue-400 rounded-full mr-3 animate-pulse"></span>
                BYD Specific Design
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  BYD Car
                </span>
                <br />
                <span className="text-white">Vacuum Cleaner</span>
              </h1>
              <p className="text-2xl text-gray-300 mb-12 leading-relaxed">
                Specially designed for BYD owners, high suction in a compact body with USB‑C fast charging and washable HEPA. 
                Crevice/brush/hose tools handle sofas, carpets, keyboards and in‑car details with ease.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <a className="inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-bold text-lg rounded-2xl hover:from-blue-600 hover:to-cyan-700 transform hover:scale-105 transition-all duration-300 shadow-2xl" 
                   href={site.handheldCollection} target="_blank" rel="noreferrer">
                  <span>Explore Products</span>
                  <svg className="ml-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                              <a className="inline-flex items-center justify-center px-10 py-5 border-2 border-blue-400/30 text-white font-bold text-lg rounded-2xl hover:bg-blue-400 hover:text-gray-900 transition-all duration-300 backdrop-blur-sm" 
                 href={site.products.vm5} target="_blank" rel="noreferrer">
                Learn VM5
              </a>
              <a className="inline-flex items-center justify-center px-10 py-5 border-2 border-white/30 text-white font-bold text-lg rounded-2xl hover:bg-white hover:text-blue-900 transition-all duration-300 backdrop-blur-sm" 
                 href="/">
                <svg className="mr-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Back to Home
              </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-3xl blur-3xl"></div>
              <img className="relative w-full rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500" 
                   src={images.hero[0]} alt="BYD Car Vacuum Cleaner" />
            </div>
          </div>
        </div>
      </section>

      {/* BYD Model Compatibility - Tech Showcase */}
      <section className="py-24 bg-gradient-to-b from-blue-50 to-cyan-50">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Perfect BYD Model Compatibility</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cleaning solutions designed specifically for BYD vehicle series
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                model: "BYD Han",
                features: ["Luxury Interior Cleaning", "Leather Seat Care", "Dashboard Dusting"],
                color: "from-blue-500 to-blue-600",
                icon: "🚗"
              },
              {
                model: "BYD Tang",
                features: ["7-Seat Space Cleaning", "Trunk Organization", "Child Seat Areas"],
                color: "from-cyan-500 to-cyan-600",
                icon: "🚙"
              },
              {
                model: "BYD Qin",
                features: ["Compact Cleaning", "Economical & Practical", "Daily Maintenance"],
                color: "from-teal-500 to-teal-600",
                icon: "🚘"
              },
              {
                model: "BYD Song",
                features: ["SUV Specific", "Off-road Cleaning", "Multi-functional Space"],
                color: "from-blue-600 to-cyan-600",
                icon: "🏎️"
              }
            ].map((car) => (
              <div key={car.model} className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-500 border border-blue-100">
                <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${car.color} text-white text-3xl rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {car.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{car.model}</h3>
                <ul className="space-y-3">
                  {car.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-600 text-lg">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications - Tech Display */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Professional Technical Specifications</h2>
            <p className="text-xl text-gray-600">Technical parameters tailored for BYD owners</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                spec: "20kPa",
                label: "Powerful Suction",
                description: "Professional-grade suction for easy handling of various stains",
                color: "from-blue-500 to-blue-600",
                icon: "⚡"
              },
              {
                spec: "60min",
                label: "Extended Runtime",
                description: "Single charge meets complete cleaning requirements",
                color: "from-cyan-500 to-cyan-600",
                icon: "🔋"
              },
              {
                spec: "H13",
                label: "HEPA Filtration",
                description: "Medical-grade filtration protects in-car air quality",
                color: "from-teal-500 to-teal-600",
                icon: "🛡️"
              }
            ].map((tech) => (
              <div key={tech.label} className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 border border-blue-100">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${tech.color} text-white text-2xl rounded-2xl mb-6`}>
                  {tech.icon}
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{tech.spec}</div>
                <div className="text-xl font-semibold text-gray-700 mb-3">{tech.label}</div>
                <p className="text-gray-600 leading-relaxed">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Showcase - Tech Grid */}
      <section className="py-24 bg-gradient-to-b from-blue-50 to-cyan-50">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">BYD Specific Products</h2>
            <p className="text-xl text-gray-600">Carefully selected cleaning products for BYD owners</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.products.slice(0,6).map((src, idx) => (
              <a key={idx} 
                 href={idx<3? site.products.vm5 : site.products.vx4} 
                 target="_blank" 
                 rel="noreferrer" 
                 className="group block">
                <div className="bg-white rounded-3xl p-6 shadow-xl hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-500 border border-blue-100">
                  <div className="relative overflow-hidden rounded-2xl mb-6">
                    <img src={src} 
                         alt={`BYD Car Vacuum Cleaner Product-${idx}`} 
                         className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"/>
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="text-center">
                    <span className="text-lg font-semibold text-gray-700">View Details</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Tech Design */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-white/10 rounded-full mb-8">
            <span className="text-5xl">🚗</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
            Choose Professional Cleaning for Your BYD!
          </h2>
          <p className="text-2xl text-blue-100 mb-12 max-w-3xl mx-auto">
            Join thousands of BYD owners' cleaning solutions
          </p>
          <a className="inline-flex items-center justify-center px-12 py-6 bg-white text-blue-600 font-bold text-xl rounded-2xl hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-2xl" 
             href={site.handheldCollection} target="_blank" rel="noreferrer">
            Shop Now
          </a>
        </div>
      </section>
    </Layout>
  )
} 