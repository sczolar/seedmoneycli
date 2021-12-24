import React, { Suspense } from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

const App = React.lazy(() => import("./App"));

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={"loading ..."}>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);
