import Head from 'next/head'
import Layout from '../components/Layout'
import { site, images } from '../data/autobot'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://autobot-seo-landing-pages.vercel.app/'

export default function CampingCleaning() {
  const title = 'Camping Cleaning | AutoBot Portable Handheld/Car Vacuums'
  const desc = 'Portable cleaning for camping/vanlife/RV: cordless high suction, vacuum + blower/air pump, USB‑C fast charging, washable HEPA. Home & car.'
  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <link rel="icon" href={site.icon} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={desc} />
        <meta property="og:image" content={site.ogImage} />
        <link rel="canonical" href={baseUrl + 'camping-cleaning'} />
      </Head>
      <section className="bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">One‑stop Camping Cleaning</h1>
              <p className="text-gray-600 mb-6">Outdoor camping and vanlife demand portable, multi‑purpose, and long‑lasting cleaning tools. AutoBot cordless handhelds support vacuum + blower/air pump, USB‑C fast charging, and washable HEPA to handle dust, crumbs, and inflating/deflating pads with ease.</p>
              <div className="flex gap-3">
                <a className="inline-flex items-center justify-center rounded-md bg-black px-4 py-2 text-white hover:bg-gray-800 transition" href={site.handheldCollection} target="_blank" rel="noreferrer">Explore lineup</a>
                <a className="inline-flex items-center justify-center rounded-md border border-gray-300 px-4 py-2 text-gray-800 hover:bg-gray-100 transition" href={site.products.vx4} target="_blank" rel="noreferrer">Learn VX4</a>
              </div>
            </div>
            <div>
              <img className="w-full rounded-lg shadow" src={images.hero[0]} alt="AutoBot camping cleaning" />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-semibold mb-6">Why it fits camping/vanlife</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {t:'Cordless high suction', d:'12–20 kPa in a compact body to quickly clean dust and crumbs'},
            {t:'Vac + blow / air pump', d:'Dust blowing and inflating pads/pillows with one device'},
            {t:'USB‑C fast charging', d:'Car charger / power bank friendly. No range anxiety outdoors'},
            {t:'Washable HEPA', d:'H13 filtration, easy maintenance and lower cost'},
            {t:'Lightweight & quiet', d:'Easy to carry, less disturbance at night'},
            {t:'Rich accessories', d:'Crevice/brush/hose for tent, trunk, tables and more'}
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
          <h2 className="text-2xl font-semibold mb-6">Recommended products</h2>
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
        <h2 className="text-2xl font-semibold mb-4">FAQ</h2>
        <div className="space-y-4 text-gray-700">
          <details className="p-4 bg-white rounded-lg shadow">
            <summary className="font-medium">How to recharge outdoors?</summary>
            <p className="mt-2">USB‑C car charger / power bank are supported. Some models support fast charging for quick top‑ups during trips.</p>
          </details>
          <details className="p-4 bg-white rounded-lg shadow">
            <summary className="font-medium">What can the blower/air pump do?</summary>
            <p className="mt-2">Blow dust from gear and inflate/deflate pillows and pads — multi‑use in one device.</p>
          </details>
        </div>
      </section>
    </Layout>
  )
}

export const config = { runtime: 'edge' }
