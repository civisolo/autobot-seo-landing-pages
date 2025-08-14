import React from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';

const CarVacuumCleaner = () => {
  return (
    <Layout
      title="车载吸尘器 - AutoBot专业车用吸尘器 | 汽车清洁专家"
      description="AutoBot车载吸尘器，专为汽车清洁设计，强劲吸力，便携设计。清洁座椅缝隙、脚垫灰尘、仪表台，保持爱车整洁如新。"
      keywords="车载吸尘器,汽车吸尘器,车用清洁,AutoBot,汽车内饰清洁,便携吸尘器,车内除尘"
      canonical="https://autobot-seo.vercel.app/car-vacuum-cleaner"
    >
      {/* Hero Section */}
      <section className="gradient-bg text-white">
        <div className="container-max section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="text-blue-300">车载</span>吸尘器<br />
                汽车清洁专家
              </h1>
              <p className="text-xl mb-8 text-gray-200">
                AutoBot车载吸尘器，专为汽车环境设计，强劲吸力深入每个角落，
                让您的爱车始终保持整洁如新的状态。
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://autobot.im/products/autobot-vm5-self-cleaner-vacuum-with-air-blower-inflator-pump-car-vacuum" 
                   className="btn-primary text-center">
                  立即购买 VM5
                </a>
                <a href="https://autobot.im/collections/handheld-vacuum-cleaner-1" 
                   className="btn-secondary text-center">
                  查看全系列
                </a>
              </div>
            </div>
            <div className="relative">
              <img src="/images/autobot-vm5-car.jpg" alt="AutoBot VM5 车载吸尘器" 
                   className="w-full h-auto rounded-lg shadow-2xl" />
              <div className="absolute -bottom-4 -right-4 bg-blue-400 text-white px-4 py-2 rounded-lg font-bold">
                车载专用
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
              汽车清洁的常见挑战
            </h2>
            <p className="text-xl text-gray-600">
              了解问题，找到最佳解决方案
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-red-50 p-6 rounded-xl text-center">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                  <path fillRule="evenodd" d="M4 5a2 2 0 012-2v1a2 2 0 012 2v6.5a.5.5 0 01-.5.5.5.5 0 01-.5-.5V7a2 2 0 012-2 2 2 0 012 2v.5a.5.5 0 01-.5.5.5.5 0 01-.5-.5V7a2 2 0 012-2h3a2 2 0 012 2v8a2 2 0 01-2 2H6a2 2 0 01-2-2V5z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-red-700 mb-3">座椅缝隙难清理</h3>
              <p className="text-gray-600 text-sm">
                食物碎屑、硬币、纸屑等小物件
                容易掉入座椅缝隙，难以清理。
              </p>
            </div>

            <div className="bg-orange-50 p-6 rounded-xl text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4z"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-orange-700 mb-3">脚垫灰尘积累</h3>
              <p className="text-gray-600 text-sm">
                泥土、沙粒、落叶等污物
                在脚垫上积累，影响车内环境。
              </p>
            </div>

            <div className="bg-yellow-50 p-6 rounded-xl text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-yellow-700 mb-3">仪表台除尘困难</h3>
              <p className="text-gray-600 text-sm">
                仪表台表面和缝隙容易积尘，
                传统清洁方式难以彻底清理。
              </p>
            </div>

            <div className="bg-green-50 p-6 rounded-xl text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-green-700 mb-3">空调出风口清洁</h3>
              <p className="text-gray-600 text-sm">
                空调出风口叶片间的灰尘
                影响空气质量和制冷效果。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="bg-gray-50 section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-autobot-primary mb-4">
              AutoBot车载吸尘器解决方案
            </h2>
            <p className="text-xl text-gray-600">
              专业设计，针对性解决汽车清洁难题
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-autobot-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-autobot-primary mb-2">强劲吸力深入缝隙</h3>
                    <p className="text-gray-600">
                      100000rpm高速电机提供强劲吸力，配合专用缝隙吸头，
                      轻松清理座椅缝隙中的各种杂物和灰尘。
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-autobot-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-autobot-primary mb-2">多样化吸头配置</h3>
                    <p className="text-gray-600">
                      配备刷头、缝隙头、宽口吸头等多种专用配件，
                      针对不同清洁场景，提供最佳清洁效果。
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-autobot-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-autobot-primary mb-2">便携设计易操作</h3>
                    <p className="text-gray-600">
                      轻巧便携的手持设计，单手即可操作，
                      灵活清洁车内各个角落，不留死角。
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-autobot-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-autobot-primary mb-2">车载电源适配</h3>
                    <p className="text-gray-600">
                      支持12V车载电源供电，也可使用内置电池，
                      随时随地进行车内清洁，不受电源限制。
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img src="/images/car-cleaning-solution.jpg" alt="汽车清洁解决方案" 
                   className="w-full h-auto rounded-lg shadow-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Car Cleaning Guide */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-autobot-primary mb-4">
              汽车清洁完整指南
            </h2>
            <p className="text-xl text-gray-600">
              专业清洁流程，让爱车焕然一新
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-autobot-primary mb-6">内饰清洁步骤</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-bold text-gray-800">第一步：准备工作</h4>
                    <p className="text-gray-600">移除车内个人物品，调整座椅位置，为清洁做好准备</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-bold text-gray-800">第二步：座椅清洁</h4>
                    <p className="text-gray-600">使用缝隙吸头清理座椅缝隙，刷头清洁座椅表面</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-bold text-gray-800">第三步：脚垫除尘</h4>
                    <p className="text-gray-600">取出脚垫，使用宽口吸头彻底清洁泥土和沙粒</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-bold text-gray-800">第四步：仪表台清洁</h4>
                    <p className="text-gray-600">使用专用刷头清洁仪表台表面和各种按钮缝隙</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-bold text-gray-800">第五步：空调出风口</h4>
                    <p className="text-gray-600">使用细刷头清洁空调出风口叶片间的积尘</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-autobot-primary mb-6">清洁技巧与注意事项</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-bold text-gray-800">选择合适的吸头</h4>
                    <p className="text-gray-600">根据清洁部位选择对应的吸头，提高清洁效率</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-bold text-gray-800">控制吸力大小</h4>
                    <p className="text-gray-600">清洁精细部件时适当降低吸力，避免损坏</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-bold text-gray-800">定期清洁滤网</h4>
                    <p className="text-gray-600">保持滤网清洁，确保吸尘器性能和使用寿命</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-bold text-gray-800">避免液体吸入</h4>
                    <p className="text-gray-600">确保清洁区域干燥，避免液体进入吸尘器内部</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-bold text-gray-800">储存注意事项</h4>
                    <p className="text-gray-600">使用后及时清理尘盒，存放在干燥通风处</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Comparison */}
      <section className="bg-gray-50 section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-autobot-primary mb-4">
              车载吸尘器产品对比
            </h2>
            <p className="text-xl text-gray-600">
              选择最适合您的车载清洁解决方案
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
              <thead className="bg-autobot-primary text-white">
                <tr>
                  <th className="px-6 py-4 text-left">产品特性</th>
                  <th className="px-6 py-4 text-center">AutoBot VM5</th>
                  <th className="px-6 py-4 text-center">AutoBot VX4</th>
                  <th className="px-6 py-4 text-center">普通车载吸尘器</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900">电机转速</td>
                  <td className="px-6 py-4 text-center text-green-600 font-bold">100000rpm</td>
                  <td className="px-6 py-4 text-center text-green-600 font-bold">高速电机</td>
                  <td className="px-6 py-4 text-center text-gray-500">30000rpm</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">吸力强度</td>
                  <td className="px-6 py-4 text-center text-green-600 font-bold">超强吸力</td>
                  <td className="px-6 py-4 text-center text-green-600 font-bold">20000Pa</td>
                  <td className="px-6 py-4 text-center text-gray-500">一般</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900">自清洁功能</td>
                  <td className="px-6 py-4 text-center text-green-600">✓</td>
                  <td className="px-6 py-4 text-center text-green-600">✓</td>
                  <td className="px-6 py-4 text-center text-red-500">✗</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">多功能设计</td>
                  <td className="px-6 py-4 text-center text-green-600">吸尘+吹风+充气</td>
                  <td className="px-6 py-4 text-center text-green-600">吸尘+吹风+充气</td>
                  <td className="px-6 py-4 text-center text-gray-500">仅吸尘</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900">配件丰富度</td>
                  <td className="px-6 py-4 text-center text-green-600">多种专用吸头</td>
                  <td className="px-6 py-4 text-center text-green-600">多种专用吸头</td>
                  <td className="px-6 py-4 text-center text-gray-500">基础配件</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">电源方式</td>
                  <td className="px-6 py-4 text-center text-green-600">车载+电池</td>
                  <td className="px-6 py-4 text-center text-green-600">车载+电池</td>
                  <td className="px-6 py-4 text-center text-gray-500">仅车载</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="text-center mt-8">
            <a href="https://autobot.im/collections/handheld-vacuum-cleaner-1" 
               className="btn-primary">
              选购AutoBot车载吸尘器
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-bg text-white section-padding">
        <div className="container-max text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            让您的爱车始终保持整洁
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            专业车载清洁解决方案，强劲吸力，便携设计
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://autobot.im/products/autobot-vm5-self-cleaner-vacuum-with-air-blower-inflator-pump-car-vacuum" 
               className="btn-primary">
              立即购买 VM5
            </a>
            <Link href="/portable-vacuum-cleaner" className="btn-secondary">
              查看便携系列
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CarVacuumCleaner;