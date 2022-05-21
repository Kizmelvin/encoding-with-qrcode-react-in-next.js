import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Qrcode from "./Qrcode";

function NewCode() {
  const [eventURL, setEventURL] = useState();
  const [newCode, setNewCode] = useState(false);

  const handleChange = (e) => {
    setEventURL(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setNewCode(true);
  };
  return (
    <div>
      {" "}
      <Form className="mb-3" onSubmit={handleSubmit}>
        <Form.Group className="mb-3 h-10">
          <Form.Label className="fs-4">URL</Form.Label>
          <Form.Control
            size="lg"
            type="text"
            name="name"
            required
            onChange={handleChange}
            value={eventURL || ""}
            placeholder="Enter URL"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Generate QR Code
        </Button>
      </Form>
      {newCode && <Qrcode value={eventURL} size={300} />}
    </div>
  );
}

export default NewCode;
