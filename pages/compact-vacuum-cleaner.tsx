import React from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';

const CompactVacuumCleaner = () => {
  return (
    <Layout
      title="Compact Vacuum Cleaner - AutoBot Compact Vacuum | Small Size, Big Power"
      description="AutoBot compact vacuum cleaner with powerful suction in ultra-small design. Perfect for small spaces, apartments, offices. VX4, VM5 series with space-saving compact design."
      keywords="compact vacuum cleaner,compact vacuum,small vacuum,AutoBot,mini vacuum,space saving vacuum,apartment vacuum"
      canonical="https://autobot-seo.vercel.app/compact-vacuum-cleaner"
    >
      {/* Hero Section */}
      <section className="gradient-bg text-white">
        <div className="container-max section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="text-yellow-300">Compact</span> Vacuum<br />
                Small Size, Big Power
              </h1>
              <p className="text-xl mb-8 text-gray-200">
                AutoBot compact vacuum cleaner delivers professional cleaning power 
                in an ultra-compact design. Perfect for small spaces, apartments, 
                dorms, and offices where space is premium but cleaning performance matters.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://autobot.im/products/autobot-vx4-new-high-performance-car-vacuum-cleaner" 
                   className="btn-primary text-center">
                  Buy Compact Vacuum
                </a>
                <a href="https://autobot.im/collections/handheld-vacuum-cleaner-1" 
                   className="btn-secondary text-center">
                  Compare Sizes
                </a>
              </div>
            </div>
            <div className="relative">
              <img src="/images/autobot-compact-hero.jpg" alt="AutoBot Compact Vacuum Cleaner" 
                   className="w-full h-auto rounded-lg shadow-2xl" />
              <div className="absolute -bottom-4 -right-4 bg-yellow-400 text-black px-4 py-2 rounded-lg font-bold">
                Maximum Power, Minimum Space
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compact Advantages */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-autobot-primary mb-4">
              Why Choose Compact Design?
            </h2>
            <p className="text-xl text-gray-600">
              Perfect cleaning solution for modern living spaces
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center card-hover">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2L3 7v11a1 1 0 001 1h12a1 1 0 001-1V7l-7-5zM8 15V9h4v6H8z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-autobot-primary mb-4">Space Saving</h3>
              <p className="text-gray-600">
                Ultra-compact design fits in small closets, under beds, 
                in cabinets, or dorm rooms without taking up valuable space.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center card-hover">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-autobot-primary mb-4">Apartment Perfect</h3>
              <p className="text-gray-600">
                Ideal for apartments, condos, and small homes. 
                Provides full cleaning capability without overwhelming your space.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center card-hover">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-autobot-primary mb-4">Easy Handling</h3>
              <p className="text-gray-600">
                Lightweight and easy to maneuver. Perfect for elderly users, 
                students, or anyone who prefers manageable cleaning tools.
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
              AutoBot Compact Vacuum Series
            </h2>
            <p className="text-xl text-gray-600">
              Choose your perfect compact cleaning solution
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img src="/images/autobot-vm5-compact.jpg" alt="AutoBot VM5 Compact" className="w-full h-64 object-cover" />
              <div className="p-8">
                <h3 className="text-2xl font-bold text-autobot-primary mb-4">AutoBot VM5 Compact</h3>
                <p className="text-gray-600 mb-6">
                  Ultra-compact design with 100000rpm motor. Perfect for small spaces 
                  and quick cleaning tasks. Lightweight yet powerful performance.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-xl font-bold text-autobot-primary">100K</div>
                    <div className="text-sm text-gray-600">RPM Motor</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-xl font-bold text-autobot-primary">0.9kg</div>
                    <div className="text-sm text-gray-600">Weight</div>
                  </div>
                </div>
                <a href="https://autobot.im/collections/handheld-vacuum-cleaner-1" 
                   className="btn-primary w-full text-center">
                  Learn More VM5
                </a>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img src="/images/autobot-vx4-compact.jpg" alt="AutoBot VX4 Compact" className="w-full h-64 object-cover" />
              <div className="p-8">
                <h3 className="text-2xl font-bold text-autobot-primary mb-4">AutoBot VX4 Compact</h3>
                <p className="text-gray-600 mb-6">
                  Compact version with 20000Pa suction power. Self-cleaning function 
                  and extended battery life in space-saving design.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-xl font-bold text-autobot-primary">20000Pa</div>
                    <div className="text-sm text-gray-600">Suction</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-xl font-bold text-autobot-primary">1.2kg</div>
                    <div className="text-sm text-gray-600">Weight</div>
                  </div>
                </div>
                <a href="https://autobot.im/products/autobot-vx4-new-high-performance-car-vacuum-cleaner" 
                   className="btn-primary w-full text-center">
                  Buy VX4 Compact
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
            Big Cleaning Power in Small Package
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Experience the perfect balance of power and compactness with AutoBot compact vacuum cleaners. 
            Professional cleaning performance designed for modern living spaces.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://autobot.im/collections/handheld-vacuum-cleaner-1" 
               className="btn-primary">
              Shop Compact Vacuums
            </a>
            <Link href="/handheld-vacuum-cleaner" className="btn-secondary">
              View All Models
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CompactVacuumCleaner;