import { existsSync, readFileSync } from 'node:fs'
import { join } from 'node:path'

const root = process.cwd()

const requiredFiles = [
  'package.json',
  'README.md',
  '.github/workflows/deploy.yml',
  'docs/.vitepress/config.mjs',
  'docs/.vitepress/theme/index.js',
  'docs/.vitepress/theme/custom.css',
  'docs/.vitepress/theme/components/AddonSwitcher.vue',
  'docs/.vitepress/theme/components/FeedbackForm.vue',
  'docs/.vitepress/theme/components/BamGallerySlider.vue',
  'docs/index.md',
  'docs/feedback.md',
  'docs/addons/index.md',
  'docs/addons/installation.md',
  'docs/addons/automat/index.md',
  'docs/addons/automat/quick-start.md',
  'docs/addons/automat/features.md',
  'docs/addons/automat/faq.md',
  'docs/addons/automat/changelog.md',
  'docs/addons/decal-it/index.md',
  'docs/addons/decal-it/installation.md',
  'docs/addons/decal-it/quick-start.md',
  'docs/addons/decal-it/features.md',
  'docs/addons/decal-it/faq.md',
  'docs/addons/decal-it/changelog.md',
  'docs/public/images/bam-logo.png',
  'docs/public/images/decal-it/decalit-icon.png',
  'docs/public/images/decal-it/featured.jpg',
  'docs/public/images/decal-it/gallery-1.jpg',
  'docs/public/images/decal-it/gallery-2.jpg',
  'docs/public/images/decal-it/gallery-3.jpg',
  'docs/public/images/decal-it/.gitkeep',
  'docs/public/images/automat/.gitkeep',
  'docs/public/images/automat/thumbnail.png',
  'docs/public/images/automat/thumbnail-256.png',
  'docs/public/images/automat/story.png',
  'docs/public/images/automat/batch-install-update.png',
  'docs/public/images/automat/quick-start-steps.png',
  'docs/public/images/automat/custom-presets.png',
  'docs/public/images/automat/colorspace-control.png',
  'docs/public/images/automat/create-update-filter.png',
  'docs/public/images/automat/material-manager.jpg',
  'docs/public/images/automat/show-selected.jpg',
  'docs/public/videos/decal-it/placement.mp4',
  'docs/public/videos/decal-it/resize.mp4',
  'docs/public/videos/decal-it/topology.mp4',
  'docs/public/videos/decal-it/decal-volume.mp4',
  'docs/public/videos/decal-it/decal-carve.mp4',
  'docs/public/videos/decal-it/decal-creation.mp4',
]

const checks = []
const internalFiles = [
  'CONTENT_GUIDE.md',
  'docs/content-guide.md',
  'docs/public/images/bam-logo.svg',
]

function file(path) {
  return join(root, path)
}

function read(path) {
  return readFileSync(file(path), 'utf8')
}

function check(name, condition) {
  checks.push({ name, condition })
}

for (const path of requiredFiles) {
  check(`required file exists: ${path}`, existsSync(file(path)))
}

for (const path of internalFiles) {
  check(`internal file is absent: ${path}`, !existsSync(file(path)))
}

if (existsSync(file('package.json'))) {
  const pkg = JSON.parse(read('package.json'))
  check('package is private', pkg.private === true)
  check('docs:build script exists', pkg.scripts?.['docs:build'] === 'vitepress build docs')
  check('docs:dev script exists', pkg.scripts?.['docs:dev']?.includes('vitepress dev docs'))
  check('vitepress dev dependency exists', Boolean(pkg.devDependencies?.vitepress))
}

if (existsSync(file('.gitignore'))) {
  const gitignore = read('.gitignore')
  check('gitignore excludes local agent/tooling files', gitignore.includes('.superpowers/') && gitignore.includes('.codex/') && gitignore.includes('.agents/') && gitignore.includes('AGENTS.md'))
  check('gitignore excludes common secret files', gitignore.includes('.env') && gitignore.includes('*.pem') && gitignore.includes('*.p12') && gitignore.includes('credentials.*'))
}

