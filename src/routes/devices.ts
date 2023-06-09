import { Router, Request, Response } from "express";
import axios from "axios";
import Logger from "../utils/winston";
import dotenv from "dotenv";
import { Device } from "../models/devices";
dotenv.config();

//define router
export const devicesRouter: Router = Router();

//middleware

//endpoints
devicesRouter.get("/", async (req: Request, res: Response): Promise<void> => {
  try {
    const devices = await Device.find();
    res.status(200).send(devices);
  } catch (err) {
    Logger.error(err);
  }
});

devicesRouter.post("/", async (req: Request, res: Response): Promise<void> => {
  const { name, consumptionPerHour, isBattery, currentChargeVal, maxChargeVal} = req.body
  const newDevice = new Device({
    name: name,
    consumptionPerHour: consumptionPerHour,
    isBattery: isBattery,
    currentChargeVal: currentChargeVal,
    maxChargeVal: maxChargeVal
  });

  try {
    await newDevice.save();
    Logger.info('Device has successfully been posted')
    res.status(204).send("Successfully posted to db");
  } catch (err) {
    res.status(500).json(err);
  }
});

devicesRouter.patch("/:deviceID", async (req: Request, res: Response): Promise<void> => {
  //TO DO: datch device to DB
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

when a user loads the page, they will fetch their devices so that they can be rendered on the page
when a user wants to add a a new device, they will do so via a model built on the FE
when a user wants to update a component, they will be able to update SOME of the data via a model.
  other parts of data will be updated via a different workflow such as 

*/

