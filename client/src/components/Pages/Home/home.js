import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../_actions/user_action";
import "./home.css";
import Register from "../../Modal/Register";
import Login from "../../Modal/Login";

// export const DownRegister = () => {
//   const [downRegister, setdownRegister] = useState(true);

//   downRegister && <Register setOpenModal={setdownRegister} />
// }

export const Home = () => {
  const [LoginOpen, setLoginOpen] = useState(false);
  const [modalOpen, setRegisterOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  dispatch(auth()).then((res) => {
    if (res.payload.isAuth) {
      navigate("/studentID");
    }
  });

  return (
    <div className="home">
      {LoginOpen && <Login setOpenModal={setLoginOpen} />}
      {modalOpen && <Register setOpenModal={setRegisterOpen} />}

      <div className="home-logo">
        <img className="homeImg" src="img/JBON.png" alt="" />
      </div>
      <div className="home-container">
        <div className="home-card-1">
          <div className="card-1-header">
            <h1>블록체인 통합 로그인</h1>
          </div>
          <div className="login-content-1 d-grid gap-2">
            <button
              className="openModalBtn btn  btn-block"
              // onClick={() => {
              //   setLoginOpen(true);
              // }}
            >
              로그인
            </button>
            <br />
            <button
              className="openModalBtn btn btn-block"
              // onClick={() => {
              //   setRegisterOpen(true);
              // }}
            >
              회원가입
            </button>
          </div>
        </div>
        <div className="home-card-2">
          <div className="card-2-header">
            <h1>일반 로그인</h1>
          </div>
          <div className="login-content-2 d-grid gap-2">
            <button
              className="openModalBtn btn  btn-block"
              onClick={() => {
                setLoginOpen(true);
              }}
            >
              로그인
            </button>
            <br />
            <button
              className="openModalBtn btn btn-block"
              onClick={() => {
                setRegisterOpen(true);
              }}
            >
              회원가입
            </button>
            {/* <div className="jbLogo">
              <img className="jbImg" src="img/JBlogo.png" alt="" />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
