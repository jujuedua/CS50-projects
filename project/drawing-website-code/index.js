const canvas = document.querySelector("canvas"),
  toolBtns = document.querySelectorAll(".tool"),
  sizeSlider = document.querySelector("#size-slider"),
  opacitySlider = document.querySelector("#opacity"),
  colorBtns = document.querySelectorAll(".colors .option"),
  colorBox = document.querySelector(".selector .option"),
  colorPicker = document.querySelector("#color-picker"),
  paletteImg = document.querySelector("#palette img"),
  clearCanvas = document.querySelector(".clear-canvas"),
  saveImg = document.querySelector(".save-img"),
  layerList = document.querySelector(".layer-list"),
  ctx = canvas.getContext("2d");

let prevMouseX,
  prevMouseY,
  snapshot,
  isDrawing = false,
  selectedTool = "brush",
  brushWidth = 5,
  selectedColor = "#000",
  currentOpacity = 1,
  undoArray = [],
  layers = [],
  activeLayer = null;

class Layer {
  constructor(name, isVisible = true) {
    this.name = name;
    this.canvas = document.createElement("canvas");
    this.canvas.width = canvas.width;
    this.canvas.height = canvas.height;
    this.ctx = this.canvas.getContext("2d");
    this.isVisible = isVisible;
    this.undoArray = [];
  }
}

const captureCanvasState = () => {
  const canvasState = layers.map((layer) => ({
    layerName: layer.name,
    imageData: layer.ctx.getImageData(0, 0, canvas.width, canvas.height),
  }));
  undoArray.push(canvasState);
};

const initializeLayers = () => {
  layers = [
    new Layer("Background", true),
    new Layer("Layer 1", true),
    new Layer("Layer 2", true),
  ];
  activeLayer = layers[1];
  renderLayerList();
  updateCanvasComposite();
  setCanvasBackground();
};

const renderLayerList = () => {
  layerList.innerHTML = "";
  layers
    .slice()
    .reverse()
    .forEach((layer) => {
      const layerItem = document.createElement("li");
      layerItem.classList.add("layer");

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = layer.isVisible;

      const layerName = document.createElement("span");
      layerName.textContent = layer.name;

      if (layer === activeLayer) {
        layerItem.classList.add("active");
      }

      checkbox.addEventListener("change", () => {
        layer.isVisible = checkbox.checked;
        updateCanvasComposite();
      });
      layerItem.addEventListener("click", () => {
        document
          .querySelectorAll(".layer")
          .forEach((el) => el.classList.remove("active"));
        layerItem.classList.add("active");

        activeLayer = layer;
      });
      layerItem.appendChild(checkbox);
      layerItem.appendChild(layerName);
      layerList.appendChild(layerItem);
    });
};

const updateCanvasComposite = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  layers.forEach((layer) => {
    if (layer.isVisible) {
      ctx.globalCompositeOperation = "source-over";
      ctx.drawImage(layer.canvas, 0, 0);
    }
  });
};

const setCanvasBackground = () => {
  ctx.fillStyle = "#fff";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = selectedColor;
  undoArray.push(ctx.getImageData(0, 0, canvas.width, canvas.height));
};

const updateColor = (color) => {
  const tempElement = document.createElement("div");
  tempElement.style.backgroundColor = color;
  document.body.appendChild(tempElement);
  const computedColor = window.getComputedStyle(tempElement).backgroundColor;
  document.body.removeChild(tempElement);

  const rgbaMatch = computedColor.match(/\d+/g);
  if (rgbaMatch) {
    const [r, g, b] = rgbaMatch;
    return `rgba(${r}, ${g}, ${b}, ${currentOpacity})`;
  }
  return color;
};

const resetOpacity = () => {
  currentOpacity = 1;
  opacitySlider.value = 100;
  selectedColor = updateColor(selectedColor);
};

