import Layout from '../components/Layout'
import { site, images } from '../data/autobot'

export default function CordlessVacuumCleaner() {
  const title = 'Cordless Vacuum Cleaner | AutoBot Freedom to Clean'
  const description = 'AutoBot cordless vacuum: high suction, USB‑C fast charging, washable HEPA, lightweight and low noise. Clean anywhere without cords.'
  const keywords = 'cordless vacuum cleaner, cordless handheld vacuum, usb-c cordless vacuum, hepa cordless vacuum'
  const canonical = site.url + 'cordless-vacuum-cleaner'

  return (
    <Layout title={title} description={description} keywords={keywords} canonical={canonical}>
      <section className="bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Cord‑Free Freedom</h1>
              <p className="text-gray-600 mb-6">Move freely across rooms and car cabins. USB‑C fast charging and washable HEPA mean less downtime and easier maintenance.</p>
              <div className="flex gap-3">
                <a className="btn-primary" href={site.handheldCollection} target="_blank" rel="noreferrer">Explore All</a>
                <a className="btn-secondary" href={site.products.vx4} target="_blank" rel="noreferrer">Learn VX4</a>
              </div>
            </div>
            <div>
              <img className="w-full rounded-lg shadow" src={images.hero[2]} alt="AutoBot cordless vacuum" />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-semibold mb-6">Why Cordless</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {t:'High Suction', d:'12–20kPa class pickup without cords'},
            {t:'USB‑C Fast Charge', d:'Charge anywhere with common adapters and power banks'},
            {t:'Washable HEPA (H13)', d:'Better air, simpler care'},
            {t:'Lightweight', d:'Carry between rooms and car'},
            {t:'Low Noise', d:'Comfortable for daily quick cleans'},
            {t:'Rich Attachments', d:'Crevice/brush/hose for multi‑surface use'}
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
              <a key={idx} href={idx<2? site.products.vx4 : site.products.vm5} target="_blank" rel="noreferrer" className="block">
                <img src={src} alt={`product-${idx}`} className="w-full rounded-lg shadow"/>
              </a>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}
