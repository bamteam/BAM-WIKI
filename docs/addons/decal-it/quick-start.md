# Quick Start

<script setup>
import { withBase } from 'vitepress'
</script>

This workflow places a reusable decal on a target mesh and applies it from the viewport.

<figure class="bam-media-card">
  <video controls muted loop playsinline preload="metadata">
    <source :src="withBase('/videos/decal-it/decal-creation.mp4')" type="video/mp4">
  </video>
  <figcaption>Create a reusable decal entry before placing it on the target surface.</figcaption>
</figure>

## Basic Workflow

1. Open a Blender scene with a target mesh.
2. Open `View3D Sidebar > [BAM] Decalit`.
3. Choose a decal from the Decal Library.
4. Click `Decal IT` to start interactive placement.
5. Hover the target surface and position the decal.
6. Adjust width, height, depth, offset, trim, and triangulation as needed.
7. Press `Enter` or use the viewport apply button to finish.

<figure class="bam-media-card">
  <video controls muted loop playsinline preload="metadata">
    <source :src="withBase('/videos/decal-it/placement.mp4')" type="video/mp4">
  </video>
  <figcaption>Place the decal, tune it in the viewport, then apply the result.</figcaption>
</figure>

## Viewport Controls

| Control | Result |
| --- | --- |
| Width / Height | Changes decal size. |
| Depth | Controls projection depth. |
| Offset | Moves the decal away from the target surface. |
| Subdivide | Adds projection detail for curved surfaces. |
| Guides | Shows placement guides. |
| Decals Trim | Enables trim behavior during placement. |
| Triangulation | Converts the projected result for stable mesh output. |
| Fast Preview | Keeps preview interaction responsive. |

::: warning
Test the workflow on a copy of production assets when changing topology, trim, or projection settings.
:::
