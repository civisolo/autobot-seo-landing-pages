import Layout from '../components/Layout'
import { site, images } from '../data/autobot'

export default function PetFamilyCleaning() {
  const title = 'Pet Family Hair Cleaning | AutoBot Handheld Vacuum'
  const description = 'High suction for pet homes: anti‑tangle, crevice/brush/hose tools, washable HEPA H13, low noise. Works for home and car.'
  const keywords = 'pet hair vacuum, handheld vacuum pet hair, car pet hair cleaner, hepa pet vacuum, low noise handheld vacuum'
  const canonical = site.url + 'pet-family-cleaning'
  return (
    <Layout title={title} description={description} keywords={keywords} canonical={canonical}>
      <section className="bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Dedicated Cleaning for Pet Families</h1>
              <p className="text-gray-600 mb-6">For cat/dog shedding and crumbs in sofa/carpets, AutoBot handheld provides strong suction and targeted tools (crevice/brush/hose). Washable H13 HEPA and low noise reduce disturbance and keep cabin/room air cleaner.</p>
              <div className="flex gap-3">
                <a className="btn-primary" href={site.handheldCollection} target="_blank" rel="noreferrer">Explore All</a>
                <a className="btn-secondary" href={site.products.vm5} target="_blank" rel="noreferrer">Learn VM5</a>
              </div>
            </div>
            <div>
              <img className="w-full rounded-lg shadow" src={images.hero[1]} alt="AutoBot pet family cleaning" />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-semibold mb-6">Why It Works for Pet Scenarios</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {t:'Anti‑tangle strong suction', d:'High‑speed brushless motor + airflow design reduce hair tangling and keep performance'},
            {t:'HEPA H13', d:'Captures fine dust/dander. Washable and reusable with lower maintenance costs'},
            {t:'Low noise', d:'Less stress for pets during routine cleaning'},
            {t:'Tool kit', d:'Crevice/brush/hose for sofa, carpets and car seats of different materials'},
            {t:'Home & car', d:'One device covers living room to trunk'},
            {t:'USB‑C fast charge', d:'Convenient charging and stable runtime'}
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
          <h2 className="text-2xl font-semibold mb-6">Recommended Products</h2>
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
        <h2 className="text-2xl font-semibold mb-4">FAQ</h2>
        <div className="space-y-4 text-gray-700">
          <details className="p-4 bg-white rounded-lg shadow">
            <summary className="font-medium">Does hair easily get tangled?</summary>
            <p className="mt-2">Anti‑tangle design and washable parts keep suction and airflow. Clean the brush regularly for best performance.</p>
          </details>
          <details className="p-4 bg-white rounded-lg shadow">
            <summary className="font-medium">How to reduce odors?</summary>
            <p className="mt-2">Use H13 HEPA and clean dust cup/filters regularly to improve pet dander and odors.</p>
          </details>
        </div>
      </section>
    </Layout>
  )
}

export const config = { runtime: 'edge' }
