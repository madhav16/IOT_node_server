import express from "express";
import {addTeacher, loginUser, getByName} from "./user-controler.js";
const router = express.Router();

router.post('/add',addTeacher);
router.get('/get',getByName);
router.post('/login',loginUser);
export default router;
