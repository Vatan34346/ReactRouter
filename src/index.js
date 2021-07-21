import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";//for React Router 
import "./index.css";
import App from "./App";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
