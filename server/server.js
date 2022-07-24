const express = require("express");
const path = require("path");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server, {
  cors: {
    origin: ["http://localhost:4200"]
  }
  /* allowRequest: (req, callback) => {
    const noOriginHeader = req.headers.origin === undefined;
    callback(null, noOriginHeader);
  } */
});
const cors = require("cors");

const config = require("../config/environments");

const routerIndex = require("../routes/index.routes")(io);
app.use(routerIndex);
// public route
app.use(express.static(path.resolve(__dirname, "../public")));
app.use(cors());

const initServer = async () => {
  return new Promise((resolve, reject) => {
    const httpServer = server.listen(config.PORT, () => {
      console.log(`Server Polls Backend listening on port ${config.PORT}`);
      resolve();
    });
  });
};

io.on("connection", (socket) => {
  console.log("client connected...!");
  socket.emit("topicTest", { value: "test message send from socket server" });
});

module.exports = { initServer };
