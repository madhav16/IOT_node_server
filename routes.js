import express from "express";
import {addTeacher, loginUser, getByName, deleteSub,get, getById, updateById, getByPage} from "./user-controler.js";

const router = express.Router();

router.post('/add',addTeacher);
router.get('/get',getByName);
router.get('/delete',deleteSub);
router.post('/login',loginUser);
router.get('/getById',getById);
router.patch('/update',updateById);
router.get('/',get);
router.get('/getByPage',getByPage)
export default router;