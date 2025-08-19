export const siteInfo = {
  url: "https://autobot.im/",
  title: "AutoBot Car Handheld Vacuum Cleaner",
  description: "AutoBot offers innovative handheld and car vacuum cleaners with high suction, USB-C fast charging, washable HEPA filters, and versatile attachments for home and car cleaning.",
  logo: "https://autobot.im/cdn/shop/files/logo_e5b0dcbb-f25e-493a-b119-2aee7251f28f_180x.png?v=1614287289",
  ogImage: "https://cdn.shopify.com/s/files/1/0432/5906/8579/files/WechatIMG17_eb38c91b-8bd1-45c3-b542-376e53c95fd8.jpg?v=1731640607",
  favicon: "https://autobot.im/cdn/shop/files/d0056d1190050fdac1e467172e726bd_32x32.png?v=1613773948",
};

export const productLinks = {
  mainCollection: "https://autobot.im/collections/handheld-vacuum-cleaner-1",
  vx4: "https://autobot.im/products/autobot-vx4-new-high-performance-car-vacuum-cleaner",
  vm5: "https://autobot.im/products/autobot-vm5-self-cleaner-vacuum-with-air-blower-inflator-pump-car-vacuum",
};

export const images = {
  heroCamping: "https://autobot.im/cdn/shop/files/home_banner_01_1950x.jpg?v=1613790551",
  heroPet: "https://autobot.im/cdn/shop/files/WechatIMG17_1512x.jpg?v=1731639434",
  hero: [
    "https://autobot.im/cdn/shop/files/home_banner_01_1950x.jpg?v=1613790551",
    "https://autobot.im/cdn/shop/files/WechatIMG17_1512x.jpg?v=1731639434",
    "https://autobot.im/cdn/shop/files/WechatIMG18_1512x.jpg?v=1731639434"
  ],
  products: [
    "https://autobot.im/cdn/shop/files/08b4b38087c9ded5c564f082b2902306.jpg?v=1613790551",
    "https://autobot.im/cdn/shop/files/2_4a495038-be2c-4c9b-b36f-71a8edce9d30.jpg?v=1613790551",
    "https://autobot.im/cdn/shop/files/WechatIMG17_1512x.jpg?v=1731639434",
    "https://autobot.im/cdn/shop/files/WechatIMG18_1512x.jpg?v=1731639434"
  ]
};

// Legacy exports for backward compatibility
export const site = {
  url: siteInfo.url,
  handheldCollection: productLinks.mainCollection,
  products: {
    vx4: productLinks.vx4,
    vm5: productLinks.vm5
  }
};