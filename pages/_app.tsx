import React from "react";
import { AppProps } from "next/app";
import "semantic-ui-css/semantic.min.css";
import "./style.css"

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component  {...pageProps} />;
};

export default MyApp;
