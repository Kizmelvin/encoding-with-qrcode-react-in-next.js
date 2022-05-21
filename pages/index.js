import { useState } from "react";
import { Button } from "react-bootstrap";
import Qrcode from "../Components/Qrcode";
import NewCode from "../Components/NewCode";

export default function Home() {
  const [showCode, setShowCode] = useState(false);
  const GoogleEventURL =
    "https://calendar.google.com/event?action=TEMPLATE&tmeid=NXVkN2hzZWYwcDdzb2d1YTU1NzAwaTlxZWkgY2hpZGkuZXplMDAyQG0&tmsrc=chidi.eze002%40gmail.com";

  return (
    <div className="container">
      <h4 className="mt-5 fs-1 text-center">Scan to Save a Google Event</h4>
      <main>
        <div>
          <Qrcode value={GoogleEventURL} size={400} />
        </div>
        <div>
          <Button
            variant={!showCode ? "primary" : "danger"}
            className="mb-5"
            onClick={() => setShowCode(!showCode)}
          >
            {!showCode ? "Generate Another Code" : "Close"}
          </Button>
          {showCode && <NewCode setShowCode={setShowCode} />}
        </div>
      </main>
    </div>
  );
}
