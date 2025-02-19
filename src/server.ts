import http from "http";
import express from "express";
import "./config/logging";
import "reflect-metadata";

import { loggingHandler } from "./middleware/loggingHandler";
import { corsHandler } from "./middleware/corsHandler";
import { routeNotFound } from "./middleware/routeNotFound";
import { SERVER, SERVER_HOSTNAME, SERVER_PORT } from "./config/config";
import MainController from "./controllers/main";
import { defineRoutes } from "./modules/routes";

export const application = express();
export let httpServer: ReturnType<typeof http.createServer>;

export const Main = () => {
  logging.log("----------------------------------------");
  logging.log("Initializing API");
  logging.log("----------------------------------------");
  application.use(express.urlencoded({ extended: true }));
  application.use(express.json());

  logging.log("----------------------------------------");
  logging.log("Logging & Configuration");
  logging.log("----------------------------------------");
  application.use(loggingHandler);
  application.use(corsHandler);

  logging.log("----------------------------------------");
  logging.log("Define Controller Routing");
  logging.log("----------------------------------------");
  defineRoutes([MainController], application);

  logging.log("----------------------------------------");
  logging.log("Define Routing Error");
  logging.log("----------------------------------------");
  application.use(routeNotFound);

  logging.log("----------------------------------------");
  logging.log("Starting Server");
  logging.log("----------------------------------------");
  httpServer = http.createServer(application);
  httpServer.listen(SERVER.SERVER_PORT, () => {
    logging.log("----------------------------------------");
    logging.log(`Server started on ${SERVER_HOSTNAME}:${SERVER_PORT}`);
    logging.log("----------------------------------------");
  });
};

export const Shutdown = (callback: any) =>
  httpServer && httpServer.close(callback);

Main();
