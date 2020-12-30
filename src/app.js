import express from "express";
import dotenv from "dotenv";
dotenv.config();
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import connect from "../db/mongo";

const PORT = process.env.PORT;

const app = express();

app.use(morgan(`dev`));
app.set("view engine", "pug");

connect();

app.use("/", globalRouter);

app.listen(PORT, () => {
    console.log(`${PORT} 서버 시작합니다요`);
});
