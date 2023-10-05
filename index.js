import express from 'express';
import mongoose from 'mongoose';
import Routes from './routes.js';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
const port = 8000;

// Use cors middleware before routes
app.use(cors());
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({ extended: true }));
// Register your routes
app.use("/", Routes);

app.listen(port, () => {
    console.log(`server running on port ${port}`);
  });

  const url = "mongodb+srv://maddygyani15qy:intel123@cluster0.8oqzzpj.mongodb.net/Iot";

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("DB connected successfully");
  })
  .catch((error) => {
    console.log("Error while connecting to MongoDB server:", error);
  });
  