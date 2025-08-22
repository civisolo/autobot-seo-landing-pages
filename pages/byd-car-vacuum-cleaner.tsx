import Layout from '../components/Layout'
import { site, images } from '../data/autobot'

export default function BYDCarVacuumCleaner() {
  const title = '比亚迪车载吸尘器 | AutoBot 专业汽车清洁解决方案'
  const description = '专为比亚迪车主设计的车载吸尘器，高吸力、USB-C快充、可水洗HEPA滤网，完美适配比亚迪汽车内饰清洁需求。'
  const keywords = '比亚迪车载吸尘器,比亚迪汽车吸尘器,车载吸尘器,汽车清洁,比亚迪内饰清洁'
  const canonical = site.url + 'byd-car-vacuum-cleaner'

  return (
    <Layout title={title} description={description} keywords={keywords} canonical={canonical}>
      {/* Hero Section - 科技感设计 */}
      <section className="relative min-h-screen bg-gradient-to-br from-blue-900 via-cyan-900 to-teal-900 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        
        {/* 动态背景元素 */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-32 w-24 h-24 bg-cyan-500/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-32 left-1/3 w-28 h-28 bg-teal-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>
        
        <div className="relative mx-auto max-w-7xl px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
            <div className="text-white">
              <div className="inline-flex items-center px-6 py-3 bg-blue-500/20 backdrop-blur-sm rounded-full text-lg font-medium mb-8 border border-blue-400/30">
                <span className="w-3 h-3 bg-blue-400 rounded-full mr-3 animate-pulse"></span>
                比亚迪专用设计
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  比亚迪车载
                </span>
                <br />
                <span className="text-white">吸尘器</span>
              </h1>
              <p className="text-2xl text-gray-300 mb-12 leading-relaxed">
                专为比亚迪车主打造，高吸力紧凑机身，USB‑C快充，可水洗HEPA滤网。
                缝隙刷/软管工具轻松处理座椅、地毯、键盘和车内细节。
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <a className="inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-bold text-lg rounded-2xl hover:from-blue-600 hover:to-cyan-700 transform hover:scale-105 transition-all duration-300 shadow-2xl" 
                   href={site.handheldCollection} target="_blank" rel="noreferrer">
                  <span>探索产品</span>
                  <svg className="ml-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a className="inline-flex items-center justify-center px-10 py-5 border-2 border-blue-400/30 text-white font-bold text-lg rounded-2xl hover:bg-blue-400 hover:text-gray-900 transition-all duration-300 backdrop-blur-sm" 
                   href={site.products.vm5} target="_blank" rel="noreferrer">
                  了解VM5
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-3xl blur-3xl"></div>
              <img className="relative w-full rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500" 
                   src={images.hero[0]} alt="比亚迪车载吸尘器" />
            </div>
          </div>
        </div>
      </section>

      {/* 比亚迪车型适配 - 科技展示 */}
      <section className="py-24 bg-gradient-to-b from-blue-50 to-cyan-50">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">比亚迪车型完美适配</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              专为比亚迪各系列车型设计的清洁解决方案
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                model: "比亚迪汉",
                features: ["豪华内饰清洁", "真皮座椅护理", "中控台除尘"],
                color: "from-blue-500 to-blue-600",
                icon: "🚗"
              },
              {
                model: "比亚迪唐",
                features: ["7座空间清洁", "后备箱整理", "儿童座椅区域"],
                color: "from-cyan-500 to-cyan-600",
                icon: "🚙"
              },
              {
                model: "比亚迪秦",
                features: ["紧凑型清洁", "经济实用", "日常维护"],
                color: "from-teal-500 to-teal-600",
                icon: "🚘"
              },
              {
                model: "比亚迪宋",
                features: ["SUV专用", "越野清洁", "多功能空间"],
                color: "from-blue-600 to-cyan-600",
                icon: "🏎️"
              }
            ].map((car) => (
              <div key={car.model} className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-500 border border-blue-100">
                <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${car.color} text-white text-3xl rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {car.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{car.model}</h3>
                <ul className="space-y-3">
                  {car.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-600 text-lg">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 技术规格 - 科技感展示 */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">专业技术规格</h2>
            <p className="text-xl text-gray-600">为比亚迪车主量身定制的技术参数</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                spec: "20kPa",
                label: "强劲吸力",
                description: "专业级吸力，轻松应对各种污渍",
                color: "from-blue-500 to-blue-600",
                icon: "⚡"
              },
              {
                spec: "60min",
                label: "持久续航",
                description: "单次充电满足完整清洁需求",
                color: "from-cyan-500 to-cyan-600",
                icon: "🔋"
              },
              {
                spec: "H13",
                label: "HEPA过滤",
                description: "医用级过滤，保护车内空气质量",
                color: "from-teal-500 to-teal-600",
                icon: "🛡️"
              }
            ].map((tech) => (
              <div key={tech.label} className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 border border-blue-100">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${tech.color} text-white text-2xl rounded-2xl mb-6`}>
                  {tech.icon}
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{tech.spec}</div>
                <div className="text-xl font-semibold text-gray-700 mb-3">{tech.label}</div>
                <p className="text-gray-600 leading-relaxed">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 产品展示 - 科技网格 */}
      <section className="py-24 bg-gradient-to-b from-blue-50 to-cyan-50">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">比亚迪专用产品</h2>
            <p className="text-xl text-gray-600">专为比亚迪车主精心挑选的清洁产品</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.products.slice(0,6).map((src, idx) => (
              <a key={idx} 
                 href={idx<3? site.products.vm5 : site.products.vx4} 
                 target="_blank" 
                 rel="noreferrer" 
                 className="group block">
                <div className="bg-white rounded-3xl p-6 shadow-xl hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-500 border border-blue-100">
                  <div className="relative overflow-hidden rounded-2xl mb-6">
                    <img src={src} 
                         alt={`比亚迪车载吸尘器产品-${idx}`} 
                         className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"/>
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="text-center">
                    <span className="text-lg font-semibold text-gray-700">查看详情</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - 科技感设计 */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-white/10 rounded-full mb-8">
            <span className="text-5xl">🚗</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
            为您的比亚迪选择专业清洁！
          </h2>
          <p className="text-2xl text-blue-100 mb-12 max-w-3xl mx-auto">
            加入数千名比亚迪车主的清洁解决方案
          </p>
          <a className="inline-flex items-center justify-center px-12 py-6 bg-white text-blue-600 font-bold text-xl rounded-2xl hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-2xl" 
             href={site.handheldCollection} target="_blank" rel="noreferrer">
            立即购买
          </a>
        </div>
      </section>
    </Layout>
  )
} 