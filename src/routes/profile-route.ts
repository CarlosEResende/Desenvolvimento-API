import { Router } from "express";
import { ProfileController } from "../controllers/profile-controller";

const router = Router();
const profileController = new ProfileController();

router.post("/", (req, res) => profileController.createProfile(req, res));
router.get("/:id/balance", (req, res) => profileController.getBalance(req, res));
router.get("/", (req, res) => profileController.getAllProfile(req, res));
router.put("/:id", (req, res) => profileController.updateProfile(req, res));
router.delete("/:id", (req, res) => profileController.deleteProfile(req, res));

export default router;

