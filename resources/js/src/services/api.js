import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost/LojaVirtual-laravel-react-/public/api',
    headers: {
        "Content-type": "application/json"
    }
})
export default api;
