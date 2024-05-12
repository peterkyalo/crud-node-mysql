import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getProduct,
  updatelProduct,
} from "../handlers/index.js";

const appRouter = Router();

appRouter.get("/", getAllProducts);
appRouter.get("/:id", getProduct);
appRouter.post("/create", createProduct);
appRouter.put("/update/:id", updatelProduct);
appRouter.delete("/delete/:id", deleteProduct);

export default appRouter;
