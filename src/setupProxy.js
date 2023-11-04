const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    process.env.REACT_APP_API,
    createProxyMiddleware({
      target: process.env.REACT_APP_PROXY,
      changeOrigin: true,
    })
  );
  // app.use(
  //   process.env.REACT_APP_API,
  //   createProxyMiddleware({
  //     target: process.env.REACT_APP_PROXY_LOCAL,
  //     changeOrigin: true,
  //   })
  // );
};
