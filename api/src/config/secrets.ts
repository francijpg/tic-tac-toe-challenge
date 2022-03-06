import { config } from "dotenv";

config();

export default {
  PORT: process.env.port || 4000,
  API_VERSION: process.env.API_VERSION || "/api/v1",
  MONGO_DATABASE: process.env.MONGO_DATABASE || 'tictactoedb',
  MONGO_USER: process.env.MONGO_USER || "admin",
  MONGO_PASSWORD: process.env.MONGO_PASSWORD || "admin",
  MONGO_HOST: process.env.MONGO_HOST || 'localhost',
  CLIENT: process.env.CLIENT || 'http://localhost:3000',
};
