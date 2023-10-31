import React, { useState } from "react";
import "./Form.css";

function Form() {
  const [file, setFile] = useState();
  function handleChange(event) {
    setFile(event.target.files[0]);
  }
  let handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("file", file);

    try {
      let res = await fetch("https://scouts-qrcode.onrender.com/api", {
        method: "POST",
        body: formData,
      });
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="images" className="drop-container" id="dropcontainer">
          <input type="file" onChange={handleChange} accept="image/*" capture />
          <input type="submit" className="form-submit-button" value="Submit" />
        </label>
      </form>
      {/* {uploadedFile && <img src={uploadedFile} alt="Uploaded content" />} */}
    </div>
  );
}

export default Form;
