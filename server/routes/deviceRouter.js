const Router = require('express')
const router = Router()
const deviceController = require('../routerControllers/deviceController')

router.get('/', deviceController.getAll)
router.get('/:id',deviceController.getOne)
router.post('/', deviceController.create)

module.exports = router