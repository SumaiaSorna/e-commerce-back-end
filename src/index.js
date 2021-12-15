require("dotenv").config();

const express = require("express");

const connection = require("./config/connection");

const routes = require("./routes");

const { logError, logInfo } = require("./utils/logger");

const PORT = process.env.PORT || 4000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

const init = async () => {
  try {
    await connection.sync({ force: false });

    logInfo("DB connection", "Success");

    app.listen(PORT, () =>
      logInfo("Server connection", `🚀🚀 http://localhost:${PORT}`)
    );
  } catch (error) {
    logError("DB connection", error.message);
  }
};

init();
