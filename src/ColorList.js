import React, { useState, useEffect } from "react";

const ColorList = ({ color, index }) => {
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsClicked(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [isClicked]);

  return (
    <article
      onClick={() => {
        navigator.clipboard.writeText(`#${color.hex}`);
        setIsClicked(true);
      }}
      key={index}
      style={{ backgroundColor: `#${color.hex}` }}
    >
      {console.log(color.hex)}
      <p
        className={index > 8 ? `color-light` : undefined}
      >{`${color.weight}%`}</p>
      <p className={index > 8 ? `color-light` : undefined}>{`#${color.hex}`}</p>
      <p className="clipboard" style={{ opacity: `${isClicked ? 1 : 0}` }}>
        Copied to Clipboard
      </p>
    </article>
  );
};

export default ColorList;
