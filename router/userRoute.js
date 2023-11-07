const router = require('express').Router()


const {getUser, createUser} = require('../controller/userController')


// User Router

router.get('/user', getUser)
router.post('/createUser', createUser)


module.exports = router;