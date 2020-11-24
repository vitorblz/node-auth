import { Express } from "express";
import authRoutes from "./auth/auth-routes";

export default (app: Express) => {
  app.use("/api/auth", authRoutes);
};
