import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: '昆仑巢',
    short_name: '昆仑巢',
    description: '昆仑巢官方网站。打造一个创新思想汇聚之地，在开放的世界解决开放的问题。',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#E40F0F',
  };
}