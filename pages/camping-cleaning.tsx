import Head from 'next/head'
import Layout from '../components/Layout'
import { site, images } from '../data/autobot'

export default function CampingCleaning() {
  const title = '露营清洁专用手持/车载吸尘器 | AutoBot Camping Cleaning'
  const desc = '露营/车宿/房车场景的便携清洁方案：无线强吸、吸吹一体、Type‑C快充、HEPA可水洗，家车两用。'
  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <link rel="icon" href={site.icon} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={desc} />
        <meta property="og:image" content={site.ogImage} />
        <link rel="canonical" href={site.url + 'camping-cleaning'} />
      </Head>
      <section className="bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">露营清洁一站式方案</h1>
              <p className="text-gray-600 mb-6">野外露营/车宿对清洁工具提出“便携、多功能、长续航”的更高要求。AutoBot 无线手持系列，支持吸吹一体/充气、Type‑C 快充、HEPA 可水洗，轻松应对沙尘、碎屑、帐内床垫充放气等。</p>
              <div className="flex gap-3">
                <a className="btn-primary" href={site.handheldCollection} target="_blank" rel="noreferrer">查看全系列</a>
                <a className="btn-secondary" href={site.products.vx4} target="_blank" rel="noreferrer">了解 VX4</a>
              </div>
            </div>
            <div>
              <img className="w-full rounded-lg shadow" src={images.hero[0]} alt="AutoBot camping cleaning" />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-semibold mb-6">为什么适合露营/车宿</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {t:'无线强吸', d:'12–20kPa 强吸力，小体积大能量，快速清理帐内灰尘与碎屑'},
            {t:'吸吹/充气一体', d:'支持吹尘与充气，兼顾气枕/气垫与设备除尘'},
            {t:'Type‑C 快充', d:'支持车充/移动电源补能，户外不焦虑'},
            {t:'HEPA 可水洗', d:'H13 过滤系统，易维护、成本低'},
            {t:'轻量低噪', d:'携带无负担，夜间不扰营友'},
            {t:'配件丰富', d:'缝隙吸头/毛刷/软管，覆盖帐篷、后备箱、桌椅等'}
          ].map((f)=> (
            <div key={f.t} className="p-6 bg-white rounded-lg shadow">
              <h3 className="font-semibold mb-2">{f.t}</h3>
              <p className="text-gray-600 text-sm">{f.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-2xl font-semibold mb-6">推荐产品</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {images.products.slice(0,4).map((src, idx)=> (
              <a key={idx} href={idx<2? site.products.vx4 : site.products.vm5} target="_blank" rel="noreferrer" className="block">
                <img src={src} alt={`product-${idx}`} className="w-full rounded-lg shadow"/>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-semibold mb-4">常见问题</h2>
        <div className="space-y-4 text-gray-700">
          <details className="p-4 bg-white rounded-lg shadow">
            <summary className="font-medium">户外如何补能？</summary>
            <p className="mt-2">支持 USB‑C 车充/移动电源充电；部分机型支持快充，露营期间可边玩边补能。</p>
          </details>
          <details className="p-4 bg-white rounded-lg shadow">
            <summary className="font-medium">吸吹一体有哪些用途？</summary>
            <p className="mt-2">可用于帐内除尘、设备吹灰，也可为气枕/气垫充放气，一机多用。</p>
          </details>
        </div>
      </section>
    </Layout>
  )
}

export const config = { runtime: 'edge' }
