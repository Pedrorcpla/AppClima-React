import axios from 'axios';

const api = axios.create({
	baseURL: 'https://api.hgbrasil.com/weather?array_limit=2&fields=only_results,temp,city_name,max,min,description,date&key=1ee4375a',
});

export default api;