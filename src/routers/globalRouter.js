import express from "express";
import { join, login } from "../controllers/userController";
import { home, search } from "../controllers/videoController";

const globalRouter = express.Router();

globalRouter.get("/", home); // video
globalRouter.get("/join", join); // user
globalRouter.get("/login", login); // user
globalRouter.get("/search", search); // video

export default globalRouter;
