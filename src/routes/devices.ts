import { Router, Request, Response } from "express";
import axios from "axios";
import Logger from "../utils/winston";
import dotenv from "dotenv";
dotenv.config();

//define router
export const devicesRouter: Router = Router();

//middleware

//endpoints
devicesRouter.get("/", async (req: Request, res: Response): Promise<void> => {}
);
