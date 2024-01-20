import "reflect-metadata";
import express from "express";
import {
  InversifyExpressServer,
  controller,
  httpGet,
} from "inversify-express-utils";
import container from "./inversify.config";
import bodyParser from "body-parser";

const server = new InversifyExpressServer(container);

// Add a simple controller for demonstration
@controller("/")
class HomeController {
  @httpGet("/")
  private home(_: express.Request, res: express.Response) {
    res.send("Hello, welcome to your Inversify-Express application!");
  }
}

server.setConfig((app) => {
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
});

const app = server.build();

const port = 4000;

app.listen(port, () => {
  console.log("Server running on ", port);
});
