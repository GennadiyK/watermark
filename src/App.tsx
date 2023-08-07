import { useRef, RefObject, useState, useEffect } from "react";
import watermark from "./assets/WATERMSRK.png";
import { WatermarkContext, ImageLoadingContext } from "./context";
import SofiaFont from "./assets/fonts/Sofia-Regular.ttf";
import { useImgToURIWithWatermark } from "./hooks";
import { WatermarkForm, WatermarkView, Header, Loader } from "./components";
import { DEFAULT_TEXT_SIZE, DEFAULT_TEXT_INDENT } from "./constants";
import { WatermarkPositionType, WatermarkTextFont } from "./types";
import { FONTS } from "./data";

import { DomToImg } from "./DomToImage";

import "./App.css";
const Image = () => <img src={watermark} width={100} />;
function App() {
  const [initUri, setInitUri] = useState<string>();
  const [imgIsLoading, setImgIsLoading] = useState(false);
  const elementRef = useRef<any>();
  const [watermarkText, setWatermarkText] = useState("");
  const [watermarkTextColor, setWatermarkTextColor] = useState("");
  const [watermarkTextSize, setWatermarkTextSize] = useState(DEFAULT_TEXT_SIZE);
  const [watermarkTextIndent, setWatermarkTextIndent] =
    useState(DEFAULT_TEXT_INDENT);
  const [watermarkTexPosition, setWatermarkTexPosition] =
    useState<WatermarkPositionType>("leftTop");
  const [watermarkTexFont, setWatermarkTexFont] =
    useState<WatermarkTextFont>("Arial");

  // const uri = useImgToURIWithWatermark<WatermarkTextFont>({
  //   fillText: watermarkText,
  //   textColor: watermarkTextColor,
  //   textSize: watermarkTextSize,
  //   textPosition: watermarkTexPosition,
  //   textFont: watermarkTexFont,
  //   textIndent: watermarkTextIndent,
  //   src: initUri,
  //   customFontsUrl: [{ fontName: "Sofia", url: SofiaFont }],
  // });

  return (
    <WatermarkContext.Provider value={{ fonts: [...FONTS] }}>
      <ImageLoadingContext.Provider value={{ loading: imgIsLoading }}>
        <Header />
        <div className="inner row">
          <div className="col col-preview">
            <Loader>
              <WatermarkView
                uri={initUri}
                setLoading={setImgIsLoading}
              />
            </Loader>
            {!initUri && (
              <p>
                👉 Click <b>"Choose image"</b>. Here will be your image 🎑{" "}
              </p>
            )}
          </div>
          <div className="col col-settings">
            <WatermarkForm
              setInitUri={setInitUri}
              setImgIsLoading={setImgIsLoading}
              setTextColor={setWatermarkTextColor}
              setTextSize={setWatermarkTextSize}
              setTextPosition={setWatermarkTexPosition}
              setTextFont={setWatermarkTexFont}
              setTextIndent={setWatermarkTextIndent}
            />
          </div>
        </div>
      </ImageLoadingContext.Provider>
    </WatermarkContext.Provider>
  );
}

export default App;
