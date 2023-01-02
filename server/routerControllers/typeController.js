const {Type} = require('../models/models')
const ApiError = require('../error/ApiError')


class TypeController {
    async create(req, res) {
        const {name} = req.body
        const type = await Type.create({name})
        return res.jsonp(type)
    }

    async getAll(req, res) {
        const types = await Type.findAll()
        return res.jsonp(types)
    }
}

module.exports = new TypeController()