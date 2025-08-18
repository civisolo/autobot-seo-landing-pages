import Layout from '../components/Layout'
import { site, images } from '../data/autobot'

export default function CompactVacuumCleaner() {
  const title = 'Compact Vacuum Cleaner | AutoBot Small & Powerful'
  const description = 'AutoBot compact vacuum: small yet powerful, USB‑C fast charging, washable HEPA and multiple tools. Store anywhere and clean in seconds.'
  const keywords = 'compact vacuum cleaner, small handheld vacuum, mini hepa vacuum, usb-c compact vacuum'
  const canonical = site.url + 'compact-vacuum-cleaner'

  return (
    <Layout title={title} description={description} keywords={keywords} canonical={canonical}>
      <section className="bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Small Size, Big Performance</h1>
              <p className="text-gray-600 mb-6">Keep it in drawers or glove box. High suction and washable HEPA make it practical for quick clean in tight spaces.</p>
              <div className="flex gap-3">
                <a className="btn-primary" href={site.handheldCollection} target="_blank" rel="noreferrer">Explore All</a>
                <a className="btn-secondary" href={site.products.vm5} target="_blank" rel="noreferrer">Learn VM5</a>
              </div>
            </div>
            <div>
              <img className="w-full rounded-lg shadow" src={images.hero[2]} alt="AutoBot compact vacuum" />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-semibold mb-6">Why Compact</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {t:'Small Footprint', d:'Store and carry with minimal space'},
            {t:'High Suction', d:'Surprisingly strong in small body'},
            {t:'Washable HEPA (H13)', d:'Reusable filtration saves cost'},
            {t:'USB‑C Fast Charge', d:'Universal and convenient'},
            {t:'Low Noise', d:'Pleasant for quick routine'},
            {t:'Rich Attachments', d:'Crevice/brush/hose for fine details'}
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
          <h2 className="text-2xl font-semibold mb-6">Recommended</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {images.products.slice(0,4).map((src, idx)=> (
              <a key={idx} href={idx<2? site.products.vm5 : site.products.vx4} target="_blank" rel="noreferrer" className="block">
                <img src={src} alt={`product-${idx}`} className="w-full rounded-lg shadow"/>
              </a>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}
