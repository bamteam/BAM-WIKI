# Features

<script setup>
import { withBase } from 'vitepress'
</script>

BAM Decal IT focuses on fast mesh decal placement and clean in-viewport editing. The addon is designed around a reusable decal library, direct surface projection, and edit tools that keep the workflow inside Blender's 3D View.

## Interactive Placement

Start Decal IT, hover a surface, and position the decal with the viewport overlay. Adjust scale, depth, offset, subdivision, rotation, and placement before applying the result.

<figure class="bam-media-card">
  <video controls muted loop playsinline preload="metadata">
    <source :src="withBase('/videos/decal-it/placement.mp4')" type="video/mp4">
  </video>
  <figcaption>Placement mode keeps transform handles, alignment helpers, and apply controls visible in the viewport.</figcaption>
</figure>

## Projection Modes

### Target Topology

Use the target mesh topology as the decal geometry so the result follows the surface cleanly. This is the main mode for production placement on curved meshes.

<figure class="bam-media-card">
  <video controls muted loop playsinline preload="metadata">
    <source :src="withBase('/videos/decal-it/topology.mp4')" type="video/mp4">
  </video>
  <figcaption>Target Topology follows the destination surface.</figcaption>
</figure>

### Volume Mode

Volume Mode projects flat contact topology while preserving raised source volume. Use it when the decal is a small raised mesh detail rather than only a flat mark.

<figure class="bam-media-card">
  <video controls muted loop playsinline preload="metadata">
    <source :src="withBase('/videos/decal-it/decal-volume.mp4')" type="video/mp4">
  </video>
  <figcaption>Volume Mode preserves raised decal shape while projecting to the target.</figcaption>
</figure>

### Simple Mode

Simple Mode uses the decal mesh geometry with subdivision and ray projection. It is fast and responsive for quick layout, but curved surfaces require enough subdivision for a clean projection.

## Resize and Transform

Use viewport controls to tune decal size and placement. Width, height, projection depth, offset, subdivision, trim, and triangulation are available from the BAM Decal IT panel while you work.

<figure class="bam-media-card">
  <video controls muted loop playsinline preload="metadata">
    <source :src="withBase('/videos/decal-it/resize.mp4')" type="video/mp4">
  </video>
  <figcaption>Resize and transform controls let you fit the decal before applying it.</figcaption>
</figure>

## Decal Carve

Draw a polygon in the viewport to cut away parts of a projected decal. Hold Ctrl while carving to restore regions.

<figure class="bam-media-card">
  <video controls muted loop playsinline preload="metadata" :poster="withBase('/images/decal-it/gallery-3.jpg')">
    <source :src="withBase('/videos/decal-it/decal-carve.mp4')" type="video/mp4">
  </video>
  <figcaption>Decal Carve trims the decal with an editable mask shape.</figcaption>
</figure>

## Decal Library

Build a reusable decal list from selected mesh objects. Save collections, switch presets, browse previews, refresh thumbnails, and keep frequently used details ready inside the View3D sidebar.

## Decal Creation

Add selected mesh objects to the Decal Library, generate previews, and reuse them across placement workflows.

<figure class="bam-media-card">
  <video controls muted loop playsinline preload="metadata">
    <source :src="withBase('/videos/decal-it/decal-creation.mp4')" type="video/mp4">
  </video>
  <figcaption>Create reusable decal entries and browse them directly from the addon panel.</figcaption>
</figure>
