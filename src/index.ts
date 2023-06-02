import { configureServer } from "./server";
import { Express } from 'express';
const PORT: string | number = process.env.PORT || 4000;
const server: Express = configureServer();

(() => {
  try {
    server.listen(PORT, () => {
      console.log(`server is listening on port ${PORT}`);
    })
  } catch (error) {
    console.error(error);
  }
})();