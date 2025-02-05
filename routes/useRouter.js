const userCtrl = require('../controllers/userCtrl')
const auth = require('../middleware/auth')

const router=require('express').Router()



router.post('/register',userCtrl.register)
router.post('/refresh_token',userCtrl.refreshtoken)
router.post('/login',userCtrl.login)
router.post('/logout',userCtrl.logout)
router.get('/infor',auth,userCtrl.getUser)

// router.post('/register',userCtrl.register)
module.exports=router