//bucket tool
const fillPixel = (startX, startY) => {

  startX = Math.floor(startX);
  startY = Math.floor(startY);

  const layerCanvas = activeLayer.canvas;
  const layerCtx = activeLayer.ctx;
  const imageData = layerCtx.getImageData(0, 0, layerCanvas.width, layerCanvas.height);
  const pixels = imageData.data;
  const tempDiv = document.createElement('div');
  tempDiv.style.backgroundColor = selectedColor;
  document.body.appendChild(tempDiv);
  const computedColor = window.getComputedStyle(tempDiv).backgroundColor;
  document.body.removeChild(tempDiv);
  const fillColorMatch = computedColor.match(/\d+/g);
  const [fillR, fillG, fillB] = fillColorMatch.map(Number);
  const fillA = Math.round(currentOpacity * 255);
  const startIndex = (startY * layerCanvas.width + startX) * 4;
  const startR = pixels[startIndex];
  const startG = pixels[startIndex + 1];
  const startB = pixels[startIndex + 2];
  const startA = pixels[startIndex + 3];

  if (startR === fillR && startG === fillG && startB === fillB && startA === fillA) {
      return;
  }

  const pixelStack = [[startX, startY]];
  const width = layerCanvas.width;
  const height = layerCanvas.height;
  const tolerance = 0;
  const matchesColor = (index) => {
      return (
          Math.abs(pixels[index] - startR) <= tolerance &&
          Math.abs(pixels[index + 1] - startG) <= tolerance &&
          Math.abs(pixels[index + 2] - startB) <= tolerance &&
          Math.abs(pixels[index + 3] - startA) <= tolerance
      );
  };
  while (pixelStack.length > 0) {
      const [x, y] = pixelStack.pop();
      let index = (y * width + x) * 4;
      let currentY = y;
      while (currentY >= 0 && matchesColor((currentY * width + x) * 4)) {
          index = (currentY * width + x) * 4;
          pixels[index] = fillR;
          pixels[index + 1] = fillG;
          pixels[index + 2] = fillB;
          pixels[index + 3] = fillA;

          if (x > 0 && matchesColor((currentY * width + (x - 1)) * 4)) {
              pixelStack.push([x - 1, currentY]);
          }
          if (x < width - 1 && matchesColor((currentY * width + (x + 1)) * 4)) {
              pixelStack.push([x + 1, currentY]);
          }
          currentY--;
      }
      currentY = y + 1;
      while (currentY < height && matchesColor((currentY * width + x) * 4)) {
          index = (currentY * width + x) * 4;
          pixels[index] = fillR;
          pixels[index + 1] = fillG;
          pixels[index + 2] = fillB;
          pixels[index + 3] = fillA;

          if (x > 0 && matchesColor((currentY * width + (x - 1)) * 4)) {
              pixelStack.push([x - 1, currentY]);
          }
          if (x < width - 1 && matchesColor((currentY * width + (x + 1)) * 4)) {
              pixelStack.push([x + 1, currentY]);
          }
          currentY++;
      }
  }
  layerCtx.putImageData(imageData, 0, 0);
  updateCanvasComposite();
  captureCanvasState();
};

const pickColor = (e) => {
  const pixelColor = ctx.getImageData(e.offsetX, e.offsetY, 1, 1).data;
  const r = pixelColor[0];
  const g = pixelColor[1];
  const b = pixelColor[2];
  const a = (pixelColor[3] / 255).toFixed(2);
  selectedColor = `rgba(${r}, ${g}, ${b}, ${a})`;
  colorBox.style.backgroundColor = selectedColor;
  document.querySelector(".colors .selected")?.classList.remove("selected");
  opacitySlider.value = a * 100;
  currentOpacity = a;
  selectedTool = "brush";
  document.querySelector(".options .active").classList.remove("active");
  document.querySelector("#brush").classList.add("active");
};

const drawRect = (e) => {
  activeLayer.ctx.strokeRect(e.offsetX, e.offsetY, prevMouseX - e.offsetX, prevMouseY - e.offsetY,);
};

const drawCircle = (e) => {
  activeLayer.ctx.beginPath();
  let radius = Math.sqrt(Math.pow(prevMouseX - e.offsetX, 2) + Math.pow(prevMouseY - e.offsetY, 2),);
  activeLayer.ctx.arc(prevMouseX, prevMouseY, radius, 0, 2 * Math.PI);
  activeLayer.ctx.stroke();
};

const drawTriangle = (e) => {
  activeLayer.ctx.beginPath();
  activeLayer.ctx.moveTo(prevMouseX, prevMouseY);
  activeLayer.ctx.lineTo(e.offsetX, e.offsetY);
  activeLayer.ctx.lineTo(prevMouseX * 2 - e.offsetX, e.offsetY);
  activeLayer.ctx.closePath();
  activeLayer.ctx.stroke();
};

const startDraw = (e) => {
  isDrawing = true;
  prevMouseX = e.offsetX;
  prevMouseY = e.offsetY;
  activeLayer.ctx.beginPath();
  activeLayer.ctx.lineWidth = brushWidth;
  activeLayer.ctx.lineCap = "round";
  activeLayer.ctx.lineJoin = "round";
  snapshot = activeLayer.ctx.getImageData(0, 0, canvas.width, canvas.height);
  activeLayer.ctx.strokeStyle = selectedColor;
  activeLayer.ctx.fillStyle = selectedColor;
  activeLayer.ctx.globalAlpha = 1;
  e.preventDefault();

  activeLayer.undoArray.push(snapshot);

  if (selectedTool === "bucket") {
    fillPixel(e.offsetX, e.offsetY);
    isDrawing = false;
  } else if (selectedTool === "selector") {
    pickColor(e);
    isDrawing = false;
  }
};

