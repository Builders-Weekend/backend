import { configureServer } from "./server";
import { connectDb } from "./db/config";
import Logger from "./utils/winston";
import { Express } from 'express';
const PORT: string | number = process.env.PORT || 4000;
const server: Express = configureServer();

(() => {
  try {
    connectDb();
    server.listen(PORT, () => {
      Logger.info(`server is listening on port ${PORT}`);
    })
  } catch (error) {
    Logger.error(error);
  }
})();