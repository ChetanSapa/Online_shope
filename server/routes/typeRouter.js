const Router = require('express')
const router = Router()
const typeController = require('../routerControllers/typeController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.get('/', typeController.getAll)
router.post('/', checkRole('ADMIN'), typeController.create)

module.exports = router