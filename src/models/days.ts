import { Schema, model, connect } from 'mongoose';
import { IDevice, deviceSchema } from './devices';
import Logger from '../utils/winston';

interface IJob {
  device: IDevice;
  start: Date;
  end: Date;
  cost: number;
}

const jobSchema = new Schema<IJob>({
  device: { type: deviceSchema, required: true},
  start: { type: Date, required: true},
  end: { type: Date, required: true},
  cost: { type: Number, required: true }
})

interface IDay {
  queuedJobs: [ IJob ];
  totalGreenHours: number;
  totalNonGreenHours: number;
  totalCost: number;
}

const daySchema = new Schema<IDay>({
  queuedJobs: { type: [jobSchema], required: true },
  totalGreenHours: { type: Number, required: true },
  totalNonGreenHours: { type: Number, required: true },
  totalCost: { type: Number, required: true },
});

export const Day = model<IDay>('Day', daySchema);