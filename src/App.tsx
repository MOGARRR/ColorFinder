
import Palette from "./components/Palette";
import ColorRangeTypes from "./components/ColorRangeTypes";
import ImageFileDrop from "./components/ImageFileDrop";
import ColorViewers from "./components/ColorViewers";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React, { useRef, useEffect } from "react";

function App() {
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
    console.log(`(${x}, ${y})`);
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
            >
            </canvas>
          </div>
          <Palette />
        </section>
        <section className="colorSection">
          <h1>colors</h1>
          <ColorViewers />
          <ColorRangeTypes />
          <ImageFileDrop />
        </section>
      </div>
    </>
  );
}

export default App;
