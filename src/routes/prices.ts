import { Router, Request, Response } from "express";
import axios from "axios";
import Logger from "../utils/winston";
import dotenv from "dotenv";
import { PricingData } from "../utils/types";
dotenv.config();

export const pricesRouter: Router = Router();

pricesRouter.get("/", async (req: Request, res: Response): Promise<void> => {
    try {
        const response = await axios.get("https://kraken-japan-hackathon-api.onrender.com/products/AGILE-23-06-01/product_rates/consumption_charges");
        const pricingData = extractPricingData(response.data);
        res.status(200).send(pricingData);
    } catch (error) {
        Logger.error(error);
    }
});

const extractPricingData = (data: PricingData[]): PricingData[] => {
    const pricingDataForToday = filterByDate(data, new Date("2023-06-02"));
    return pricingDataForToday;
};

const filterByDate = (data: PricingData[], date: Date): PricingData[] => {
    return data.filter((item: PricingData) => {
        const itemDate = new Date(item.valid_from);
        return isSameDate(itemDate, date);
    });
};

const isSameDate = (date1: Date, date2: Date): boolean => {
    return date1.getFullYear() === date2.getFullYear() &&
        date1.getMonth() === date2.getMonth() &&
        date1.getDate() === date2.getDate();
}