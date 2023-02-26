import React from "react";
import { useRouteError } from "react-router-dom";
import Header from "./Header";

const Error = () => {
  const err = useRouteError();

  return (
    <div className="errorContainer">
      <Header />
      <h1>Something Went Wrong!!!</h1>
      <h2>
        {err.status} : {err.statusText}
      </h2>
      <h2>{err.error.message}</h2>
    </div>
  );
};

export default Error;
