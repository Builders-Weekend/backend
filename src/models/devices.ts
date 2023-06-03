import { Schema, model, connect } from 'mongoose';
import Logger from '../utils/winston';

export interface IDevice {
  name: string;
  consumption: number;
  isBattery?: boolean;
  chargeLevel?: number;
}

export const deviceSchema = new Schema<IDevice>({
  name: { type: String, required: true },
  consumption: { type: Number, required: true },
  isBattery: Boolean,
  chargeLevel: Number
});

export const Device = model<IDevice>('Device', deviceSchema);