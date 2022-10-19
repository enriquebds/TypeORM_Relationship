import "reflect-metadata";
import express from "express";
import "express-async-errors";
import handleErrorMiddleware from "./middlewares/handleError.middleware";
import userRoutes from "./routes/user.routes";
import loginRoute from "./routes/login.routes";
import categoriesRoutes from "./routes/categories.routes";

const app = express();
app.use(express.json());
app.use("/login", loginRoute);
app.use("/users", userRoutes);
app.use("/categories", categoriesRoutes);

app.use(handleErrorMiddleware);
export default app;
