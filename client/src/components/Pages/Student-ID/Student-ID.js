import React, { useEffect, useState } from "react";
import axios from "axios";
import "./StudentID.css";
import { auth } from "../../../_actions/user_action";
import { useDispatch } from "react-redux";
import Navbar from "../../Nav/Navbar";
import QrPassword from "../../Modal/QrPassword";

const StudentID = () => {
  const [QrPwOpen, setQrPwOpen] = useState(false);

  // const user = useSelector((state) => state.user.userData);
  const major = localStorage.getItem("major");
  const stdNum = localStorage.getItem("stdNum");
  const name = localStorage.getItem("name");

  return (
    <div className="pages">
      <Navbar />
      {QrPwOpen && <QrPassword setOpenModal={setQrPwOpen} />}
      <div className="home">
        <div className="home-logo">
          <img className="homeImg" src="img/JBID.png" alt="" />
        </div>
        <div className="stdId-content">
          <div className="stdId-container">
            <div className="stdId">
              <div className="stdId-card-2">
                <div className="stdId-card-card">
                  <div className="stdId-header">
                    <h3>중부대학교</h3>
                  </div>
                  <div className="stdId-content">
                    <div className="stdId-img">
                      <img
                        className="profileImg"
                        src="img/profile.png"
                        alt=""
                      />
                    </div>
                    <div className="stdId-contentText">
                      <p>성명 : {name}</p>
                      <p>학번 : {stdNum}</p>
                      <p>학과 : {major}</p>
                    </div>
                  </div>
                  <div className="stdId-btn">
                    <div className="d-grid gap-2">
                      <button
                        className="registerbtn btn btn-block"
                        onClick={() => {
                          setQrPwOpen(true);
                        }}
                      >
                        학생증 발급
                      </button>
                    </div>
                  </div>
                </div>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentID;
