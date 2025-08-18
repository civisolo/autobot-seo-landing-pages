import Layout from '../components/Layout'
import { site, images } from '../data/autobot'

export default function HandheldVacuumCleaner() {
  const title = 'Handheld Vacuum Cleaner | AutoBot Cordless High Suction'
  const description = 'AutoBot handheld vacuum: cordless high suction, USB‑C fast charging, washable HEPA, rich attachments. Lightweight and quiet for home and car.'
  const keywords = 'handheld vacuum cleaner, cordless handheld vacuum, usb-c handheld, hepa handheld vacuum, portable vacuum'
  const canonical = site.url + 'handheld-vacuum-cleaner'

  return (
    <Layout title={title} description={description} keywords={keywords} canonical={canonical}>
      <section className="bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Cordless Handheld Cleaning, Anywhere</h1>
              <p className="text-gray-600 mb-6">High suction in a compact body with USB‑C fast charging and washable HEPA. Crevice/brush/hose tools handle sofas, carpets, keyboards and in‑car details with ease.</p>
              <div className="flex gap-3">
                <a className="btn-primary" href={site.handheldCollection} target="_blank" rel="noreferrer">Explore All</a>
                <a className="btn-secondary" href={site.products.vm5} target="_blank" rel="noreferrer">Learn VM5</a>
              </div>
            </div>
            <div>
              <img className="w-full rounded-lg shadow" src={images.hero[0]} alt="AutoBot handheld vacuum" />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-semibold mb-6">Key Features</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {t:'High Suction', d:'12–20kPa class performance for daily quick clean'},
            {t:'USB‑C Fast Charge', d:'Charge with car chargers or power banks'},
            {t:'Washable HEPA (H13)', d:'Effective filtration and easy maintenance'},
            {t:'Low Noise', d:'Lower disturbance for families and pets'},
            {t:'Lightweight', d:'Carry anywhere, store easily'},
            {t:'Rich Attachments', d:'Crevice/brush/hose cover multiple scenarios'}
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
