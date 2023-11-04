const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    "/",
    createProxyMiddleware({
      target: process.env.REACT_APP_PROXY_LOCAL,
      changeOrigin: true,
    })
  );
  app.use(
    "/api",
    createProxyMiddleware({
      target: process.env.REACT_APP_PROXY,
      changeOrigin: true,
    })
  );
};
