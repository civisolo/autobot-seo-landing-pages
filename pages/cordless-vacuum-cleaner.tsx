import React from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';

const CordlessVacuumCleaner = () => {
  return (
    <Layout
      title="无线吸尘器 - AutoBot无线吸尘器 | 自由清洁无束缚"
      description="AutoBot无线吸尘器，摆脱电线束缚，自由清洁每个角落。强劲吸力，长续航电池，让清洁变得更加灵活高效。"
      keywords="无线吸尘器,无绳吸尘器,充电式吸尘器,AutoBot,自由清洁,电池吸尘器,无线清洁"
      canonical="https://autobot-seo.vercel.app/cordless-vacuum-cleaner"
    >
      {/* Hero Section */}
      <section className="gradient-bg text-white">
        <div className="container-max section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="text-purple-300">无线</span>吸尘器<br />
                自由清洁无束缚
              </h1>
              <p className="text-xl mb-8 text-gray-200">
                AutoBot无线吸尘器，彻底摆脱电线束缚，让您自由清洁家中每个角落，
                强劲吸力配合长续航电池，清洁从此无限制。
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
              <img src="/images/autobot-cordless.jpg" alt="AutoBot 无线吸尘器" 
                   className="w-full h-auto rounded-lg shadow-2xl" />
              <div className="absolute -bottom-4 -right-4 bg-purple-400 text-white px-4 py-2 rounded-lg font-bold">
                无线自由
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
              无线设计的革命性优势
            </h2>
            <p className="text-xl text-gray-600">
              摆脱束缚，释放清洁潜能
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-autobot-primary mb-3">无限制移动</h3>
              <p className="text-gray-600">
                摆脱电线束缚，自由移动到任何需要清洁的地方，
                不再受插座位置限制。
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-autobot-primary mb-3">高效清洁</h3>
              <p className="text-gray-600">
                无需频繁更换插座，连续清洁效率更高，
                节省时间和精力。
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-autobot-primary mb-3">安全便捷</h3>
              <p className="text-gray-600">
                避免电线缠绕和绊倒风险，
                使用更加安全，操作更加便捷。
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81z"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-autobot-primary mb-3">多场景适用</h3>
              <p className="text-gray-600">
                室内外、车内、楼梯等各种场景，
                都能轻松应对，使用范围更广。
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
              先进电池技术
            </h2>
            <p className="text-xl text-gray-600">
              长续航，快充电，持久动力保障
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-autobot-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-autobot-primary mb-2">高能锂电池</h3>
                    <p className="text-gray-600">
                      采用高密度锂电池技术，单次充电可持续使用30分钟，
                      满足大面积清洁需求，电池寿命长达3年以上。
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-autobot-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-autobot-primary mb-2">快速充电</h3>
                    <p className="text-gray-600">
                      支持快速充电技术，2小时即可充满电，
                      15分钟快充可使用10分钟，应急清洁无忧。
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
                    <h3 className="text-xl font-bold text-autobot-primary mb-2">智能电源管理</h3>
                    <p className="text-gray-600">
                      内置智能电源管理系统，根据清洁需求自动调节功率，
                      最大化续航时间，延长电池使用寿命。
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
                    <h3 className="text-xl font-bold text-autobot-primary mb-2">电量显示</h3>
                    <p className="text-gray-600">
                      LED电量指示灯实时显示剩余电量，
                      让您合理安排清洁时间，避免中途断电。
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img src="/images/battery-technology.jpg" alt="电池技术" 
                   className="w-full h-auto rounded-lg shadow-xl" />
              <div className="absolute top-4 right-4 bg-white bg-opacity-90 p-4 rounded-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-autobot-accent">30min</div>
                  <div className="text-sm text-gray-600">续航时间</div>
                </div>
              </div>
              <div className="absolute bottom-4 left-4 bg-white bg-opacity-90 p-4 rounded-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-autobot-accent">2h</div>
                  <div className="text-sm text-gray-600">充电时间</div>
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
              无线清洁应用场景
            </h2>
            <p className="text-xl text-gray-600">
              自由移动，无处不在的清洁力量
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-autobot-primary mb-6">室内深度清洁</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-bold text-gray-800">楼梯清洁</h4>
                    <p className="text-gray-600">无线设计让楼梯清洁变得轻松，不用担心电线长度限制</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-bold text-gray-800">高处清洁</h4>
                    <p className="text-gray-600">清洁书架顶部、吊扇、窗台等高处区域更加安全便捷</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-bold text-gray-800">角落清洁</h4>
                    <p className="text-gray-600">深入房间各个角落，不受电线束缚，清洁更彻底</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-autobot-primary mb-6">户外清洁应用</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-bold text-gray-800">车库清洁</h4>
                    <p className="text-gray-600">清理车库地面的落叶、灰尘，无需拖拉电线</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-bold text-gray-800">阳台清洁</h4>
                    <p className="text-gray-600">清理阳台积尘、花盆周围的泥土，操作更灵活</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-bold text-gray-800">庭院维护</h4>
                    <p className="text-gray-600">清理庭院小径、花园工具，户外使用更方便</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-autobot-primary mb-6">车辆全面清洁</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-purple-500 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-bold text-gray-800">车内深度清洁</h4>
                    <p className="text-gray-600">无线设计让车内清洁更自由，到达每个角落</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-purple-500 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-bold text-gray-800">后备箱清洁</h4>
                    <p className="text-gray-600">清理后备箱积尘、杂物，不受车载电源限制</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-purple-500 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-bold text-gray-800">外部清洁</h4>
                    <p className="text-gray-600">清理车身缝隙、轮毂灰尘，移动更灵活</p>
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
                    <h4 className="font-bold text-gray-800">突发清洁需求</h4>
                    <p className="text-gray-600">随时应对突发的清洁需求，无需寻找电源插座</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-bold text-gray-800">客人到访前</h4>
                    <p className="text-gray-600">快速清理客厅、餐厅，提升家居环境</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-bold text-gray-800">宠物毛发清理</h4>
                    <p className="text-gray-600">随时清理宠物掉落的毛发，保持环境卫生</p>
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
            体验无线清洁的自由
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            摆脱电线束缚，享受自由清洁的全新体验
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://autobot.im/collections/handheld-vacuum-cleaner-1" 
               className="btn-primary">
              选购无线吸尘器
            </a>
            <Link href="/compact-vacuum-cleaner" className="btn-secondary">
              查看小型系列
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CordlessVacuumCleaner;