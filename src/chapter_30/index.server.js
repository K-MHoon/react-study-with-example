import ReactDOMServer from "react-dom/server";
import express from "express";
import { StaticRouter } from "react-router-dom/server";
import App from "./App";
import path from "path";
import fs from "fs";
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "./modules";
import PreloadContext from "../lib/PreloadContext";

const manifest = JSON.parse(
  fs.readFileSync(path.resolve("./build/asset-manifest.json"), "utf8")
);

const chunks = Object.keys(manifest.files)
  .filter((key) => /chunk\.js$/.exec(key))
  .map((key) => `<script src="${manifest.files[key]}"></script>`)
  .join("");

function createPage(root, stateScript) {
  return `<!doctype html>
  <html lang="en">
  <head>
  <meta charset="utf-8"/>
  <link rel="shortcut icon" href="/favicon.ico"/>
  <meta
   name="viewport" 
   content="width=device-width,initial-scale=1,shrink-to-fit=no"
  />
   <meta name="theme-color" content="#000000"/>
   <meta name="description" content="Web site created using create-react-app"/>
   <title>React App</title>
   <link href="${manifest.files["main.css"]}" rel="stylesheet">
   </head>
   <body>
   <noscript>You need to enable JavaScript to run this app.</noscript>
   <div id="root">
    ${root}
   </div>
   ${stateScript}
   ${chunks}
   <script defer="defer" src="${manifest.files["main.js"]}"></script>
   </body>
   </html>
  `;
}

const app = express();

// 서버 사이드 렌더링을 처리할 핸들러 함수
const serverRender = async (req, res, next) => {
  // 이 함수는 404가 떠야 하는 상황에 서버 사이드 렌더링을 해준다.
  const context = {};
  const store = createStore(rootReducer, applyMiddleware(thunk));

  const preloadContext = {
    done: false,
    promises: [],
  };

  const jsx = (
    <PreloadContext.Provider value={preloadContext}>
      <Provider store={store}>
        <StaticRouter location={req.url} context={context}>
          <App />
        </StaticRouter>
      </Provider>
    </PreloadContext.Provider>
  );

  ReactDOMServer.renderToStaticMarkup(jsx); // renderToStaticMarkup으로 렌더링
  try {
    await Promise.all(preloadContext.promises); // 모든 프로미스를 대기한다.
  } catch (e) {
    return res.status(500);
  }
  preloadContext.done = true;

  const root = ReactDOMServer.renderToString(jsx);

  const stateString = JSON.stringify(store.getState()).replace(/</g, "\\u003c"); // 악성 스크립트 실행 방지 (<) 치환
  const stateScript = `<script>__PRELOADED_STATE__= ${stateString}</script>`; // 리덕스 초기 상태 스크립트 주입

  res.send(createPage(root, stateScript));
};

// static 미들웨어를 활용하여, 서버를 통해 build에 있는 js, css 정적파일에 접근
const serve = express.static(path.resolve("./build"), {
  index: false,
});

app.use(serve);
app.use(serverRender);

app.listen(5000, () => {
  console.log("Running on http://localhost:5000");
});
