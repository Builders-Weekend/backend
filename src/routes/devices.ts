import { Router, Request, Response } from "express";
import axios from "axios";
import Logger from "../utils/winston";
import dotenv from "dotenv";
dotenv.config();

//define router
export const devicesRouter: Router = Router();

//middleware

//endpoints
devicesRouter.get("/", async (req: Request, res: Response): Promise<void> => {
  //TO DO: get devices from DB and send to FE as an array
});

devicesRouter.post("/", async (req: Request, res: Response): Promise<void> => {
  //TO DO: post new device to DB
});

devicesRouter.delete("/:deviceID", async (req: Request, res: Response): Promise<void> => {
  //TO DO: delete 
});

/*
device {
  id: Integer
  name: String
  consumption: Integer
  isBattery: Boolean
  chargeLevel?: integer
}

queuedDevice {
  device: Device
  start: timestamp
  end: timestamp
}
*/