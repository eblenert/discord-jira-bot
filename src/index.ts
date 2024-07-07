import app from "./app";
import dotenv from "dotenv";

dotenv.config();
const initServer = async () => {
  app.listen(3000, () => {
    console.log(`Listening on port ${3000}`);
  });
};

initServer();
