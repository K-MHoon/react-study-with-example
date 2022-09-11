import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './chapter_30/App';
import './index.css';
import { composeWithDevTools } from 'redux-devtools-extension';
import reportWebVitals from './reportWebVitals';
import { applyMiddleware, legacy_createStore as createStore } from 'redux';
// import rootReducer, { rootSaga } from "./chapter_28/modules";
import rootReducer, { rootSaga } from './chapter_30/modules';
import { Provider } from 'react-redux';
import loggerMiddleware from './chapter_28/lib/loggerMiddleware';
import logger from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { loadableReady } from '@loadable/component';
import { ReactDOM } from 'react';

// const store = createStore(rootReducer, composeWithDevTools());
const sagaMiddleware = createSagaMiddleware();

// const store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(logger, ReduxThunk, sagaMiddleware))
// );

const store = createStore(
  rootReducer,
  window.__PRELOADED_STATE__,
  applyMiddleware(ReduxThunk, sagaMiddleware),
);

sagaMiddleware.run(rootSaga);

const Root = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
};

const container = document.getElementById('root');

if (process.env.NODE_ENV === 'production') {
  loadableReady(() => {
    hydrateRoot(container, <Root />);
  });
} else {
  createRoot(container).render(<Root />);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
