import express from "express";
import {addTeacher, loginUser, getByName, deleteSub,get, getById, updateById, getByPage} from "./user-controler.js";
import { getAllApprovals, getByApprovalsId, handleApprovalsOperation,createEvent,getAllEvents, updateEventById, getEventById } from "./approvals-controler.js";
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
router.get('/approvals/getbyid', getByApprovalsId);

router.post('/users/add', createUser);

// Route to retrieve all users
router.get('/users', getAllUsers);

//Route for all event
router.post('/events/add', createEvent); // Route for creating an event
router.get('/events', getAllEvents);
router.put('/events', updateEventById);
router.get('/events/getById', getEventById);

export default router;