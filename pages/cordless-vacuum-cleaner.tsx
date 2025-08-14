import React from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';

const CordlessVacuumCleaner = () => {
  return (
    <Layout
      title="Cordless Vacuum Cleaner - AutoBot Cordless Vacuum | Wireless Cleaning Freedom"
      description="AutoBot cordless vacuum cleaner with powerful 20000Pa suction and advanced battery technology. VX4, VM5 series with wireless design for ultimate cleaning freedom."
      keywords="cordless vacuum cleaner,cordless vacuum,wireless vacuum,AutoBot,battery vacuum,rechargeable vacuum,portable cordless"
      canonical="https://autobot-seo.vercel.app/cordless-vacuum-cleaner"
    >
      {/* Hero Section */}
      <section className="gradient-bg text-white">
        <div className="container-max section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="text-yellow-300">Cordless</span> Vacuum<br />
                Wireless Cleaning Freedom
              </h1>
              <p className="text-xl mb-8 text-gray-200">
                AutoBot cordless vacuum cleaner delivers powerful 20000Pa suction 
                without the limitations of power cords. Advanced battery technology 
                provides extended cleaning time with professional results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://autobot.im/products/autobot-vx4-new-high-performance-car-vacuum-cleaner" 
                   className="btn-primary text-center">
                  Buy Cordless Vacuum
                </a>
                <a href="https://autobot.im/collections/handheld-vacuum-cleaner-1" 
                   className="btn-secondary text-center">
                  Compare Models
                </a>
              </div>
            </div>
            <div className="relative">
              <img src="/images/autobot-cordless-hero.jpg" alt="AutoBot Cordless Vacuum Cleaner" 
                   className="w-full h-auto rounded-lg shadow-2xl" />
              <div className="absolute -bottom-4 -right-4 bg-yellow-400 text-black px-4 py-2 rounded-lg font-bold">
                No Cords, No Limits
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wireless Advantages */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-autobot-primary mb-4">
              Why Choose Cordless Design?
            </h2>
            <p className="text-xl text-gray-600">
              Experience the freedom of wireless cleaning technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center card-hover">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-autobot-primary mb-4">Unlimited Mobility</h3>
              <p className="text-gray-600">
                Clean anywhere without searching for power outlets. 
                Reach stairs, cars, high shelves, and outdoor spaces effortlessly.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center card-hover">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-autobot-primary mb-4">Safety First</h3>
              <p className="text-gray-600">
                No trip hazards from power cords. Safer cleaning around children, 
                pets, and in busy areas. Reduced risk of accidents.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center card-hover">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-autobot-primary mb-4">Time Efficient</h3>
              <p className="text-gray-600">
                No time wasted plugging and unplugging cords. 
                Clean multiple rooms and areas in one continuous session.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center card-hover">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-autobot-primary mb-4">Versatile Cleaning</h3>
              <p className="text-gray-600">
                Perfect for quick cleanups, detailed cleaning, car interiors, 
                workshops, and outdoor cleaning tasks.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center card-hover">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-autobot-primary mb-4">Easy Storage</h3>
              <p className="text-gray-600">
                No cord management needed. Compact storage in closets, 
                garages, or wall mounts without tangled cables.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center card-hover">
              <div className="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2L3 7v11a1 1 0 001 1h12a1 1 0 001-1V7l-7-5zM8 15V9h4v6H8z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-autobot-primary mb-4">Quiet Operation</h3>
              <p className="text-gray-600">
                Advanced motor technology provides powerful suction 
                with reduced noise levels for comfortable cleaning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Battery Technology */}
      <section className="bg-gray-50 section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-autobot-primary mb-4">
              Advanced Battery Technology
            </h2>
            <p className="text-xl text-gray-600">
              Cutting-edge power management for extended cleaning sessions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img src="/images/autobot-battery-tech.jpg" alt="AutoBot Battery Technology" 
                   className="w-full h-auto rounded-lg shadow-lg" />
            </div>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-autobot-primary mb-2">High-Capacity Lithium Battery</h3>
                  <p className="text-gray-600">
                    Premium lithium-ion battery provides 30+ minutes of continuous cleaning. 
                    Enough power for multiple rooms or complete car detailing.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-autobot-primary mb-2">Fast Charging Technology</h3>
                  <p className="text-gray-600">
                    Quick charge capability gets you back to cleaning faster. 
                    Smart charging system protects battery life and performance.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-autobot-primary mb-2">Battery Life Indicator</h3>
                  <p className="text-gray-600">
                    LED indicators show remaining battery life so you can 
                    plan your cleaning sessions and charge when needed.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M12 2l3.09 6.26L22 9l-5 4.87L18.18 20 12 16.77 5.82 20 7 13.87 2 9l6.91-.74L12 2z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-autobot-primary mb-2">Long Battery Lifespan</h3>
                  <p className="text-gray-600">
                    Advanced battery management extends overall battery lifespan. 
                    Maintains performance over hundreds of charge cycles.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Usage Scenarios */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-autobot-primary mb-4">
              Cordless Cleaning Scenarios
            </h2>
            <p className="text-xl text-gray-600">
              Where cordless technology makes the difference
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 000 2v9a2 2 0 002 2h1a1 1 0 100-2H5V6a1 1 0 00-1-1H3zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293zM17 5a1 1 0 100-2h-1a1 1 0 100 2h1z"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-autobot-primary mb-3">Staircase Cleaning</h3>
              <p className="text-gray-600 text-sm">
                Clean stairs safely without dragging heavy cords. 
                Lightweight cordless design perfect for multi-level homes.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"/>
                  <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3z"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-autobot-primary mb-3">Vehicle Detailing</h3>
              <p className="text-gray-600 text-sm">
                Clean cars, RVs, boats without needing power sources. 
                Perfect for garage, driveway, or remote locations.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-autobot-primary mb-3">High Reach Areas</h3>
              <p className="text-gray-600 text-sm">
                Clean ceiling fans, high shelves, curtains, and light fixtures 
                without cord limitations or ladder safety concerns.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-red-400 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-autobot-primary mb-3">Outdoor Cleaning</h3>
              <p className="text-gray-600 text-sm">
                Clean patios, decks, outdoor furniture, and workshop areas 
                where power outlets are not available.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="bg-gray-50 section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-autobot-primary mb-4">
              AutoBot Cordless Vacuum Series
            </h2>
            <p className="text-xl text-gray-600">
              Professional cordless cleaning solutions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img src="/images/autobot-vx4-cordless.jpg" alt="AutoBot VX4 Cordless" className="w-full h-64 object-cover" />
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-autobot-primary">AutoBot VX4 Cordless</h3>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-bold">
                    Best Seller
                  </span>
                </div>
                <p className="text-gray-600 mb-6">
                  Premium cordless vacuum with 20000Pa suction, self-cleaning function, 
                  and 30+ minute battery life. The perfect balance of power and portability.
                </p>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Suction Power</span>
                    <span className="font-bold text-autobot-primary">20000Pa</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Battery Life</span>
                    <span className="font-bold text-autobot-primary">30+ minutes</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Charge Time</span>
                    <span className="font-bold text-autobot-primary">3-4 hours</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Weight</span>
                    <span className="font-bold text-autobot-primary">1.2kg</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Attachments</span>
                    <span className="font-bold text-autobot-primary">5 pieces</span>
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span className="text-sm text-gray-600">Self-Cleaning Technology</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span className="text-sm text-gray-600">LED Battery Indicator</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span className="text-sm text-gray-600">Multiple Power Modes</span>
                  </div>
                </div>

                <a href="https://autobot.im/products/autobot-vx4-new-high-performance-car-vacuum-cleaner" 
                   className="btn-primary w-full text-center">
                  Buy VX4 Cordless
                </a>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img src="/images/autobot-vm5-cordless.jpg" alt="AutoBot VM5 Cordless" className="w-full h-64 object-cover" />
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-autobot-primary">AutoBot VM5 Cordless</h3>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-bold">
                    Compact
                  </span>
                </div>
                <p className="text-gray-600 mb-6">
                  Ultra-compact cordless vacuum with 100000rpm high-speed motor. 
                  Perfect for quick cleanups and precision cleaning tasks.
                </p>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Motor Speed</span>
                    <span className="font-bold text-autobot-primary">100000rpm</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Battery Life</span>
                    <span className="font-bold text-autobot-primary">25+ minutes</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Charge Time</span>
                    <span className="font-bold text-autobot-primary">2-3 hours</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Weight</span>
                    <span className="font-bold text-autobot-primary">0.9kg</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Attachments</span>
                    <span className="font-bold text-autobot-primary">4 pieces</span>
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span className="text-sm text-gray-600">Ultra-Lightweight Design</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span className="text-sm text-gray-600">Fast Charging</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span className="text-sm text-gray-600">Precision Cleaning</span>
                  </div>
                </div>

                <a href="https://autobot.im/collections/handheld-vacuum-cleaner-1" 
                   className="btn-primary w-full text-center">
                  Learn More VM5
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-bg text-white section-padding">
        <div className="container-max text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Experience True Cordless Freedom
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Break free from power cord limitations with AutoBot cordless vacuum cleaners. 
            Professional cleaning power wherever you need it, whenever you need it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://autobot.im/collections/handheld-vacuum-cleaner-1" 
               className="btn-primary">
              Shop Cordless Vacuums
            </a>
            <Link href="/compact-vacuum-cleaner" className="btn-secondary">
              View Compact Series
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CordlessVacuumCleaner;