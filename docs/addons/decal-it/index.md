# BAM Decal IT

<script setup>
import { withBase } from 'vitepress'
</script>

<span class="bam-badge bam-badge-active">Active addon</span>

<div class="bam-addon-hero">
  <div>
    <p>BAM Decal IT is a fast mesh decal placement addon for Blender. It helps project mesh decals onto curved surfaces, adjust them directly in the viewport, and keep reusable decal libraries with rendered previews.</p>
    <p>Use it for hard-surface panels, trims, symbols, labels, screws, vents, stylized marks, and mesh details that need to sit cleanly on top of another object.</p>
  </div>
  <img class="bam-feature-image" :src="withBase('/images/decal-it/featured.jpg')" alt="BAM Decal IT featured preview">
</div>

## Gallery Slider

<BamGallerySlider />

## Highlights

<div class="bam-highlight-list bam-highlight-links">
  <a class="bam-highlight-link" href="quick-start">Project mesh decals with viewport-focused placement controls.</a>
  <a class="bam-highlight-link" href="features">Move, scale, rotate, flip, and align decals without leaving the 3D view.</a>
  <a class="bam-highlight-link" href="features#resize-and-transform">Control width, height, projection depth, offset, subdivision, trim, and triangulation.</a>
  <a class="bam-highlight-link" href="features#projection-modes">Switch between Target Topology, Simple, and Volume projection modes.</a>
  <a class="bam-highlight-link" href="features#decal-library">Save reusable decal collections and browse them with preview thumbnails.</a>
  <a class="bam-highlight-link" href="features#interactive-placement">Edit existing BAM decals with Decal IT EditMode.</a>
  <a class="bam-highlight-link" href="features#decal-carve">Cut or restore decal regions with Decal Carve.</a>
  <a class="bam-highlight-link" href="../installation">Install BAM addons from Blender Extensions or a local archive.</a>
</div>

## Start Here

<div class="bam-grid">
  <a class="bam-card" href="../installation">
    <h3>Installation</h3>
    <p>Install the addon and confirm the panel loads in Blender.</p>
  </a>
  <a class="bam-card" href="quick-start">
    <h3>Quick Start</h3>
    <p>Follow the shortest path from addon setup to a placed decal.</p>
  </a>
  <a class="bam-card" href="features">
    <h3>Features</h3>
    <p>Review projection modes, library tools, carving, and edit workflows.</p>
  </a>
  <a class="bam-card" :href="withBase('/feedback')">
    <h3>Feedback</h3>
    <p>Report bugs or request improvements through GitHub Issues.</p>
  </a>
</div>
