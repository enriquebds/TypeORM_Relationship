import "reflect-metadata";
import express from "express";
import "express-async-errors";
import userRoutes from "./routes/user.routes";
import loginRoute from "./routes/login.routes";

const app = express();
app.use(express.json());
app.use("/login", loginRoute);
app.use("/users", userRoutes);

export default app;
