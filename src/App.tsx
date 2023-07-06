import { useState } from "react";
import { useImgToURIWithWatermark } from "./hooks";
import {WatermarkFormSettings, WatermarkView} from './components'
import "./App.css";

function App() {
  const [initUri, setInitUri] = useState<string | ArrayBuffer>();
  const [watermarkText, setWatermarkText] = useState("");

  const uri = useImgToURIWithWatermark({
    fillText: watermarkText,
    src: `${initUri} `,
  });

 
  return (
    <>
      <div className="row">
        <div className="col">
          <WatermarkFormSettings setInitUri={setInitUri} setWatermarkText={setWatermarkText}/>
        </div>
        <div className="col">
          <WatermarkView uri={uri} />
        </div>
      </div>
    </>
  );
}

export default App;
