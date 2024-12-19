# Drawing Website
#### Video:  <[URL HERE](https://www.youtube.com/watch?v=-P23u8UvYr8)>
## Description:
This project is an interactive drawing application designed for users who want to express their creativity digitally. The website includes multiple tools, layers, and customization options. Inspired by my passion for art and programming i wanted to make something that combined both features, this project merges creativity and technology.

## Files

### index.html
The HTML file contains the structure of the drawing application, including the canvas element and the controls such as tools, sliders, and buttons.

### styles.css
This file styles the application, ensuring that the canvas and toolbars are visually intuitive.
- **Desgin choice**: The design was inspired by Gartic, a website that fosters creativity and drawing experiences in a collaborative and interactive way. This application draws on similar principles, aiming to provide users with tools to freely express their artistic vision while exploring the technical side of digital drawing.

### script.js
This JavaScript file contains the core functionality of the application.
- **Canvas Setup and Drawing Logic**: Handles interactions on canvas, such as drawing shapes and managing the logic of the diferent tools such as brush, eraser, bucket and selector tool.
- **Undo System**: Implements a stack-based approach to capture and restore canvas states.
- **Layer System**: Manages multiple layers, including toggling visibility and selecting active layers.
- **Color and Tool Management**: Provides functions to change the drawing color and switch between tools.
- **Clear Canvas and Save Image**: Manages to clear the whole canvas and is able to save drawings to computer folder.

## Features

- **Layer Management**: Add, toggle visibility, and select layers.
- **Drawing Tools**: Includes brush, eraser, rectangle, circle, triangle, and line tools.
- **Color Selection**: Color picker and predefined palettes for quick selection.
- **Bucket Tool**: Fill areas with the selected color using flood-fill logic.
- **Undo Functionality**: Undo up to the most recent captured canvas states using `Ctrl+Z`.
- **Save and Export**: Save drawings as images.
- **Customizations**: Adjustable brush size, opacity, and colors.
- **Tablet and Stylus Support**: Fully compatible with touch and stylus input.


### Explanation

It begins by selecting various dominate elements like the canvas, tool buttons, sliders, color selectors, and utility buttons. The Layer class is defined to handle individual drawing layers, each with its own canvas and context, allowing for independent manipulation and visibility control. Layers can be toggled on or off and reordered visually through the interface.

The initializeLayers function sets up default layers, including a background layer and two additional layers. It also ensures the active layer is set and updates the composite display of all layers by combining them on the main canvas. Layers are listed dynamically with their visibility controlled through checkboxes. The active layer is visually highlighted, and clicking a layer sets it as active.

The undo functionality is implemented by capturing the canvas state after significant changes and pushing it to an array. This allows users to revert to previous states by pressing Ctrl+Z. Each layer maintains its undo stack, ensuring specific layer changes can be reversed independently.

Color selection is handled through multiple methods; predefined color buttons, a color picker, and a palette image. The updateColor function ensures the selected color is applied with the current opacity. Opacity adjustments are made via a slider, dynamically updating the color's transparency.

The drawing tools include brushes, erasers, and geometric shape tools like rectangles, circles, and triangles. A bucket fill tool allows users to fill areas with a selected color using flood-fill logic, while a color picker tool enables sampling colors directly from the canvas. Each tool's behavior is determined by the selected tool type and mouse or touch interactions.

The application is responsive, supporting touch and stylus input alongside mouse interactions. Event listeners ensure smooth drawing and tool usage across different input methods. For example, touchstart and pointerdown events initiate drawing, while pointermove updates the drawing, and pointerup finalizes the operation.

The canvas background is initialized with a white background, and the active drawing color is set to black by default. Clear and save functionalities are also included. The clear button resets all layers, while the save button downloads the finished state of your drawing on canvas.

Finally, the application adjusts to the device's resolution by setting the canvas size dynamically on load. It ensures a seamless user experience by initializing layers, setting default values, and capturing the first canvas state.
