const express = require('express')
const router = express.Router()
const { Sandwich } = require('../../../../models')

router.get('/', async function (req, res, next) {
  const sandwichs = await Sandwich.findAll()

  res.send(sandwichs)
})

router.get('/:id', async function (req, res, next) {
  const { id } = req.params
  const sandwich = await Sandwich.findOne({ where: { id } })

  res.send(sandwich)
})

router.post('/', async function (req, res, next) {
  const sandwich = await Sandwich.build({
    ...req.body,
  }).save()

  res.status(201)
  res.send(sandwich)
})

router.delete('/:id', async function (req, res, next) {
  const { id } = req.params
  await Sandwich.destroy({ where: { id } })

  res.status(204)
  res.send()
})

router.put('/:id', async function (req, res, next) {
  const { id } = req.params
  const sandwich = await Sandwich.findOne({ where: { id } })

  sandwich.price = req.body.price

  sandwich.type = req.body.type

  sandwich.warm = req.body.warm

  sandwich.save()

  res.send(sandwich)
})

module.exports = router
