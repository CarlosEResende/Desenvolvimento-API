import { Router } from "express";
import { JobController } from "../controllers/job-controller.js";

const router = Router();
const jobController = new JobController();


router.post("/", (req, res) => jobController.createJob(req, res));


router.get("/:id", (req, res) => jobController.getJobById(req, res));

router.put("/:id", (req, res) => jobController.updateJob(req, res));

router.delete("/:id", (req, res) => jobController.deleteJob(req, res));

router.get("/contract/:contractId", (req, res) => jobController.getJobsByContract(req, res));


export default router;

