import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import useFirebase from "../Hooks/useFirebase";

import { Button } from "@mantine/core";

import Image from "next/image";

import Test from "../Hooks/Test";
import Page_Login from "./Page_Login";
import Page_ManageUser from "./Page_ManageUser";

export default function X() {
  const router = useRouter();
  const hC_PlaceOrder = () => {
    // router.replace("/product/555");
    router.push("/Page_ManageUser");
  };

  // --------------------------------------- auth User
  const [firebase_Status, firebase_SignOut, firebase_LoginUI] = useFirebase();

  return (
    <>
      {firebase_Status.login_Status === true ? (
        <>
          <h1>Home</h1>
          <Button onClick={hC_PlaceOrder}>Manage Users</Button>

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
          <h4>{`login_Status : ${firebase_Status?.login_Status?.toString()}`}</h4>
          <h4>{`userInfo_DisplayName : ${firebase_Status?.userInfo_DisplayName?.toString()}`}</h4>
          <h4>{`userInfo_Email : ${firebase_Status?.userInfo_Email?.toString()}`}</h4>
          <h4>{`userInfo_PhotoURL : ${firebase_Status?.userInfo_PhotoURL?.toString()}`}</h4>
          <h4>{`userInfo_Uuid : ${firebase_Status?.userInfo_Uuid?.toString()}`}</h4>

          <br />
          <br />
          <Button onClick={() => firebase_SignOut()}>LogOut</Button>
          <br />
          <br />
          {/* <Page_Login /> */}
          <br />
        </>
      ) : (
        <Page_Login />
      )}
    </>
  );
}
