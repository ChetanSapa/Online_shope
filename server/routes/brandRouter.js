const Router = require('express')
const router = Router()
const brandController = require('../routerControllers/brandController')

router.get('/', brandController.getAll)
router.post('/', brandController.create)
router.delete('/:id',)

module.exports = router