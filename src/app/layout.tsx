import '@/styles/globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  /* basic */
  title: {
    template: '%s | 昆仑巢',
    default: '昆仑巢',
  },
  description: '昆仑巢官方网站。打造一个创新思想汇聚之地，在开放的世界解决开放的问题。',

  /* icons */
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '512x512', type: 'image/png' },
    ],
  },

  /* other */
  generator: 'Next.js',
  applicationName: '昆仑巢',
  referrer: 'origin-when-cross-origin',
  keywords: ['昆仑巢', '科技', '创业'],
  authors: [{ name: 'DabAZ', url: 'https://dabaz.me'}, { name: '雷明泊' }],
  creator: 'DabAZ',
  publisher: 'DabAZ',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  /* metadataBase */
  metadataBase: new URL('https://kunlunnest.cn'),
  alternates: {
    canonical: '/',
    languages: {
      'zh-CN': '/',
      'zh-TW': '/zh-TW',
      'en': '/en',
    },
  },

  /* opengraph */
  openGraph: {
    title: '昆仑巢',
    description: '昆仑巢官方网站。打造一个创新思想汇聚之地，在开放的世界解决开放的问题。',
    url: 'https://kunlunnest.cn',
    siteName: '昆仑巢',
    locale: 'zh-CN',
    type: 'website',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: '黑色背景上有红色的昆仑巢字迹和白色的昆仑巢英文名字 - “Kun Lun Nest”'
      },
    ],
  },

  /* robots */
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  /* manifest */
  manifest: 'https://kunlunnest.cn/manifest.json',

  /* twitter */
  twitter: {
    card: 'summary_large_image',
    title: '昆仑巢',
    description: '昆仑巢官方网站。打造一个创新思想汇聚之地，在开放的世界解决开放的问题。',
    images: ['/og.png'],
    creator: '@dabaz_official',
  },


  /* apple web app */
  appleWebApp: {
    title: '昆仑巢',
    statusBarStyle: 'black-translucent',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='zh-CN'>
      <body>{children}</body>
    </html>
  )
}