import React from "react";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import App from "./chapter_30/App";
import "./index.css";
import { composeWithDevTools } from "redux-devtools-extension";
import reportWebVitals from "./reportWebVitals";
import { applyMiddleware, legacy_createStore as createStore } from "redux";
// import rootReducer, { rootSaga } from "./chapter_28/modules";
import rootReducer, { rootSaga } from "./chapter_30/modules";
import { Provider } from "react-redux";
import loggerMiddleware from "./chapter_28/lib/loggerMiddleware";
import logger from "redux-logger";
import ReduxThunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";

// const store = createStore(rootReducer, composeWithDevTools());
const sagaMiddleware = createSagaMiddleware();

// const store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(logger, ReduxThunk, sagaMiddleware))
// );

const store = createStore(
  rootReducer,
  window.__PRELOADED_STATE__,
  applyMiddleware(ReduxThunk, sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  // <Provider store={store}>
  //   <App />
  // </Provider>
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
