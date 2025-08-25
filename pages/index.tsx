import Layout from '../components/Layout'
import { site, images } from '../data/autobot'
import Link from 'next/link'
import { getStaticProducts } from '../utils/sitemapParser'

export default function Home() {
  // 使用静态数据，后续可以改为动态读取sitemap
  const products = getStaticProducts()

  return (
    <Layout 
      title="AutoBot Vacuum Cleaner Products | Professional Cleaning Solutions"
      description="Explore AutoBot's comprehensive range of vacuum cleaner products. From handheld to car vacuums, portable to cordless solutions. Professional cleaning technology for every need."
      keywords="AutoBot vacuum cleaner, handheld vacuum, car vacuum, portable vacuum, cordless vacuum, compact vacuum, camping cleaning, pet cleaning, BYD car vacuum, crumbs cleaning"
      canonical="https://landing-pages.autobot.im/"
    >
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        
        <div className="relative mx-auto max-w-7xl px-4 py-20">
          <div className="text-center text-white">
            <div className="inline-flex items-center px-6 py-3 bg-blue-500/20 backdrop-blur-sm rounded-full text-lg font-medium mb-8 border border-blue-400/30">
              <span className="w-3 h-3 bg-blue-400 rounded-full mr-3 animate-pulse"></span>
              AutoBot Products
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                AutoBot Vacuum
              </span>
              <br />
              <span className="text-white">Products</span>
            </h1>
            <p className="text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Discover our comprehensive collection of professional vacuum cleaner products. 
              Each product features unique designs and specialized solutions for different cleaning needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a className="inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold text-lg rounded-2xl hover:from-blue-600 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-2xl" 
                 href={site.handheldCollection} target="_blank" rel="noreferrer">
                <span>Shop AutoBot</span>
                <svg className="ml-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Explore Our Products</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each product features unique designs and specialized solutions for different cleaning scenarios
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Link key={product.path} href={product.path} className="group block">
                <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-500 border border-gray-100 overflow-hidden">
                  <div className="relative overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={`${product.title} - ${product.subtitle}`}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      {product.title}
                    </h3>
                    <p className="text-lg font-semibold text-gray-600 mb-3">
                      {product.subtitle}
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {product.description}
                    </p>
                    <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors duration-300">
                      <span>View Product</span>
                      <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
            
            {/* Static Pages Link */}
            <Link href="/static-pages" className="group block">
              <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-500 border border-gray-100 overflow-hidden">
                <div className="relative overflow-hidden">
                  <img 
                    src="//autobot.im/cdn/shop/files/20250227140300_d4b5a701-da0c-4f48-b565-f10a02d52e31_600x.jpg?v=1740730349" 
                    alt="Static Landing Pages"
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4">
                    <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-purple-500 to-indigo-600 text-white text-sm font-semibold rounded-full">
                      Static Pages
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">
                    Static Landing Pages
                  </h3>
                  <p className="text-lg font-semibold text-gray-600 mb-3">
                    Specialized Campaign Pages
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Discover our specialized static landing pages for specific products and campaigns, optimized for maximum conversion.
                  </p>
                  <div className="flex items-center text-purple-600 font-semibold group-hover:text-purple-700 transition-colors duration-300">
                    <span>View Static Pages</span>
                    <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}