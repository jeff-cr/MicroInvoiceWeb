import { useEffect, useState } from "react";
import XMLViewer from "react-xml-viewer";


// export const DataXml = ({ blob }: { blob: Blob }) => {
//   const [xmlText, setXmlText] = useState<string>("");

//   useEffect(() => {
//     if (!blob) return;

//     const readBlob = async () => {
//       const text = await blob.text();
//       setXmlText(text);
//     };

//     readBlob();
//   }, [blob]);

//   if (!xmlText) return null;

//   return <XMLViewer xml={xmlText} />;
// };

export const DataXml = ({ xmlText }: { xmlText: string }) => {
  if (!xmlText) return null;

  return <XMLViewer xml={xmlText} />;
};

// export const DataXml = ({ blob }: { blob: Blob }) => {
//   const [xmlHtml, setXmlHtml] = useState<string>("");

//   useEffect(() => {
//     if (!blob) return;

//     const parseXml = async () => {
//       const text = await blob.text();
//       const parser = new DOMParser();
//       const xmlDoc = parser.parseFromString(text, "application/xml");

//       // Convertimos XML a string “bonito” con identación
//       const serializer = new XMLSerializer();
//       const pretty = serializer.serializeToString(xmlDoc);

//       // Escapar caracteres para que se vea en HTML
//       const escaped = pretty
//         .replace(/</g, "&lt;")
//         .replace(/>/g, "&gt;")
//         .replace(/\n/g, "<br/>")
//         .replace(/\t/g, "&nbsp;&nbsp;&nbsp;&nbsp;");

//       setXmlHtml(escaped);
//     };

//     parseXml();
//   }, [blob]);

//   return (
//     <div
//       style={{
//         fontFamily: "monospace",
//         whiteSpace: "pre-wrap",
//         backgroundColor: "#f5f5f5",
//         padding: 12,
//         borderRadius: 8,
//         overflowX: "auto",
//       }}
//       dangerouslySetInnerHTML={{ __html: xmlHtml }}
//     />
//   );
// };
