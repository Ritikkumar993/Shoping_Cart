import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";


import {Provider} from 'react-redux';
import { store1 } from "./context/store1.jsx";



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode >
    <Provider store={store1}>
      <App />
    </Provider>
  </React.StrictMode>
);
