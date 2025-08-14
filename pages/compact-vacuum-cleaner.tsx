import React from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';

const CompactVacuumCleaner = () => {
  return (
    <Layout
      title="小型吸尘器 - AutoBot迷你吸尘器 | 小巧精致强力清洁"
      description="AutoBot小型吸尘器，迷你机身，强劲性能。适合小空间清洁，桌面整理，车载使用。小巧不占地，清洁效果出众。"
      keywords="小型吸尘器,迷你吸尘器,桌面吸尘器,小巧吸尘器,AutoBot,精致清洁,迷你便携"
      canonical="https://autobot-seo.vercel.app/compact-vacuum-cleaner"
    >
      {/* Hero Section */}
      <section className="gradient-bg text-white">
        <div className="container-max section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="text-yellow-300">小型</span>吸尘器<br />
                小巧精致 强力清洁
              </h1>
              <p className="text-xl mb-8 text-gray-200">
                AutoBot小型吸尘器，精致迷你的外观下蕴含强大清洁力，
                专为精细清洁而生，让小空间也能享受专业级清洁体验。
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
              <img src="/images/autobot-compact.jpg" alt="AutoBot 小型吸尘器" 
                   className="w-full h-auto rounded-lg shadow-2xl" />
              <div className="absolute -bottom-4 -right-4 bg-pink-400 text-white px-4 py-2 rounded-lg font-bold">
                小巧精致
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
              小型设计的独特优势
            </h2>
            <p className="text-xl text-gray-600">
              小巧机身，大有作为，专为精细清洁而生
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4z"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-autobot-primary mb-3">迷你机身</h3>
              <p className="text-gray-600">
                超小体积设计，不占用过多空间，
                轻松收纳在抽屉或桌面。
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-autobot-primary mb-3">精准清洁</h3>
              <p className="text-gray-600">
                小巧吸头设计，能够深入狭小缝隙，
                精准清洁每个细节。
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-autobot-primary mb-3">低噪运行</h3>
              <p className="text-gray-600">
                小型电机优化设计，运行噪音更低，
                不打扰工作和生活环境。
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81z"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-autobot-primary mb-3">即开即用</h3>
              <p className="text-gray-600">
                小巧便携，随手可取，
                无需复杂准备，即开即用。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Perfect for Small Spaces */}
      <section className="bg-gray-50 section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-autobot-primary mb-4">
              小空间清洁专家
            </h2>
            <p className="text-xl text-gray-600">
              专为小空间和精细清洁场景设计
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-autobot-primary mb-6">桌面办公清洁</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-bold text-gray-800">键盘缝隙清洁</h4>
                    <p className="text-gray-600">小巧吸头轻松深入键盘缝隙，清除积累的灰尘和碎屑</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-bold text-gray-800">桌面整理</h4>
                    <p className="text-gray-600">快速清理桌面橡皮屑、纸屑等小垃圾，保持工作环境整洁</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-bold text-gray-800">电子设备除尘</h4>
                    <p className="text-gray-600">温和清洁电脑主机、音响等电子设备表面和散热孔</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-autobot-primary mb-6">家居精细清洁</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-bold text-gray-800">工艺品清洁</h4>
                    <p className="text-gray-600">精细清洁工艺品、装饰品表面灰尘，不损伤精致物品</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-bold text-gray-800">书架整理</h4>
                    <p className="text-gray-600">清洁书籍间隙和书架角落的积尘，保护珍贵书籍</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-bold text-gray-800">抽屉清洁</h4>
                    <p className="text-gray-600">小巧机身轻松进入抽屉内部，清洁角落和缝隙</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-bg text-white section-padding">
        <div className="container-max text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            体验小巧精致的清洁力量
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            小型机身，大有作为，让精细清洁变得简单高效
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://autobot.im/collections/handheld-vacuum-cleaner-1" 
               className="btn-primary">
              选购小型吸尘器
            </a>
            <Link href="/handheld-vacuum-cleaner" className="btn-secondary">
              查看手持系列
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CompactVacuumCleaner;