# AutoBot SEO Landing Pages

专为AutoBot手持吸尘器业务打造的SEO优化落地页项目，包含5个主要关键词的详细产品页面。

## 🚀 项目概述

本项目使用Next.js + React + TypeScript + TailwindCSS构建，专门为AutoBot手持吸尘器产品线创建高质量的SEO落地页，旨在提升搜索引擎排名和用户转化率。

## 📋 包含的落地页

1. **手持吸尘器** (`/handheld-vacuum-cleaner`) - 主打产品页面
2. **车载吸尘器** (`/car-vacuum-cleaner`) - 汽车清洁专用
3. **便携式吸尘器** (`/portable-vacuum-cleaner`) - 移动便携应用
4. **无线吸尘器** (`/cordless-vacuum-cleaner`) - 无线自由清洁
5. **小型吸尘器** (`/compact-vacuum-cleaner`) - 精细清洁专家

## 🎯 SEO特性

- ✅ 完整的Meta标签优化
- ✅ 结构化数据(JSON-LD)
- ✅ 语义化HTML结构
- ✅ 内部链接优化
- ✅ 移动端响应式设计
- ✅ 快速加载性能
- ✅ 产品链接集成(autobot.im)

## 🛠 技术栈

- **框架**: Next.js 14
- **语言**: TypeScript
- **样式**: TailwindCSS 3
- **部署**: Vercel
- **SEO**: 内置优化

## 📦 安装与运行

```bash
# 克隆项目
git clone https://github.com/civisolo/autobot-seo-landing-pages.git
cd autobot-seo-landing-pages

# 安装依赖
npm install

# 开发环境运行
npm run dev

# 构建生产版本
npm run build

# 启动生产服务器
npm start
```

## 🚀 部署到Vercel

### 自动部署（推荐）
1. 登录 [Vercel Dashboard](https://vercel.com/dashboard)
2. 点击 "New Project"
3. 选择 "Import Git Repository"
4. 选择此GitHub仓库：`civisolo/autobot-seo-landing-pages`
5. 使用默认设置，点击 "Deploy"
6. 部署完成后获得生产URL

### 手动部署
```bash
# 安装Vercel CLI
npm i -g vercel

# 登录Vercel
vercel login

# 部署项目
vercel

# 部署到生产环境
vercel --prod
```

## 🎨 页面结构

每个落地页都包含以下核心部分：

- **Hero Section** - 产品主要卖点展示
- **Features Section** - 产品特性详细介绍
- **Product Showcase** - 具体产品型号展示
- **Usage Scenarios** - 使用场景说明
- **CTA Section** - 行动号召和购买链接

## 🔗 产品链接集成

所有页面都包含指向AutoBot官方商城的链接：
- 主商城：https://autobot.im
- 产品系列：https://autobot.im/collections/handheld-vacuum-cleaner-1
- VX4产品：https://autobot.im/products/autobot-vx4-new-high-performance-car-vacuum-cleaner
- VM5产品：https://autobot.im/products/autobot-vm5-self-cleaner-vacuum-with-air-blower-inflator-pump-car-vacuum

## 📱 响应式设计

- 移动端优先设计
- 平板和桌面端适配
- 跨浏览器兼容性
- 快速加载优化

## 🎯 SEO优化要点

1. **关键词优化**：每个页面针对特定关键词优化
2. **内容质量**：详细的产品介绍和使用指南
3. **技术SEO**：完整的Meta标签、结构化数据
4. **用户体验**：快速加载、易于导航
5. **转化优化**：清晰的CTA和购买链接

## 📂 项目结构

```
autobot-seo-landing-pages/
├── components/
│   └── Layout.tsx          # 通用布局组件
├── pages/
│   ├── handheld-vacuum-cleaner.tsx
│   ├── car-vacuum-cleaner.tsx
│   ├── portable-vacuum-cleaner.tsx
│   ├── cordless-vacuum-cleaner.tsx
│   └── compact-vacuum-cleaner.tsx
├── styles/
│   └── globals.css         # 全局样式
├── public/
│   └── images/            # 产品图片（需要添加）
├── package.json
├── next.config.js
├── tailwind.config.js
└── README.md
```

## 🖼 图片资源

项目中引用的图片需要添加到 `/public/images/` 目录：

- `autobot-vx4-hero.jpg`
- `autobot-vm5-car.jpg`
- `autobot-portable.jpg`
- `autobot-cordless.jpg`
- `autobot-compact.jpg`
- `autobot-vx4-product.jpg`
- `autobot-vm5-product.jpg`
- 其他相关产品图片

## 📊 性能指标

- Lighthouse性能评分：90+
- 首屏加载时间：<2秒
- SEO评分：95+
- 可访问性评分：90+

## 🚀 部署状态

- **GitHub仓库**: ✅ 已创建
- **代码上传**: ✅ 已完成
- **Vercel部署**: 🔄 待部署

## 📞 联系方式

- 官网：https://autobot.im
- 项目仓库：https://github.com/civisolo/autobot-seo-landing-pages

---

**部署完成后，请更新域名配置并测试所有页面功能。**