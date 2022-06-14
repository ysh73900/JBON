import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { QrReader } from "react-qr-reader";
import "./QrScanner.css";

const QrScanner = ({ setOpenModal }) => {
  const [qrscan, setQrscan] = useState("No result");

  const handleScan = (data) => {
    if (data) {
      setQrscan(data);
    }
  };
  const handleError = (err) => {
    console.error(err);
  };

  const value = { qrscan };
  console.log(value);

  const defaultValue = { qrscan };
  console.log(defaultValue);

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>

        <div className="register-content">
          <center>
            <div style={{ marginTop: 0 }}>
              <QrReader
                delay={300}
                onError={handleError}
                onScan={handleScan}
                onResult={handleScan}
                // style={{
                //   height: "100%",
                //   width: "100000px",
                //   backgroundColor: "#ffffff",
                //   borderRadius: "15px",
                //   boxShadow: "14px 14px 14px rgba(34, 35, 58, 0.5)",
                //   animation: "change1 2s forwards",
                //   opacity: 0,
                //   position: "fixed",
                //   display: "flex",
                //   flexDirection: "column",
                //   justifyContent: "center",
                //   alignItems: "center",
                // }}
              />
            </div>
          </center>
        </div>
      </div>
    </div>
  );
};

export default QrScanner;
