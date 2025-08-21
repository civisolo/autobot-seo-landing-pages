import Layout from '../components/Layout'
import { site, images } from '../data/autobot'

export default function PetFamilyCleaning() {
  const title = 'Pet Family Cleaning | AutoBot Cordless High Suction'
  const description = 'AutoBot pet family cleaning: cordless high suction, USB‑C fast charging, washable HEPA, rich attachments. Lightweight and quiet for home and car.'
  const keywords = 'pet vacuum cleaner, family vacuum cleaner, pet hair vacuum, cordless pet vacuum, hepa pet vacuum, quiet vacuum cleaner'
  const canonical = site.url + 'pet-family-cleaning'

  return (
    <Layout title={title} description={description} keywords={keywords} canonical={canonical}>
      {/* Hero Section with Family Theme */}
      <section className="relative bg-gradient-to-br from-pink-800 via-purple-800 to-indigo-900 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        
        <div className="relative mx-auto max-w-7xl px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-flex items-center px-4 py-2 bg-pink-500/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-pink-400 rounded-full mr-2 animate-pulse"></span>
                Family Friendly
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                  Pet Family
                </span>
                <br />
                <span className="text-white">Cleaning Solutions</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Keep your home clean and your pets happy with our family-friendly vacuum cleaners. 
                High suction, low noise, and washable HEPA filters make cleaning effortless.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold rounded-xl hover:from-pink-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg" 
                   href={site.handheldCollection} target="_blank" rel="noreferrer">
                  <span>Explore All</span>
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a className="inline-flex items-center justify-center px-8 py-4 border-2 border-pink-400/30 text-white font-bold rounded-xl hover:bg-pink-400 hover:text-gray-900 transition-all duration-300 backdrop-blur-sm" 
                   href={site.products.vm5} target="_blank" rel="noreferrer">
                  Learn VM5
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-3xl blur-3xl"></div>
              <img className="relative w-full rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500" 
                   src={images.hero[1]} alt="AutoBot pet family cleaning" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section with Family Theme */}
      <section className="py-20 bg-gradient-to-b from-pink-50 to-purple-50">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Perfect for Pet Families</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Designed with families and pets in mind
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🐕",
                title: "Pet Hair Ready",
                description: "Powerful suction to handle pet hair, dander, and messes",
                color: "from-pink-500 to-pink-600"
              },
              {
                icon: "🔇",
                title: "Ultra Quiet",
                description: "Low noise operation won't disturb pets or family members",
                color: "from-purple-500 to-purple-600"
              },
              {
                icon: "🛡️",
                title: "HEPA Filtration",
                description: "Captures pet allergens and keeps air clean for everyone",
                color: "from-indigo-500 to-indigo-600"
              },
              {
                icon: "🔋",
                title: "Long Battery Life",
                description: "Clean multiple rooms without interruption",
                color: "from-pink-600 to-purple-600"
              },
              {
                icon: "⚖️",
                title: "Lightweight Design",
                description: "Easy to carry and use around the house",
                color: "from-purple-600 to-indigo-600"
              },
              {
                icon: "🔧",
                title: "Family Safe",
                description: "Safe for children and pets with no exposed parts",
                color: "from-indigo-600 to-pink-600"
              }
            ].map((feature) => (
              <div key={feature.title} 
                   className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-pink-100">
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
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Family-Friendly Products</h2>
            <p className="text-xl text-gray-600">Keep your home clean and your pets happy</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {images.products.slice(0,4).map((src, idx) => (
              <a key={idx} 
                 href={idx<2? site.products.vm5 : site.products.vx4} 
                 target="_blank" 
                 rel="noreferrer" 
                 className="group block">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-pink-100">
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

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-pink-50 to-purple-50">
        <div className="mx-auto max-w-4xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Everything you need to know about pet-friendly cleaning</p>
          </div>
          
          <div className="space-y-6">
            <details className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-pink-100">
              <summary className="font-bold text-lg text-gray-900 cursor-pointer group-hover:text-pink-600 transition-colors duration-300">
                Is it safe for pets?
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Yes! Our vacuums are designed with safety in mind. No exposed parts, low noise operation, and HEPA filtration to keep the air clean for your pets.
              </p>
            </details>
            
            <details className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-pink-100">
              <summary className="font-bold text-lg text-gray-900 cursor-pointer group-hover:text-pink-600 transition-colors duration-300">
                How well does it handle pet hair?
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Our vacuums feature powerful suction and specialized attachments that effectively remove pet hair from carpets, furniture, and hard surfaces.
              </p>
            </details>
            
            <details className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-pink-100">
              <summary className="font-bold text-lg text-gray-900 cursor-pointer group-hover:text-pink-600 transition-colors duration-300">
                Will it scare my pets?
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Our vacuums operate at low noise levels, making them much less likely to startle pets compared to traditional vacuum cleaners.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-600 to-purple-600">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Give Your Family the Best!
          </h2>
          <p className="text-xl text-pink-100 mb-8">
            Keep your home clean and your pets happy with AutoBot family-friendly vacuum cleaners
          </p>
          <a className="inline-flex items-center justify-center px-8 py-4 bg-white text-pink-600 font-bold rounded-xl hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg" 
             href={site.handheldCollection} target="_blank" rel="noreferrer">
            Shop Now
          </a>
        </div>
      </section>
    </Layout>
  )
}

export const config = { runtime: 'experimental-edge' }
