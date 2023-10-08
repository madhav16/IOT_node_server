import express from "express";
import {addTeacher, loginUser, getByName, deleteSub} from "./user-controler.js";
const router = express.Router();

router.post('/add',addTeacher);
router.get('/get',getByName);
router.get('/delete',deleteSub);
router.post('/login',loginUser);
export default router;
