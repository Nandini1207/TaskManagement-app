import axios from 'axios';

//creating the instance of an api to fetch data from backened server
const api=axios.create({
    baseURL:"http://localhost:5000",
    headers:"application/json"
})

export default api