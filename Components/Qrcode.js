import React, { useRef } from "react";
import { QRCodeSVG } from "qrcode.react";
import { Button } from "react-bootstrap";

function Qrcode({ value, size }) {
  const codeRef = useRef(null);
  const handleSave = () => {
    const preface = '<?xml version="1.0" standalone="no"?>\r\n';
    const element = codeRef.current.children[0].outerHTML;
    const svgBlob = new Blob([preface, element], {
      type: "image/svg+xml;charset=utf-8",
    });
    const svgUrl = URL.createObjectURL(svgBlob);
    const downloadLink = document.createElement("a");
    downloadLink.href = svgUrl;
    downloadLink.download = "qrcode.svg";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };
  return (
    <div ref={codeRef} style={{ display: "flex", flexDirection: "column" }}>
      <QRCodeSVG size={size} value={value} />
      <Button className="mt-3 p-2" variant="secondary" onClick={handleSave}>
        Save SVG
      </Button>
    </div>
  );
}

export default Qrcode;
