import Layout from '../components/Layout'
import { site, images } from '../data/autobot'

export default function CrumbsCarVacuumCleaner() {
  const title = '面包屑清理车载吸尘器 | AutoBot 专业食物残渣清洁'
  const description = '专为清理车内面包屑、食物残渣设计的车载吸尘器，强吸力、静音设计、便携轻巧，让您的爱车始终保持清洁。'
  const keywords = '面包屑清理车载吸尘器,食物残渣清理,车载吸尘器,汽车清洁,面包屑吸尘器'
  const canonical = site.url + 'crumbs-car-vacuum-cleaner'

  return (
    <Layout title={title} description={description} keywords={keywords} canonical={canonical}>
      {/* Hero Section - 生活化设计 */}
      <section className="relative min-h-screen bg-gradient-to-br from-amber-900 via-orange-900 to-red-900 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        
        {/* 面包屑装饰元素 */}
        <div className="absolute inset-0">
          <div className="absolute top-32 left-16 w-8 h-8 bg-amber-300/30 rounded-full animate-bounce"></div>
          <div className="absolute top-48 right-24 w-6 h-6 bg-orange-300/30 rounded-full animate-bounce delay-500"></div>
          <div className="absolute bottom-40 left-1/4 w-4 h-4 bg-red-300/30 rounded-full animate-bounce delay-1000"></div>
          <div className="absolute bottom-60 right-1/3 w-5 h-5 bg-amber-300/30 rounded-full animate-bounce delay-1500"></div>
        </div>
        
        <div className="relative mx-auto max-w-7xl px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
            <div className="text-white">
              <div className="inline-flex items-center px-6 py-3 bg-amber-500/20 backdrop-blur-sm rounded-full text-lg font-medium mb-8 border border-amber-400/30">
                <span className="w-3 h-3 bg-amber-400 rounded-full mr-3 animate-pulse"></span>
                专业面包屑清理
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
                <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                  面包屑清理
                </span>
                <br />
                <span className="text-white">车载吸尘器</span>
              </h1>
              <p className="text-2xl text-gray-300 mb-12 leading-relaxed">
                专为清理车内面包屑、食物残渣设计，高吸力紧凑机身，USB‑C快充，可水洗HEPA滤网。
                缝隙刷/软管工具轻松处理座椅、地毯、键盘和车内细节。
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <a className="inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold text-lg rounded-2xl hover:from-amber-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-300 shadow-2xl" 
                   href={site.handheldCollection} target="_blank" rel="noreferrer">
                  <span>探索产品</span>
                  <svg className="ml-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a className="inline-flex items-center justify-center px-10 py-5 border-2 border-amber-400/30 text-white font-bold text-lg rounded-2xl hover:bg-amber-400 hover:text-gray-900 transition-all duration-300 backdrop-blur-sm" 
                   href={site.products.vx4} target="_blank" rel="noreferrer">
                  了解VX4
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-3xl blur-3xl"></div>
              <img className="relative w-full rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500" 
                   src={images.hero[1]} alt="面包屑清理车载吸尘器" />
            </div>
          </div>
        </div>
      </section>

      {/* 清理场景展示 - 生活化布局 */}
      <section className="py-24 bg-gradient-to-b from-amber-50 to-orange-50">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">常见清理场景</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              专为各种食物残渣清理场景设计
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                scene: "早餐面包屑",
                description: "清理早餐时掉落的面包屑、饼干碎屑",
                tips: ["座椅缝隙", "中控台", "地毯"],
                color: "from-amber-500 to-amber-600",
                icon: "🍞"
              },
              {
                scene: "零食残渣",
                description: "清理薯片、坚果等零食的碎屑",
                tips: ["杯架", "储物格", "门板"],
                color: "from-orange-500 to-orange-600",
                icon: "🍿"
              },
              {
                scene: "饮料洒落",
                description: "清理饮料、咖啡等液体残留",
                tips: ["座椅表面", "地板", "仪表盘"],
                color: "from-red-500 to-red-600",
                icon: "☕"
              },
              {
                scene: "儿童食物",
                description: "清理儿童在车内进食的残渣",
                tips: ["安全座椅", "后排座椅", "车窗"],
                color: "from-amber-600 to-orange-600",
                icon: "👶"
              },
              {
                scene: "宠物食物",
                description: "清理宠物在车内的食物残渣",
                tips: ["宠物垫", "后备箱", "座椅"],
                color: "from-orange-600 to-red-600",
                icon: "🐕"
              },
              {
                scene: "外卖残渣",
                description: "清理外卖食物的包装和残渣",
                tips: ["副驾驶", "后排", "后备箱"],
                color: "from-red-600 to-amber-600",
                icon: "🍔"
              }
            ].map((item) => (
              <div key={item.scene} className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-500 border border-amber-100">
                <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${item.color} text-white text-3xl rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.scene}</h3>
                <p className="text-gray-600 leading-relaxed text-lg mb-6">{item.description}</p>
                <div className="space-y-2">
                  {item.tips.map((tip) => (
                    <div key={tip} className="flex items-center text-gray-700 text-sm">
                      <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                      {tip}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 产品优势 - 生活化展示 */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">为什么选择我们</h2>
            <p className="text-xl text-gray-600">专为食物残渣清理设计的独特优势</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {[
              {
                advantage: "强效吸力",
                description: "专门针对面包屑等细小颗粒设计，确保彻底清理",
                benefit: "99%清理率",
                color: "from-amber-500 to-amber-600",
                icon: "💨"
              },
              {
                advantage: "静音设计",
                description: "低噪音运行，不会打扰车内乘客或周围环境",
                benefit: "低于60分贝",
                color: "from-orange-500 to-orange-600",
                icon: "🔇"
              },
              {
                advantage: "便携轻巧",
                description: "小巧机身，轻松放入车内储物空间，随时取用",
                benefit: "仅1.2kg",
                color: "from-red-500 to-red-600",
                icon: "⚖️"
              },
              {
                advantage: "快速充电",
                description: "USB-C快充技术，30分钟即可充满，随时待命",
                benefit: "30分钟快充",
                color: "from-amber-600 to-orange-600",
                icon: "⚡"
              }
            ].map((feature) => (
              <div key={feature.advantage} className="flex items-start space-x-6">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${feature.color} text-white text-2xl rounded-2xl flex-shrink-0`}>
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.advantage}</h3>
                  <p className="text-gray-600 leading-relaxed text-lg mb-2">{feature.description}</p>
                  <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-amber-100 to-orange-100 text-amber-700 font-semibold rounded-full text-sm">
                    {feature.benefit}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 产品展示 - 生活化网格 */}
      <section className="py-24 bg-gradient-to-b from-amber-50 to-orange-50">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">面包屑清理专用产品</h2>
            <p className="text-xl text-gray-600">专为食物残渣清理精心设计的产品系列</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.products.slice(0,6).map((src, idx) => (
              <a key={idx} 
                 href={idx<3? site.products.vx4 : site.products.vm5} 
                 target="_blank" 
                 rel="noreferrer" 
                 className="group block">
                <div className="bg-white rounded-3xl p-6 shadow-xl hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-500 border border-amber-100">
                  <div className="relative overflow-hidden rounded-2xl mb-6">
                    <img src={src} 
                         alt={`面包屑清理车载吸尘器产品-${idx}`} 
                         className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"/>
                    <div className="absolute inset-0 bg-gradient-to-t from-amber-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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

      {/* CTA Section - 生活化设计 */}
      <section className="py-24 bg-gradient-to-r from-amber-600 to-orange-600">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-white/10 rounded-full mb-8">
            <span className="text-5xl">🍞</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
            告别车内面包屑烦恼！
          </h2>
          <p className="text-2xl text-amber-100 mb-12 max-w-3xl mx-auto">
            让您的爱车始终保持清洁，享受舒适的驾驶体验
          </p>
          <a className="inline-flex items-center justify-center px-12 py-6 bg-white text-amber-600 font-bold text-xl rounded-2xl hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-2xl" 
             href={site.handheldCollection} target="_blank" rel="noreferrer">
            立即购买
          </a>
        </div>
      </section>
    </Layout>
  )
} 