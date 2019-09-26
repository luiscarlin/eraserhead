import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

function Root() {
  return (
      <App />
  );
}

ReactDOM.render(<Root />, document.getElementById("app"));