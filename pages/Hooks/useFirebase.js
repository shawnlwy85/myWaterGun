import React, { useEffect, useState, useRef, useContext } from "react";
import { UserContext } from "../../UserContext";

// import moment from "moment";
// import axios from "axios";

import { Button } from "@mantine/core";

import { FcGoogle as GoogleIcon } from "react-icons/fc";
import { FaFacebookSquare as FacebookIcon } from "react-icons/fa";
// -------------------------------------------------  firebase - 1/2
import { authentication } from "../../firebase-config";
import {
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

export default function Check_FB_DB_Auth() {
  // --------------------------------------- use context
  const contextValue = useContext(UserContext);

  // -------------------------------------------------  firebase - 2/2
  const [firebase_userInfo, setFirebase_userInfo] = useState({});
  const [firebase_user_SignedIn, setFirebase_user_SignedIn] = useState("na");
  const [DB_user_Authenticated, setDB_user_Authenticated] = useState(false);

  onAuthStateChanged(authentication, (currentUser) => {
    setFirebase_userInfo(currentUser);

    if (authentication?.currentUser != null) {
      setFirebase_user_SignedIn(true);
      // console.log("# user Signed in", firebase_user_SignedIn.current);
    } else {
      setFirebase_user_SignedIn(false);
      // console.log("# user Signed in", firebase_user_SignedIn.current);
    }
  });

  //----------------------------------------------------- firebase sign-in methods
  const singInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(authentication, provider)
      .then((res) => {
        // console.log("re", res);
        // console.log("re", res?.user?.displayName);
        setFirebase_userInfo(res);
        if (res?.user?.displayName != "") {
          window.location = "/#/";
        }
      })
      .catch((err) => {
        // console.log("re-err", err);
      });
  };

  const signInWithFacebook = () => {
    const provider = new FacebookAuthProvider();
    signInWithPopup(authentication, provider)
      .then((res) => {
        setFirebase_userInfo(res);
        // console.log("re", re);
      })
      .catch((err) => {
        // console.log("re-err", err);
      });
  };

  // if user Signed in Firebase Auth
  useEffect(() => {
    // if (firebase_user_SignedIn === true) {
    //   console.log("firebase_user_SignedIn", firebase_user_SignedIn);
    //   contextValue.firebase_UserInfo = firebase_userInfo;
    //   window.location = "/#/";
    // }

    // console.log("firebase_user_SignedIn", firebase_user_SignedIn);
    contextValue.firebase_UserInfo = firebase_userInfo;

    if (firebase_user_SignedIn === false) {
      window.location = "/#/Page_Login";
    }
  }, [firebase_user_SignedIn]);

  const firebase_SignOut = () => {
    signOut(authentication);
  };

  let firebase_Status = {
    login_Status: firebase_user_SignedIn,
    userInfo_DisplayName: firebase_userInfo?.displayName,
    userInfo_Email: firebase_userInfo?.email,
    userInfo_PhotoURL: firebase_userInfo?.photoURL,
    userInfo_Uuid: firebase_userInfo?.uid,
  };

  const firebase_LoginUI = () => {
    if (firebase_user_SignedIn != true) {
      return (
        <>
          <Button
            onClick={() => {
              singInWithGoogle();
            }}
          >
            <GoogleIcon
              style={{ padding: "0px 10px 0px 0px", fontSize: "30px" }}
            />
            <div>Login with Google</div>
          </Button>

          <Button
            onClick={() => {
              signInWithFacebook();
            }}
          >
            <FacebookIcon
              style={{
                color: "#4064AC",
                padding: "0px 10px 0px 0px",
                fontSize: "30px",
              }}
            />
            <div>Login with Facebook</div>
          </Button>
        </>
      );
    }
  };

  return [firebase_Status, firebase_SignOut, firebase_LoginUI()];
}
