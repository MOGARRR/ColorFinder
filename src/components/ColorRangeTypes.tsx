import React from 'react'
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";

interface ColorRangeTypesProps {
  rgb: string;
  hex: string;
}

const ColorRangeTypes:React.FC<ColorRangeTypesProps> = ({rgb, hex}) => {
  return (
     <Stack gap={3}>
            <div className=" colorType p-2">
              <h5>HEX</h5>
              <p>{hex}</p>
              <Button variant="outline-light">Light</Button>
            </div>
            <div className=" colorType p-2">
              <h5>RGB</h5>
              <p>{rgb}</p>
              <Button variant="outline-light">Light</Button>
            </div>
            <div className=" colorType p-2">
              <h5>HSL</h5>
              <p>hsl(0, 0, 0)</p>
              <Button variant="outline-light">Light</Button>
            </div>
          </Stack>
  )
}

export default ColorRangeTypes