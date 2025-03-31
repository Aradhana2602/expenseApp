const express = require("express");
const { addTransection, getAllTransection } = require("../controllers/transectionCtrl");


// Router object (Fixed)
const router = express.Router();


//Routes
//add transection POST Method
router.post('/add-transection',addTransection)

//get transections
router.get('/get-transection',getAllTransection)

module.exports = router;
