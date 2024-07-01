import axios from 'axios'

const api = axios.create({
    baseURL:('https://db-dripstore.onrender.com')
})

export default api