if (existsSync(file('docs/.vitepress/config.mjs'))) {
  const config = read('docs/.vitepress/config.mjs')
  check('config title is BAM Addons', config.includes("title: 'BAM Addons'"))
  check('config has GitHub Pages dynamic base', config.includes('GITHUB_REPOSITORY') && config.includes('GITHUB_ACTIONS'))
  check('config has Decal IT nav', config.includes("text: 'BAM Decal IT'") && config.includes("link: '/addons/decal-it/'"))
  check('config has BAM Automat nav', config.includes("text: 'BAM Automat'") && config.includes("link: '/addons/automat/'"))
  check('config has Feedback nav', config.includes("text: 'Feedback'") && config.includes("link: '/feedback'"))
  check('config does not expose Content Guide nav', !config.includes("text: 'Content Guide'"))
  check('config has shared All Addons sidebar', config.includes("text: 'All Addons'") && config.includes("link: '/addons/installation'"))
  check('config has Decal IT sidebar', config.includes("text: 'Quick Start'") && config.includes("text: 'Changelog'"))
  check('config has BAM Automat sidebar', config.includes("link: '/addons/automat/quick-start'") && config.includes("link: '/addons/automat/features'") && config.includes("link: '/addons/automat/faq'") && config.includes("link: '/addons/automat/changelog'"))
  check('config formats last updated as date only', config.includes('formatOptions') && config.includes("year: 'numeric'") && config.includes("month: 'long'") && config.includes("day: 'numeric'") && !config.includes('timeStyle'))
  check('config uses local search', config.includes("provider: 'local'"))
  check('config uses BAM PNG logo', config.includes("logo: '/images/bam-logo.png'"))
}

if (existsSync(file('docs/index.md'))) {
  const home = read('docs/index.md')
  check('home brands BAM Addons', home.includes('BAM Addons'))
  check('home links Decal IT docs', home.includes('addons/decal-it/'))
  check('home links BAM Automat docs', home.includes('addons/automat/'))
  check('home uses BAM PNG hero logo', home.includes('src: /images/bam-logo.png'))
  check('home links feedback flow', home.includes('Report a Bug') && home.includes('Feedback & Bugs'))
  check('home uses controlled golden grid content', home.includes('bam-home-grid') && home.includes('bam-home-quick-links'))
  check('home quick cards are linked', home.includes('href="addons/installation"') && home.includes('href="addons/"') && home.includes('href="feedback"'))
  check('home does not expose future placeholders', !home.includes('Next BAM Addon') && !home.includes('Shared BAM Notes') && !home.includes('Future'))
  check('home does not expose editing guide', !home.includes('content-guide') && !home.includes('Markdown-first') && !home.includes('Owner controlled') && !home.includes('Add future'))
}

if (existsSync(file('docs/.vitepress/theme/index.js'))) {
  const theme = read('docs/.vitepress/theme/index.js')
  check('theme registers gallery slider', theme.includes('BamGallerySlider') && theme.includes("app.component('BamGallerySlider'"))
  check('theme injects addon switcher beside title', theme.includes('AddonSwitcher') && theme.includes('nav-bar-title-after'))
}

if (existsSync(file('docs/.vitepress/theme/components/AddonSwitcher.vue'))) {
  const switcher = read('docs/.vitepress/theme/components/AddonSwitcher.vue')
  check('addon switcher links documented addons', switcher.includes('/addons/decal-it/') && switcher.includes('/addons/automat/') && switcher.includes('BAM Automat'))
  check('addon switcher does not close on mouse leave', !switcher.includes('@mouseleave'))
  check('addon switcher stops title link click bubbling', switcher.includes('@click.prevent.stop') && switcher.includes('@mousedown.stop'))
  check('addon switcher closes on outside click', switcher.includes("document.addEventListener('click'") && switcher.includes("document.removeEventListener('click'"))
  check('addon switcher menu renders outside title link', switcher.includes('<Teleport to="body">') && switcher.includes('menuStyle'))
}

if (existsSync(file('README.md'))) {
  const readme = read('README.md')
  check('README is public-facing', readme.includes('Public reference documentation'))
  check('README lists documented addons', readme.includes('BAM Decal IT') && readme.includes('BAM Automat'))
  check('README mentions feedback and bug reports', readme.includes('feedback and bug reports for all BAM addons'))
  check('README does not expose setup instructions', !readme.includes('Local Editing') && !readme.includes('npm install') && !readme.includes('do not add collaborators'))
  check('README links the published GitHub Pages site', readme.includes('https://bamteam.github.io/BAM-WIKI/'))
  check('README links GitHub issues', readme.includes('https://github.com/bamteam/BAM-WIKI/issues'))
}

