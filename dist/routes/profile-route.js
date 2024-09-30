import { Router } from "express";
import { ProfileController } from "../controllers/profile-controller.js";
const router = Router();
const profileController = new ProfileController();
router.post("/", profileController.createProfile.bind(profileController));
router.get("/:id/balance", profileController.getBalance.bind(profileController));
export default router;
