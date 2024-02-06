import express from "express";
import {addTeacher, loginUser, getByName, deleteSub,get, getById, updateById, getByPage} from "./user-controler.js";
import { getAllApprovals, handleApprovalsOperation } from "./approvals-controler.js";
import { createUser, getAllUsers } from "./UserControler.js";

const router = express.Router();

router.post('/add',addTeacher);
router.get('/get',getByName);
router.get('/delete',deleteSub);
router.post('/login',loginUser);
router.get('/getById',getById);
router.patch('/update',updateById);
router.get('/',get);
router.get('/getByPage',getByPage)
router.get('/approvals', getAllApprovals);
router.post('/approvals/add', handleApprovalsOperation);


router.post('/users/add', createUser);

// Route to retrieve all users
router.get('/users', getAllUsers);

export default router;