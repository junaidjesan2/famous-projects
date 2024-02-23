import { useState } from "react";
import QRCode from "react-qr-code";

export default function QrCode() {
  const [inputValue, setInputValue] = useState("");
  const [qrCode, setQrCode] = useState("");
  function handleQrCode() {
    setQrCode(inputValue);
  }
  return (
    <div>
      <div className="flex -px-3 flex-row gap-3 drop-shadow py-2 px-4 justify-center">
        <input
          className="border-2"
          onChange={(e) => setInputValue(e.target.value)}
          type="text"
        />
        <button
          onClick={() => handleQrCode()}
          className="px-3 py-1 drop-shadow-md bg-slate-300 rounded-md"
        >
          Generate
        </button>
      </div>
      <div>
        <QRCode
          value={qrCode}
        />
      </div>
    </div>
  );
}
