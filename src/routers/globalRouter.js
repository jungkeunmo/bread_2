import express from "express";
import globalController from "../controllers/globalController";

const globalRouter = express.Router();

globalRouter.get("/", globalController.homeController);
globalRouter.get("/bread", globalController.breadController);

export default globalRouter;