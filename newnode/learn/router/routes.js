const userRoutes = require('../controllers/emp').apis
const router = require("express").Router();
const multer = require('multer');
const path = require('path');

// console.log(userRoutes);
module.exports = app =>{
    router.get('/emp',userRoutes.emp);
    // router.post('/emp_dept',userRoutes.emp_dept);
    app.use("/api",router);
}