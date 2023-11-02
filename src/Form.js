import React, { useState } from "react";
import "./Form.css";
import Html5QrcodePlugin from "./Html5QrcodePlugin.jsx";
import ResultContainerPlugin from "./ResultContainerPlugin.jsx";
import axios from "axios";

function Form(props) {
  const [decodedResults, setDecodedResults] = useState([]);

  const onNewScanResult = async (decodedText, decodedResult) => {
    await setDecodedResults((prev) => [...prev, decodedResult]);
    await onScannedData(decodedText);
  };

  const onScannedData = async (data) => {
    const response = await axios.post(
      "https://scouts-qrcode.onrender.com/api",
      data,
      {
        headers: {
          "Content-Type": "text/plain",
        },
        responseType: "text",
      }
    );
    console.log(response.data);
  };

  return (
    <div>
      <Html5QrcodePlugin
        fps={10}
        qrbox={200}
        disableFlip={false}
        qrCodeSuccessCallback={onNewScanResult}
      />
      <ResultContainerPlugin results={decodedResults} />
    </div>
  );
}

export default Form;
