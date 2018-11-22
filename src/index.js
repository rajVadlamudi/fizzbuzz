import React from "react";
import { render } from "react-dom";
import Store from "./stores/Store";
import App from "./App"

const store = new Store();
store.initialiseStore();


render(
  <App store={store} />,
  document.getElementById("root")
);


// playing around in the console
window.store = store;
