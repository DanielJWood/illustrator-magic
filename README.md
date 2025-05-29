Copy and Paste are for a very specific usecase, when you *know* for certain that a) you want things to align and b) you know they are the same exact aspect ratio. For instance, you have various map vectors and rasters clipped to an area, but they are in different locations and sizes, and you want to align them and resize. 

## Copy.js
**What it does**: Copy the width, height, x and y (relative to document 0,0), to a text layer inside a group called `copy-paste-properties`

**To do it**

- create a group called `copy-paste-properties`
- highlight an item
- run the script. 

## Paste.js
**What it does**: Paste the width, height, x and y (relative to document 0,0) from `copy-paste-properties` into the properties of a selected layer.

**To do it**
- have a `copy-paste-properties` layer
- highlight desired item
- run the script.