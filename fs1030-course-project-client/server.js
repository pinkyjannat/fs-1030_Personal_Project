import express from "express";
import db from "./connection";
import emrRouter from "./src/routes/emrRouter";
import { routeNotExistError, globalError } from "./src/middleware/errorHandler";
import cors from "cors";

const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//Connect to database
db.connect(function (err) {
  if (err) {
    console.error(`error connecting: ${err.stack}`);
    return;
  }
  console.log(
    `Successfully connected to the "emr_system" database as id ${db.threadId}`
  );
});

//connect to main router
app.use("/api", emrRouter);

//check if route exist middleware
app.use("*", routeNotExistError);

//Global error handler
app.use(globalError);

app.listen(5500, () => {
  console.log("API server ready on http://localhost:5500");
});

export default db;