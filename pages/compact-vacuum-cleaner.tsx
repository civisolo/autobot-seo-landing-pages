import Layout from '../components/Layout'
import { site, images } from '../data/autobot'

export default function CompactVacuumCleaner() {
  const title = 'Compact Vacuum Cleaner | AutoBot Small & Powerful'
  const description = 'AutoBot compact vacuum: small size, high suction, USB‑C fast charging, washable HEPA, rich attachments. Perfect for small spaces.'
  const keywords = 'compact vacuum cleaner, small vacuum, mini vacuum, usb-c compact vacuum, hepa compact vacuum'
  const canonical = site.url + 'compact-vacuum-cleaner'

  return (
    <Layout title={title} description={description} keywords={keywords} canonical={canonical}>
      {/* Hero Section - 产品目录风格 */}
      <section className="relative min-h-screen bg-gradient-to-br from-yellow-900 via-amber-900 to-orange-900 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        
        <div className="relative mx-auto max-w-7xl px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
            <div className="text-white">
              <div className="inline-flex items-center px-6 py-3 bg-yellow-500/20 backdrop-blur-sm rounded-full text-lg font-medium mb-8">
                <span className="w-3 h-3 bg-yellow-400 rounded-full mr-3 animate-pulse"></span>
                Compact Design
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
                <span className="bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent">
                  Compact Vacuum
                </span>
                <br />
                <span className="text-white">Big Performance</span>
              </h1>
              <p className="text-2xl text-gray-300 mb-12 leading-relaxed">
                High suction in a compact body with USB‑C fast charging and washable HEPA. 
                Crevice/brush/hose tools handle sofas, carpets, keyboards and in‑car details with ease.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <a className="inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-yellow-500 to-amber-600 text-white font-bold text-lg rounded-2xl hover:from-yellow-600 hover:to-amber-700 transform hover:scale-105 transition-all duration-300 shadow-2xl" 
                   href={site.handheldCollection} target="_blank" rel="noreferrer">
                  <span>Explore All</span>
                  <svg className="ml-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a className="inline-flex items-center justify-center px-10 py-5 border-2 border-yellow-400/30 text-white font-bold text-lg rounded-2xl hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300 backdrop-blur-sm" 
                   href={site.products.vm5} target="_blank" rel="noreferrer">
                  Learn VM5
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-amber-500/20 rounded-3xl blur-3xl"></div>
              <img className="relative w-full rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500" 
                   src={images.hero[1]} alt="AutoBot compact vacuum" />
            </div>
          </div>
        </div>
      </section>

      {/* 产品目录布局 - 型号对比 */}
      <section className="py-24 bg-gradient-to-b from-yellow-50 to-amber-50">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Product Catalog</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Compare our compact vacuum models and find your perfect match
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {[
              {
                model: "VM5",
                name: "Compact Pro",
                price: "$99.99",
                features: ["12kPa suction", "45min runtime", "USB-C charging", "HEPA filter", "3 attachments"],
                color: "from-yellow-500 to-yellow-600",
                badge: "Best Seller"
              },
              {
                model: "VX4",
                name: "Compact Elite",
                price: "$129.99",
                features: ["20kPa suction", "60min runtime", "Fast charging", "H13 filter", "5 attachments"],
                color: "from-amber-500 to-amber-600",
                badge: "Premium"
              }
            ].map((product) => (
              <div key={product.model} className="bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-500 border border-yellow-100">
                <div className="text-center mb-8">
                  <div className={`inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r ${product.color} text-white text-4xl font-bold rounded-3xl mb-6`}>
                    {product.model}
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h3>
                  <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-yellow-100 to-amber-100 text-yellow-700 font-semibold rounded-full text-sm mb-4">
                    {product.badge}
                  </div>
                  <div className="text-4xl font-bold text-gray-900">{product.price}</div>
                </div>
                <ul className="space-y-4 mb-8">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-700 text-lg">
                      <span className="w-2 h-2 bg-yellow-500 rounded-full mr-4"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a className="block w-full text-center py-4 bg-gradient-to-r from-yellow-500 to-amber-600 text-white font-bold rounded-2xl hover:from-yellow-600 hover:to-amber-700 transform hover:scale-105 transition-all duration-300" 
                   href={product.model === "VM5" ? site.products.vm5 : site.products.vx4} 
                   target="_blank" 
                   rel="noreferrer">
                  View Details
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 规格对比表 - 产品目录风格 */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Specification Comparison</h2>
            <p className="text-xl text-gray-600">Detailed comparison of our compact models</p>
          </div>
          
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-yellow-100">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-yellow-500 to-amber-600 text-white">
                  <tr>
                    <th className="px-8 py-6 text-left text-xl font-bold">Feature</th>
                    <th className="px-8 py-6 text-center text-xl font-bold">VM5</th>
                    <th className="px-8 py-6 text-center text-xl font-bold">VX4</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    { feature: "Suction Power", vm5: "12kPa", vx4: "20kPa" },
                    { feature: "Battery Life", vm5: "45 minutes", vx4: "60 minutes" },
                    { feature: "Charging Time", vm5: "3 hours", vx4: "2 hours" },
                    { feature: "Weight", vm5: "1.2kg", vx4: "1.4kg" },
                    { feature: "Attachments", vm5: "3 pieces", vx4: "5 pieces" },
                    { feature: "Filter Type", vm5: "HEPA", vx4: "H13 HEPA" }
                  ].map((row) => (
                    <tr key={row.feature} className="hover:bg-yellow-50 transition-colors duration-200">
                      <td className="px-8 py-6 text-lg font-semibold text-gray-900">{row.feature}</td>
                      <td className="px-8 py-6 text-center text-lg text-gray-700">{row.vm5}</td>
                      <td className="px-8 py-6 text-center text-lg text-gray-700">{row.vx4}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 产品展示 - 目录网格 */}
      <section className="py-24 bg-gradient-to-b from-yellow-50 to-amber-50">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Compact Solutions</h2>
            <p className="text-xl text-gray-600">Perfect for small spaces and tight corners</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {images.products.slice(0,4).map((src, idx) => (
              <a key={idx} 
                 href={idx<2? site.products.vm5 : site.products.vx4} 
                 target="_blank" 
                 rel="noreferrer" 
                 className="group block">
                <div className="bg-white rounded-3xl p-6 shadow-xl hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-500 border border-yellow-100">
                  <div className="relative overflow-hidden rounded-2xl mb-6">
                    <img src={src} 
                         alt={`product-${idx}`} 
                         className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"/>
                    <div className="absolute inset-0 bg-gradient-to-t from-yellow-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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

      {/* 使用场景 - 目录展示 */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Perfect For Small Spaces</h2>
            <p className="text-xl text-gray-600">Compact design meets powerful performance</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🏠",
                title: "Small Apartments",
                description: "Perfect for limited storage space and compact living areas",
                color: "from-yellow-500 to-yellow-600"
              },
              {
                icon: "🚗",
                title: "Car Interiors",
                description: "Easily clean tight spaces and hard-to-reach areas in vehicles",
                color: "from-amber-500 to-amber-600"
              },
              {
                icon: "💼",
                title: "Office Spaces",
                description: "Keep workstations and small offices clean without bulk",
                color: "from-orange-500 to-orange-600"
              }
            ].map((useCase) => (
              <div key={useCase.title} className="text-center">
                <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${useCase.color} text-white text-3xl rounded-2xl mb-6`}>
                  {useCase.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{useCase.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - 产品目录风格 */}
      <section className="py-24 bg-gradient-to-r from-yellow-600 to-amber-600">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-white/10 rounded-full mb-8">
            <span className="text-5xl">📦</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
            Choose Your Compact Solution!
          </h2>
          <p className="text-2xl text-yellow-100 mb-12 max-w-3xl mx-auto">
            Find the perfect compact vacuum for your space and needs
          </p>
          <a className="inline-flex items-center justify-center px-12 py-6 bg-white text-yellow-600 font-bold text-xl rounded-2xl hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-2xl" 
             href={site.handheldCollection} target="_blank" rel="noreferrer">
            Shop Now
          </a>
        </div>
      </section>
    </Layout>
  )
}
