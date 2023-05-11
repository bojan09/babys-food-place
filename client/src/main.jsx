import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App.jsx";

// Redux
import { Provider } from "react-redux";
import { reducers } from "./reducers";

import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
const store = createStore(reducers, compose(applyMiddleware(thunk)));

// const store = configureStore({ reducer: { reducers } });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
