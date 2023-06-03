import { Router, Request, Response } from "express";
import axios from "axios";
import Logger from "../utils/winston";
import dotenv from "dotenv";
dotenv.config();

export const forecastRouter: Router = Router();

forecastRouter.get("/", async (req: Request, res: Response): Promise<void> => {
    //TO DO: get forecast from DB and send to FE as an array
    });