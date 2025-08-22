import Layout from '../components/Layout'
import { site, images } from '../data/autobot'

export default function CarVacuumCleaner() {
  const title = 'Car Vacuum Cleaner | AutoBot Cordless High Suction'
  const description = 'AutoBot car vacuum: cordless high suction, USB‑C fast charging, washable HEPA, rich attachments. Lightweight and quiet for home and car.'
  const keywords = 'car vacuum cleaner, cordless car vacuum, usb-c car vacuum, hepa car vacuum, portable car vacuum'
  const canonical = site.url + 'car-vacuum-cleaner'

  return (
    <Layout title={title} description={description} keywords={keywords} canonical={canonical}>
      {/* Hero Section - 分屏布局 */}
      <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-orange-900 to-red-900 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        
        <div className="relative mx-auto max-w-7xl px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
            <div className="text-white">
              <div className="inline-flex items-center px-6 py-3 bg-orange-500/20 backdrop-blur-sm rounded-full text-lg font-medium mb-8">
                <span className="w-3 h-3 bg-orange-400 rounded-full mr-3 animate-pulse"></span>
                Automotive Grade
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
                <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                  Car Vacuum
                </span>
                <br />
                <span className="text-white">Professional Grade</span>
              </h1>
              <p className="text-2xl text-gray-300 mb-12 leading-relaxed">
                High suction in a compact body with USB‑C fast charging and washable HEPA. 
                Crevice/brush/hose tools handle sofas, carpets, keyboards and in‑car details with ease.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <a className="inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold text-lg rounded-2xl hover:from-orange-600 hover:to-red-700 transform hover:scale-105 transition-all duration-300 shadow-2xl" 
                   href={site.handheldCollection} target="_blank" rel="noreferrer">
                  <span>Explore All</span>
                  <svg className="ml-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a className="inline-flex items-center justify-center px-10 py-5 border-2 border-orange-400/30 text-white font-bold text-lg rounded-2xl hover:bg-orange-400 hover:text-gray-900 transition-all duration-300 backdrop-blur-sm" 
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

      {/* 时间轴布局 - 使用流程 */}
      <section className="py-24 bg-gray-100">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Car Cleaning Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional car cleaning made simple with our step-by-step process
            </p>
          </div>
          
          <div className="relative">
            {/* 时间轴线 */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-orange-500 to-red-500"></div>
            
            <div className="space-y-16">
              {[
                {
                  step: "01",
                  title: "Prepare Your Tools",
                  description: "Unpack your AutoBot car vacuum and ensure all attachments are ready",
                  icon: "🔧",
                  color: "from-orange-500 to-orange-600"
                },
                {
                  step: "02",
                  title: "Start with Interior",
                  description: "Begin cleaning from the top down - dashboard, seats, then floor",
                  icon: "🚗",
                  color: "from-red-500 to-red-600"
                },
                {
                  step: "03",
                  title: "Use Attachments",
                  description: "Switch between crevice tool, brush, and hose for different surfaces",
                  icon: "🔍",
                  color: "from-orange-600 to-red-600"
                },
                {
                  step: "04",
                  title: "Final Touch",
                  description: "Clean cup holders, vents, and hard-to-reach areas",
                  icon: "✨",
                  color: "from-red-600 to-orange-600"
                }
              ].map((item, index) => (
                <div key={item.step} className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  {/* 时间轴点 */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-orange-500 to-red-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                  
                  {/* 内容卡片 */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}>
                    <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 border border-gray-100">
                      <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${item.color} text-white text-2xl rounded-2xl mb-6`}>
                        {item.icon}
                      </div>
                      <div className="text-4xl font-bold text-gray-300 mb-4">{item.step}</div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed text-lg">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase - Mosaic Layout */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Recommended Car Vacuums</h2>
            <p className="text-xl text-gray-600">Professional grade cleaning for your vehicle</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {images.products.slice(0,4).map((src, idx) => (
              <a key={idx} 
                 href={idx<2? site.products.vx4 : site.products.vm5} 
                 target="_blank" 
                 rel="noreferrer" 
                 className="group block">
                <div className="bg-white rounded-3xl p-6 shadow-xl hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-500 border border-gray-200">
                  <div className="relative overflow-hidden rounded-2xl mb-6">
                    <img src={src} 
                         alt={`product-${idx}`} 
                         className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"/>
                    <div className="absolute inset-0 bg-gradient-to-t from-orange-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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

      {/* CTA Section - 分屏布局 */}
      <section className="py-24 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-white">
              <h2 className="text-4xl lg:text-5xl font-bold mb-8">
                Keep Your Car Spotless!
              </h2>
              <p className="text-2xl text-orange-100 mb-8 leading-relaxed">
                Professional grade car cleaning with AutoBot vacuum cleaners. 
                Experience the difference that quality tools make.
              </p>
              <a className="inline-flex items-center justify-center px-12 py-6 bg-white text-orange-600 font-bold text-xl rounded-2xl hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-2xl" 
                 href={site.handheldCollection} target="_blank" rel="noreferrer">
                Shop Now
              </a>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-32 h-32 bg-white/10 rounded-full mb-8">
                <span className="text-6xl">🚗</span>
              </div>
              <p className="text-xl text-orange-100">Professional car care starts here</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
