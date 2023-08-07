import React, { useCallback, useRef } from 'react';
import { toPng } from 'html-to-image';

type DomToImgType = {
  refToElement?: React.MutableRefObject<any>;
};

// export const DomToImg: React.FC<DomToImgType> = ({ refToElement }) => {
// //   const [src, setSrc] = useState<string>();
// //   const canvas = document.createElement("canvas");
// //   const ctx = canvas.getContext("2d");
// //   canvas.width = canvas.height = 100;
// //   const tempImg =  useMemo(() => new Image(), []);

// //   useEffect(() => {
// //     tempImg.onload = (e) => {
// //       if (ctx) {
// //         ctx.drawImage(tempImg,
// //             0,
// //             0,
// //             100,
// //             100,
// //             0,
// //             0,
// //             100,
// //             100);
// //       }
// //       setSrc(canvas.toDataURL());
// //     };
   
// //     tempImg.crossOrigin = "anonymous"
   
// //   }, [refToElement, canvas, ctx, tempImg]);

// //   useEffect(() => {
// //     const t = `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><foreignObject width="100%" height="100%"><div xmlns="http://www.w3.org/1999/xhtml">${refToElement?.current.innerHTML}</div></foreignObject></svg>`
// //     tempImg.src = `data:image/svg+xml;utf8,${encodeURI(t)}`
// // }, [refToElement, tempImg])

// //   return <img src={src} />;

// const htmlToImageConvert = () => {
//     toPng(refToElement?.current, { cacheBust: false })
//       .then((dataUrl) => {
//         const link = document.createElement("a");
//         link.download = "my-image-name.png";
//         link.href = dataUrl;
//         link.click();
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   return <button onClick={htmlToImageConvert}>download picture</button>
// };



export const DomToImg:React.FC<DomToImgType> = ({ refToElement }) => {

  const onButtonClick = useCallback(() => {
    if (refToElement?.current === null) {
      return
    }

    toPng(refToElement?.current, { cacheBust: true, height: 200 })
      .then((dataUrl) => {
        const link = document.createElement('a')
        link.download = 'my-image-name.png'
        link.href = dataUrl
        link.click()
      })
      .catch((err) => {
        console.log(err)
      })
  }, [refToElement])

  return (
    <>
      <button onClick={onButtonClick}>Click me</button>
    </>
  )
}
