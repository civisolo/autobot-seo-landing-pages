import Head from 'next/head'
import Layout from '../components/Layout'
import { site, images } from '../data/autobot'

export default function PetFamilyCleaning() {
  const title = '宠物家庭毛发清洁手持吸尘器 | AutoBot Pet Cleaning'
  const desc = '针对宠物家庭的毛发清洁方案：强吸力、缝隙/毛刷吸头、HEPA可水洗、低噪不惊扰，家车两用。'
  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <link rel="icon" href={site.icon} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={desc} />
        <meta property="og:image" content={site.ogImage} />
        <link rel="canonical" href={site.url + 'pet-family-cleaning'} />
      </Head>
      <section className="bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">宠物家庭专属清洁</h1>
              <p className="text-gray-600 mb-6">针对猫狗掉毛与沙发/地毯缝隙碎屑，AutoBot 手持系列提供强吸力与针对性吸头（缝隙/毛刷/软管），H13 HEPA 可水洗，低噪不惊扰宠物，清理后车内/家中空气更洁净。</p>
              <div className="flex gap-3">
                <a className="btn-primary" href={site.handheldCollection} target="_blank" rel="noreferrer">查看全系列</a>
                <a className="btn-secondary" href={site.products.vm5} target="_blank" rel="noreferrer">了解 VM5</a>
              </div>
            </div>
            <div>
              <img className="w-full rounded-lg shadow" src={images.hero[1]} alt="AutoBot pet family cleaning" />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-semibold mb-6">针对宠物场景的优势</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {t:'强吸不缠毛', d:'高转速无刷电机配合优化风道，毛发不易缠绕，清理顺畅'},
            {t:'HEPA H13', d:'细微粉尘/皮屑有效拦截，可水洗复用，维护成本低'},
            {t:'低噪运行', d:'降低对宠物的惊扰，安心日常清洁'},
            {t:'多吸头组合', d:'缝隙、毛刷、软管组合，应对沙发、地毯、车座等多材质'},
            {t:'家车两用', d:'客厅到后备箱一机打通，减少设备冗余'},
            {t:'Type‑C 快充', d:'充电便利，续航稳定'}
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
            {images.products.slice(1,5).map((src, idx)=> (
              <a key={idx} href={idx<2? site.products.vm5 : site.products.vx4} target="_blank" rel="noreferrer" className="block">
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
            <summary className="font-medium">毛发容易缠绕吗？</summary>
            <p className="mt-2">配合防缠绕设计与可拆洗部件，定期清理刷头即可保持吸力与顺畅。</p>
          </details>
          <details className="p-4 bg-white rounded-lg shadow">
            <summary className="font-medium">如何降低异味？</summary>
            <p className="mt-2">建议搭配 HEPA H13 过滤与定期清洗集尘杯/过滤件，改善宠物皮屑与异味问题。</p>
          </details>
        </div>
      </section>
    </Layout>
  )
}

export const config = { runtime: 'edge' }
