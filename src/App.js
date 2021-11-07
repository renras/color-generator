import React, { useState, useEffect } from "react";
import Values from "values.js";
import ColorList from "./ColorList";

function App() {
  const [hexColor, setHexColor] = useState("");
  const [colorList, setColorList] = useState([]);
  const [isError, setIsError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let color = new Values(hexColor).all(10);
      setColorList(color);
      setIsError(false);
    } catch (error) {
      console.log(error);
      setIsError(true);
    }
  };

  useEffect(() => {
    const setColor = () => {
      let color = new Values("#f15205").all(10);
      setColorList(color);
    };
    setColor();
  }, []);

  return (
    <main>
      <header>
        <h1>Color Generator</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={hexColor}
            onChange={(e) => setHexColor(e.target.value)}
            placeholder="#f15205"
            style={{ border: isError && "1px solid red" }}
          />
          <button type="submit">Submit</button>
        </form>
      </header>
      <section className="colorList">
        {colorList.map((color, index) => {
          return <ColorList key={index} color={color} index={index} />;
        })}
      </section>
    </main>
  );
}

export default App;
