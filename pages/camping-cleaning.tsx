import Layout from '../components/Layout'
import { site, images } from '../data/autobot'

export default function CampingCleaning() {
  const title = 'Camping Cleaning | AutoBot Portable Car/Handheld Vacuum'
  const description = 'Portable cleaning for camping/vanlife/RV: cordless high suction, vacuum + blower/air pump, USB‑C fast charging, washable HEPA. Home & car.'
  const keywords = 'camping vacuum, car vacuum camping, portable vacuum blower, rv cleaning vacuum, vanlife vacuum, usb-c handheld vacuum, hepa handheld vacuum'
  const canonical = site.url + 'camping-cleaning'

  return (
    <Layout title={title} description={description} keywords={keywords} canonical={canonical}>
      {/* Hero Section - 故事板风格 */}
      <section className="relative min-h-screen bg-gradient-to-br from-green-800 via-emerald-800 to-teal-900 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        
        <div className="relative mx-auto max-w-7xl px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
            <div className="text-white">
              <div className="inline-flex items-center px-6 py-3 bg-green-500/20 backdrop-blur-sm rounded-full text-lg font-medium mb-8">
                <span className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></span>
                Outdoor Ready
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
                <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                  One-stop Cleaning
                </span>
                <br />
                <span className="text-white">for Camping & Vanlife</span>
              </h1>
              <p className="text-2xl text-gray-300 mb-12 leading-relaxed">
                Outdoors requires gear that is portable, multi‑purpose and long‑lasting. AutoBot cordless handheld lineup supports vacuum + blower/air pump combo, USB‑C fast charge and washable HEPA to handle dust, crumbs and inflating/deflating air mattresses with ease.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <a className="inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold text-lg rounded-2xl hover:from-green-600 hover:to-emerald-700 transform hover:scale-105 transition-all duration-300 shadow-2xl" 
                   href={site.handheldCollection} target="_blank" rel="noreferrer">
                  <span>Explore All</span>
                  <svg className="ml-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a className="inline-flex items-center justify-center px-10 py-5 border-2 border-green-400/30 text-white font-bold text-lg rounded-2xl hover:bg-green-400 hover:text-gray-900 transition-all duration-300 backdrop-blur-sm" 
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

      {/* 故事板布局 - 户外场景 */}
      <section className="py-24 bg-gradient-to-b from-green-50 to-emerald-50">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Outdoor Adventures</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Perfect for outdoor adventures and mobile living
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-12">
            {[
              {
                scene: "🏕️",
                title: "Camping Trip",
                description: "Clean your tent, sleeping bags, and camping gear with ease. The portable design fits perfectly in your camping equipment.",
                features: ["Tent cleaning", "Gear maintenance", "Portable design"],
                color: "from-green-500 to-green-600"
              },
              {
                scene: "🚐",
                title: "Van Life",
                description: "Keep your van interior spotless during long road trips. Perfect for cleaning seats, floors, and storage areas.",
                features: ["Van interior", "Road trip ready", "Compact storage"],
                color: "from-emerald-500 to-emerald-600"
              },
              {
                scene: "🏞️",
                title: "RV Adventures",
                description: "Maintain your RV's cleanliness on the go. Handle pet hair, food crumbs, and outdoor debris effortlessly.",
                features: ["RV maintenance", "Pet-friendly", "Multi-purpose"],
                color: "from-teal-500 to-teal-600"
              }
            ].map((story) => (
              <div key={story.title} className="relative">
                <div className="bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-500 border border-green-100">
                  <div className={`inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r ${story.color} text-white text-4xl rounded-3xl mb-8`}>
                    {story.scene}
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">{story.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-lg mb-8">{story.description}</p>
                  <ul className="space-y-3">
                    {story.features.map((feature) => (
                      <li key={feature} className="flex items-center text-gray-700">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Showcase - Story Layout */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Recommended Products</h2>
            <p className="text-xl text-gray-600">Perfect companions for your outdoor adventures</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {images.products.slice(0,4).map((src, idx) => (
              <a key={idx} 
                 href={idx<2? site.products.vx4 : site.products.vm5} 
                 target="_blank" 
                 rel="noreferrer" 
                 className="group block">
                <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-500 border border-green-100">
                  <div className="relative overflow-hidden rounded-2xl mb-8">
                    <img src={src} 
                         alt={`product-${idx}`} 
                         className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"/>
                    <div className="absolute inset-0 bg-gradient-to-t from-green-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="text-center">
                    <span className="text-xl font-semibold text-gray-700">View Details</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section - 对话式布局 */}
      <section className="py-24 bg-gradient-to-b from-green-50 to-emerald-50">
        <div className="mx-auto max-w-4xl px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Everything you need to know about outdoor cleaning</p>
          </div>
          
          <div className="space-y-8">
            {[
              {
                question: "How to charge outdoors?",
                answer: "USB‑C car charger and power bank are supported. Some models support fast charge so you can top up on the go."
              },
              {
                question: "What can the blower/air pump do?",
                answer: "Use it to blow dust off gear and inflate/deflate air pillows/mattresses — truly multi‑purpose."
              }
            ].map((faq, index) => (
              <div key={index} className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-green-100">
                <details className="group">
                  <summary className="font-bold text-2xl text-gray-900 cursor-pointer group-hover:text-green-600 transition-colors duration-300 flex items-center justify-between">
                    {faq.question}
                    <span className="text-green-500 text-3xl group-open:rotate-45 transition-transform duration-300">+</span>
                  </summary>
                  <p className="mt-6 text-gray-600 leading-relaxed text-lg">
                    {faq.answer}
                  </p>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - 故事化结尾 */}
      <section className="py-24 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-white/10 rounded-full mb-8">
            <span className="text-5xl">🏕️</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
            Ready for Your Next Adventure?
          </h2>
          <p className="text-2xl text-green-100 mb-12 max-w-3xl mx-auto">
            Keep your camping gear and RV spotless with AutoBot portable vacuum cleaners
          </p>
          <a className="inline-flex items-center justify-center px-12 py-6 bg-white text-green-600 font-bold text-xl rounded-2xl hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-2xl" 
             href={site.handheldCollection} target="_blank" rel="noreferrer">
            Shop Now
          </a>
        </div>
      </section>
    </Layout>
  )
}

export const config = { runtime: 'experimental-edge' }
