const express = require('express')
const router = express.Router()
const { Icecream } = require('../../../../models')

router.get('/', async function (req, res, next) {
  const icecreams = await Icecream.findAll()

  res.send(icecreams)
})

router.get('/:id', async function (req, res, next) {
  const { id } = req.params
  const icecream = await Icecream.findOne({ where: { id } })

  res.send(icecream)
})

router.post('/', async function (req, res, next) {
  const icecream = await Icecream.build({
    ...req.body,
  }).save()

  res.status(201)
  res.send(icecream)
})

router.delete('/:id', async function (req, res, next) {
  const { id } = req.params
  await Icecream.destroy({ where: { id } })

  res.status(204)
  res.send()
})

router.put('/:id', async function (req, res, next) {
  const { id } = req.params
  const icecream = await Icecream.findOne({ where: { id } })

  icecream.price = req.body.price

  icecream.flavour = req.body.flavour

  icecream.save()

  res.send(icecream)
})

module.exports = router
