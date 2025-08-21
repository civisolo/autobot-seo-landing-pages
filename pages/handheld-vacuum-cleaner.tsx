import Layout from '../components/Layout'
import { site, images } from '../data/autobot'

export default function HandheldVacuumCleaner() {
  const title = 'Handheld Vacuum Cleaner | AutoBot Cordless High Suction'
  const description = 'AutoBot handheld vacuum: cordless high suction, USB‑C fast charging, washable HEPA, rich attachments. Lightweight and quiet for home and car.'
  const keywords = 'handheld vacuum cleaner, cordless handheld vacuum, usb-c handheld, hepa handheld vacuum, portable vacuum'
  const canonical = site.url + 'handheld-vacuum-cleaner'

  return (
    <Layout title={title} description={description} keywords={keywords} canonical={canonical}>
      {/* Hero Section - 全屏背景 */}
      <section className="relative min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative mx-auto max-w-7xl px-4 py-20">
          <div className="text-center text-white">
            <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-lg font-medium mb-8">
              <span className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></span>
              Cordless Technology
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Cordless Handheld
              </span>
              <br />
              <span className="text-white">Cleaning, Anywhere</span>
            </h1>
            <p className="text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              High suction in a compact body with USB‑C fast charging and washable HEPA. 
              Crevice/brush/hose tools handle sofas, carpets, keyboards and in‑car details with ease.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a className="inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold text-lg rounded-2xl hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-2xl" 
                 href={site.handheldCollection} target="_blank" rel="noreferrer">
                <span>Explore All</span>
                <svg className="ml-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a className="inline-flex items-center justify-center px-10 py-5 border-2 border-white/30 text-white font-bold text-lg rounded-2xl hover:bg-white hover:text-blue-900 transition-all duration-300 backdrop-blur-sm" 
                 href={site.products.vm5} target="_blank" rel="noreferrer">
                Learn VM5
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 特色功能卡片网格 */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Key Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover what makes our handheld vacuum cleaners the perfect choice for modern homes
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                icon: "⚡",
                title: "High Suction",
                description: "12–20kPa class performance for daily quick clean",
                color: "from-blue-500 to-blue-600",
                bgColor: "bg-blue-50"
              },
              {
                icon: "🔋",
                title: "USB‑C Fast Charge",
                description: "Charge with car chargers or power banks",
                color: "from-green-500 to-green-600",
                bgColor: "bg-green-50"
              },
              {
                icon: "🛡️",
                title: "Washable HEPA (H13)",
                description: "Effective filtration and easy maintenance",
                color: "from-purple-500 to-purple-600",
                bgColor: "bg-purple-50"
              },
              {
                icon: "🔇",
                title: "Low Noise",
                description: "Lower disturbance for families and pets",
                color: "from-indigo-500 to-indigo-600",
                bgColor: "bg-indigo-50"
              },
              {
                icon: "⚖️",
                title: "Lightweight",
                description: "Carry anywhere, store easily",
                color: "from-pink-500 to-pink-600",
                bgColor: "bg-pink-50"
              },
              {
                icon: "🔧",
                title: "Rich Attachments",
                description: "Crevice/brush/hose cover multiple scenarios",
                color: "from-orange-500 to-orange-600",
                bgColor: "bg-orange-50"
              }
            ].map((feature) => (
              <div key={feature.title} 
                   className={`group ${feature.bgColor} rounded-3xl p-10 shadow-xl hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-500 border border-gray-100`}>
                <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${feature.color} text-white text-3xl rounded-2xl mb-8 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 产品展示 - 瀑布流布局 */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Recommended Products</h2>
            <p className="text-xl text-gray-600">Choose the perfect handheld vacuum for your needs</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {images.products.slice(0,4).map((src, idx) => (
              <a key={idx} 
                 href={idx<2? site.products.vm5 : site.products.vx4} 
                 target="_blank" 
                 rel="noreferrer" 
                 className="group block">
                <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-500 border border-gray-100">
                  <div className="relative overflow-hidden rounded-2xl mb-6">
                    <img src={src} 
                         alt={`product-${idx}`} 
                         className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"/>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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

      {/* CTA Section - 全宽背景 */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
            Ready to Experience Cordless Freedom?
          </h2>
          <p className="text-2xl text-blue-100 mb-12 max-w-3xl mx-auto">
            Join thousands of satisfied customers who have upgraded to AutoBot handheld vacuum cleaners
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
