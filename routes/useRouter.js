const userCtrl = require('../controllers/userCtrl')

const router=require('express').Router()



router.post('/register',userCtrl.register)
router.post('/refresh_token',userCtrl.refreshtoken)

// router.post('/register',userCtrl.register)
module.exports=router