import React from "react";
import "./Headers.css";
import { useNavigate } from "react-router-dom";
import LandingPageHeader from "./LandingHeader";
const Headers = (props) => {
  let { type } = props;
  const navigate = useNavigate();
  return type === "coach" ? (
    <>coach header</>
  ) : type === "employee" ? (
    <>Employee</>
  ) : <LandingPageHeader />;
};

export default Headers;
