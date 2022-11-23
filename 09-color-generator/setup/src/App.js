import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values("#123456").all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    // try and catch is used to handle the error that dependency throws when we give the wrong input.
    try {
      // .all gives both tints and shades of a color of difference 10%
      let colors = new Values(color).all(10);
      // console.log(typeof colors[0]);
      setList(colors);
    } catch (error) {
      setError(true);
      // console.log(error);
    }
  };

  return (
    <>
      <section className="container">
        <h3>Tints & Shades</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="#f15025"
            className={`${error ? "error" : null}`}
          />
          <button type="submit" className="btn">
            generate
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index) => {
          return (
            <SingleColor
              key={index}
              {...color}
              index={index}
              hexColor={color.hex} // if we directly  it in SingleColor component its not working. i don't know why.
            />
          );
        })}
      </section>
    </>
  );
}

export default App;
