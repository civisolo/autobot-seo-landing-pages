import Layout from '../components/Layout'
import { site, images } from '../data/autobot'

export default function CarVacuumCleaner() {
  const title = 'Car Vacuum Cleaner | AutoBot Portable Cordless'
  const description = 'AutoBot car vacuum: compact cordless, high suction, USB‑C fast charging, washable HEPA, crevice/brush/hose tools. Ideal for detailing.'
  const keywords = 'car vacuum cleaner, portable car vacuum, cordless car vacuum, car detailing vacuum, usb-c car vacuum, hepa car vacuum'
  const canonical = site.url + 'car-vacuum-cleaner'
  return (
    <Layout title={title} description={description} keywords={keywords} canonical={canonical}>
      <section className="bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Detail Your Cabin in Minutes</h1>
              <p className="text-gray-600 mb-6">Reach into tight gaps, cup holders and seat rails with crevice/brush/hose attachments. Fast USB‑C charging and washable HEPA make routine cleaning simple.</p>
              <div className="flex gap-3">
                <a className="btn-primary" href={site.handheldCollection} target="_blank" rel="noreferrer">Explore All</a>
                <a className="btn-secondary" href={site.products.vx4} target="_blank" rel="noreferrer">Learn VX4</a>
              </div>
            </div>
            <div>
              <img className="w-full rounded-lg shadow" src={images.hero[1]} alt="AutoBot car vacuum cleaner" />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-semibold mb-6">Why AutoBot for Cars</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {t:'Compact & Cordless', d:'Store in trunk and clean wherever you park'},
            {t:'High Suction', d:'12–20kPa class pickup for crumbs, sand and dust'},
            {t:'HEPA H13', d:'Keep cabin air cleaner with washable filtration'},
            {t:'USB‑C Fast Charge', d:'Top up via car charger or power bank'},
            {t:'Rich Attachments', d:'Crevice/brush/hose cover cup holders, vents and rails'},
            {t:'Low Noise', d:'Comfortable for frequent quick cleans'}
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
