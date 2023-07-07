import { useState } from "react";
import { useImgToURIWithWatermark } from "./hooks";
import { WatermarkForm, WatermarkView } from "./components";

import "./App.css";

function App() {
  const [initUri, setInitUri] = useState<string | ArrayBuffer>();
  const [watermarkText, setWatermarkText] = useState("");
  const [watermarkTextColor, setWatermarkTextColor] = useState("");

  const uri = useImgToURIWithWatermark({
    fillText: watermarkText,
    textColor: watermarkTextColor,
    src: `${initUri} `,
  });

  return (
    <div className="row">
      <div className="col">
        <WatermarkForm
          setInitUri={setInitUri}
          setTextColor={setWatermarkTextColor}
          setWatermarkText={setWatermarkText}
        />
      </div>
      <div className="col">
        <WatermarkView uri={uri} />
      </div>
    </div>
  );
}

export default App;
