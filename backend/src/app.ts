import express from "express";
import testRouter from "./routes/testRouter.js";

const app = express();
app.use(express.json());

app.use('/test', testRouter);
export default app;