import { Schema, model, connect } from 'mongoose';
import Logger from '../utils/winston';

interface IDevice {
  name: string;
  consumption: number;
  isBattery?: string;
  chargeLevel?: number;
}

/*
device {
  id: Integer
  name: String
  consumption: Integer
  isBattery: Boolean
  chargeLevel?: integer
}
*/

const deviceSchema = new Schema<IDevice>({
  name: { type: String, required: true },
  consumption: { type: Number, required: true },
  isBattery: Boolean,
  chargeLevel: Number
});

export const User = model<IDevice>('User', deviceSchema);