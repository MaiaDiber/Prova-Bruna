import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:1569',
    timeout: 10000,
})

export default api