import { useEffect, useState } from "react";
import { WatermarkContext } from "./context";
import SofiaFont from "./assets/fonts/Sofia-Regular.ttf";
import { useImgToURIWithWatermark } from "./hooks";
import { WatermarkForm, WatermarkView } from "./components";
import { DEFAULT_TEXT_SIZE, DEFAULT_TEXT_INDENT } from "./constants";
import { WatermarkPositionType, WatermarkTextFont } from "./types";
import {FONTS} from './data'

import "./App.css";

function App() {
  const [initUri, setInitUri] = useState<string | ArrayBuffer>();
  const [watermarkText, setWatermarkText] = useState("");
  const [watermarkTextColor, setWatermarkTextColor] = useState("");
  const [watermarkTextSize, setWatermarkTextSize] = useState(DEFAULT_TEXT_SIZE);
  const [watermarkTextIndent, setWatermarkTextIndent] =
    useState(DEFAULT_TEXT_INDENT);
  const [watermarkTexPosition, setWatermarkTexPosition] =
    useState<WatermarkPositionType>("leftTop");
  const [watermarkTexFont, setWatermarkTexFont] =
    useState<WatermarkTextFont>("Arial");

  const uri = useImgToURIWithWatermark<WatermarkTextFont>({
    fillText: watermarkText,
    textColor: watermarkTextColor,
    textSize: watermarkTextSize,
    textPosition: watermarkTexPosition,
    textFont: watermarkTexFont,
    textIndent: watermarkTextIndent,
    src: `${initUri} `,
    customFontsUrl: [{ fontName: "Sofia", url: SofiaFont }], 
  });

  useEffect(() => {
    console.log('watermarkTexFont', watermarkTexFont)
  }, [watermarkTexFont])

  return (
    <WatermarkContext.Provider value={{fonts: [...FONTS]}}>
      <div className="row">
        <div className="col">
          <WatermarkForm
            setInitUri={setInitUri}
            setTextColor={setWatermarkTextColor}
            setWatermarkText={setWatermarkText}
            setTextSize={setWatermarkTextSize}
            setTextPosition={setWatermarkTexPosition}
            setTextFont={setWatermarkTexFont}
            setTextIndent={setWatermarkTextIndent}
          />
        </div>
        <div className="col">
          <WatermarkView uri={uri} />
        </div>
      </div>
    </WatermarkContext.Provider>
  );
}

export default App;
