import { Response, Request } from "express";

export default class Users {
  static auth(req: Request, res: Response): any {
    console.log("auth");
    return res.status(200).json("auth");
  }
}
