import { Router } from "express";
import { ProfileController } from "../controllers/profile-controller.js";
const router = Router();
const profileController = new ProfileController();
router.post("/", (req, res) => profileController.createProfile(req, res));
router.get("/:id/balance", (req, res) => profileController.getBalance(req, res));
export default router;
