import Layout from '../components/Layout'
import { site } from '../data/autobot'
import Link from 'next/link'

export default function StaticPages() {
  const staticPages = [
    {
      path: '/static-pages/compressed-air-duster.html',
      title: 'Compressed Air Duster',
      subtitle: 'Professional 2-in-1 Blow & Suction Cleaning Solution',
      description: 'Discover AutoBot\'s innovative compressed air duster - the ultimate 2-in-1 blow & suction cleaning tool for cars, keyboards, PC cleaning, and more.',
      image: '//autobot.im/cdn/shop/files/20250227140300_d4b5a701-da0c-4f48-b565-f10a02d52e31_600x.jpg?v=1740730349',
      color: 'from-purple-500 to-purple-600',
      keywords: 'compressed air duster, electric air duster, car vacuum, keyboard cleaner, PC cleaning'
    }
  ]

  return (
    <Layout 
      title="AutoBot Static Landing Pages | Professional Cleaning Solutions"
      description="Explore AutoBot's static landing pages for specialized cleaning products. Professional solutions for every cleaning need."
      keywords="AutoBot static pages, compressed air duster, landing pages, cleaning solutions"
      canonical="https://landing-pages.autobot.im/static-pages"
    >
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        
        <div className="relative mx-auto max-w-7xl px-4 py-20">
          <div className="text-center text-white">
            <div className="inline-flex items-center px-6 py-3 bg-purple-500/20 backdrop-blur-sm rounded-full text-lg font-medium mb-8 border border-purple-400/30">
              <span className="w-3 h-3 bg-purple-400 rounded-full mr-3 animate-pulse"></span>
              Static Landing Pages
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                AutoBot Static
              </span>
              <br />
              <span className="text-white">Landing Pages</span>
            </h1>
            <p className="text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Discover our specialized static landing pages for specific products and campaigns. 
              Each page is optimized for maximum conversion and user engagement.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a className="inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-bold text-lg rounded-2xl hover:from-purple-600 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-2xl" 
                 href={site.handheldCollection} target="_blank" rel="noreferrer">
                <span>Shop AutoBot</span>
                <svg className="ml-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a className="inline-flex items-center justify-center px-10 py-5 border-2 border-white/30 text-white font-bold text-lg rounded-2xl hover:bg-white hover:text-purple-900 transition-all duration-300 backdrop-blur-sm" 
                 href="/">
                <svg className="mr-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Back to Home
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Static Pages Grid */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Static Landing Pages</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized landing pages optimized for specific products and campaigns
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {staticPages.map((page, index) => (
              <a key={page.path} href={page.path} target="_blank" rel="noreferrer" className="group block">
                <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-500 border border-gray-100 overflow-hidden">
                  <div className="relative overflow-hidden">
                    <img 
                      src={page.image} 
                      alt={`${page.title} - ${page.subtitle}`}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 right-4">
                      <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-purple-500 to-indigo-600 text-white text-sm font-semibold rounded-full">
                        Static Page
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">
                      {page.title}
                    </h3>
                    <p className="text-lg font-semibold text-gray-600 mb-3">
                      {page.subtitle}
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {page.description}
                    </p>
                    <div className="flex items-center text-purple-600 font-semibold group-hover:text-purple-700 transition-colors duration-300">
                      <span>View Static Page</span>
                      <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
} 