const drawLine = (e) => {
  activeLayer.ctx.beginPath();
  activeLayer.ctx.moveTo(prevMouseX, prevMouseY);
  activeLayer.ctx.lineTo(e.offsetX, e.offsetY);
  activeLayer.ctx.stroke();
};

const drawing = (e) => {
  if (!isDrawing) return;

  activeLayer.ctx.putImageData(snapshot, 0, 0);

  if (selectedTool === "brush" || selectedTool === "eraser") {
    if (selectedTool === "eraser") {
      activeLayer.ctx.globalCompositeOperation = "destination-out";
      activeLayer.ctx.strokeStyle = "rgba(0, 0, 0, 1)";
    } else {
      activeLayer.ctx.globalCompositeOperation = "source-over";
      activeLayer.ctx.strokeStyle = selectedColor;
    }
    activeLayer.ctx.lineTo(e.offsetX, e.offsetY);
    activeLayer.ctx.stroke();
  } else if (selectedTool == "rectangle") {
    drawRect(e, activeLayer.ctx);
  } else if (selectedTool == "circle") {
    drawCircle(e, activeLayer.ctx);
  } else if (selectedTool == "triangle") {
    drawTriangle(e, activeLayer.ctx);
  } else if (selectedTool == "line") {
    drawLine(e, activeLayer.ctx);
  } else if (selectedTool === "bucket") {
    fillPixel(e.offsetX, e.offsetY);
  } else if (selectedTool === "selector") {
    pickColor(e);
  }

  updateCanvasComposite();
};

canvas.addEventListener("pointerup", () => {
  if (isDrawing) {
    isDrawing = false;
    captureCanvasState();
  }
});

// Undo functionality with Ctrl+Z
document.addEventListener("keydown", (e) => {
  if (e.ctrlKey && e.key === "z") {
    if (undoArray.length > 1) {
      undoArray.pop();
      const previousState = undoArray[undoArray.length - 1];
      previousState.forEach((layerState) => {
        const matchingLayer = layers.find(
          (layer) => layer.name === layerState.layerName,
        );
        if (matchingLayer) {
          matchingLayer.ctx.putImageData(layerState.imageData, 0, 0);
        }
      });
      updateCanvasComposite();
    }
  }
});

toolBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
      document.querySelector(".options .active").classList.remove("active");
      btn.classList.add("active");
      selectedTool = btn.id;
  });
});

colorBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(".colors .selected")?.classList.remove("selected");
    btn.classList.add("selected");
    selectedColor = window.getComputedStyle(btn).getPropertyValue("background-color");
    colorBox.style.backgroundColor = selectedColor;
    resetOpacity();
  });
});

colorPicker.addEventListener("change", () => {
  document.querySelector(".colors .selected")?.classList.remove("selected");
  selectedColor = colorPicker.value;
  colorBox.style.backgroundColor = selectedColor;
  colorPicker.parentElement.style.background = selectedColor;
  resetOpacity();
});

paletteImg.addEventListener("click", () => {
  colorPicker.click();
});

colorPicker.addEventListener("click", (e) => {
  e.stopPropagation();
});

opacitySlider.addEventListener("input", () => {
  currentOpacity = opacitySlider.value / 100;
  selectedColor = updateColor(selectedColor);
  colorBox.style.backgroundColor = selectedColor;
});

sizeSlider.addEventListener("change", () => (brushWidth = sizeSlider.value));

colorPicker.addEventListener("input", () => {
  document.querySelector(".colors .selected")?.classList.remove("selected");
  selectedColor = colorPicker.value;
  colorBox.style.backgroundColor = selectedColor;
  colorPicker.parentElement.style.background = selectedColor;
  resetOpacity();
});

clearCanvas.addEventListener("click", () => {
  layers.forEach((layer) => {
    layer.ctx.clearRect(0, 0, canvas.width, canvas.height);
  });
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  captureCanvasState();
  setCanvasBackground();
});

saveImg.addEventListener("click", () => {
  const link = document.createElement("a");
  link.download = `${Date.now()}.jpeg`;
  link.href = canvas.toDataURL();
  link.click();
});

window.addEventListener("load", () => {
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
  colorBox.style.backgroundColor = selectedColor;
  initializeLayers();
  setCanvasBackground();
  captureCanvasState();
});

//for tablet and stylus support
canvas.addEventListener("touchstart", startDraw, { passive: false });
canvas.addEventListener("touchmove", drawing, { passive: false });
canvas.addEventListener("touchend", () => (isDrawing = false));

//for stylus and other input methods
canvas.addEventListener("pointerdown", startDraw);
canvas.addEventListener("pointermove", drawing);
canvas.addEventListener("pointerup", () => (isDrawing = false));
