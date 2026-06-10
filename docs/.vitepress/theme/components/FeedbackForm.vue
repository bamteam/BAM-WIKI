<script setup>
import { computed, ref } from 'vue'

const supportEmail = 'alexeyhrdesign@gmail.com'
const addon = ref('BAM Decal IT')
const issueType = ref('Bug')
const title = ref('')
const blenderVersion = ref('')
const addonVersion = ref('')
const steps = ref('')
const expected = ref('')
const actual = ref('')
const emailFallbackVisible = ref(false)
const emailCopyStatus = ref('')
const emailButtonClicked = ref(false)

function openIssue() {
  window.open(issueUrl.value, '_blank', 'noopener,noreferrer')
}

function sendEmail() {
  emailButtonClicked.value = true
  emailFallbackVisible.value = true
  emailCopyStatus.value = ''
  window.location.href = emailUrl.value
}

async function copyEmailReport() {
  const text = `To: ${supportEmail}\nSubject: ${reportTitle.value}\n\n${emailReportText.value}`

  try {
    await navigator.clipboard.writeText(text)
    emailCopyStatus.value = 'Copied.'
  } catch {
    emailCopyStatus.value = 'Select the text below and copy it manually.'
  }
}

const reportTitle = computed(() => {
  const cleanTitle = title.value.trim() || 'Describe the issue'
  return `[${addon.value}] ${cleanTitle}`
})

const emailButtonLabel = computed(() => {
  return emailButtonClicked.value ? `Email manually: ${supportEmail}` : 'Send Bug Report by Email'
})

const reportBody = computed(() => {
  return [
    `Addon: ${addon.value}`,
    `Type: ${issueType.value}`,
    `Blender version: ${blenderVersion.value.trim() || 'Not provided'}`,
    `Addon version: ${addonVersion.value.trim() || 'Not provided'}`,
    '',
    'Steps to reproduce:',
    steps.value.trim() || '1. ',
    '',
    'Expected result:',
    expected.value.trim() || 'Not provided',
    '',
    'Actual result:',
    actual.value.trim() || 'Not provided'
  ].join('\n')
})

const issueUrl = computed(() => {
  const body = [
    reportBody.value,
    '',
    'Attachment note:',
    'After the issue page opens, attach screenshots, videos, or .blend files in the GitHub issue editor before submitting.'
  ].join('\n')

  const params = new URLSearchParams({
    title: reportTitle.value,
    body
  })

  return `https://github.com/bamteam/BAM-WIKI/issues/new?${params.toString()}`
})

const emailReportText = computed(() => {
  return [
    reportBody.value,
    '',
    'Attachment note:',
    'Attach screenshots, videos, or .blend files manually before sending this email.'
  ].join('\n')
})

const emailUrl = computed(() => {
  const params = new URLSearchParams({
    subject: reportTitle.value,
    body: emailReportText.value
  })

  return `mailto:${supportEmail}?${params.toString()}`
})
</script>

<template>
  <form class="bam-feedback-form" @submit.prevent="openIssue">
    <div class="bam-form-grid">
      <label>
        Addon
        <select v-model="addon">
          <option>BAM Decal IT</option>
          <option>BAM Automat</option>
          <option>General BAM Addons</option>
        </select>
      </label>

      <label>
        Report type
        <select v-model="issueType">
          <option>Bug</option>
          <option>Feature Request</option>
          <option>Documentation</option>
        </select>
      </label>
    </div>

    <label>
      Title
      <input v-model="title" type="text" placeholder="Short issue summary" required>
    </label>

    <div class="bam-form-grid">
      <label>
        Blender version
        <input v-model="blenderVersion" type="text" placeholder="Example: 5.0">
      </label>

      <label>
        Addon version
        <input v-model="addonVersion" type="text" placeholder="Example: 0.1.0">
      </label>
    </div>

    <label>
      Steps to reproduce
      <textarea v-model="steps" rows="5" placeholder="1. Open Blender&#10;2. Enable the addon&#10;3. ..."></textarea>
    </label>

    <div class="bam-form-grid">
      <label>
        Expected result
        <textarea v-model="expected" rows="4"></textarea>
      </label>

      <label>
        Actual result
        <textarea v-model="actual" rows="4"></textarea>
      </label>
    </div>

    <div class="bam-attachment-notice">
      <span class="bam-attachment-badge">Attachments</span>
      <span>After the issue page opens, drag and drop screenshots, videos, or .blend files into the GitHub issue editor.</span>
    </div>

    <div class="bam-feedback-actions">
      <button class="bam-issue-button" type="submit">Send to GitHub Issue</button>
      <button class="bam-email-button" type="button" @click="sendEmail">{{ emailButtonLabel }}</button>
    </div>

    <p class="bam-manual-email-note">
      If the email button does not work, send your report manually to
      <a :href="`mailto:${supportEmail}`">{{ supportEmail }}</a>.
    </p>

    <div v-if="emailFallbackVisible" class="bam-email-fallback">
      <p>
        If your email app did not open, send this report to <strong>{{ supportEmail }}</strong>.
      </p>
      <button class="bam-copy-button" type="button" @click="copyEmailReport">Copy Email Report</button>
      <p v-if="emailCopyStatus" class="bam-form-note">{{ emailCopyStatus }}</p>
      <textarea class="bam-email-report" :value="emailReportText" rows="8" readonly></textarea>
    </div>
  </form>
</template>
