import React from "react";
import boxes from "./boxes";
import Box from "./Box";
import "./index.css";

export default function App() {
  const [squares, setSquares] = React.useState(boxes);

  const squareElements = squares.map((square) => (
    <Box key={square.id} id={square.id} on={square.on} toggle={() => toggle(square.id)} />
  ));

  function toggle(id) {
    setSquares(prevsquare => {
      return prevsquare.map((square) => {
        return square.id === id ? {...square, on: !square.on} : square

      })
    })
  }

  return <main className="container">{squareElements}</main>;
}
