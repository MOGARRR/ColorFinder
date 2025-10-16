import Image from "react-bootstrap/Image";
import Palette from "./components/Palette";
import ColorRangeTypes from "./components/ColorRangeTypes";
import ImageFileDrop from "./components/ImageFileDrop";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <section>
          <div>
            <h1>Image</h1>
            <Image src="/cet-image.png" fluid />
          </div>
          <Palette />
        </section>
        <section className="colorSection">
          <h1>colors</h1>
          <div className="colorBlobs">
            <div className="colorSwatch">color selected</div>
            <div className="colorSwatch">color hovering</div>
          </div>
          <ColorRangeTypes />
          <ImageFileDrop />
        </section>
      </div>
    </>
  );
}

export default App;
