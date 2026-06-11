# Changelog

Track public BAM Automat release notes and documentation updates here.

## 1.2.1

- Fixed a Blender 5.0 compatibility issue involving the `Anisotropy` socket.
- Improved Material Overlay behavior with modifiers.
- Improved automatic use of the latest scene preset and related UI refresh behavior.
- Set the wiki baseline for BAM AutoMat v1.2.1.

## 1.2.0

- Added Blender 5.0 support.
- Added displacement midlevel control.
- Added automatic IOR assignment based on material-name keywords, with a default IOR of `1.45`.
- Reworked custom preset storage so user presets live in Blender config paths and are not replaced by addon updates.
- Improved shader graph organization and displacement node placement.
- Updated Blender 4.5 to 5.0 node handling to use current Separate XYZ behavior.

## 1.1.6

- Added alpha channel selection for packed textures.
- Added MatsAsset beta for adding materials to an asset library with asset tagging and preview generation.
- Added relative path support for texture-based material creation.
- Added Specular Tint defaults and UI control.
- Added displacement default value control.
- Improved emissive-map defaults.
- Improved preset switching stability.
- Added mapping control nodes and cleaner shader graph alignment.

## 1.1.1

- Improved Material Overlay behavior for objects with modifiers.
- Changed the preset system so custom presets use separate files and are not overwritten by addon updates.

## 1.1.0

- Refactored code and improved performance.
- Added new preference UI and image format management.
- Added Material Overlay, Material Preview, Material Pipette, Roughness Invert Mode, and Duplicate Material tools.
- Added a delete-material mode that can also remove texture data.
- Added cleanup mode options for the whole scene or selected objects.
- Expanded colorspace profile options.
- Improved logs and fixed several filter, scene colorspace, and custom property issues.

## 1.0.4

- Refactored code.
- Fixed conflicts that could appear with other addons in some cases.

## 1.0.3

- Added preference controls for panel category, space type, and region type.

## 1.0.2

- Updated extension manifest metadata.
- Changed addon category to Material.
- Added UI updates, including a collapsible Materials Create/Update filter and a Force Refresh button near the texture folder input.

## 1.0.1

- Fixed a Transmission map setup issue.
- Added Blender 4.2 support.

## 1.0.0

- Initial public release.
