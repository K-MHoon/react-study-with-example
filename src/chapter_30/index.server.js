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

const manifest = JSON.parse(
  fs.readFileSync(path.resolve("./build/asset-manifest.json"), "utf8")
);

const chunks = Object.keys(manifest.files)
  .filter((key) => /chunk\.js$/.exec(key))
  .map((key) => `<script src="${manifest.files[key]}"></script>`)
  .join("");

function createPage(root) {
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
   ${chunks}
   <script defer="defer" src="${manifest.files["main.js"]}"></script>
   </body>
   </html>
  `;
}

const app = express();

// 서버 사이드 렌더링을 처리할 핸들러 함수
const serverRender = (req, res, next) => {
  // 이 함수는 404가 떠야 하는 상황에 서버 사이드 렌더링을 해준다.
  const context = {};
  const store = createStore(rootReducer, applyMiddleware(thunk));

  const jsx = (
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    </Provider>
  );
  const root = ReactDOMServer.renderToString(jsx);
  res.send(createPage(root));
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
