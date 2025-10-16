import React from 'react'
import Form from "react-bootstrap/Form"

const ImageFileDrop = () => {
  return (
     <Form.Group controlId="formFileLg" className="mb-3 fileHolder">
            <Form.Label>Try Your own images!</Form.Label>
            <Form.Control type="file" />
          </Form.Group>
  )
}

export default ImageFileDrop