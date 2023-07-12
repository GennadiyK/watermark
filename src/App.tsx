import { useState } from "react";
import { useImgToURIWithWatermark } from "./hooks";
import { WatermarkForm, WatermarkView } from "./components";
import { DEFAULT_TEXT_SIZE, DEFAULT_TEXT_INDENT } from './constants'
import {WatermarkPositionType} from './hooks/types'

import "./App.css";

function App() {
  const [initUri, setInitUri] = useState<string | ArrayBuffer>();
  const [watermarkText, setWatermarkText] = useState("");
  const [watermarkTextColor, setWatermarkTextColor] = useState("");
  const [watermarkTextSize, setWatermarkTextSize] = useState(DEFAULT_TEXT_SIZE);
  const [watermarkTextIndent, setWatermarkTextIndent] = useState(DEFAULT_TEXT_INDENT);
  const [watermarkTexPosition, setWatermarkTexPosition] = useState<WatermarkPositionType>('leftTop');

  const uri = useImgToURIWithWatermark({
    fillText: watermarkText,
    textColor: watermarkTextColor,
    textSize: watermarkTextSize,
    textPosition: watermarkTexPosition,
    textIndent: watermarkTextIndent,
    src: `${initUri} `,
  });

  return (
    <div className="row">
      <div className="col">
        <WatermarkForm
          setInitUri={setInitUri}
          setTextColor={setWatermarkTextColor}
          setWatermarkText={setWatermarkText}
          setTextSize={setWatermarkTextSize}
          setTextPosition={setWatermarkTexPosition}
          setTextIndent={setWatermarkTextIndent}
        />
      </div>
      <div className="col">
        <WatermarkView uri={uri} />
      </div>
    </div>
  );
}

export default App;
