import Layout from '../components/Layout'
import { site, images } from '../data/autobot'
import Link from 'next/link'

export default function Home() {
  const landingPages = [
    {
      path: '/handheld-vacuum-cleaner',
      title: 'Handheld Vacuum Cleaner',
      subtitle: 'Professional Solutions',
      description: 'High suction in a compact body with USB‑C fast charging and washable HEPA. Perfect for home and car cleaning.',
      image: images.hero[0],
      color: 'from-blue-500 to-blue-600',
      priority: 0.9
    },
    {
      path: '/car-vacuum-cleaner',
      title: 'Car Vacuum Cleaner',
      subtitle: 'Professional Solutions',
      description: 'Timeline layout showcasing the cleaning process with powerful suction for automotive interiors.',
      image: images.hero[1],
      color: 'from-orange-500 to-orange-600',
      priority: 0.9
    },
    {
      path: '/portable-vacuum-cleaner',
      title: 'Portable Vacuum Cleaner',
      subtitle: 'Go Anywhere',
      description: 'Magazine-style layout featuring portability and convenience for modern lifestyles.',
      image: images.hero[2],
      color: 'from-indigo-500 to-indigo-600',
      priority: 0.8
    },
    {
      path: '/cordless-vacuum-cleaner',
      title: 'Cordless Vacuum Cleaner',
      subtitle: 'Freedom of Movement',
      description: 'Dashboard layout with technical specifications and performance comparisons.',
      image: images.hero[0],
      color: 'from-slate-500 to-slate-600',
      priority: 0.8
    },
    {
      path: '/compact-vacuum-cleaner',
      title: 'Compact Vacuum Cleaner',
      subtitle: 'Small & Powerful',
      description: 'Product catalog layout with model comparisons and specifications.',
      image: images.hero[1],
      color: 'from-yellow-500 to-yellow-600',
      priority: 0.8
    },
    {
      path: '/camping-cleaning',
      title: 'Camping Cleaning',
      subtitle: 'Portable Solutions',
      description: 'Storyboard layout with scene-based cleaning solutions for outdoor adventures.',
      image: images.heroCamping,
      color: 'from-green-500 to-green-600',
      priority: 0.7
    },
    {
      path: '/pet-family-cleaning',
      title: 'Pet Family Cleaning',
      subtitle: 'Pet-Friendly Solutions',
      description: 'Gallery layout showcasing pet cleaning scenarios and specialized features.',
      image: images.heroPet,
      color: 'from-purple-500 to-purple-600',
      priority: 0.7
    },
    {
      path: '/byd-car-vacuum-cleaner',
      title: 'BYD Car Vacuum Cleaner',
      subtitle: 'Professional Automotive Solutions',
      description: 'Tech-focused layout designed specifically for BYD vehicle owners.',
      image: images.hero[0],
      color: 'from-blue-500 to-cyan-600',
      priority: 0.8
    },
    {
      path: '/crumbs-car-vacuum-cleaner',
      title: 'Crumbs Car Vacuum Cleaner',
      subtitle: 'Professional Food Debris Cleaning',
      description: 'Lifestyle layout for cleaning car crumbs and food debris with specialized features.',
      image: images.hero[1],
      color: 'from-amber-500 to-orange-600',
      priority: 0.8
    }
  ]

  return (
    <Layout 
      title="AutoBot Vacuum Cleaner Landing Pages | Professional Cleaning Solutions"
      description="Explore AutoBot's comprehensive range of vacuum cleaner landing pages. From handheld to car vacuums, portable to cordless solutions. Professional cleaning technology for every need."
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
              AutoBot Landing Pages
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                AutoBot Vacuum
              </span>
              <br />
              <span className="text-white">Landing Pages</span>
            </h1>
            <p className="text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Discover our comprehensive collection of professional vacuum cleaner landing pages. 
              Each page features unique layouts and specialized content for different cleaning needs.
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

      {/* Landing Pages Grid */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Explore Our Landing Pages</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each landing page features unique layouts and specialized content for different cleaning scenarios
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {landingPages.map((page, index) => (
              <Link key={page.path} href={page.path} className="group block">
                <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-500 border border-gray-100 overflow-hidden">
                  <div className="relative overflow-hidden">
                    <img 
                      src={page.image} 
                      alt={`${page.title} - ${page.subtitle}`}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className={`inline-flex items-center px-3 py-1 bg-gradient-to-r ${page.color} text-white text-sm font-semibold rounded-full`}>
                        Priority: {page.priority}
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      {page.title}
                    </h3>
                    <p className="text-lg font-semibold text-gray-600 mb-3">
                      {page.subtitle}
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {page.description}
                    </p>
                    <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors duration-300">
                      <span>View Page</span>
                      <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Why Choose AutoBot Landing Pages</h2>
            <p className="text-xl text-gray-600">Professional landing pages designed for maximum conversion</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🎨",
                title: "Unique Layouts",
                description: "Each page features a distinct design approach for different target audiences"
              },
              {
                icon: "📱",
                title: "Mobile Optimized",
                description: "All pages are fully responsive and optimized for mobile devices"
              },
              {
                icon: "⚡",
                title: "Fast Loading",
                description: "Optimized for speed with modern web technologies"
              },
              {
                icon: "🔍",
                title: "SEO Optimized",
                description: "Built with search engine optimization best practices"
              },
              {
                icon: "🎯",
                title: "Conversion Focused",
                description: "Designed to maximize user engagement and conversions"
              },
              {
                icon: "🛠️",
                title: "Easy Maintenance",
                description: "Clean code structure for easy updates and modifications"
              }
            ].map((feature) => (
              <div key={feature.title} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-2xl rounded-2xl mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-white/10 rounded-full mb-8">
            <span className="text-5xl">🚀</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
            Ready to Explore AutoBot Solutions?
          </h2>
          <p className="text-2xl text-blue-100 mb-12 max-w-3xl mx-auto">
            Choose the perfect landing page for your cleaning needs and discover AutoBot's innovative vacuum technology
          </p>
          <a className="inline-flex items-center justify-center px-12 py-6 bg-white text-blue-600 font-bold text-xl rounded-2xl hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-2xl" 
             href={site.handheldCollection} target="_blank" rel="noreferrer">
            Shop AutoBot Products
          </a>
        </div>
      </section>
    </Layout>
  )
}