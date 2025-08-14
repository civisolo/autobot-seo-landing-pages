import React from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';

const CarVacuumCleaner = () => {
  return (
    <Layout
      title="Car Vacuum Cleaner - AutoBot Professional Car Vacuum | Powerful Car Cleaning Solution"
      description="AutoBot car vacuum cleaner with powerful suction up to 20000Pa, specially designed for car cleaning. VX4, VM5 series with wireless design, perfect for car interior cleaning."
      keywords="car vacuum cleaner,car vacuum,automotive vacuum,AutoBot,car cleaning,wireless vacuum,portable car vacuum"
      canonical="https://autobot-seo.vercel.app/car-vacuum-cleaner"
    >
      {/* Hero Section */}
      <section className="gradient-bg text-white">
        <div className="container-max section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="text-yellow-300">Car Vacuum</span><br />
                Professional Car Cleaning
              </h1>
              <p className="text-xl mb-8 text-gray-200">
                AutoBot car vacuum cleaner with powerful 20000Pa suction, 
                specially designed for car interior cleaning. Wireless design, 
                multiple attachments, making car cleaning simple and efficient.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://autobot.im/products/autobot-vx4-new-high-performance-car-vacuum-cleaner" 
                   className="btn-primary text-center">
                  Buy Car Vacuum
                </a>
                <a href="https://autobot.im/collections/handheld-vacuum-cleaner-1" 
                   className="btn-secondary text-center">
                  View All Models
                </a>
              </div>
            </div>
            <div className="relative">
              <img src="/images/autobot-car-vacuum-hero.jpg" alt="AutoBot Car Vacuum Cleaner" 
                   className="w-full h-auto rounded-lg shadow-2xl" />
              <div className="absolute -bottom-4 -right-4 bg-yellow-400 text-black px-4 py-2 rounded-lg font-bold">
                Car Cleaning Expert
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Car Cleaning Challenges */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-autobot-primary mb-4">
              Car Cleaning Challenges & Solutions
            </h2>
            <p className="text-xl text-gray-600">
              Professional solutions for common car cleaning problems
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-red-600 mb-6">Common Car Cleaning Problems</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-bold text-gray-800">Seat Crevice Dust</h4>
                    <p className="text-gray-600">Hard to reach areas between seats collect dust and debris</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-bold text-gray-800">Floor Mat Dirt</h4>
                    <p className="text-gray-600">Stubborn dirt and sand embedded in car floor mats</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-bold text-gray-800">Dashboard Dust</h4>
                    <p className="text-gray-600">Fine dust accumulation on dashboard and air vents</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-bold text-gray-800">Pet Hair & Crumbs</h4>
                    <p className="text-gray-600">Pet hair and food crumbs stuck in upholstery</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-green-600 mb-6">AutoBot Solutions</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-bold text-gray-800">Crevice Tool Attachment</h4>
                    <p className="text-gray-600">Specialized narrow nozzle reaches deep into seat crevices</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-bold text-gray-800">Brush Attachment</h4>
                    <p className="text-gray-600">Rotating brush loosens and removes embedded dirt</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-bold text-gray-800">Soft Brush Tool</h4>
                    <p className="text-gray-600">Gentle cleaning for delicate dashboard surfaces</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-bold text-gray-800">20000Pa Suction</h4>
                    <p className="text-gray-600">Powerful suction removes pet hair and debris effectively</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Features */}
      <section className="bg-gray-50 section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-autobot-primary mb-4">
              Car-Specific Design Features
            </h2>
            <p className="text-xl text-gray-600">
              Every detail designed for optimal car cleaning experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center card-hover">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-autobot-primary mb-4">Wireless Freedom</h3>
              <p className="text-gray-600">
                Cordless design allows 360° cleaning around your car without 
                power cord limitations or outlet dependency.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center card-hover">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-autobot-primary mb-4">Multiple Attachments</h3>
              <p className="text-gray-600">
                Complete set of car-specific attachments: crevice tool, brush head, 
                extension hose for comprehensive car cleaning.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center card-hover">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L3 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.733.99A1.002 1.002 0 0118 6v2a1 1 0 11-2 0v-.277l-1.254.145a1 1 0 11-.992-1.736l.23-.132-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.723V12a1 1 0 11-2 0v-1.277l-1.246-.855a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.277l1.254.145a1 1 0 01-.992 1.736l-.23-.132-.23.132a1 1 0 01-.992-1.736L4 12.277V12a1 1 0 011-1zm14 0a1 1 0 011 1v.277l1.254.145a1 1 0 01-.992 1.736l-.23-.132-.23.132a1 1 0 01-.992-1.736L17 12.277V12a1 1 0 011-1zm-9.618 4.504a1 1 0 01.372-1.364L9 13.848l1.254.716a1 1 0 11-.992 1.736L9 16.152l-1.254-.716a1 1 0 01-.372-1.364z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-autobot-primary mb-4">Compact Storage</h3>
              <p className="text-gray-600">
                Ergonomic design fits perfectly in car storage compartments, 
                glove box, or trunk for convenient storage.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center card-hover">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-autobot-primary mb-4">Long Battery Life</h3>
              <p className="text-gray-600">
                High-capacity battery provides extended cleaning time, 
                sufficient for multiple car cleaning sessions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center card-hover">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-autobot-primary mb-4">Easy Maintenance</h3>
              <p className="text-gray-600">
                Self-cleaning function and washable filters make maintenance 
                simple, ensuring consistent performance.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center card-hover">
              <div className="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2L3 7v11a1 1 0 001 1h12a1 1 0 001-1V7l-7-5zM8 15V9h4v6H8z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-autobot-primary mb-4">LED Lighting</h3>
              <p className="text-gray-600">
                Built-in LED lights illuminate dark areas under seats 
                and in corners for thorough cleaning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-bg text-white section-padding">
        <div className="container-max text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Keep Your Car Spotless with AutoBot
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Professional car vacuum designed specifically for automotive cleaning needs. 
            Experience the difference of specialized car cleaning technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://autobot.im/products/autobot-vx4-new-high-performance-car-vacuum-cleaner" 
               className="btn-primary">
              Shop Car Vacuums
            </a>
            <Link href="/portable-vacuum-cleaner" className="btn-secondary">
              View Portable Series
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CarVacuumCleaner;