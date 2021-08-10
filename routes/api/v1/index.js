const express = require('express')
const router = express.Router()

const coffeesRouter = require('./coffees')
router.use('/coffees', coffeesRouter)

const icecreamsRouter = require('./icecreams')
router.use('/icecreams', icecreamsRouter)

const sandwichsRouter = require('./sandwichs')
router.use('/sandwichs', sandwichsRouter)

module.exports = router
