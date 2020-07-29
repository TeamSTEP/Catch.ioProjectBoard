# Project Structure

This chapter will discuss about the file structure of this project and how the project should be organized.
Because of how game development works, this chapter will change depending on what type of assets we add to the game.
In such situation, please update this doc to the corresponding changes so no one is confused to where things are stored.

## Core Folder Types

This project will have the following core folder types.

- Audio - contains every assets that is in a audio format like background music, in-game sound effects, UI sound effects, background sound, etc.
- Materials - contains all material assets (in the format of `.mat`) that are used in the game.
- Presets - all engine objects setting presets belongs in this folder.
- Resources - contains all game object resources like object prefabs, rule tiles, scritable objects, etc.
- Scenes - games scene will be in this folder
- Scripts - every script (including the engine editor scripts) will be in here
- Shaders - shader files will be in this folder
- Textures - every 2D image files will be in this folder. This include tile map, character sprite, UI elements, etc.
- TilePalettes - tile map palettes are stored in the folder
- UI - every UI/HUD textures or images are stored here
- UnityPackages - Unity packages imported from theUnity Asset Store will be located here. However, for packages that requires itself to be in the root folder will not be in here

Each folder
