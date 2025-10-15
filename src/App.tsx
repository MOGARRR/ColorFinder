import Image from "react-bootstrap/Image";
import ProgressBar from "react-bootstrap/ProgressBar";
import Stack from "react-bootstrap/Stack";
import Form from "react-bootstrap/Form";
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
          <div>
            <h2>pallete</h2>
            <ProgressBar>
              <ProgressBar striped variant="success" now={34} key={1} />
              <ProgressBar variant="warning" now={34} key={2} />
              <ProgressBar striped variant="danger" now={34} key={3} />
            </ProgressBar>
          </div>
        </section>
        <section>
          <h1>colors</h1>
          <div className="colorBlobs">
            <div className="colorSwatch">color</div>
            <div className="colorSwatch">color</div>
            <div className="colorSwatch">color</div>
          </div>
          <Stack gap={3}>
            <div className="p-2">HEX</div>
            <div className="p-2">RGB</div>
            <div className="p-2">HSL</div>
          </Stack>
          <Form.Group controlId="formFileLg" className="mb-3">
            <Form.Label>Large file input example</Form.Label>
            <Form.Control type="file" size="lg" />
          </Form.Group>
        </section>
      </div>
    </>
  );
}

export default App;
