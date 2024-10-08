// PWD: kLUVz8XvaC3DJ8f8
// username: kristiyip
import express, { Express } from 'express';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';

dotenv.config()
const app: Express = express();
const port = process.env.PORT || 3001;

app.use(express.json());

const mongoURI: string = process.env.MONGOURI || ""

mongoose
  .connect(mongoURI)
  .then(() => console.log("CONNECTED TO MONGODB"))
  .catch((err) => console.error("Failed to connect to MongoDB:", err));

app.listen(port, () => {
  console.log(`Server Running on Port ${port}`)
});
