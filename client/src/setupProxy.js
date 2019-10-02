const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(proxy("/auth/**", { target: "http://localhost:3001/" }));
  app.use(proxy("/login", { target: "http://localhost:3001/" }));
  app.use(proxy("/api/schedule", { target: "http://localhost:3001/" }));
  app.use(proxy("/api/task", { target: "http://localhost:3001/" }));
  app.use(proxy("/loginUser", { target: "http://localhost:3001/" }));
  app.use(proxy("/registerUser", { target: "http://localhost:3001/" }));
};
