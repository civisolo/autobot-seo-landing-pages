import React from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';

const PortableVacuumCleaner = () => {
  return (
    <Layout
      title="便携式吸尘器 - AutoBot便携吸尘器 | 随时随地强力清洁"
      description="AutoBot便携式吸尘器，轻巧便携设计，强劲吸力，适合旅行、办公、车载等多场景使用。随时随地享受专业清洁体验。"
      keywords="便携式吸尘器,便携吸尘器,旅行吸尘器,AutoBot,移动清洁,轻便吸尘器,多场景清洁"
      canonical="https://autobot-seo.vercel.app/portable-vacuum-cleaner"
    >
      {/* Hero Section */}
      <section className="gradient-bg text-white">
        <div className="container-max section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="text-green-300">便携式</span>吸尘器<br />
                随时随地强力清洁
              </h1>
              <p className="text-xl mb-8 text-gray-200">
                AutoBot便携式吸尘器，突破传统清洁限制，轻巧便携的设计让您
                无论身处何地都能享受专业级的清洁体验。
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
              <img src="/images/autobot-portable.jpg" alt="AutoBot 便携式吸尘器" 
                   className="w-full h-auto rounded-lg shadow-2xl" />
              <div className="absolute -bottom-4 -right-4 bg-green-400 text-white px-4 py-2 rounded-lg font-bold">
                随身携带
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
              便携设计的核心优势
            </h2>
            <p className="text-xl text-gray-600">
              轻巧机身，强劲性能，随时随地专业清洁
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4z"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-autobot-primary mb-3">轻量化设计</h3>
              <p className="text-gray-600">
                仅重800g，比传统吸尘器轻70%，
                单手操作毫不费力。
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-autobot-primary mb-3">紧凑机身</h3>
              <p className="text-gray-600">
                精巧的机身设计，轻松放入背包、
                手提包或车载储物箱。
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-autobot-primary mb-3">长续航电池</h3>
              <p className="text-gray-600">
                高效锂电池，单次充电可使用
                30分钟，满足多次清洁需求。
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81z"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-autobot-primary mb-3">快速充电</h3>
              <p className="text-gray-600">
                USB-C快充技术，2小时快速充满，
                随时保持最佳使用状态。
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
              多场景便携应用
            </h2>
            <p className="text-xl text-gray-600">
              无论何时何地，都能提供专业清洁服务
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-autobot-primary mb-6">旅行出差场景</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-bold text-gray-800">酒店房间清洁</h4>
                    <p className="text-gray-600">清理床单上的头发、桌面灰尘，保持住宿环境整洁</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-bold text-gray-800">行李箱整理</h4>
                    <p className="text-gray-600">清除行李箱内的灰尘和碎屑，保持衣物清洁</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-bold text-gray-800">租车清洁</h4>
                    <p className="text-gray-600">快速清理租用车辆内部，确保舒适的驾驶环境</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-autobot-primary mb-6">办公移动场景</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-bold text-gray-800">临时办公室</h4>
                    <p className="text-gray-600">快速清理临时工作空间，创造整洁的办公环境</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-bold text-gray-800">会议室准备</h4>
                    <p className="text-gray-600">会议前快速清理桌面和座椅，提升专业形象</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-bold text-gray-800">设备维护</h4>
                    <p className="text-gray-600">清洁笔记本电脑、投影仪等设备，保持最佳性能</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-autobot-primary mb-6">户外活动场景</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-purple-500 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-bold text-gray-800">野餐后清理</h4>
                    <p className="text-gray-600">清理野餐垫上的食物碎屑和沙土，保持整洁</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-purple-500 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-bold text-gray-800">帐篷清洁</h4>
                    <p className="text-gray-600">露营时清理帐篷内的沙粒和杂物，提升舒适度</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-purple-500 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-bold text-gray-800">户外装备维护</h4>
                    <p className="text-gray-600">清洁背包、睡袋等户外装备，延长使用寿命</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-autobot-primary mb-6">应急清洁场景</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-bold text-gray-800">意外洒落清理</h4>
                    <p className="text-gray-600">快速清理洒落的食物、饮料等，避免污渍扩散</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-bold text-gray-800">宠物毛发处理</h4>
                    <p className="text-gray-600">随时清理宠物掉落的毛发，保持环境卫生</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-bold text-gray-800">临时清洁需求</h4>
                    <p className="text-gray-600">应对突发的清洁需求，随时保持环境整洁</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portability vs Performance */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-autobot-primary mb-4">
              便携性与性能的完美平衡
            </h2>
            <p className="text-xl text-gray-600">
              小巧机身，强劲性能，不妥协的清洁体验
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-autobot-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-autobot-primary mb-2">强劲吸力不妥协</h3>
                    <p className="text-gray-600">
                      虽然机身紧凑，但依然提供高达16KPA的强劲吸力，
                      确保每次清洁都能达到专业标准。
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-autobot-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-autobot-primary mb-2">智能电源管理</h3>
                    <p className="text-gray-600">
                      先进的电源管理系统，在保证性能的同时最大化续航时间，
                      让便携使用更加持久。
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-autobot-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-autobot-primary mb-2">多档位调节</h3>
                    <p className="text-gray-600">
                      提供多种吸力档位选择，根据不同清洁需求调节功率，
                      既保证效果又延长使用时间。
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-autobot-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-autobot-primary mb-2">精密工程设计</h3>
                    <p className="text-gray-600">
                      采用精密工程设计，每个组件都经过优化，
                      在最小体积内实现最大性能输出。
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img src="/images/portable-performance.jpg" alt="便携性能对比" 
                   className="w-full h-auto rounded-lg shadow-xl" />
              <div className="absolute top-4 right-4 bg-white bg-opacity-90 p-4 rounded-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-autobot-accent">800g</div>
                  <div className="text-sm text-gray-600">超轻重量</div>
                </div>
              </div>
              <div className="absolute bottom-4 left-4 bg-white bg-opacity-90 p-4 rounded-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-autobot-accent">16KPA</div>
                  <div className="text-sm text-gray-600">强劲吸力</div>
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
              便携式吸尘器核心特性
            </h2>
            <p className="text-xl text-gray-600">
              专为移动使用而设计的每一个细节
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-autobot-primary mb-4">超轻机身</h3>
              <p className="text-gray-600">
                仅重800g的超轻设计，长时间使用不疲劳，
                女性用户也能轻松操作。
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-autobot-primary mb-4">快充电池</h3>
              <p className="text-gray-600">
                USB-C快充接口，2小时充满电，
                30分钟续航，随时保持最佳状态。
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-autobot-primary mb-4">多功能配件</h3>
              <p className="text-gray-600">
                配备多种专用吸头，适应不同清洁场景，
                一机多用，提升使用价值。
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-autobot-primary mb-4">静音设计</h3>
              <p className="text-gray-600">
                优化的电机和风道设计，运行噪音低，
                不影响他人，适合各种环境使用。
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-autobot-primary mb-4">易清洁维护</h3>
              <p className="text-gray-600">
                简化的结构设计，尘盒易拆卸清洗，
                滤网可水洗，维护简单方便。
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-autobot-primary mb-4">智能指示</h3>
              <p className="text-gray-600">
                LED电量指示，实时显示电池状态，
                合理安排使用时间，避免意外断电。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-bg text-white section-padding">
        <div className="container-max text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            随身携带的清洁专家
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            便携设计，强劲性能，让清洁不再受限于地点和时间
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://autobot.im/collections/handheld-vacuum-cleaner-1" 
               className="btn-primary">
              选购便携式吸尘器
            </a>
            <Link href="/cordless-vacuum-cleaner" className="btn-secondary">
              查看无线系列
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PortableVacuumCleaner;