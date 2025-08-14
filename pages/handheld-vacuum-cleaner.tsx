import React from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';

const HandheldVacuumCleaner = () => {
  return (
    <Layout
      title="手持吸尘器 - AutoBot专业手持式吸尘器 | 强力清洁专家"
      description="AutoBot手持吸尘器，专业手持式设计，强劲吸力，适合家庭、车载、办公室清洁。VX4、VM5系列，自清洁功能，多场景应用。"
      keywords="手持吸尘器,手持式吸尘器,AutoBot,强力吸尘器,家用吸尘器,车载清洁,便携清洁"
      canonical="https://autobot-seo.vercel.app/handheld-vacuum-cleaner"
    >
      {/* Hero Section */}
      <section className="gradient-bg text-white">
        <div className="container-max section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="text-yellow-300">手持</span>吸尘器<br />
                强力清洁专家
              </h1>
              <p className="text-xl mb-8 text-gray-200">
                AutoBot手持吸尘器，专业手持式设计，强劲吸力高达20000Pa，
                适用于家庭、车载、办公室等多种清洁场景，让清洁变得简单高效。
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://autobot.im/products/autobot-vx4-new-high-performance-car-vacuum-cleaner" 
                   className="btn-primary text-center">
                  立即购买 VX4
                </a>
                <a href="https://autobot.im/collections/handheld-vacuum-cleaner-1" 
                   className="btn-secondary text-center">
                  查看全系列
                </a>
              </div>
            </div>
            <div className="relative">
              <img src="/images/autobot-vx4-hero.jpg" alt="AutoBot VX4 手持吸尘器" 
                   className="w-full h-auto rounded-lg shadow-2xl" />
              <div className="absolute -bottom-4 -right-4 bg-yellow-400 text-black px-4 py-2 rounded-lg font-bold">
                20000Pa强劲吸力
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
              为什么选择AutoBot手持吸尘器？
            </h2>
            <p className="text-xl text-gray-600">
              专业设计，强劲性能，多场景应用
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center card-hover">
              <div className="w-16 h-16 bg-autobot-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-autobot-primary mb-4">强劲吸力</h3>
              <p className="text-gray-600">
                高达20000Pa的超强吸力，轻松应对各种清洁挑战，
                从细小灰尘到大颗粒垃圾，一吸即净。
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center card-hover">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-autobot-primary mb-4">自清洁功能</h3>
              <p className="text-gray-600">
                独特的自清洁技术，自动清理滤网和内部组件，
                保持最佳性能，延长使用寿命。
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center card-hover">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-autobot-primary mb-4">多功能设计</h3>
              <p className="text-gray-600">
                集吸尘、吹风、充气于一体，一机多用，
                满足不同清洁和维护需求。
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
              AutoBot手持吸尘器系列
            </h2>
            <p className="text-xl text-gray-600">
              专业产品线，满足不同需求
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img src="/images/autobot-vx4-product.jpg" alt="AutoBot VX4" className="w-full h-64 object-cover" />
              <div className="p-8">
                <h3 className="text-2xl font-bold text-autobot-primary mb-4">AutoBot VX4</h3>
                <p className="text-gray-600 mb-6">
                  旗舰级手持吸尘器，20000Pa超强吸力，自清洁功能，
                  配备多种吸头，适用于各种清洁场景。
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span className="text-sm text-gray-600">20000Pa强劲吸力</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span className="text-sm text-gray-600">自清洁技术</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span className="text-sm text-gray-600">多功能吸头</span>
                  </div>
                </div>
                <a href="https://autobot.im/products/autobot-vx4-new-high-performance-car-vacuum-cleaner" 
                   className="btn-primary w-full text-center">
                  立即购买 VX4
                </a>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img src="/images/autobot-vm5-product.jpg" alt="AutoBot VM5" className="w-full h-64 object-cover" />
              <div className="p-8">
                <h3 className="text-2xl font-bold text-autobot-primary mb-4">AutoBot VM5</h3>
                <p className="text-gray-600 mb-6">
                  专业级手持吸尘器，100000rpm高速电机，
                  强力清洁，特别适合车载和精细清洁。
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span className="text-sm text-gray-600">100000rpm高速电机</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span className="text-sm text-gray-600">车载专用设计</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span className="text-sm text-gray-600">精细清洁专家</span>
                  </div>
                </div>
                <a href="https://autobot.im/collections/handheld-vacuum-cleaner-1" 
                   className="btn-primary w-full text-center">
                  了解更多 VM5
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
              多场景应用
            </h2>
            <p className="text-xl text-gray-600">
              一机在手，清洁无忧
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-autobot-primary mb-4">家庭清洁</h3>
              <p className="text-gray-600">
                沙发缝隙、床底灰尘、桌面碎屑，
                手持设计让家庭清洁更加灵活便捷。
              </p>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"/>
                  <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1V8a1 1 0 00-1-1h-3z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-autobot-primary mb-4">车载清洁</h3>
              <p className="text-gray-600">
                座椅缝隙、脚垫灰尘、仪表台清洁，
                专为车载环境设计，保持爱车整洁。
              </p>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"/>
                  <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-autobot-primary mb-4">办公清洁</h3>
              <p className="text-gray-600">
                键盘清洁、办公桌整理、电脑除尘，
                维护整洁的办公环境，提升工作效率。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-bg text-white section-padding">
        <div className="container-max text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            立即体验AutoBot手持吸尘器
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            强劲吸力，专业清洁，让生活更加整洁舒适
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://autobot.im/collections/handheld-vacuum-cleaner-1" 
               className="btn-primary">
              选购手持吸尘器
            </a>
            <Link href="/car-vacuum-cleaner" className="btn-secondary">
              查看车载系列
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HandheldVacuumCleaner;