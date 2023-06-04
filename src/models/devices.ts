import { Schema, model, connect } from 'mongoose';
import Logger from '../utils/winston';

export interface IDevice {
  name: string;
  consumptionPerHour: number;
  isBattery?: boolean;
  currentChargeVal?: number;
  maxChargeVal?: number;
}

export const deviceSchema = new Schema<IDevice>({
  name: { type: String, required: true },
  consumptionPerHour: { type: Number, required: true },
  isBattery: { type: Boolean, required: false },
  currentChargeVal:{ type: Number, required: false },
  maxChargeVal: { type: Number, required: false }
});

export const Device = model<IDevice>('Device', deviceSchema);