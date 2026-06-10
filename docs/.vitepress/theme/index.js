import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import AddonSwitcher from './components/AddonSwitcher.vue'
import BamGallerySlider from './components/BamGallerySlider.vue'
import FeedbackForm from './components/FeedbackForm.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'nav-bar-title-after': () => h(AddonSwitcher)
    })
  },
  enhanceApp({ app }) {
    app.component('BamGallerySlider', BamGallerySlider)
    app.component('FeedbackForm', FeedbackForm)
  }
}
