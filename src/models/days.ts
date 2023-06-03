import { Schema, model, connect } from 'mongoose';
import { IDevice, deviceSchema } from './devices';
import Logger from '../utils/winston';

interface IDay {
  queuedJobs: [ IDevice ];
  totalGreenHours: number;
  totalNonGreenHours: number;
  totalCost: number;
}

const daySchema = new Schema<IDay>({
  queuedJobs: { type: [deviceSchema], required: true },
  totalGreenHours: { type: Number, required: true },
  totalNonGreenHours: { type: Number, required: true },
  totalCost: { type: Number, required: true },
});

export const Day = model<IDay>('Day', daySchema);