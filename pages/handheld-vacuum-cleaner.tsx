import React from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';

const HandheldVacuumCleaner = () => {
  return (
    <Layout
      title="Handheld Vacuum Cleaner - AutoBot Professional Handheld Vacuum | Powerful Cleaning Expert"
      description="AutoBot handheld vacuum cleaner with professional handheld design, powerful suction up to 20000Pa, perfect for home, car, and office cleaning. VX4, VM5 series with self-cleaning function."
      keywords="handheld vacuum cleaner,handheld vacuum,AutoBot,powerful vacuum,home vacuum,car cleaning,portable cleaning"
      canonical="https://autobot-seo.vercel.app/handheld-vacuum-cleaner"
    >
      {/* Hero Section */}
      <section className="gradient-bg text-white">
        <div className="container-max section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="text-yellow-300">Handheld</span> Vacuum<br />
                Powerful Cleaning Expert
              </h1>
              <p className="text-xl mb-8 text-gray-200">
                AutoBot handheld vacuum cleaner with professional handheld design, 
                powerful suction up to 20000Pa, perfect for home, car, office and 
                various cleaning scenarios. Make cleaning simple and efficient.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://autobot.im/products/autobot-vx4-new-high-performance-car-vacuum-cleaner" 
                   className="btn-primary text-center">
                  Buy VX4 Now
                </a>
                <a href="https://autobot.im/collections/handheld-vacuum-cleaner-1" 
                   className="btn-secondary text-center">
                  View All Series
                </a>
              </div>
            </div>
            <div className="relative">
              <img src="/images/autobot-vx4-hero.jpg" alt="AutoBot VX4 Handheld Vacuum Cleaner" 
                   className="w-full h-auto rounded-lg shadow-2xl" />
              <div className="absolute -bottom-4 -right-4 bg-yellow-400 text-black px-4 py-2 rounded-lg font-bold">
                20000Pa Powerful Suction
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-autobot-primary mb-4">
              Why Choose AutoBot Handheld Vacuum?
            </h2>
            <p className="text-xl text-gray-600">
              Professional design, powerful performance, multi-scenario application
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center card-hover">
              <div className="w-16 h-16 bg-autobot-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-autobot-primary mb-4">Powerful Suction</h3>
              <p className="text-gray-600">
                Up to 20000Pa ultra-strong suction power, easily handles various 
                cleaning challenges, from fine dust to large particles.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center card-hover">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-autobot-primary mb-4">Self-Cleaning Function</h3>
              <p className="text-gray-600">
                Unique self-cleaning technology automatically cleans filters 
                and internal components, maintaining optimal performance and extending lifespan.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center card-hover">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-autobot-primary mb-4">Multi-Function Design</h3>
              <p className="text-gray-600">
                Combines vacuum, blower, and inflator functions in one device, 
                meeting different cleaning and maintenance needs.
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
              AutoBot Handheld Vacuum Series
            </h2>
            <p className="text-xl text-gray-600">
              Professional product line for different needs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img src="/images/autobot-vx4-product.jpg" alt="AutoBot VX4" className="w-full h-64 object-cover" />
              <div className="p-8">
                <h3 className="text-2xl font-bold text-autobot-primary mb-4">AutoBot VX4</h3>
                <p className="text-gray-600 mb-6">
                  Flagship handheld vacuum with 20000Pa ultra-strong suction, 
                  self-cleaning function, multiple attachments for various cleaning scenarios.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span className="text-sm text-gray-600">20000Pa Powerful Suction</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span className="text-sm text-gray-600">Self-Cleaning Technology</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span className="text-sm text-gray-600">Multiple Attachments</span>
                  </div>
                </div>
                <a href="https://autobot.im/products/autobot-vx4-new-high-performance-car-vacuum-cleaner" 
                   className="btn-primary w-full text-center">
                  Buy VX4 Now
                </a>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img src="/images/autobot-vm5-product.jpg" alt="AutoBot VM5" className="w-full h-64 object-cover" />
              <div className="p-8">
                <h3 className="text-2xl font-bold text-autobot-primary mb-4">AutoBot VM5</h3>
                <p className="text-gray-600 mb-6">
                  Professional handheld vacuum with 100000rpm high-speed motor, 
                  powerful cleaning, especially suitable for car and precision cleaning.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span className="text-sm text-gray-600">100000rpm High-Speed Motor</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span className="text-sm text-gray-600">Car-Specific Design</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span className="text-sm text-gray-600">Precision Cleaning Expert</span>
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

      {/* Usage Scenarios */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-autobot-primary mb-4">
              Multi-Scenario Applications
            </h2>
            <p className="text-xl text-gray-600">
              One device in hand, worry-free cleaning
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-autobot-primary mb-4">Home Cleaning</h3>
              <p className="text-gray-600">
                Sofa crevices, under-bed dust, desktop debris - 
                handheld design makes home cleaning more flexible and convenient.
              </p>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"/>
                  <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1V8a1 1 0 00-1-1h-3z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-autobot-primary mb-4">Car Cleaning</h3>
              <p className="text-gray-600">
                Seat crevices, floor mat dust, dashboard cleaning - 
                specially designed for car environments, keeping your vehicle clean.
              </p>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"/>
                  <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-autobot-primary mb-4">Office Cleaning</h3>
              <p className="text-gray-600">
                Keyboard cleaning, desk organization, computer dusting - 
                maintain a clean office environment and improve work efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-bg text-white section-padding">
        <div className="container-max text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Experience AutoBot Handheld Vacuum Now
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Powerful suction, professional cleaning, making life cleaner and more comfortable
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://autobot.im/collections/handheld-vacuum-cleaner-1" 
               className="btn-primary">
              Shop Handheld Vacuums
            </a>
            <Link href="/car-vacuum-cleaner" className="btn-secondary">
              View Car Series
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HandheldVacuumCleaner;