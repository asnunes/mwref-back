import express from "express";
import { validateToken } from "../middlewares/validateToken.js";
import { getAccounts } from "../controllers/accountsControllers/get.js";
import { postAccounts } from "../controllers/accountsControllers/post.js";
import { putAccounts } from "../controllers/accountsControllers/put.js";
import { deleteAccounts } from "../controllers/accountsControllers/delete.js";

const router = express.Router();

router.use(validateToken);

router.get("/", getAccounts);
router.post("/", postAccounts);
router.put("/:id", putAccounts);
router.delete("/:id", deleteAccounts);

export default router;
