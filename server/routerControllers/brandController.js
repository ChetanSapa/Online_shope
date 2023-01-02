const {Brand} = require('../models/models')
const ApiError = require('../error/ApiError')

class BrandController {
    async create(req, res) {
        const {name} = req.body
        const brand = await Brand.create({name})
        return res.jsonp(brand)
    }

    async getAll(req, res) {
        const brands = await Brand.findAll()
        return res.jsonp(brands)
    }
}

module.exports = new BrandController()