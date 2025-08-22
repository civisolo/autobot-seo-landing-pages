import Layout from '../components/Layout'
import { site, images } from '../data/autobot'

export default function CordlessVacuumCleaner() {
  const title = 'Cordless Vacuum Cleaner | AutoBot High Suction'
  const description = 'AutoBot cordless vacuum: high suction, USB‑C fast charging, washable HEPA, rich attachments. Lightweight and quiet for home and car.'
  const keywords = 'cordless vacuum cleaner, wireless vacuum, usb-c cordless vacuum, hepa cordless vacuum, portable cordless vacuum'
  const canonical = site.url + 'cordless-vacuum-cleaner'

  return (
    <Layout title={title} description={description} keywords={keywords} canonical={canonical}>
      {/* Hero Section - 仪表板风格 */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-zinc-900 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        
        <div className="relative mx-auto max-w-7xl px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
            <div className="text-white">
              <div className="inline-flex items-center px-6 py-3 bg-slate-500/20 backdrop-blur-sm rounded-full text-lg font-medium mb-8">
                <span className="w-3 h-3 bg-slate-400 rounded-full mr-3 animate-pulse"></span>
                Wireless Technology
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
                <span className="bg-gradient-to-r from-slate-400 to-gray-400 bg-clip-text text-transparent">
                  Cordless Vacuum
                </span>
                <br />
                <span className="text-white">Freedom of Movement</span>
              </h1>
              <p className="text-2xl text-gray-300 mb-12 leading-relaxed">
                High suction in a compact body with USB‑C fast charging and washable HEPA. 
                Crevice/brush/hose tools handle sofas, carpets, keyboards and in‑car details with ease.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <a className="inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-slate-500 to-gray-600 text-white font-bold text-lg rounded-2xl hover:from-slate-600 hover:to-gray-700 transform hover:scale-105 transition-all duration-300 shadow-2xl" 
                   href={site.handheldCollection} target="_blank" rel="noreferrer">
                  <span>Explore All</span>
                  <svg className="ml-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a className="inline-flex items-center justify-center px-10 py-5 border-2 border-slate-400/30 text-white font-bold text-lg rounded-2xl hover:bg-slate-400 hover:text-gray-900 transition-all duration-300 backdrop-blur-sm" 
                   href={site.products.vm5} target="_blank" rel="noreferrer">
                  Learn VM5
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-slate-500/20 to-gray-500/20 rounded-3xl blur-3xl"></div>
              <img className="relative w-full rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500" 
                   src={images.hero[0]} alt="AutoBot cordless vacuum" />
            </div>
          </div>
        </div>
      </section>

      {/* 仪表板布局 - 技术规格 */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-gray-50">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Technical Specifications</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced technology meets practical design
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                metric: "12-20kPa",
                label: "Suction Power",
                description: "Professional grade suction performance",
                color: "from-slate-500 to-slate-600",
                icon: "⚡"
              },
              {
                metric: "45-60min",
                label: "Battery Life",
                description: "Extended cleaning sessions",
                color: "from-gray-500 to-gray-600",
                icon: "🔋"
              },
              {
                metric: "H13",
                label: "HEPA Filter",
                description: "Hospital-grade filtration",
                color: "from-zinc-500 to-zinc-600",
                icon: "🛡️"
              }
            ].map((spec) => (
              <div key={spec.label} className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 border border-slate-100">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${spec.color} text-white text-2xl rounded-2xl mb-6`}>
                  {spec.icon}
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{spec.metric}</div>
                <div className="text-xl font-semibold text-gray-700 mb-3">{spec.label}</div>
                <p className="text-gray-600 leading-relaxed">{spec.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 性能对比 - 仪表板风格 */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Performance Comparison</h2>
            <p className="text-xl text-gray-600">See how AutoBot compares to traditional vacuums</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                title: "Traditional Corded",
                features: ["Limited mobility", "Cord management", "Fixed location", "Higher noise"],
                color: "from-red-500 to-red-600",
                icon: "🔌"
              },
              {
                title: "AutoBot Cordless",
                features: ["Complete freedom", "No cords needed", "Go anywhere", "Quiet operation"],
                color: "from-green-500 to-green-600",
                icon: "🔋"
              }
            ].map((comparison) => (
              <div key={comparison.title} className="bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-500 border border-slate-100">
                <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${comparison.color} text-white text-3xl rounded-2xl mb-8`}>
                  {comparison.icon}
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-8">{comparison.title}</h3>
                <ul className="space-y-4">
                  {comparison.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-700 text-lg">
                      <span className={`w-3 h-3 rounded-full mr-4 ${comparison.color.includes('green') ? 'bg-green-500' : 'bg-red-500'}`}></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Showcase - Dashboard Grid */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-gray-50">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Cordless Solutions</h2>
            <p className="text-xl text-gray-600">Choose your perfect cordless vacuum</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.products.slice(0,6).map((src, idx) => (
              <a key={idx} 
                 href={idx<3? site.products.vm5 : site.products.vx4} 
                 target="_blank" 
                 rel="noreferrer" 
                 className="group block">
                <div className="bg-white rounded-3xl p-6 shadow-xl hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-500 border border-slate-100">
                  <div className="relative overflow-hidden rounded-2xl mb-6">
                    <img src={src} 
                         alt={`product-${idx}`} 
                         className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"/>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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

      {/* 技术优势 - 仪表板数据 */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Technology Advantages</h2>
            <p className="text-xl text-gray-600">Innovative features that set us apart</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: "100%",
                label: "Cordless Freedom",
                color: "from-slate-500 to-slate-600"
              },
              {
                number: "50%",
                label: "Less Noise",
                color: "from-gray-500 to-gray-600"
              },
              {
                number: "3x",
                label: "Faster Charging",
                color: "from-zinc-500 to-zinc-600"
              },
              {
                number: "99.9%",
                label: "Filtration Rate",
                color: "from-slate-600 to-gray-600"
              }
            ].map((advantage) => (
              <div key={advantage.label} className="text-center">
                <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${advantage.color} text-white text-2xl font-bold rounded-2xl mb-6`}>
                  {advantage.number}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{advantage.label}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - 仪表板风格 */}
      <section className="py-24 bg-gradient-to-r from-slate-600 to-gray-600">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-white/10 rounded-full mb-8">
            <span className="text-5xl">🔋</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
            Experience Cordless Freedom!
          </h2>
          <p className="text-2xl text-slate-100 mb-12 max-w-3xl mx-auto">
            Join thousands of users who have switched to AutoBot cordless technology
          </p>
          <a className="inline-flex items-center justify-center px-12 py-6 bg-white text-slate-600 font-bold text-xl rounded-2xl hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-2xl" 
             href={site.handheldCollection} target="_blank" rel="noreferrer">
            Shop Now
          </a>
        </div>
      </section>
    </Layout>
  )
}
