const express = require('express')
const OngController = require('../src/controllers/OngController')
const IncidentController = require('../src/controllers/IncidentController')
const ProfileController = require('../src/controllers/ProfileController')
const SessionsController = require('../src/controllers/SessionsController')
const routes = express.Router()

routes.get('/ongs', OngController.index)
routes.post('/ongs', OngController.create)

routes.get('/profile', ProfileController.index)

routes.post('/sessions', SessionsController.create)

routes.get('/incidents', IncidentController.index)
routes.post('/incidents', IncidentController.create)
routes.delete('/incidents/:id', IncidentController.delete)

module.exports = routes