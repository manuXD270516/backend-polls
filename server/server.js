const express = require('express');
const path = require('path');
const app = express();
const config = require('../config/environments');

const routerIndex = require('../routes/index.routes');
app.use(routerIndex);

// public route
app.use(express.static(path.resolve(__dirname, '../public')))


const initServer = async () => {
  return new Promise((resolve, reject) => {
    const httpServer = app.listen(config.PORT, () => {
      console.log(`Server Polls Backend listening on port ${config.PORT}`);
      resolve();
    });
  });
};


module.exports = { initServer };
