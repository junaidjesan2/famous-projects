import { useState } from "react";

export default function RendomColor() {
  const [colorType, setColorType] = useState("hex");
  const [randomColor, SetRandomColor] = useState("#0000000");

  function HEX(number) {
    return Math.floor(Math.random() * number);
  }

  function generateHex() {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[HEX(hex.length)];
    }
    SetRandomColor(hexColor);
  }
  function generateRbg() {
    const R = Math.round(Math.random() * 255);
    const G = Math.round(Math.random() * 255);
    const B = Math.round(Math.random() * 255);
    SetRandomColor(`rgb(${R},${G},${B})`);
  }
  return (
    <div className="h-screen py-5" style={{ background: randomColor }}>
      <div className="w-2/4 mx-auto">
        <button
          className="py-1 px-3 bg-slate-400 rounded-xl mr-3"
          onClick={() => setColorType("rgb")}
        >
          RGB
        </button>
        <button
          className="py-1 px-3 bg-slate-400 rounded-xl mr-3"
          onClick={() => setColorType("hex")}
        >
          HEX
        </button>
        <button
          onClick={colorType === "hex" ? generateHex : generateRbg}
          className="py-1 px-3 bg-slate-400 rounded-xl mr-3"
        >
          Generate random color
        </button>
      </div>
      <div className="text-6xl">{randomColor}</div>
    </div>
  );
}