if (existsSync(file('docs/.vitepress/theme/custom.css'))) {
  const css = read('docs/.vitepress/theme/custom.css')
  check('theme uses BAM pink brand color', css.includes('#f95a80'))
  check('theme sets readable paragraph colors for light and dark modes', css.includes('.vp-doc p') && css.includes('color: #2b2d35') && css.includes('.dark .vp-doc p') && css.includes('color: #d3d4db'))
  check('theme no longer uses old teal brand colors', !css.includes('#0f766e') && !css.includes('#0d9488') && !css.includes('#14b8a6'))
  check('home hero image uses explicit centered layout', css.includes('.VPHomeHero .image-container') && css.includes('transform: none'))
  check('home hero logo keeps VitePress image left edge fixed', css.includes('.VPHomeHero .image-src') && css.includes('left: 0%'))
  check('home hero logo layers above glow', css.includes('.VPHomeHero .image-src') && css.includes('z-index: 1') && css.includes('.VPHomeHero .image-bg') && css.includes('z-index: 0'))
  check('home custom content aligns to hero grid on desktop', css.includes('.VPHome .vp-doc.container') && css.includes('calc(1180px + 128px)') && css.includes('padding-left: 0') && css.includes('padding-right: 0'))
  check('BAM cards suppress VitePress link underlines', css.includes('.vp-doc a.bam-card') && css.includes('text-decoration: none') && css.includes('text-decoration-line: none'))
  check('BAM cards suppress link underlines for nested content', css.includes('.vp-doc a.bam-card :is(h2, h3, p, span)') && css.includes('text-decoration: none'))
  check('BAM card badges have bottom spacing', css.includes('.bam-card .bam-badge') && css.includes('margin-bottom'))
  check('addon switcher menu is viewport positioned', css.includes('.bam-addon-switcher-menu') && css.includes('position: fixed'))
}

if (existsSync(file('docs/addons/decal-it/index.md'))) {
  const overview = read('docs/addons/decal-it/index.md')
  check('Decal IT overview has JS gallery slider', overview.includes('Gallery Slider') && overview.includes('<BamGallerySlider />'))
  check('Decal IT overview uses base-aware media paths', overview.includes("import { withBase } from 'vitepress'") && overview.includes('withBase('))
  check('Decal IT overview does not show stretched icon in hero', !overview.includes('bam-addon-icon'))
  check('Decal IT highlights link to pages', overview.includes('bam-highlight-link') && overview.includes('href="features"') && overview.includes('href="quick-start"') && overview.includes('href="../installation"'))
}

if (existsSync(file('docs/addons/automat/index.md'))) {
  const overview = read('docs/addons/automat/index.md')
  check('Automat overview has active badge and baseline', overview.includes('bam-badge-active') && overview.includes('BAM AutoMat v1.2.1'))
  check('Automat overview links workflow pages', overview.includes('href="quick-start"') && overview.includes('href="features"') && overview.includes('href="faq"') && overview.includes('href="changelog"'))
  check('Automat overview links official sources', overview.includes('https://extensions.blender.org/add-ons/bam/') && overview.includes('https://superhivemarket.com/products/bam-blenderautomat'))
  check('Automat overview uses local base-aware images', overview.includes("import { withBase } from 'vitepress'") && overview.includes("withBase('/images/automat/thumbnail.png')") && overview.includes("withBase('/images/automat/story.png')"))
  check('Automat overview avoids external image hotlinks', !overview.includes('assets.superhivemarket.com'))
}

if (existsSync(file('docs/addons/automat/quick-start.md'))) {
  const quickStart = read('docs/addons/automat/quick-start.md')
  const quickStartLower = quickStart.toLowerCase()
  check('Automat quick start documents texture folder workflow', quickStartLower.includes('texture folder') && quickStartLower.includes('create and update materials') && quickStartLower.includes('detected materials in folder'))
  check('Automat quick start documents BaseColor requirement', quickStartLower.includes('basecolor') && quickStartLower.includes('material candidate'))
  check('Automat quick start documents Default and ARM presets', quickStart.includes('| Default |') && quickStart.includes('| ARM |'))
  check('Automat quick start uses workflow images', quickStart.includes("withBase('/images/automat/batch-install-update.png')") && quickStart.includes("withBase('/images/automat/quick-start-steps.png')"))
}

