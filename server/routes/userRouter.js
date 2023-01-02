const Router = require('express')
const router = Router()
const userController = require('../routerControllers/userController')
const authMiddleware = require('../middleware/authMiddleware')

router.get('/auth', authMiddleware, userController.check)
router.post('/registration', userController.registration)
router.post('/login', userController.login)

module.exports = router