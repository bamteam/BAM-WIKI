# BAM Automat

<script setup>
import { withBase } from 'vitepress'
</script>

<span class="bam-badge bam-badge-active">Active addon</span>

<div class="bam-addon-hero">
  <div>
    <p>BAM Automat is a material workflow addon for Blender. It scans texture folders, groups texture sets into material candidates, and creates or updates Blender materials from suffix, channel, and colorspace definitions.</p>
    <p>Use it when you need to build many PBR materials from a texture library, keep material names and texture paths organized, inspect scene materials, assign or replace materials, clean unused material data, and prepare materials for an asset library.</p>
  </div>
  <img class="bam-feature-image" :src="withBase('/images/automat/thumbnail.png')" alt="BAM Blender AutoMat logo">
</div>

<div class="bam-callout">
  <p><strong>Current wiki baseline:</strong> BAM AutoMat v1.2.1</p>
  <p><strong>Blender:</strong> 4.2 or newer, based on the installed extension manifest.</p>
  <p><strong>License:</strong> GPL-3.0-or-later.</p>
</div>

## Highlights

<div class="bam-highlight-list bam-highlight-links">
  <a class="bam-highlight-link" href="quick-start">Create or update materials from a texture folder in a short guided workflow.</a>
  <a class="bam-highlight-link" href="features#automat-texture-pipeline">Detect material candidates from BaseColor textures, with optional subfolder scanning.</a>
  <a class="bam-highlight-link" href="features#presets-and-texture-definitions">Use presets for suffixes, texture channels, colorspaces, and packed maps such as ARM.</a>
  <a class="bam-highlight-link" href="features#materialmanager">Manage scene materials with assign, replace, select, preview, cleanup, and duplicate tools.</a>
  <a class="bam-highlight-link" href="features#material-overlays">Use Materials Overlay and MatName Overlay for faster material browsing and inspection.</a>
  <a class="bam-highlight-link" href="features#matsasset-beta">Export selected materials to an asset-library file with the MatsAsset beta helper.</a>
  <a class="bam-highlight-link" href="../installation">Install BAM from Blender Extensions or a local addon archive.</a>
  <a class="bam-highlight-link" href="https://superhivemarket.com/products/bam-blenderautomat">Open the public Superhive listing.</a>
</div>

## Story

<figure class="bam-media-card">
  <img class="bam-feature-image" :src="withBase('/images/automat/story.png')" alt="BAM Blender AutoMat story">
  <figcaption>BAM was created to make mass material setup in Blender faster and closer to the production workflows artists expect from other DCC tools.</figcaption>
</figure>

## Start Here

<div class="bam-grid">
  <a class="bam-card" href="../installation">
    <h3>Installation</h3>
    <p>Install BAM and confirm the AutoMat and MaterialManager panels load in Blender.</p>
  </a>
  <a class="bam-card" href="quick-start">
    <h3>Quick Start</h3>
    <p>Follow the shortest path from a texture folder to created or updated materials.</p>
  </a>
  <a class="bam-card" href="features">
    <h3>Features</h3>
    <p>Review AutoMat, presets, MaterialManager, overlays, cleanup tools, and MatsAsset beta.</p>
  </a>
  <a class="bam-card" href="faq">
    <h3>FAQ</h3>
    <p>Read version guidance, BaseColor requirements, Cycles notes, and texture sync behavior.</p>
  </a>
  <a class="bam-card" href="changelog">
    <h3>Changelog</h3>
    <p>Track public BAM Automat release notes through the current wiki baseline.</p>
  </a>
  <a class="bam-card" href="../../feedback">
    <h3>Feedback</h3>
    <p>Report BAM Automat bugs or request documentation improvements.</p>
  </a>
</div>

## Official Sources

- [BAM on Blender Extensions](https://extensions.blender.org/add-ons/bam/)
- [BAM Blender AutoMat on Superhive](https://superhivemarket.com/products/bam-blenderautomat)
