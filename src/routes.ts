import express from "express";
import { CreateUsersController } from "./controllers/CreateUsersController";
import { GetUserController } from "./controllers/GetUserController";
import { GetUsersListController } from "./controllers/GetUsersListController";

const routes = express.Router();

const createUsersController = new CreateUsersController;
const getUsersListController = new GetUsersListController;
const getUserController = new GetUserController;

routes.post("/create", createUsersController.create);
routes.get("/users", getUsersListController.getusers);
routes.get("/user/:id", getUserController.getUser);

export {routes};