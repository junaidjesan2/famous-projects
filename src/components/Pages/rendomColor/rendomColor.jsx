import { useState } from "react";

export default function RendomColor() {
  const [colorType, setColorType] = useState("hex");
  const [randomColor,SetRandomColor]=useState("#000000");

  function generateHex() {}
  function generateRbg() {}
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
    </div>
  );
}
