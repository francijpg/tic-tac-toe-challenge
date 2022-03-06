import express from 'express';
import cors from 'cors';
import { Request, Response } from "express";
import gameRoutes from "./game/game.routes"
import config from './config/secrets';

const { CLIENT, API_VERSION } = config;
const app = express();
app.use(cors({ origin: CLIENT }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(`${API_VERSION}/game`, gameRoutes);
app.all("*", (req: Request, res: Response) => {
  res.status(404).send("404 Not Found");
});

export default app;