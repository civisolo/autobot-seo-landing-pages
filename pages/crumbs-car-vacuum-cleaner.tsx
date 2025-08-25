import Layout from '../components/Layout'
import { site, images } from '../data/autobot'

export default function CrumbsCarVacuumCleaner() {
  const title = 'Crumbs Car Vacuum Cleaner | AutoBot Professional Food Debris Cleaning'
  const description = 'Professional car vacuum cleaner designed for cleaning car crumbs and food debris, strong suction, quiet design, portable and lightweight, keeping your car always clean.'
  const keywords = 'crumbs car vacuum cleaner,food debris cleaning,car vacuum cleaner,automotive cleaning,crumbs vacuum cleaner'
  const canonical = site.url + 'crumbs-car-vacuum-cleaner'

  return (
    <Layout title={title} description={description} keywords={keywords} canonical={canonical}>
      {/* Hero Section - Lifestyle Design */}
      <section className="relative min-h-screen bg-gradient-to-br from-amber-900 via-orange-900 to-red-900 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        
        {/* Crumbs Decorative Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-32 left-16 w-8 h-8 bg-amber-300/30 rounded-full animate-bounce"></div>
          <div className="absolute top-48 right-24 w-6 h-6 bg-orange-300/30 rounded-full animate-bounce delay-500"></div>
          <div className="absolute bottom-40 left-1/4 w-4 h-4 bg-red-300/30 rounded-full animate-bounce delay-1000"></div>
          <div className="absolute bottom-60 right-1/3 w-5 h-5 bg-amber-300/30 rounded-full animate-bounce delay-1500"></div>
        </div>
        
        <div className="relative mx-auto max-w-7xl px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
            <div className="text-white">
              <div className="inline-flex items-center px-6 py-3 bg-amber-500/20 backdrop-blur-sm rounded-full text-lg font-medium mb-8 border border-amber-400/30">
                <span className="w-3 h-3 bg-amber-400 rounded-full mr-3 animate-pulse"></span>
                Professional Crumbs Cleaning
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
                <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                  Crumbs Cleaning
                </span>
                <br />
                <span className="text-white">Car Vacuum Cleaner</span>
              </h1>
              <p className="text-2xl text-gray-300 mb-12 leading-relaxed">
                Specially designed for cleaning car crumbs and food debris, high suction in a compact body with USB‑C fast charging and washable HEPA. 
                Crevice/brush/hose tools handle sofas, carpets, keyboards and in‑car details with ease.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <a className="inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold text-lg rounded-2xl hover:from-amber-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-300 shadow-2xl" 
                   href={site.handheldCollection} target="_blank" rel="noreferrer">
                  <span>Explore Products</span>
                  <svg className="ml-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                              <a className="inline-flex items-center justify-center px-10 py-5 border-2 border-amber-400/30 text-white font-bold text-lg rounded-2xl hover:bg-amber-400 hover:text-gray-900 transition-all duration-300 backdrop-blur-sm" 
                 href={site.products.vx4} target="_blank" rel="noreferrer">
                Learn VX4
              </a>
              <a className="inline-flex items-center justify-center px-10 py-5 border-2 border-white/30 text-white font-bold text-lg rounded-2xl hover:bg-white hover:text-amber-900 transition-all duration-300 backdrop-blur-sm" 
                 href="/">
                <svg className="mr-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Back to Home
              </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-3xl blur-3xl"></div>
              <img className="relative w-full rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500" 
                   src={images.hero[1]} alt="Crumbs Car Vacuum Cleaner" />
            </div>
          </div>
        </div>
      </section>

      {/* Cleaning Scenarios - Lifestyle Layout */}
      <section className="py-24 bg-gradient-to-b from-amber-50 to-orange-50">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Common Cleaning Scenarios</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Designed for various food debris cleaning scenarios
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                scene: "Breakfast Crumbs",
                description: "Clean breakfast crumbs and cookie debris",
                tips: ["Seat Gaps", "Dashboard", "Carpet"],
                color: "from-amber-500 to-amber-600",
                icon: "🍞"
              },
              {
                scene: "Snack Debris",
                description: "Clean chips, nuts and other snack crumbs",
                tips: ["Cup Holders", "Storage Compartments", "Door Panels"],
                color: "from-orange-500 to-orange-600",
                icon: "🍿"
              },
              {
                scene: "Spilled Drinks",
                description: "Clean beverage and coffee liquid residues",
                tips: ["Seat Surfaces", "Floor", "Dashboard"],
                color: "from-red-500 to-red-600",
                icon: "☕"
              },
              {
                scene: "Children's Food",
                description: "Clean food debris from children eating in car",
                tips: ["Car Seats", "Back Seats", "Windows"],
                color: "from-amber-600 to-orange-600",
                icon: "👶"
              },
              {
                scene: "Pet Food",
                description: "Clean pet food debris in the car",
                tips: ["Pet Mats", "Trunk", "Seats"],
                color: "from-orange-600 to-red-600",
                icon: "🐕"
              },
              {
                scene: "Takeout Debris",
                description: "Clean takeout food packaging and debris",
                tips: ["Passenger Seat", "Back Seat", "Trunk"],
                color: "from-red-600 to-amber-600",
                icon: "🍔"
              }
            ].map((item) => (
              <div key={item.scene} className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-500 border border-amber-100">
                <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${item.color} text-white text-3xl rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.scene}</h3>
                <p className="text-gray-600 leading-relaxed text-lg mb-6">{item.description}</p>
                <div className="space-y-2">
                  {item.tips.map((tip) => (
                    <div key={tip} className="flex items-center text-gray-700 text-sm">
                      <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                      {tip}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Advantages - Lifestyle Display */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Why Choose Us</h2>
            <p className="text-xl text-gray-600">Unique advantages designed for food debris cleaning</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {[
              {
                advantage: "Strong Suction",
                description: "Specially designed for crumbs and fine particles, ensuring thorough cleaning",
                benefit: "99% Cleaning Rate",
                color: "from-amber-500 to-amber-600",
                icon: "💨"
              },
              {
                advantage: "Quiet Design",
                description: "Low noise operation, won't disturb passengers or surroundings",
                benefit: "Below 60dB",
                color: "from-orange-500 to-orange-600",
                icon: "🔇"
              },
              {
                advantage: "Portable & Lightweight",
                description: "Compact body, easily fits in car storage compartments, ready to use anytime",
                benefit: "Only 1.2kg",
                color: "from-red-500 to-red-600",
                icon: "⚖️"
              },
              {
                advantage: "Fast Charging",
                description: "USB-C fast charging technology, fully charged in 30 minutes, always ready",
                benefit: "30min Fast Charge",
                color: "from-amber-600 to-orange-600",
                icon: "⚡"
              }
            ].map((feature) => (
              <div key={feature.advantage} className="flex items-start space-x-6">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${feature.color} text-white text-2xl rounded-2xl flex-shrink-0`}>
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.advantage}</h3>
                  <p className="text-gray-600 leading-relaxed text-lg mb-2">{feature.description}</p>
                  <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-amber-100 to-orange-100 text-amber-700 font-semibold rounded-full text-sm">
                    {feature.benefit}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Showcase - Lifestyle Grid */}
      <section className="py-24 bg-gradient-to-b from-amber-50 to-orange-50">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Crumbs Cleaning Specific Products</h2>
            <p className="text-xl text-gray-600">Product series carefully designed for food debris cleaning</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.products.slice(0,6).map((src, idx) => (
              <a key={idx} 
                 href={idx<3? site.products.vx4 : site.products.vm5} 
                 target="_blank" 
                 rel="noreferrer" 
                 className="group block">
                <div className="bg-white rounded-3xl p-6 shadow-xl hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-500 border border-amber-100">
                  <div className="relative overflow-hidden rounded-2xl mb-6">
                    <img src={src} 
                         alt={`Crumbs Car Vacuum Cleaner Product-${idx}`} 
                         className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"/>
                    <div className="absolute inset-0 bg-gradient-to-t from-amber-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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

      {/* CTA Section - Lifestyle Design */}
      <section className="py-24 bg-gradient-to-r from-amber-600 to-orange-600">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-white/10 rounded-full mb-8">
            <span className="text-5xl">🍞</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
            Say Goodbye to Car Crumbs Troubles!
          </h2>
          <p className="text-2xl text-amber-100 mb-12 max-w-3xl mx-auto">
            Keep your car always clean and enjoy a comfortable driving experience
          </p>
          <a className="inline-flex items-center justify-center px-12 py-6 bg-white text-amber-600 font-bold text-xl rounded-2xl hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-2xl" 
             href={site.handheldCollection} target="_blank" rel="noreferrer">
            Shop Now
          </a>
        </div>
      </section>
    </Layout>
  )
} 