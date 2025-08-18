import Layout from '../components/Layout'
import { site, images } from '../data/autobot'

export default function CampingCleaning() {
  const title = 'Camping Cleaning | AutoBot Portable Car/Handheld Vacuum'
  const description = 'Portable cleaning for camping/vanlife/RV: cordless high suction, vacuum + blower/air pump, USB‑C fast charging, washable HEPA. Home & car.'
  const keywords = 'camping vacuum, car vacuum camping, portable vacuum blower, rv cleaning vacuum, vanlife vacuum, usb-c handheld vacuum, hepa handheld vacuum'
  const canonical = site.url + 'camping-cleaning'
  return (
    <Layout title={title} description={description} keywords={keywords} canonical={canonical}>
      <section className="bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">One-stop Cleaning for Camping & Vanlife</h1>
              <p className="text-gray-600 mb-6">Outdoors requires gear that is portable, multi‑purpose and long‑lasting. AutoBot cordless handheld lineup supports vacuum + blower/air pump combo, USB‑C fast charge and washable HEPA to handle dust, crumbs and inflating/deflating air mattresses with ease.</p>
              <div className="flex gap-3">
                <a className="btn-primary" href={site.handheldCollection} target="_blank" rel="noreferrer">Explore All</a>
                <a className="btn-secondary" href={site.products.vx4} target="_blank" rel="noreferrer">Learn VX4</a>
              </div>
            </div>
            <div>
              <img className="w-full rounded-lg shadow" src={images.hero[0]} alt="AutoBot camping cleaning" />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-semibold mb-6">Why It Fits Camping/RV</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {t:'Cordless High Suction', d:'12–20kPa performance in a compact body for quick tent cleanup'},
            {t:'Vacuum + Blower/Air Pump', d:'Blow dust and inflate/deflate pillows/mattresses with one device'},
            {t:'USB‑C Fast Charging', d:'Works with car chargers and power banks to stay powered outdoors'},
            {t:'Washable HEPA (H13)', d:'Effective filtration, easy maintenance and low cost'},
            {t:'Lightweight & Low Noise', d:'Carry anywhere and keep quiet at night in campgrounds'},
            {t:'Rich Attachments', d:'Crevice/brush/hose cover tent, trunk, tables and more'}
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
            <summary className="font-medium">How to charge outdoors?</summary>
            <p className="mt-2">USB‑C car charger and power bank are supported. Some models support fast charge so you can top up on the go.</p>
          </details>
          <details className="p-4 bg-white rounded-lg shadow">
            <summary className="font-medium">What can the blower/air pump do?</summary>
            <p className="mt-2">Use it to blow dust off gear and inflate/deflate air pillows/mattresses — truly multi‑purpose.</p>
          </details>
        </div>
      </section>
    </Layout>
  )
}

export const config = { runtime: 'edge' }
