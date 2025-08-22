import Layout from '../components/Layout'
import { site, images } from '../data/autobot'

export default function PetFamilyCleaning() {
  const title = 'Pet Family Cleaning | AutoBot Cordless High Suction'
  const description = 'AutoBot pet vacuum: cordless high suction, USB‑C fast charging, washable HEPA, rich attachments. Lightweight and quiet for home and car.'
  const keywords = 'pet vacuum cleaner, cordless pet vacuum, usb-c pet vacuum, hepa pet vacuum, portable pet vacuum'
  const canonical = site.url + 'pet-family-cleaning'

  return (
    <Layout title={title} description={description} keywords={keywords} canonical={canonical}>
      {/* Hero Section - 画廊风格 */}
      <section className="relative min-h-screen bg-gradient-to-br from-purple-900 via-pink-900 to-rose-900 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        
        <div className="relative mx-auto max-w-7xl px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
            <div className="text-white">
              <div className="inline-flex items-center px-6 py-3 bg-purple-500/20 backdrop-blur-sm rounded-full text-lg font-medium mb-8">
                <span className="w-3 h-3 bg-purple-400 rounded-full mr-3 animate-pulse"></span>
                Pet-Friendly Design
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Pet Family
                </span>
                <br />
                <span className="text-white">Cleaning Solution</span>
              </h1>
              <p className="text-2xl text-gray-300 mb-12 leading-relaxed">
                High suction in a compact body with USB‑C fast charging and washable HEPA. 
                Crevice/brush/hose tools handle sofas, carpets, keyboards and in‑car details with ease.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <a className="inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-bold text-lg rounded-2xl hover:from-purple-600 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-2xl" 
                   href={site.handheldCollection} target="_blank" rel="noreferrer">
                  <span>Explore All</span>
                  <svg className="ml-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a className="inline-flex items-center justify-center px-10 py-5 border-2 border-purple-400/30 text-white font-bold text-lg rounded-2xl hover:bg-purple-400 hover:text-gray-900 transition-all duration-300 backdrop-blur-sm" 
                   href={site.products.vm5} target="_blank" rel="noreferrer">
                  Learn VM5
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-3xl"></div>
              <img className="relative w-full rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500" 
                   src={images.hero[0]} alt="AutoBot pet cleaning" />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Layout - Pet Cleaning Scenarios */}
      <section className="py-24 bg-gradient-to-b from-purple-50 to-pink-50">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Pet Cleaning Gallery</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how AutoBot vacuums handle every pet cleaning challenge
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: "🐕",
                title: "Dog Hair Removal",
                description: "Efficiently remove dog hair from furniture, carpets, and car seats with powerful suction.",
                stats: "99% hair removal",
                color: "from-purple-500 to-purple-600"
              },
              {
                image: "🐱",
                title: "Cat Litter Cleanup",
                description: "Quick cleanup of cat litter spills and tracking with precision attachments.",
                stats: "Instant cleanup",
                color: "from-pink-500 to-pink-600"
              },
              {
                image: "🦜",
                title: "Bird Feathers",
                description: "Gentle yet effective cleaning of bird feathers and seed debris.",
                stats: "Gentle suction",
                color: "from-rose-500 to-rose-600"
              },
              {
                image: "🐰",
                title: "Small Pet Messes",
                description: "Handle hay, bedding, and food debris from rabbits, hamsters, and other small pets.",
                stats: "Versatile cleaning",
                color: "from-purple-600 to-pink-600"
              },
              {
                image: "🐾",
                title: "Paw Prints",
                description: "Clean muddy paw prints from floors and carpets with ease.",
                stats: "Deep cleaning",
                color: "from-pink-600 to-rose-600"
              },
              {
                image: "🏠",
                title: "Pet Bed Cleaning",
                description: "Refresh pet beds and sleeping areas with powerful yet quiet operation.",
                stats: "Quiet operation",
                color: "from-rose-600 to-purple-600"
              }
            ].map((gallery) => (
              <div key={gallery.title} className="group relative">
                <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-500 border border-purple-100 overflow-hidden">
                  <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${gallery.color} text-white text-3xl rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {gallery.image}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{gallery.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-lg mb-6">{gallery.description}</p>
                  <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 font-semibold rounded-full text-sm">
                    {gallery.stats}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Showcase - Gallery Wall Layout */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Pet-Friendly Products</h2>
            <p className="text-xl text-gray-600">Designed with pets and families in mind</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.products.slice(0,6).map((src, idx) => (
              <a key={idx} 
                 href={idx<3? site.products.vm5 : site.products.vx4} 
                 target="_blank" 
                 rel="noreferrer" 
                 className="group block">
                <div className="bg-white rounded-3xl p-6 shadow-xl hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-500 border border-purple-100">
                  <div className="relative overflow-hidden rounded-2xl mb-6">
                    <img src={src} 
                         alt={`product-${idx}`} 
                         className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"/>
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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

      {/* Special Features - Gallery Display */}
      <section className="py-24 bg-gradient-to-b from-purple-50 to-pink-50">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Pet Cleaning Features</h2>
            <p className="text-xl text-gray-600">Specialized features for pet owners</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                icon: "🔇",
                title: "Low Noise Operation",
                description: "Quiet enough not to startle pets during cleaning sessions",
                color: "from-purple-500 to-purple-600"
              },
              {
                icon: "🛡️",
                title: "HEPA Filtration",
                description: "Captures pet dander and allergens for cleaner air",
                color: "from-pink-500 to-pink-600"
              },
              {
                icon: "🔋",
                title: "Long Battery Life",
                description: "Extended cleaning sessions without interruption",
                color: "from-rose-500 to-rose-600"
              },
              {
                icon: "🔧",
                title: "Specialized Attachments",
                description: "Tools designed for pet hair and debris removal",
                color: "from-purple-600 to-pink-600"
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
        </div>
      </section>

      {/* CTA Section - 画廊风格 */}
      <section className="py-24 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-white/10 rounded-full mb-8">
            <span className="text-5xl">🐾</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
            Keep Your Home Pet-Friendly!
          </h2>
          <p className="text-2xl text-purple-100 mb-12 max-w-3xl mx-auto">
            Join thousands of pet owners who trust AutoBot for their cleaning needs
          </p>
          <a className="inline-flex items-center justify-center px-12 py-6 bg-white text-purple-600 font-bold text-xl rounded-2xl hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-2xl" 
             href={site.handheldCollection} target="_blank" rel="noreferrer">
            Shop Now
          </a>
        </div>
      </section>
    </Layout>
  )
}

export const config = { runtime: 'experimental-edge' }
