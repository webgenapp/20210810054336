const express = require('express')
const router = express.Router()
const { Coffee } = require('../../../../models')

router.get('/', async function (req, res, next) {
  const coffees = await Coffee.findAll()

  res.send(coffees)
})

router.get('/:id', async function (req, res, next) {
  const { id } = req.params
  const coffee = await Coffee.findOne({ where: { id } })

  res.send(coffee)
})

router.post('/', async function (req, res, next) {
  const coffee = await Coffee.build({
    ...req.body,
  }).save()

  res.status(201)
  res.send(coffee)
})

router.delete('/:id', async function (req, res, next) {
  const { id } = req.params
  await Coffee.destroy({ where: { id } })

  res.status(204)
  res.send()
})

router.put('/:id', async function (req, res, next) {
  const { id } = req.params
  const coffee = await Coffee.findOne({ where: { id } })

  coffee.price = req.body.price

  coffee.flavour = req.body.flavour

  coffee.sugar = req.body.sugar

  coffee.save()

  res.send(coffee)
})

module.exports = router
