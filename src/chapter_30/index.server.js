import ReactDOMServer from "react-dom/server";

const html = ReactDOMServer.renderToString(<div>Hello Server Rendering!</div>);

console.log(html);
