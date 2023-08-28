const router = require("express").Router();

const bulkNotifyData = require("../controllers/bulkNotifyData");


module.exports = (app) => {
router.post("/bulkNotifyData", bulkNotifyData.bulkNotifyData);

router.get('/',(req,res)=>{
    res.send("hello World");
})

app.use("/api", router);
}