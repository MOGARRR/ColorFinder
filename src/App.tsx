import Palette from "./components/Palette";
import ColorRangeTypes from "./components/ColorRangeTypes";
import ImageFileDrop from "./components/ImageFileDrop";
import ColorViewers from "./components/ColorViewers";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React, { useRef, useEffect, useState } from "react";

function App() {
  const [hoverRgb, setHoverRgb] = useState<string>("rgb(0 0 0 /1)");
  const [selectedRgb, setSelectedRgb] = useState<string>("rgb(0 0 0 /1)");
  const [hoverHex, setHoverHex] = useState<string>("#000000");
  const [selectedHex, setSelectedHex] = useState<string>("#000000");

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = "/cet-image.png";

    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
    };
  }, []);

  function rgbToHex(r: any, g: any, b: any) {
    r = r.toString(16);
    g = g.toString(16);
    b = b.toString(16);

    if (r.length == 1) r = "0" + r;
    if (g.length == 1) g = "0" + g;
    if (b.length == 1) b = "0" + b;

    return `#${r}${g}${b}`;
  }
  const handleMouse = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const pixel = ctx.getImageData(x, y, 1, 1);
    const data = pixel.data;
    const hexColor = rgbToHex(data[0], data[1], data[2]).toUpperCase();
    const rgbColor = `rgb(${data[0]} ${data[1]} ${data[2]} / ${data[3] / 255})`;
    setHoverHex(hexColor);
    setHoverRgb(rgbColor);
    if (e.type === "click") {
      setSelectedRgb(rgbColor);
      setSelectedHex(hexColor);
    }
    return rgbColor;
  };

  return (
    <>
      <div className="container">
        <section>
          <div>
            <h1>Image</h1>
            <canvas
              id="canvas"
              ref={canvasRef}
              width={300}
              height={300}
              onMouseMove={handleMouse}
              onClick={handleMouse}
            ></canvas>
          </div>
          <Palette />
        </section>
        <section className="colorSection">
          <h1>colors</h1>
          <ColorViewers hoverColor={hoverRgb} selectedColor={selectedRgb} />
          <div className="colorInfo">
            <ColorRangeTypes rgb={hoverRgb} hex={hoverHex} />
            <ColorRangeTypes rgb={selectedRgb} hex={selectedHex} />
          </div>

          <ImageFileDrop />
        </section>
      </div>
    </>
  );
}

export default App;
