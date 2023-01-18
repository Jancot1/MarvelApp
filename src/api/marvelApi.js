import axios from 'axios';
import { getEnvVariables } from '../marvel';

const { VITE_API_URL } = getEnvVariables();

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