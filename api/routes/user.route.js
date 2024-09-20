import express from "express";
import { test } from "../controllers/user.controller.js";

const router =express.Router();

// const test = (req,res)=>{
//     res.json({message:'API is working'});
// }

router.get('/test',test);
export default router;