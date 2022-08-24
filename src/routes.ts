import express from "express";
import { CreateUsersController } from "./controllers/CreateUsersController";

const routes = express.Router();

const createUsersController = new CreateUsersController;

routes.post("/create", createUsersController.create);

export {routes};