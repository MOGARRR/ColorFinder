import Image from "react-bootstrap/Image";
import Stack from "react-bootstrap/Stack";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Palette from "./components/Palette";
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
          <Stack gap={3}>
            <div className=" colorType p-2">
              <h5>HEX</h5>
              <p>#2596be</p>
              <Button variant="outline-light">Light</Button>
            </div>
            <div className=" colorType p-2">
              <h5>RGB</h5>
              <p>rgb(37, 150, 190)</p>
              <Button variant="outline-light">Light</Button>
            </div>
            <div className=" colorType p-2">
              <h5>HSL</h5>
              <p>hsl(0, 0, 0)</p>
              <Button variant="outline-light">Light</Button>
            </div>
          </Stack>
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
