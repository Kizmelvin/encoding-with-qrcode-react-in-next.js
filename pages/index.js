import Qrcode from "../Components/Qrcode";

export default function Home() {
  const GoogleEventURL =
    "https://calendar.google.com/event?action=TEMPLATE&tmeid=NXVkN2hzZWYwcDdzb2d1YTU1NzAwaTlxZWkgY2hpZGkuZXplMDAyQG0&tmsrc=chidi.eze002%40gmail.com";

  return (
    <div className=" bg-danger">
      <h1 className="p-3 text-center text-light">Welcome on Board!</h1>

      <main>
        <div>
          <h4 className="mt-5 fs-1 text-center text-light">
            Scan to book a spot.
          </h4>
          <h5 className="mt-2 fs-3 text-center text-light">
            <i>Save and Share</i>
          </h5>
        </div>
        <div>
          <Qrcode value={GoogleEventURL} size={300} />
        </div>
      </main>
    </div>
  );
}
