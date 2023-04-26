import express, { json } from "express";
import dotenv from "dotenv";
import cors from "cors";
import authRouters from "./src/routers/authRouters.js";
import accountsRouters from "./src/routers/accountRouters.js";
dotenv.config();

const app = express();
app.use(cors());
app.use(json());

app.use("/auth", authRouters);
app.use("/accounts", accountsRouters);

app.listen(process.env.PORT, () => {
    console.log("Running on port " + process.env.PORT);
});
