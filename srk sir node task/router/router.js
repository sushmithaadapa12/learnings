
const userRoutes=require('../controllers/users').apis

const Auth =require('../middlewares/Auth').verifyWebsiteAuthentication;
// console

const router = require("express").Router();


module.exports=app=>{


    router.post('/signup',userRoutes.userreg);

    router.post('/login',userRoutes.login);

    router.get('/search/',Auth,userRoutes.search);


    router.get('/filter',Auth,userRoutes.filter);
  
    app.use("/api", router);
}