if (existsSync(file('docs/addons/automat/features.md'))) {
  const features = read('docs/addons/automat/features.md')
  check('Automat features cover AutoMat pipeline', features.includes('## AutoMat Texture Pipeline') && features.includes('Subfolders Scan') && features.includes('Relative Paths'))
  check('Automat features cover presets and packed maps', features.includes('## Presets and Texture Definitions') && features.includes('ARM packed textures'))
  check('Automat features cover MaterialManager and overlays', features.includes('## MaterialManager') && features.includes('## Material Overlays'))
  check('Automat features cover MatsAsset beta', features.includes('## MatsAsset Beta') && features.includes('asset-library workflows'))
  check('Automat features uses feature images', features.includes("withBase('/images/automat/create-update-filter.png')") && features.includes("withBase('/images/automat/custom-presets.png')") && features.includes("withBase('/images/automat/colorspace-control.png')") && features.includes("withBase('/images/automat/material-manager.jpg')") && features.includes("withBase('/images/automat/show-selected.jpg')"))
}

if (existsSync(file('docs/addons/automat/faq.md'))) {
  const faq = read('docs/addons/automat/faq.md')
  check('Automat FAQ documents Blender version source', faq.includes('v1.2.1') && faq.includes('Blender 4.2 or newer'))
  check('Automat FAQ documents Cycles guidance', faq.includes('Switch the scene and viewport to Cycles') || faq.includes('switch the scene and viewport to Cycles'))
  check('Automat FAQ links feedback flow', faq.includes('/feedback') && faq.includes('BAM-WIKI issues page'))
}

if (existsSync(file('docs/addons/automat/changelog.md'))) {
  const changelog = read('docs/addons/automat/changelog.md')
  check('Automat changelog includes current version', changelog.includes('## 1.2.1') && changelog.includes('wiki baseline'))
  check('Automat changelog includes initial release', changelog.includes('## 1.0.0') && changelog.includes('Initial public release'))
}

if (existsSync(file('docs/.vitepress/theme/components/BamGallerySlider.vue'))) {
  const slider = read('docs/.vitepress/theme/components/BamGallerySlider.vue')
  check('gallery slider has interactive controls', slider.includes('currentSlide') && slider.includes('nextSlide') && slider.includes('previousSlide') && slider.includes('goToSlide'))
  check('gallery slider has accessible controls', slider.includes('aria-label') && slider.includes('aria-current'))
  check('gallery slider overlays controls on slides', slider.indexOf('bam-slider-controls') > slider.indexOf('bam-slider-viewport') && slider.indexOf('bam-slider-controls') < slider.indexOf('bam-slider-panel') && slider.indexOf('bam-slider-dots') > slider.indexOf('bam-slider-viewport') && slider.indexOf('bam-slider-dots') < slider.indexOf('bam-slider-panel'))
  check('gallery slider uses arrow controls', slider.includes('bam-slider-arrow') && slider.includes('&lsaquo;') && slider.includes('&rsaquo;') && !slider.includes('>Prev<') && !slider.includes('>Next<'))
}

if (existsSync(file('docs/addons/decal-it/installation.md'))) {
  const installation = read('docs/addons/decal-it/installation.md')
  check('installation documents Blender Extensions Store method', installation.includes('Method 1: Blender Extensions Store') && installation.includes('Get Extensions'))
  check('installation links Blender Extensions pages', installation.includes('https://extensions.blender.org/add-ons/bam/') && installation.includes('https://extensions.blender.org/add-ons/bam-decalit/'))
  check('installation documents manual add-on method', installation.includes('Method 2: Manual Add-on Install') && installation.includes('Edit > Preferences > Add-ons'))
}

if (existsSync(file('docs/addons/installation.md'))) {
  const installation = read('docs/addons/installation.md')
  check('shared installation page has All Addons section', installation.includes('## All Addons'))
  check('shared installation page links Blender Extensions pages', installation.includes('https://extensions.blender.org/add-ons/bam/') && installation.includes('https://extensions.blender.org/add-ons/bam-decalit/'))
  check('shared installation page has addon-specific Blender versions', installation.includes('BAM Automat: Blender 4.2 or newer') && installation.includes('BAM Decal IT: Blender 4.5 or newer'))
}

if (existsSync(file('docs/addons/decal-it/quick-start.md'))) {
  const quickStart = read('docs/addons/decal-it/quick-start.md')
  check('quick start starts with Decal Creation video', quickStart.indexOf('decal-creation.mp4') > -1 && quickStart.indexOf('decal-creation.mp4') < quickStart.indexOf('placement.mp4'))
  check('quick start videos do not use poster placeholders', !quickStart.includes(':poster='))
}

