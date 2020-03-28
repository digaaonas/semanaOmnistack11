import axios from 'axios'

const api = axios.create({
    baseURL: 'https://deploy-backend-bethehero.herokuapp.com'
})

export default api
