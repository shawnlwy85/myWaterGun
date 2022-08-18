import React, { useEffect, useState, useRef, useContext } from "react";
// import moment from "moment";
// import axios from "axios";

// import { UserContext } from "../../UserContext";
import useFirebase from "../Hooks/useFirebase";
import { Button } from "@mantine/core";

// import { Button } from "@material-ui/core";

import Image from "next/image";

// const {
//   REACT_APP_ECLIPSE_API_PUBLIC,
//   REACT_APP_ECLIPSE_API,
//   REACT_APP_ECLIPSE_API_Local,
// } = process.env;

export default function Page_Login({}) {
  // --------------------------------------- use context
  // const contextValue = useContext(UserContext);

  const [firebase_Status, firebase_SignOut, firebase_LoginUI] = useFirebase();

  return (
    <>
      <div className="container_centerpage">
        <>
          <h1>Login Page</h1>
          {/* <div style={{ height: "30rem" }}>
            <Image
              src={`https://eclipseapi3.freemyip.com/uploads/EclipseMy_Web/Company_Logo.png`}
              alt="Eclipse_Logo"
              layout="responsive"
              // objectFit="contain"
            />
          </div> */}
          <div
            style={{
              position: "relative",
              // width: "auto",
              height: "6rem",
              // backgroundColor: "red",
            }}
          >
            <Image
              alt="User Profile Pic"
              src={firebase_Status?.userInfo_PhotoURL}
              layout="fill"
              // objectFit="none"
              objectFit="contain"
              quality={100}
            />
          </div>

          <br />
          {/* {console.log("status", status)} */}
          <h4>{`login_Status : ${firebase_Status?.login_Status?.toString()}`}</h4>
          <h4>{`userInfo_DisplayName : ${firebase_Status?.userInfo_DisplayName?.toString()}`}</h4>
          <h4>{`userInfo_Email : ${firebase_Status?.userInfo_Email?.toString()}`}</h4>
          <h4>{`userInfo_PhotoURL : ${firebase_Status?.userInfo_PhotoURL?.toString()}`}</h4>
          <h4>{`userInfo_Uuid : ${firebase_Status?.userInfo_Uuid?.toString()}`}</h4>

          <br />
          <br />
          {firebase_LoginUI}
          <br />
        </>
      </div>
    </>
  );
}
