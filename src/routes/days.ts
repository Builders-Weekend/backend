import { Router, Request, Response } from "express";
import axios from "axios";
import Logger from "../utils/winston";
import dotenv from "dotenv";
import { Day } from "../models/days";
dotenv.config();

//define router
export const devicesRouter: Router = Router();

//middleware

//endpoints


// devicesRouter.post("/", async (req: Request, res: Response): Promise<void> => {
//   const { device, totalGreenHours, totalNonGreenHours, cost} = req.body
//   const newDevice = new Day({
//     name: name,
//     consumption: consumption,
//     isBattery: isBattery,
//     chargeLevel: chargeLevel,
//   });

//   try {
//     await newDevice.save();
//     Logger.info('Device has successfully been posted')
//     res.status(204).send("Successfully posted to db");
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// devicesRouter.patch("/:deviceID", async (req: Request, res: Response): Promise<void> => {
//   //TO DO: datch device to DB
// });

// devicesRouter.delete("/:deviceID", async (req: Request, res: Response): Promise<void> => {
//   //TO DO: delete 
// });

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

