import { defineConfig } from 'vitepress'

const repo = process.env.GITHUB_REPOSITORY?.split('/')[1]
const isPagesBuild = process.env.GITHUB_ACTIONS === 'true'

export default defineConfig({
  title: 'BAM Addons',
  description: 'Documentation hub for BAM Blender addons.',
  lang: 'en-US',
  base: isPagesBuild && repo ? `/${repo}/` : '/',
  cleanUrls: true,
  lastUpdated: true,
  themeConfig: {
    logo: '/images/bam-logo.png',
    lastUpdated: {
      text: 'Updated',
      formatOptions: {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'BAM Decal IT', link: '/addons/decal-it/' },
      { text: 'BAM Automat', link: '/addons/automat/' },
      { text: 'Feedback', link: '/feedback' },
      { text: 'GitHub', link: 'https://github.com/bamteam/BAM-WIKI' }
    ],
    sidebar: {
      '/addons/': [
        {
          text: 'All Addons',
          items: [
            { text: 'Installation', link: '/addons/installation' }
          ]
        },
        {
          text: 'BAM Decal IT',
          items: [
            { text: 'Overview', link: '/addons/decal-it/' },
            { text: 'Quick Start', link: '/addons/decal-it/quick-start' },
            { text: 'Features', link: '/addons/decal-it/features' },
            { text: 'FAQ', link: '/addons/decal-it/faq' },
            { text: 'Changelog', link: '/addons/decal-it/changelog' },
            { text: 'Feedback', link: '/feedback' }
          ]
        },
        {
          text: 'BAM Automat',
          collapsed: true,
          items: [
            { text: 'Overview', link: '/addons/automat/' },
            { text: 'Quick Start', link: '/addons/automat/quick-start' },
            { text: 'Features', link: '/addons/automat/features' },
            { text: 'FAQ', link: '/addons/automat/faq' },
            { text: 'Changelog', link: '/addons/automat/changelog' },
            { text: 'Feedback', link: '/feedback' }
          ]
        }
      ]
    },
    search: {
      provider: 'local'
    },
    footer: {
      message: 'BAM Addons documentation.',
      copyright: 'Copyright © 2026 BAM Addons'
    }
  }
})