if (existsSync(file('docs/addons/decal-it/features.md'))) {
  const features = read('docs/addons/decal-it/features.md')
  check('Decal IT features include MP4 demos', features.includes('/videos/decal-it/placement.mp4') && features.includes('/videos/decal-it/decal-carve.mp4'))
  check('Decal IT features avoid GIF embeds', !features.includes('.gif'))
  check('Projection videos sit under their mode sections', features.indexOf('topology.mp4') > features.indexOf('### Target Topology') && features.indexOf('topology.mp4') < features.indexOf('### Volume Mode') && features.indexOf('decal-volume.mp4') > features.indexOf('### Volume Mode') && features.indexOf('decal-volume.mp4') < features.indexOf('### Simple Mode'))
  check('Only Decal Carve keeps a poster image', (features.match(/:poster=/g) || []).length === 1)
  check('feature videos remove shared poster placeholders', !features.includes(":poster=\"withBase('/images/decal-it/gallery-1.jpg')\"") && !features.includes(":poster=\"withBase('/images/decal-it/gallery-2.jpg')\"") && !features.includes(":poster=\"withBase('/images/decal-it/featured.jpg')\""))
  check('Decal Carve keeps poster image', features.includes("decal-carve.mp4") && features.includes(":poster=\"withBase('/images/decal-it/gallery-3.jpg')\""))
}

if (existsSync(file('docs/addons/decal-it/changelog.md'))) {
  const changelog = read('docs/addons/decal-it/changelog.md')
  check('Decal IT changelog starts from release version 1.0.0', changelog.includes('## 1.0.0') && !changelog.includes('## 0.1.0'))
}

if (existsSync(file('docs/addons/decal-it/faq.md'))) {
  const faq = read('docs/addons/decal-it/faq.md')
  check('FAQ explains projection modes with Target Topology default', faq.includes('Target Topology is the default mode') && faq.includes('Volume Mode') && faq.includes('Simple Mode'))
}

if (existsSync(file('docs/feedback.md'))) {
  const feedback = read('docs/feedback.md')
  check('feedback page renders issue form', feedback.includes('<FeedbackForm />'))
  check('feedback page links issues', feedback.includes('https://github.com/bamteam/BAM-WIKI/issues'))
}

if (existsSync(file('docs/.vitepress/theme/components/FeedbackForm.vue'))) {
  const form = read('docs/.vitepress/theme/components/FeedbackForm.vue')
  check('feedback form targets GitHub issue creation', form.includes('issues/new') && form.includes('URLSearchParams'))
  check('feedback form includes addon choices', form.includes('BAM Decal IT') && form.includes('BAM Automat'))
  check('feedback form opens computed issue URL directly', form.includes('@submit.prevent="openIssue"') && form.includes('window.open(issueUrl.value'))
  check('feedback form has requested submit label', form.includes('Send to GitHub Issue') && !form.includes('Open GitHub Issue'))
  check('feedback form has email fallback', form.includes('alexeyhrdesign@gmail.com') && form.includes('mailto:') && form.includes('Send Bug Report by Email'))
  check('feedback email action is click-driven', form.includes('@click="sendEmail"') && form.includes('window.location.href = emailUrl.value'))
  check('feedback email button changes after click', form.includes('emailButtonClicked') && form.includes('emailButtonLabel') && form.includes('Email manually:'))
  check('feedback shows manual email note', form.includes('bam-manual-email-note') && form.includes('If the email button does not work'))
  check('feedback email fallback can be copied', form.includes('emailFallbackVisible') && form.includes('copyEmailReport') && form.includes('Copy Email Report'))
  check('feedback form does not expose file picker', !form.includes('type="file"') && !form.includes('onFilesChange'))
  check('feedback form shows attachment notice', form.includes('bam-attachment-notice') && form.includes('After the issue page opens'))
}

if (existsSync(file('.github/workflows/deploy.yml'))) {
  const workflow = read('.github/workflows/deploy.yml')
  check('workflow builds docs', workflow.includes('npm run docs:build'))
  check('workflow uploads VitePress dist', workflow.includes('docs/.vitepress/dist'))
  check('workflow deploys Pages', workflow.includes('actions/deploy-pages@v4'))
  check('workflow has Pages permissions', workflow.includes('pages: write') && workflow.includes('id-token: write'))
  check('workflow deploys from main branch only', workflow.includes('- main') && !workflow.includes('- master'))
}

const failed = checks.filter((item) => !item.condition)

if (failed.length > 0) {
  console.error('Documentation site verification failed:')
  for (const item of failed) {
    console.error(`- ${item.name}`)
  }
  process.exit(1)
}

console.log(`Documentation site verification passed (${checks.length} checks).`)
