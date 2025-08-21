import Layout from '../components/Layout'
import { site, images } from '../data/autobot'

export default function CampingCleaning() {
  const title = 'Camping Cleaning | AutoBot Portable Car/Handheld Vacuum'
  const description = 'Portable cleaning for camping/vanlife/RV: cordless high suction, vacuum + blower/air pump, USB‑C fast charging, washable HEPA. Home & car.'
  const keywords = 'camping vacuum, car vacuum camping, portable vacuum blower, rv cleaning vacuum, vanlife vacuum, usb-c handheld vacuum, hepa handheld vacuum'
  const canonical = site.url + 'camping-cleaning'

  return (
    <Layout title={title} description={description} keywords={keywords} canonical={canonical}>
      {/* Hero Section with Nature Theme */}
      <section className="relative bg-gradient-to-br from-green-800 via-emerald-800 to-teal-900 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        
        <div className="relative mx-auto max-w-7xl px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-flex items-center px-4 py-2 bg-green-500/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                Outdoor Ready
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                  One-stop Cleaning
                </span>
                <br />
                <span className="text-white">for Camping & Vanlife</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Outdoors requires gear that is portable, multi‑purpose and long‑lasting. AutoBot cordless handheld lineup supports vacuum + blower/air pump combo, USB‑C fast charge and washable HEPA to handle dust, crumbs and inflating/deflating air mattresses with ease.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-xl hover:from-green-600 hover:to-emerald-700 transform hover:scale-105 transition-all duration-300 shadow-lg" 
                   href={site.handheldCollection} target="_blank" rel="noreferrer">
                  <span>Explore All</span>
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a className="inline-flex items-center justify-center px-8 py-4 border-2 border-green-400/30 text-white font-bold rounded-xl hover:bg-green-400 hover:text-gray-900 transition-all duration-300 backdrop-blur-sm" 
                   href={site.products.vx4} target="_blank" rel="noreferrer">
                  Learn VX4
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-3xl blur-3xl"></div>
              <img className="relative w-full rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500" 
                   src={images.hero[0]} alt="AutoBot camping cleaning" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section with Outdoor Theme */}
      <section className="py-20 bg-gradient-to-b from-green-50 to-emerald-50">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Why It Fits Camping/RV</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Perfect for outdoor adventures and mobile living
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🏕️",
                title: "Cordless High Suction",
                description: "12–20kPa performance in a compact body for quick tent cleanup",
                color: "from-green-500 to-green-600"
              },
              {
                icon: "💨",
                title: "Vacuum + Blower/Air Pump",
                description: "Blow dust and inflate/deflate pillows/mattresses with one device",
                color: "from-emerald-500 to-emerald-600"
              },
              {
                icon: "🔋",
                title: "USB‑C Fast Charging",
                description: "Works with car chargers and power banks to stay powered outdoors",
                color: "from-teal-500 to-teal-600"
              },
              {
                icon: "🛡️",
                title: "Washable HEPA (H13)",
                description: "Effective filtration, easy maintenance and low cost",
                color: "from-green-600 to-emerald-600"
              },
              {
                icon: "🔇",
                title: "Lightweight & Low Noise",
                description: "Carry anywhere and keep quiet at night in campgrounds",
                color: "from-emerald-600 to-teal-600"
              },
              {
                icon: "🔧",
                title: "Rich Attachments",
                description: "Crevice/brush/hose cover tent, trunk, tables and more",
                color: "from-teal-600 to-green-600"
              }
            ].map((feature) => (
              <div key={feature.title} 
                   className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-green-100">
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
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Recommended Products</h2>
            <p className="text-xl text-gray-600">Perfect companions for your outdoor adventures</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {images.products.slice(0,4).map((src, idx) => (
              <a key={idx} 
                 href={idx<2? site.products.vx4 : site.products.vm5} 
                 target="_blank" 
                 rel="noreferrer" 
                 className="group block">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-green-100">
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
      <section className="py-20 bg-gradient-to-b from-green-50 to-emerald-50">
        <div className="mx-auto max-w-4xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Everything you need to know about outdoor cleaning</p>
          </div>
          
          <div className="space-y-6">
            <details className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-green-100">
              <summary className="font-bold text-lg text-gray-900 cursor-pointer group-hover:text-green-600 transition-colors duration-300">
                How to charge outdoors?
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                USB‑C car charger and power bank are supported. Some models support fast charge so you can top up on the go.
              </p>
            </details>
            
            <details className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-green-100">
              <summary className="font-bold text-lg text-gray-900 cursor-pointer group-hover:text-green-600 transition-colors duration-300">
                What can the blower/air pump do?
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Use it to blow dust off gear and inflate/deflate air pillows/mattresses — truly multi‑purpose.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready for Your Next Adventure?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Keep your camping gear and RV spotless with AutoBot portable vacuum cleaners
          </p>
          <a className="inline-flex items-center justify-center px-8 py-4 bg-white text-green-600 font-bold rounded-xl hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg" 
             href={site.handheldCollection} target="_blank" rel="noreferrer">
            Shop Now
          </a>
        </div>
      </section>
    </Layout>
  )
}

export const config = { runtime: 'experimental-edge' }
