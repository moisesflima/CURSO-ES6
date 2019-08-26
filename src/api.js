import axios from 'axios';

//com essa configuração de baseUrl, todas as chamadas terão como base o git
const api = axios.create({
    baseURL: 'https://api.github.com'
});

export default api;