import axios from 'axios';

export const marvelApi = axios.create({
    baseURL: 'https://gateway.marvel.com/v1/public'
});