import { Router } from "express";
// import middlewares from '../middlewares';
import { User } from "../controllers";

export default (app: Router): void => {
  app.get("/auth", User.auth);
};
