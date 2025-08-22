import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout 
      title="AutoBot Vacuum Cleaner" 
      description="AutoBot offers innovative handheld and car vacuum cleaners with high suction, USB-C fast charging, washable HEPA filters, and versatile attachments for home and car cleaning."
      keywords="vacuum cleaner, handheld vacuum, car vacuum, AutoBot"
      canonical="https://autobot.im/"
    >
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1>AutoBot Vacuum Cleaner</h1>
          <p>Welcome to AutoBot vacuum cleaner landing pages</p>
        </div>
      </div>
    </Layout>
  )
}