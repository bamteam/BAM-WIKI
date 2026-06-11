# Quick Start

<script setup>
import { withBase } from 'vitepress'
</script>

This workflow creates or updates Blender materials from a folder of texture files.

<figure class="bam-media-card">
  <img class="bam-feature-image" :src="withBase('/images/automat/batch-install-update.png')" alt="Batch install and update materials from a textures folder with BAM AutoMat">
  <figcaption>AutoMat is built around batch creation and updates from a texture folder.</figcaption>
</figure>

## Before You Start

- Use BAM Automat v1.2.1 with Blender 4.2 or newer.
- Keep each material texture set named consistently, such as `Brick_basecolor.png`, `Brick_normal.png`, and `Brick_roughness.png`.
- Make sure each material candidate has a BaseColor texture that matches the active preset, because BAM uses BaseColor maps to detect material names.

## Basic Workflow

1. Open Blender and enable BAM.
2. Open `View3D Sidebar > [BAM] AutoMat`. If you changed BAM panel preferences, open the configured panel location instead.
3. In the AutoMat panel, choose the texture folder.
4. Enable `Subfolders Scan` if the texture sets are stored below the selected folder.
5. Enable `Relative Paths` when the Blender file should stay portable with the texture folder.
6. Choose a preset from `Definitions Presets`.
7. Click `Force Refresh` if the detected material list does not update after changing the folder or preset.
8. Review `Detected Materials in Folder`.
9. Open `Materials Create/Update filter` and leave checked only the materials you want BAM to process.
10. Click `Create and update Materials`.
11. Open `[BAM] MaterialManager` to inspect, preview, assign, replace, or clean the created materials.

<figure class="bam-media-card">
  <img class="bam-feature-image" :src="withBase('/images/automat/quick-start-steps.png')" alt="BAM AutoMat quick workflow steps">
  <figcaption>Choose the texture directory, enable subfolder scanning when needed, then create or update only the materials selected in the filter.</figcaption>
</figure>

::: tip
For large batches, switch the scene and viewport to Cycles before processing. This avoids expensive Eevee thumbnail and shader compilation work during mass material creation.
:::

## Common Preset Choices

| Preset | Use when |
| --- | --- |
| Default | Textures use separate maps such as BaseColor, Normal, Roughness, Metallic, Opacity, Displacement, Emissive, and AO. |
| ARM | One packed texture stores AO, Roughness, and Metallic in separate color channels. |

## Filter Controls

| Control | Result |
| --- | --- |
| Check All | Enables every detected material for creation or update. |
| Uncheck All | Clears the processing list. |
| Invert Selection | Switches checked materials to unchecked and unchecked materials to checked. |
| Existing material marker | Shows that a material with that name already exists in the scene. |

## After Creation

Use MaterialManager for the next pass:

- Assign a material to selected objects or selected faces.
- Replace one material with another across objects and faces.
- Select objects or faces by material.
- Duplicate, delete, or fake-user materials.
- Reload textures, use texture sync, or clean unused material data.
