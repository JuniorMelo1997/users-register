import express from "express";
import { CreateUsersController } from "./controllers/CreateUsersController";
import { DeleteUserController } from "./controllers/DeleteUserController";
import { GetUserController } from "./controllers/GetUserController";
import { GetUsersListController } from "./controllers/GetUsersListController";
import { UpdateUserController } from "./controllers/UpdateUserController";
import { UserLoginController } from "./controllers/UserLoginController";
import { authenticateToken } from "./middlewares/AuthenticateToken";

const routes = express.Router();

const createUsersController = new CreateUsersController;
const getUsersListController = new GetUsersListController;
const getUserController = new GetUserController;
const updateUserController = new UpdateUserController;
const deleteUserController = new DeleteUserController;
const userLoginController = new UserLoginController;

const login = authenticateToken;

routes.post("/create", createUsersController.create);
routes.get("/users", login, getUsersListController.getusers);
routes.get("/user/:id", login, getUserController.getUser);
routes.put("/update", login, updateUserController.updateUser);
routes.delete("/user", login, deleteUserController.deleteUser);
routes.get("/login", userLoginController.userLogin);

export {routes};