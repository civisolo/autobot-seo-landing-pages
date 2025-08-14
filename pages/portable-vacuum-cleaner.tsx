import React from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';

const PortableVacuumCleaner = () => {
  return (
    <Layout
      title="Portable Vacuum Cleaner - AutoBot Portable Vacuum | Ultimate Cleaning Convenience"
      description="AutoBot portable vacuum cleaner with lightweight design and powerful suction up to 20000Pa. Perfect for home, office, car cleaning. VX4, VM5 series with cordless portability."
      keywords="portable vacuum cleaner,portable vacuum,lightweight vacuum,AutoBot,cordless vacuum,travel vacuum,compact cleaning"
      canonical="https://autobot-seo.vercel.app/portable-vacuum-cleaner"
    >
      {/* Hero Section */}
      <section className="gradient-bg text-white">
        <div className="container-max section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="text-yellow-300">Portable</span> Vacuum<br />
                Ultimate Cleaning Convenience
              </h1>
              <p className="text-xl mb-8 text-gray-200">
                AutoBot portable vacuum cleaner combines powerful performance with 
                lightweight portability. Take professional cleaning power anywhere - 
                home, office, car, or travel. Cordless freedom meets cleaning excellence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://autobot.im/products/autobot-vx4-new-high-performance-car-vacuum-cleaner" 
                   className="btn-primary text-center">
                  Buy Portable Vacuum
                </a>
                <a href="https://autobot.im/collections/handheld-vacuum-cleaner-1" 
                   className="btn-secondary text-center">
                  Compare Models
                </a>
              </div>
            </div>
            <div className="relative">
              <img src="/images/autobot-portable-hero.jpg" alt="AutoBot Portable Vacuum Cleaner" 
                   className="w-full h-auto rounded-lg shadow-2xl" />
              <div className="absolute -bottom-4 -right-4 bg-yellow-400 text-black px-4 py-2 rounded-lg font-bold">
                Lightweight & Powerful
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portability Features */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-autobot-primary mb-4">
              Why Choose Portable Design?
            </h2>
            <p className="text-xl text-gray-600">
              Freedom to clean anywhere, anytime with professional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center card-hover">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-autobot-primary mb-4">Lightweight Design</h3>
              <p className="text-gray-600">
                Ultra-lightweight construction makes it easy to carry and maneuver. 
                Clean stairs, high shelves, and tight spaces without fatigue.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center card-hover">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-autobot-primary mb-4">Cordless Freedom</h3>
              <p className="text-gray-600">
                No power cords to limit your reach. Clean anywhere without 
                searching for outlets or dealing with tangled cables.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center card-hover">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-autobot-primary mb-4">Quick Setup</h3>
              <p className="text-gray-600">
                Ready to use in seconds. No assembly required, no heavy equipment 
                to set up. Grab and go cleaning convenience.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center card-hover">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M12 2l3.09 6.26L22 9l-5 4.87L18.18 20 12 16.77 5.82 20 7 13.87 2 9l6.91-.74L12 2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-autobot-primary mb-4">Compact Storage</h3>
              <p className="text-gray-600">
                Takes minimal storage space. Fits in closets, under beds, 
                in car trunks, or travel bags for ultimate convenience.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center card-hover">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2L3 7v11a1 1 0 001 1h12a1 1 0 001-1V7l-7-5zM8 15V9h4v6H8z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-autobot-primary mb-4">Travel Ready</h3>
              <p className="text-gray-600">
                Perfect travel companion for hotel rooms, RVs, boats, 
                or vacation rentals. Keep your space clean wherever you go.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center card-hover">
              <div className="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-autobot-primary mb-4">Multi-User Friendly</h3>
              <p className="text-gray-600">
                Easy for everyone to use - kids, elderly, or anyone with 
                mobility concerns. Ergonomic design reduces strain.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Usage Scenarios */}
      <section className="bg-gray-50 section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-autobot-primary mb-4">
              Portable Cleaning Scenarios
            </h2>
            <p className="text-xl text-gray-600">
              One vacuum, endless possibilities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-autobot-primary mb-3">Home Quick Clean</h3>
              <p className="text-gray-600 text-sm">
                Spills, crumbs, pet hair on furniture, stairs, and hard-to-reach corners. 
                Perfect for daily maintenance cleaning.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"/>
                  <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-autobot-primary mb-3">Office Cleaning</h3>
              <p className="text-gray-600 text-sm">
                Desk debris, keyboard cleaning, under-desk dust. 
                Maintain a professional workspace environment.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"/>
                  <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3z"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-autobot-primary mb-3">Car Detailing</h3>
              <p className="text-gray-600 text-sm">
                Interior car cleaning, seat crevices, floor mats. 
                Portable enough to clean multiple vehicles easily.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-red-400 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-autobot-primary mb-3">Travel & RV</h3>
              <p className="text-gray-600 text-sm">
                Hotel rooms, RV interiors, boat cabins, camping gear. 
                Keep your mobile lifestyle clean and comfortable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Features */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-autobot-primary mb-4">
              Portable Power & Performance
            </h2>
            <p className="text-xl text-gray-600">
              Don't compromise on cleaning power for portability
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img src="/images/autobot-portable-features.jpg" alt="AutoBot Portable Features" 
                   className="w-full h-auto rounded-lg shadow-lg" />
            </div>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-autobot-accent rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-autobot-primary mb-2">20000Pa Suction Power</h3>
                  <p className="text-gray-600">
                    Professional-grade suction power in a portable package. 
                    Handles everything from fine dust to larger debris effectively.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-autobot-primary mb-2">Extended Battery Life</h3>
                  <p className="text-gray-600">
                    Long-lasting battery provides 30+ minutes of continuous cleaning. 
                    Enough power for multiple rooms or complete car cleaning.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-autobot-primary mb-2">Versatile Attachments</h3>
                  <p className="text-gray-600">
                    Complete set of portable attachments: crevice tool, brush head, 
                    extension wand. All stored compactly within the unit.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-autobot-primary mb-2">Self-Cleaning Technology</h3>
                  <p className="text-gray-600">
                    Advanced self-cleaning system maintains optimal performance 
                    and extends filter life, even with frequent portable use.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="bg-gray-50 section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-autobot-primary mb-4">
              AutoBot Portable Vacuum Series
            </h2>
            <p className="text-xl text-gray-600">
              Choose your perfect portable cleaning companion
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img src="/images/autobot-vx4-portable.jpg" alt="AutoBot VX4 Portable" className="w-full h-64 object-cover" />
              <div className="p-8">
                <h3 className="text-2xl font-bold text-autobot-primary mb-4">AutoBot VX4 Portable</h3>
                <p className="text-gray-600 mb-6">
                  Ultimate portable vacuum with 20000Pa suction, self-cleaning function, 
                  and complete attachment set. Perfect balance of power and portability.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-autobot-primary">20000Pa</div>
                    <div className="text-sm text-gray-600">Suction Power</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-autobot-primary">30min</div>
                    <div className="text-sm text-gray-600">Battery Life</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-autobot-primary">1.2kg</div>
                    <div className="text-sm text-gray-600">Weight</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-autobot-primary">5</div>
                    <div className="text-sm text-gray-600">Attachments</div>
                  </div>
                </div>
                <a href="https://autobot.im/products/autobot-vx4-new-high-performance-car-vacuum-cleaner" 
                   className="btn-primary w-full text-center">
                  Buy VX4 Portable
                </a>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img src="/images/autobot-vm5-portable.jpg" alt="AutoBot VM5 Portable" className="w-full h-64 object-cover" />
              <div className="p-8">
                <h3 className="text-2xl font-bold text-autobot-primary mb-4">AutoBot VM5 Portable</h3>
                <p className="text-gray-600 mb-6">
                  Compact portable vacuum with 100000rpm high-speed motor. 
                  Ultra-lightweight design perfect for travel and quick cleaning tasks.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-autobot-primary">100K</div>
                    <div className="text-sm text-gray-600">RPM Motor</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-autobot-primary">25min</div>
                    <div className="text-sm text-gray-600">Battery Life</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-autobot-primary">0.9kg</div>
                    <div className="text-sm text-gray-600">Weight</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-autobot-primary">4</div>
                    <div className="text-sm text-gray-600">Attachments</div>
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
            Experience Portable Cleaning Freedom
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Take powerful cleaning anywhere with AutoBot portable vacuum cleaners. 
            Professional performance in a lightweight, cordless design.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://autobot.im/collections/handheld-vacuum-cleaner-1" 
               className="btn-primary">
              Shop Portable Vacuums
            </a>
            <Link href="/cordless-vacuum-cleaner" className="btn-secondary">
              View Cordless Series
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PortableVacuumCleaner;