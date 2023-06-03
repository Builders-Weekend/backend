import Logger from "../utils/winston";

const dotenv = require('dotenv');
const mongoose = require('mongoose');
dotenv.config();

export async function connectDb () {
  try{
    const connection = await mongoose.connect(process.env.MONGO_URL, 
      { useNewUrlParser: true, useUnifiedTopology: true }, 
    );
    Logger.info('App is connected to MongoDB Atlas');
    return connection;
  } catch(err) {
    console.error(err);
  }
};