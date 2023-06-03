import { Router, Request, Response } from "express";
import axios from "axios";
import Logger from "../utils/winston";
import dotenv from "dotenv";
import { weatherApiResponse, Forecast, ForecastDay, Hour } from "../utils/weather_response_types";
dotenv.config();

export const forecastRouter: Router = Router();

forecastRouter.get("/:city", async (req: Request, res: Response): Promise<void> => {
    try {
        const { city } = req.params;
        const response = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=${process.env.WEATHER_API_KEY}&q=${city}&days=1`);
        const weatherApiResponse: weatherApiResponse = extractForecastData(response.data);
        res.status(200).send(weatherApiResponse);
    }
    catch (error) {
        Logger.error(error);
    }
});

const extractForecastData = (data: any): weatherApiResponse => {
    const hourlyForecast: Hour[] = data.forecast.forecastday[0].hour.map((hour: any) => {
        return {
            time: hour.time,
            windKph: hour.wind_kph,
            uvIndex: hour.uv
        }
    })
    const forecastDay: ForecastDay = {
        date: data.forecast.forecastday[0].date,
        hour: hourlyForecast
    }
    const forecast: Forecast = {
        forecastday: [forecastDay]
    }
    const weatherApiResponse: weatherApiResponse = {
        forecast: forecast
    }
    return weatherApiResponse;
};