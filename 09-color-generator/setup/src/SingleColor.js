import React, { useState, useEffect } from "react";
// import rgbToHex from "./utils";

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false);
  const bg = rgb.join(",");
  // const hexValue = rgbToHex(...rgb); // to do it manually
  const hexValue = `#${hexColor}`;
  // console.log(hexValue);

  useEffect(() => {
    const time = setTimeout(() => {
      setAlert(false);
    }, 3000);
    return clearTimeout(time);
  }, [alert]);

  return (
    <article
      className={`color ${index > 10 && "color-light"} `}
      style={{ backgroundColor: `rgb(${bg})` }}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hexValue); // hexValue will be copied.
      }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hexValue}</p>
      {alert && <p className="alert">copied to clipboard</p>}
    </article>
  );
};

export default SingleColor;
