import Layout from '../components/Layout'
import { site, images } from '../data/autobot'

export default function PortableVacuumCleaner() {
  const title = 'Portable Vacuum Cleaner | AutoBot Lightweight & USB‑C'
  const description = 'AutoBot portable vacuum: lightweight, cordless, USB‑C fast charging, washable HEPA. Ideal for quick cleanups at home, office and car.'
  const keywords = 'portable vacuum cleaner, lightweight handheld vacuum, usb-c portable vacuum, hepa portable vacuum, mini vacuum'
  const canonical = site.url + 'portable-vacuum-cleaner'

  return (
    <Layout title={title} description={description} keywords={keywords} canonical={canonical}>
      <section className="bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Grab‑and‑Go Cleaning</h1>
              <p className="text-gray-600 mb-6">Ultra‑portable and cordless with USB‑C fast charging. Washable HEPA and multiple attachments handle crumbs, dust and pet hair in minutes.</p>
              <div className="flex gap-3">
                <a className="btn-primary" href={site.handheldCollection} target="_blank" rel="noreferrer">Explore All</a>
                <a className="btn-secondary" href={site.products.vm5} target="_blank" rel="noreferrer">Learn VM5</a>
              </div>
            </div>
            <div>
              <img className="w-full rounded-lg shadow" src={images.hero[2]} alt="AutoBot portable vacuum" />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-semibold mb-6">Why Portable</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {t:'Lightweight', d:'Carry it everywhere without fatigue'},
            {t:'USB‑C Fast Charge', d:'Top up at desk, in car or with a power bank'},
            {t:'Washable HEPA (H13)', d:'Effective filtration and reusable'},
            {t:'Low Noise', d:'Friendly for night or office use'},
            {t:'Compact', d:'Easy to store in drawers, trunks and shelves'},
            {t:'Rich Attachments', d:'Crevice/brush/hose cover desktops to car seats'}
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
