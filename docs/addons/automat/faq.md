# FAQ

## What Blender version should I use?

This wiki follows the installed BAM AutoMat v1.2.1 extension manifest, which lists Blender 4.2 or newer. Older marketplace builds may list broader compatibility, but this documentation is written against the current installed extension.

## Where are the BAM panels located?

By default, open `View3D Sidebar > [BAM] AutoMat`. BAM can move the AutoMat and MaterialManager panels through add-on preferences, so check your configured panel category, space type, and region type if the default tab is not visible.

## Why does BAM need a BaseColor texture?

AutoMat uses matching BaseColor textures to identify material candidates in the selected folder. If a texture set does not include a BaseColor file matching the active preset suffixes, it will not appear in the detected material list.

## Which preset should I start with?

Start with `Default` when each material channel has its own texture file. Use `ARM` when AO, Roughness, and Metallic are packed into one texture and should be read from separate channels.

## Why can Blender freeze while creating or updating many materials?

Large material batches can trigger shader compilation and preview generation. In heavy scenes, Eevee viewport and thumbnail work can make the UI appear frozen. Switch the scene and viewport to Cycles before processing large batches, and keep the MaterialManager area reasonably compact while the batch runs.

## What does Texture Sync do?

Texture Sync periodically checks texture files and scene images for updates so changed texture files can be refreshed automatically. The check interval is configurable in BAM preferences. Use a longer interval if your scene or texture folder is large.

## What does Relative Paths do?

`Relative Paths` stores texture references relative to the Blender project where possible. Use it when a project folder will move between machines or be shared with collaborators.

## How do I update existing materials?

Point AutoMat to the same texture folder, keep the matching preset active, review the filter list, and click `Create and update Materials`. Materials already present in the scene are updated instead of being duplicated.

## How do I report a bug?

Use the [Feedback page](/feedback) to open a prefilled GitHub Issue for BAM Automat, or go directly to the [BAM-WIKI issues page](https://github.com/bamteam/BAM-WIKI/issues).
