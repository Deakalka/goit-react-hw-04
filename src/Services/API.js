import axios from 'axios';
const API_KEY = '0fNlTefxZVE4Ug90DTQb6n3KuODdmio2Qcu5TBy_4v4'
axios.defaults.baseURL = 'https://api.unsplash.com/';
axios.defaults.headers.common['Authorization'] =  `Client-ID ${API_KEY}`;

export const getPhoto = async (query, page = 1, per_page = 15) => {
    const { data } = await axios.get('/search/photos', { params: { query, page, per_page } });
    return data;
};