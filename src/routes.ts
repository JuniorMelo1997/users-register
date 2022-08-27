import express from "express";
import { CreateUsersController } from "./controllers/CreateUsersController";
import { GetUsersListController } from "./controllers/GetUsersListController";

const routes = express.Router();

const createUsersController = new CreateUsersController;
const getUsersListController = new GetUsersListController;

routes.post("/create", createUsersController.create);
routes.get("/users", getUsersListController.getusers);

export {routes};