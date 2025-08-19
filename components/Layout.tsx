import Head from 'next/head'
import { siteInfo } from '../data/autobot'

interface LayoutProps {
  children: React.ReactNode
  title: string
  description: string
  keywords: string
  canonical: string
}

export default function Layout({ children, title, description, keywords, canonical }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <link rel="canonical" href={canonical} />
        
        {/* Open Graph */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={siteInfo.ogImage} />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="website" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={siteInfo.ogImage} />
        
        {/* Favicon */}
        <link rel="icon" href={siteInfo.favicon} />
        <link rel="shortcut icon" href={siteInfo.favicon} />
        
        {/* Viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <header className="bg-white shadow-sm">
        <div className="mx-auto max-w-6xl px-4 py-4">
          <div className="flex items-center justify-between">
            <a href={siteInfo.url} target="_blank" rel="noreferrer" className="flex items-center">
              <img 
                src={siteInfo.logo} 
                alt="AutoBot Logo" 
                className="h-8 w-auto"
              />
            </a>
            <nav className="hidden md:flex space-x-6">
              <a href={siteInfo.url} target="_blank" rel="noreferrer" className="text-gray-600 hover:text-gray-900">Home</a>
              <a href={productLinks.mainCollection} target="_blank" rel="noreferrer" className="text-gray-600 hover:text-gray-900">Products</a>
            </nav>
          </div>
        </div>
      </header>

      <main>{children}</main>

      <footer className="bg-gray-50 border-t">
        <div className="mx-auto max-w-6xl px-4 py-8">
          <div className="text-center text-gray-600">
            <p>&copy; 2024 AutoBot. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}