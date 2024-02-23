export default function QrCode() {
  return (
    <div>
      <div>
        <input type="text" />
        <button>Generate</button>
      </div>
      <div>
        <QRCode
          size={256}
          style={{ height: "auto", maxWidth: "100%", width: "100%" }}
          value={value}
          viewBox={`0 0 256 256`}
        />
      </div>
    </div>
  );
}
