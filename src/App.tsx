import { useEffect, useState } from "react";
import { useImgToURIWithWatermark } from "./hooks";
import "./App.css";

function App() {
  const [initUri, setInitUri] = useState<string | ArrayBuffer>();
  const [watermarkText, setWatermarkText] = useState('')

  const uri = useImgToURIWithWatermark({
    fillText: watermarkText,
    src: `${initUri} `,
  });
  useEffect(() => {
    console.log("initUri", initUri);
  }, [initUri]);

  const onTextFieldChange:React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setWatermarkText(e.target.value)
  }

  const onFileFieldChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const file = e?.target?.files?.[0];
    const fileReader = new FileReader();
    fileReader.onload = () => {
      const srcData = fileReader.result;
      if(srcData) {
        setInitUri(srcData);
      }
      
    };
    if(file) {
      fileReader.readAsDataURL(new Blob([file]));
    }
    
  };
  return (
    <>
      <div>
        <label htmlFor="textField">Add watermark text:</label>
        <input id="textField" type="text" onChange={onTextFieldChange} />
      </div>
      <div>
          <label htmlFor="fileField">Chooze image:</label>
          <input id="fileField" type="file" onChange={onFileFieldChange} />
      </div>    
      <img src={uri} alt="" />
      {/* <img src={initUri} /> */}
    </>
  );
}

export default App;
