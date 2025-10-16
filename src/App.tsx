import Image from "react-bootstrap/Image";
import Form from "react-bootstrap/Form";
import Palette from "./components/Palette";
import ColorRangeTypes from "./components/ColorRangeTypes";
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
          <Palette/>
        </section>
        <section className="colorSection">
          <h1>colors</h1>
          <div className="colorBlobs">
            <div className="colorSwatch">color selected</div>
            <div className="colorSwatch">color hovering</div>
          </div>
          <ColorRangeTypes/>
          <Form.Group controlId="formFileLg" className="mb-3 fileHolder">
            <Form.Label>Try Your own images!</Form.Label>
            <Form.Control type="file" />
          </Form.Group>
        </section>
      </div>
    </>
  );
}

export default App;
