import Palette from "./components/Palette";
import ColorRangeTypes from "./components/ColorRangeTypes";
import ImageFileDrop from "./components/ImageFileDrop";
import ColorViewers from "./components/ColorViewers";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React, { useRef, useEffect, useState } from "react";

function App() {
  const [hover, setHover] = useState<string>("");
  const [selected, setSelected] = useState<string>("");

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
    const rgbColor = `rgb(${data[0]} ${data[1]} ${data[2]} / ${data[3] / 255})`;
    setHover(rgbColor);
    if (e.type === "click") setSelected(rgbColor);
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
          <ColorViewers hoverColor={hover} selectedColor={selected} />
          <div className="colorInfo">
            <ColorRangeTypes rgb={hover} />
            <ColorRangeTypes rgb={selected} />
          </div>

          <ImageFileDrop />
        </section>
      </div>
    </>
  );
}

export default App;
