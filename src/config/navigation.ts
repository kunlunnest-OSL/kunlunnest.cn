export const navConfig = [
  {
    title: '昆仑故事',
    children: [
      { title: '活动日历', href: '/calendar' },
      { title: '活动回顾', href: '/events' },
      { title: '关于我们', href: '/about' },
    ],
  },
  {
    title: '巢脉',
    children: [
      { 
        title: '人脉池', 
        children: [
          { title: '个人信息发布', href: '/network/people/post' },
          { title: '他人信息查看', href: '/network/people/search' },
          { title: '链接信息申请', href: '/network/people/apply' },
        ]
      },
      { 
        title: '需求池', 
        children: [
          { title: '需求动态展示', href: '/network/demands/list' },
          { title: '需求链接申请', href: '/network/demands/apply' },
        ]
      },
      { 
        title: '知识库', 
        children: [
          { title: '活动知识产出', href: '/network/wiki/output' },
          { title: 'AI 工具协作文档', href: '/network/wiki/ai-docs' },
          { title: 'PPT/知识文档', href: '/network/wiki/files' },
        ]
      },
    ],
  },
  {
    title: '联系',
    children: [
      { title: '联系巢小二', href: '/contact/assistant' },
      { title: '链接信息查看', href: '/contact/links' },
    ],
  },
];

export const footerNavConfig = [
  {
    title: '昆仑故事',
    children: [
      { title: '活动日历', href: '/calendar' },
      { title: '活动回顾', href: '/events' },
      { title: '关于我们', href: '/about' },
    ],
  },
  {
    title: '人脉池',
    children: [
      { title: '个人信息发布', href: '/network/people/post' },
      { title: '他人信息查看', href: '/network/people/search' },
      { title: '链接信息申请', href: '/network/people/apply' },
    ],
  },
  {
    title: '需求池',
    children: [
      { title: '需求动态展示', href: '/network/demands/list' },
      { title: '需求链接申请', href: '/network/demands/apply' },
    ],
  },
  {
    title: '知识库',
    children: [
      { title: '活动知识产出', href: '/network/wiki/output' },
      { title: 'AI 工具协作文档', href: '/network/wiki/ai-docs' },
      { title: 'PPT/知识文档', href: '/network/wiki/files' },
    ],
  },
  {
    title: '联系',
    children: [
      { title: '联系巢小二', href: '/contact/assistant' },
      { title: '链接信息查看', href: '/contact/links' },
    ],
  },
];