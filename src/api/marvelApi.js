import axios from 'axios';

const VITE_API_URL = import.meta.env.VITE_API_URL;

export const marvelApi = axios.create({
	baseURL: 'https://gateway.marvel.com/v1/public'
});

export const marvelAppApi = axios.create({
	baseURL: VITE_API_URL,
	headers: {
		'Access-Control-Allow-Origin' : '*',
  	'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
	}
})