import { Schema, model, connect } from 'mongoose';
import Logger from '../utils/winston';

interface IDevice {
  name: string;
  consumption: number;
  isBattery?: string;
  chargeLevel?: number;
}

const deviceSchema = new Schema<IDevice>({
  name: { type: String, required: true },
  consumption: { type: Number, required: true },
  isBattery: Boolean,
  chargeLevel: Number
});

export const Device = model<IDevice>('Device', deviceSchema);