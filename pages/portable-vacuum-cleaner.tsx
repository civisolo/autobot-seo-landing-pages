import Layout from '../components/Layout'
import { site, images } from '../data/autobot'

export default function PortableVacuumCleaner() {
  const title = 'Portable Vacuum Cleaner | AutoBot Cordless High Suction'
  const description = 'AutoBot portable vacuum: cordless high suction, USB‑C fast charging, washable HEPA, rich attachments. Lightweight and quiet for home and car.'
  const keywords = 'portable vacuum cleaner, cordless portable vacuum, usb-c portable vacuum, hepa portable vacuum, compact vacuum'
  const canonical = site.url + 'portable-vacuum-cleaner'

  return (
    <Layout title={title} description={description} keywords={keywords} canonical={canonical}>
      {/* Hero Section - 杂志风格 */}
      <section className="relative min-h-screen bg-gradient-to-br from-indigo-900 via-blue-900 to-cyan-900 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        
        <div className="relative mx-auto max-w-7xl px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
            <div className="text-white">
              <div className="inline-flex items-center px-6 py-3 bg-indigo-500/20 backdrop-blur-sm rounded-full text-lg font-medium mb-8">
                <span className="w-3 h-3 bg-indigo-400 rounded-full mr-3 animate-pulse"></span>
                Portable Design
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
                <span className="bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">
                  Portable Vacuum
                </span>
                <br />
                <span className="text-white">Go Anywhere</span>
              </h1>
              <p className="text-2xl text-gray-300 mb-12 leading-relaxed">
                High suction in a compact body with USB‑C fast charging and washable HEPA. 
                Crevice/brush/hose tools handle sofas, carpets, keyboards and in‑car details with ease.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <a className="inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-indigo-500 to-blue-600 text-white font-bold text-lg rounded-2xl hover:from-indigo-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-2xl" 
                   href={site.handheldCollection} target="_blank" rel="noreferrer">
                  <span>Explore All</span>
                  <svg className="ml-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a className="inline-flex items-center justify-center px-10 py-5 border-2 border-indigo-400/30 text-white font-bold text-lg rounded-2xl hover:bg-indigo-400 hover:text-gray-900 transition-all duration-300 backdrop-blur-sm" 
                   href={site.products.vx4} target="_blank" rel="noreferrer">
                  Learn VX4
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-blue-500/20 rounded-3xl blur-3xl"></div>
              <img className="relative w-full rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500" 
                   src={images.hero[1]} alt="AutoBot portable vacuum" />
            </div>
          </div>
        </div>
      </section>

      {/* 杂志式布局 - 便携性展示 */}
      <section className="py-24 bg-gradient-to-b from-indigo-50 to-blue-50">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Portability Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Designed for maximum portability and convenience
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="space-y-8">
              {[
                {
                  icon: "📱",
                  title: "Compact Size",
                  description: "Fits easily in small spaces and travel bags",
                  color: "from-indigo-500 to-indigo-600"
                },
                {
                  icon: "🔋",
                  title: "USB-C Charging",
                  description: "Charge anywhere with car chargers or power banks",
                  color: "from-blue-500 to-blue-600"
                },
                {
                  icon: "⚖️",
                  title: "Lightweight Design",
                  description: "Easy to carry and use for extended periods",
                  color: "from-cyan-500 to-cyan-600"
                }
              ].map((feature) => (
                <div key={feature.title} className="flex items-start space-x-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${feature.color} text-white text-2xl rounded-2xl flex-shrink-0`}>
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-lg">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-white rounded-3xl p-10 shadow-xl">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-indigo-500 to-blue-600 text-white text-4xl rounded-3xl mb-8">
                  🎒
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Travel Ready</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Perfect companion for business trips, vacations, and daily commutes
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 使用场景 - 杂志文章布局 */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Perfect For Every Situation</h2>
            <p className="text-xl text-gray-600">Versatile cleaning solutions for modern lifestyles</p>
          </div>
          
          <div className="space-y-16">
            {[
              {
                title: "Office & Workspace",
                description: "Keep your desk, keyboard, and workspace clean with precision attachments. Perfect for removing crumbs, dust, and small debris.",
                image: "💼",
                color: "from-indigo-500 to-indigo-600"
              },
              {
                title: "Car Interior",
                description: "Clean car seats, floor mats, and hard-to-reach areas. Compact design fits perfectly in your vehicle's storage compartments.",
                image: "🚗",
                color: "from-blue-500 to-blue-600"
              },
              {
                title: "Home Quick Clean",
                description: "Handle daily messes, pet hair, and food spills with powerful suction. Lightweight design makes cleaning effortless.",
                image: "🏠",
                color: "from-cyan-500 to-cyan-600"
              }
            ].map((article, index) => (
              <div key={article.title} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${article.color} text-white text-3xl rounded-2xl mb-6`}>
                    {article.image}
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">{article.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-xl">{article.description}</p>
                </div>
                <div className={`bg-gradient-to-br ${article.color} rounded-3xl p-12 text-center text-white ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="text-6xl mb-6">{article.image}</div>
                  <h4 className="text-2xl font-bold mb-4">Perfect Solution</h4>
                  <p className="text-indigo-100">Designed specifically for this use case</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Showcase - Magazine Style */}
      <section className="py-24 bg-gradient-to-b from-indigo-50 to-blue-50">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Portable Solutions</h2>
            <p className="text-xl text-gray-600">Choose the perfect portable vacuum for your needs</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {images.products.slice(0,4).map((src, idx) => (
              <a key={idx} 
                 href={idx<2? site.products.vx4 : site.products.vm5} 
                 target="_blank" 
                 rel="noreferrer" 
                 className="group block">
                <div className="bg-white rounded-3xl p-6 shadow-xl hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-500 border border-indigo-100">
                  <div className="relative overflow-hidden rounded-2xl mb-6">
                    <img src={src} 
                         alt={`product-${idx}`} 
                         className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"/>
                    <div className="absolute inset-0 bg-gradient-to-t from-indigo-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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

      {/* CTA Section - 杂志风格 */}
      <section className="py-24 bg-gradient-to-r from-indigo-600 to-blue-600">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-white/10 rounded-full mb-8">
            <span className="text-5xl">🎒</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
            Take Cleaning Anywhere!
          </h2>
          <p className="text-2xl text-indigo-100 mb-12 max-w-3xl mx-auto">
            Experience the freedom of portable cleaning with AutoBot vacuum cleaners
          </p>
          <a className="inline-flex items-center justify-center px-12 py-6 bg-white text-indigo-600 font-bold text-xl rounded-2xl hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-2xl" 
             href={site.handheldCollection} target="_blank" rel="noreferrer">
            Shop Now
          </a>
        </div>
      </section>
    </Layout>
  )
}
