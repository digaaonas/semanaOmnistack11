const request = require("supertest")
const app = require('../../src/app')
const conn = require('../../src/database/connection')

describe('ONG', () => {
    beforeEach(async () => {
       await conn.migrate.rollback()
       await conn.migrate.latest()
    })

    afterAll(async () => {
       await conn.destroy()
    })

    it('should be able to create a mew ONG', async () => {
        const response = await request(app).post('/ongs').send({
            name: "APAD",
            email: "contato@apad.com.br",
            whatsapp: "47988888888",
            city: "Rio do Sul",
            uf: "SC"
        })
        
        expect(response.body).toHaveProperty('id')
        expect(response.body.id).toHaveLength(8)
    })
})