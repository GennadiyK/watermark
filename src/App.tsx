import { useEffect, useState } from "react";
import { useImgToURIWithWatermark } from "./hooks";
import "./App.css";

function App() {
  const [initUri, setInitUri] = useState();
  const uri = useImgToURIWithWatermark({
    fillText: "Hena",
    src: `${initUri} `,
  });
  useEffect(() => {
    console.log("initUri", initUri);
  }, [initUri]);

  const onChange = (e) => {
    const file = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.onload = () => {
      const srcData = fileReader.result;
      setInitUri(srcData);
    };
    fileReader.readAsDataURL(file);
  };
  return (
    <>
      <input type="file" onChange={onChange} />
      <img src={uri} alt="" />
    </>
  );
}

export default App;
