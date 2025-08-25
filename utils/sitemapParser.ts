import { images } from '../data/autobot'

export interface ProductData {
  path: string
  title: string
  subtitle: string
  description: string
  image: string
  color: string
}

// 产品标题映射
const titleMapping: { [key: string]: { title: string; subtitle: string; description: string } } = {
  '/handheld-vacuum-cleaner': {
    title: 'Handheld Vacuum Cleaner',
    subtitle: 'Professional Solutions',
    description: 'High suction in a compact body with USB‑C fast charging and washable HEPA. Perfect for home and car cleaning.'
  },
  '/car-vacuum-cleaner': {
    title: 'Car Vacuum Cleaner',
    subtitle: 'Professional Solutions',
    description: 'Timeline layout showcasing the cleaning process with powerful suction for automotive interiors.'
  },
  '/portable-vacuum-cleaner': {
    title: 'Portable Vacuum Cleaner',
    subtitle: 'Go Anywhere',
    description: 'Magazine-style layout featuring portability and convenience for modern lifestyles.'
  },
  '/cordless-vacuum-cleaner': {
    title: 'Cordless Vacuum Cleaner',
    subtitle: 'Freedom of Movement',
    description: 'Dashboard layout with technical specifications and performance comparisons.'
  },
  '/compact-vacuum-cleaner': {
    title: 'Compact Vacuum Cleaner',
    subtitle: 'Small & Powerful',
    description: 'Product catalog layout with model comparisons and specifications.'
  },
  '/camping-cleaning': {
    title: 'Camping Cleaning',
    subtitle: 'Portable Solutions',
    description: 'Storyboard layout with scene-based cleaning solutions for outdoor adventures.'
  },
  '/pet-family-cleaning': {
    title: 'Pet Family Cleaning',
    subtitle: 'Pet-Friendly Solutions',
    description: 'Gallery layout showcasing pet cleaning scenarios and specialized features.'
  },
  '/byd-car-vacuum-cleaner': {
    title: 'BYD Car Vacuum Cleaner',
    subtitle: 'Professional Automotive Solutions',
    description: 'Tech-focused layout designed specifically for BYD vehicle owners.'
  },
  '/crumbs-car-vacuum-cleaner': {
    title: 'Crumbs Car Vacuum Cleaner',
    subtitle: 'Professional Food Debris Cleaning',
    description: 'Lifestyle layout for cleaning car crumbs and food debris with specialized features.'
  }
}

// 颜色主题映射
const colorMapping: { [key: string]: string } = {
  '/handheld-vacuum-cleaner': 'from-blue-500 to-blue-600',
  '/car-vacuum-cleaner': 'from-orange-500 to-orange-600',
  '/portable-vacuum-cleaner': 'from-indigo-500 to-indigo-600',
  '/cordless-vacuum-cleaner': 'from-slate-500 to-slate-600',
  '/compact-vacuum-cleaner': 'from-yellow-500 to-yellow-600',
  '/camping-cleaning': 'from-green-500 to-green-600',
  '/pet-family-cleaning': 'from-purple-500 to-purple-600',
  '/byd-car-vacuum-cleaner': 'from-blue-500 to-cyan-600',
  '/crumbs-car-vacuum-cleaner': 'from-amber-500 to-orange-600'
}

// 图片映射
const imageMapping: { [key: string]: string } = {
  '/handheld-vacuum-cleaner': images.hero[0],
  '/car-vacuum-cleaner': images.hero[1],
  '/portable-vacuum-cleaner': images.hero[2],
  '/cordless-vacuum-cleaner': images.hero[0],
  '/compact-vacuum-cleaner': images.hero[1],
  '/camping-cleaning': images.heroCamping,
  '/pet-family-cleaning': images.heroPet,
  '/byd-car-vacuum-cleaner': images.hero[0],
  '/crumbs-car-vacuum-cleaner': images.hero[1]
}

export function parseSitemapAndGenerateProducts(sitemapContent: string): ProductData[] {
  const products: ProductData[] = []
  
  // 简单的XML解析，提取URL路径
  const urlMatches = sitemapContent.match(/<loc>https:\/\/landing-pages\.autobot\.im([^<]+)<\/loc>/g)
  
  if (urlMatches) {
    urlMatches.forEach(match => {
      const pathMatch = match.match(/<loc>https:\/\/landing-pages\.autobot\.im([^<]+)<\/loc>/)
      if (pathMatch && pathMatch[1]) {
        const path = pathMatch[1]
        
        // 跳过首页
        if (path === '/') return
        
        const titleData = titleMapping[path]
        if (titleData) {
          products.push({
            path,
            title: titleData.title,
            subtitle: titleData.subtitle,
            description: titleData.description,
            image: imageMapping[path] || images.hero[0],
            color: colorMapping[path] || 'from-blue-500 to-blue-600'
          })
        }
      }
    })
  }
  
  return products
}

// 备用静态数据，当sitemap解析失败时使用
export function getStaticProducts(): ProductData[] {
  return Object.keys(titleMapping).map(path => ({
    path,
    title: titleMapping[path].title,
    subtitle: titleMapping[path].subtitle,
    description: titleMapping[path].description,
    image: imageMapping[path] || images.hero[0],
    color: colorMapping[path] || 'from-blue-500 to-blue-600'
  }))
} 