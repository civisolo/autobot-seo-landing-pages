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
      "priceCurrency": "CNY",
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
                  手持吸尘器
                </Link>
                <Link href="/car-vacuum-cleaner" className="text-gray-700 hover:text-autobot-accent transition-colors">
                  车载吸尘器
                </Link>
                <Link href="/portable-vacuum-cleaner" className="text-gray-700 hover:text-autobot-accent transition-colors">
                  便携式吸尘器
                </Link>
                <Link href="/cordless-vacuum-cleaner" className="text-gray-700 hover:text-autobot-accent transition-colors">
                  无线吸尘器
                </Link>
                <Link href="/compact-vacuum-cleaner" className="text-gray-700 hover:text-autobot-accent transition-colors">
                  小型吸尘器
                </Link>
                <a href="https://autobot.im" className="bg-autobot-accent text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                  立即购买
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
                  专业手持吸尘器品牌，为您提供高品质的清洁解决方案。
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-bold mb-4">产品系列</h3>
                <ul className="space-y-2 text-gray-300">
                  <li><Link href="/handheld-vacuum-cleaner" className="hover:text-white transition-colors">手持吸尘器</Link></li>
                  <li><Link href="/car-vacuum-cleaner" className="hover:text-white transition-colors">车载吸尘器</Link></li>
                  <li><Link href="/portable-vacuum-cleaner" className="hover:text-white transition-colors">便携式吸尘器</Link></li>
                  <li><Link href="/cordless-vacuum-cleaner" className="hover:text-white transition-colors">无线吸尘器</Link></li>
                  <li><Link href="/compact-vacuum-cleaner" className="hover:text-white transition-colors">小型吸尘器</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-bold mb-4">购买渠道</h3>
                <ul className="space-y-2 text-gray-300">
                  <li><a href="https://autobot.im" className="hover:text-white transition-colors">官方商城</a></li>
                  <li><a href="https://autobot.im/collections/handheld-vacuum-cleaner-1" className="hover:text-white transition-colors">手持系列</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-bold mb-4">联系我们</h3>
                <p className="text-gray-300">
                  官网：<a href="https://autobot.im" className="hover:text-white transition-colors">autobot.im</a>
                </p>
              </div>
            </div>
            
            <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-300">
              <p>&copy; 2024 AutoBot. 保留所有权利。</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Layout;