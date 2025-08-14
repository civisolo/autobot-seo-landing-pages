import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

interface LayoutProps {
  children: React.ReactNode;
  title: string;
  description: string;
  keywords: string;
  canonical: string;
}

const Layout: React.FC<LayoutProps> = ({ children, title, description, keywords, canonical }) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "AutoBot Handheld Vacuum Cleaner",
    "brand": {
      "@type": "Brand",
      "name": "AutoBot"
    },
    "description": description,
    "url": canonical,
    "offers": {
      "@type": "Offer",
      "url": "https://autobot.im/collections/handheld-vacuum-cleaner-1",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    }
  };

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={canonical} />
        
        {/* Open Graph */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="product" />
        <meta property="og:site_name" content="AutoBot Vacuum Cleaner" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-white">
        {/* Header */}
        <header className="bg-white shadow-sm sticky top-0 z-50">
          <nav className="container-max py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-autobot-accent rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">A</span>
                </div>
                <span className="text-xl font-bold text-autobot-primary">AutoBot</span>
              </div>
              
              <div className="hidden md:flex items-center space-x-6">
                <Link href="/handheld-vacuum-cleaner" className="text-gray-700 hover:text-autobot-accent transition-colors">
                  Handheld
                </Link>
                <Link href="/car-vacuum-cleaner" className="text-gray-700 hover:text-autobot-accent transition-colors">
                  Car Vacuum
                </Link>
                <Link href="/portable-vacuum-cleaner" className="text-gray-700 hover:text-autobot-accent transition-colors">
                  Portable
                </Link>
                <Link href="/cordless-vacuum-cleaner" className="text-gray-700 hover:text-autobot-accent transition-colors">
                  Cordless
                </Link>
                <Link href="/compact-vacuum-cleaner" className="text-gray-700 hover:text-autobot-accent transition-colors">
                  Compact
                </Link>
                <a href="https://autobot.im" className="bg-autobot-accent text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                  Shop Now
                </a>
              </div>
            </div>
          </nav>
        </header>

        {/* Main Content */}
        <main>
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-autobot-primary text-white">
          <div className="container-max py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 bg-autobot-accent rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">A</span>
                  </div>
                  <span className="text-xl font-bold">AutoBot</span>
                </div>
                <p className="text-gray-300">
                  Professional handheld vacuum cleaner brand, providing high-quality cleaning solutions for your needs.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-bold mb-4">Product Series</h3>
                <ul className="space-y-2 text-gray-300">
                  <li><Link href="/handheld-vacuum-cleaner" className="hover:text-white transition-colors">Handheld Vacuum</Link></li>
                  <li><Link href="/car-vacuum-cleaner" className="hover:text-white transition-colors">Car Vacuum</Link></li>
                  <li><Link href="/portable-vacuum-cleaner" className="hover:text-white transition-colors">Portable Vacuum</Link></li>
                  <li><Link href="/cordless-vacuum-cleaner" className="hover:text-white transition-colors">Cordless Vacuum</Link></li>
                  <li><Link href="/compact-vacuum-cleaner" className="hover:text-white transition-colors">Compact Vacuum</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-bold mb-4">Shop</h3>
                <ul className="space-y-2 text-gray-300">
                  <li><a href="https://autobot.im" className="hover:text-white transition-colors">Official Store</a></li>
                  <li><a href="https://autobot.im/collections/handheld-vacuum-cleaner-1" className="hover:text-white transition-colors">Handheld Series</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-bold mb-4">Contact</h3>
                <p className="text-gray-300">
                  Website: <a href="https://autobot.im" className="hover:text-white transition-colors">autobot.im</a>
                </p>
              </div>
            </div>
            
            <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-300">
              <p>&copy; 2024 AutoBot. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Layout;