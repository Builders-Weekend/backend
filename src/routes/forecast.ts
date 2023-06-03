import { Router, Request, Response } from "express";
import axios from "axios";
import Logger from "../utils/winston";
import dotenv from "dotenv";
dotenv.config();

export const forecastRouter: Router = Router();

forecastRouter.get("/:city", async (req: Request, res: Response): Promise<void> => {
    try {
        const { city } = req.params;
        const response = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=${process.env.WEATHER_API_KEY}&q=${city}&days=1`);
        res.status(200).json(response.data);
    }
    catch (error) {
        Logger.error(error);
    }
});

