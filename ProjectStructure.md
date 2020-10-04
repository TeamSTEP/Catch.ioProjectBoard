# Project Structure

This chapter will discuss about the file structure of this project and how the project should be organized.
Because of how game development works, this chapter will change depending on what type of assets we add to the game.
In such situation, please update this doc to the corresponding changes so no one is confused to where things are stored.

## Core Folder Types

This project will have the following core folder types:

- Audio - contains every assets that is in a audio format like background music, in-game sound effects, UI sound effects, background sound, etc.
- Editor - C# scripts that are specifically made for the Unity Editor to support development. Game-affecting logic does not belong in this folder.
- Gizmos - Similar to the `Editor` folder, this folder will contain all visual assets that are used for the editor, like inspector icons or other visual indicators.
- Materials - Contains all material assets (in the format of `.mat`) that are used in the game.
- Plugins - Third-party libraries from the Unity Asset Store or helper scripts that does not change frequently and is compatible with other Unity projects should be stored in this folder.
- Resources - contains all game object resources like object prefabs, rule tiles, scritable objects, etc.
- Scenes - games scene will be in this folder
- Scripts - every script that is directly made for the project belongs in this folder.
- Shaders - shader files will be in this folder.
- Textures - every 2D image files will be in this folder. This include tile map, character sprite, UI elements, etc.
- TilePalettes - tile map palettes are stored in the folder

## Script Structure

It is recommended that all scripts are Duck-typed and use inheritance to clearly define the function of each component.
This is means that scripts with similar functionality should be wrapped with a parent class that inherits from `MonoBehaviour` (or anther class that inherits from it).

Most game UI elements should separate its GUI manipulation from the backend logic and allow the GUI controller to be independent from the game/menu controller.
This resembles the MVC pattern, but much more compact.

The script folder structure will be like the following:

- Core folder - The core types and components that are used to build other game components.
- UI folder - Components specifically for controlling the UI should be stored in here.
