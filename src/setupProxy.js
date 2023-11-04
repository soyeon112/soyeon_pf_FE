const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    "/api",
    createProxyMiddleware({
      target:
        "https://port-0-soyeon-pf-be-12fhqa2llodtr1bj.sel5.cloudtype.app/",
      changeOrigin: true,
    })
  );
};
