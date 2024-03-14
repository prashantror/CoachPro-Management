import React from "react";
import "./Headers.css";
import LandingPageHeader from "./LandingHeader";
import PrivateHeader from "./privateHeader";
const Headers = (props) => {
  let { type } = props;
  return type ? (
    <PrivateHeader />
  ) : <LandingPageHeader />;
};

export default Headers;
