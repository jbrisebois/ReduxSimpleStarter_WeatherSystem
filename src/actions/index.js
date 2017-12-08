import axios from 'axios';

const API_KEY = 'a23fddebf0c82d883d6749d39eeb3a36';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER'; //convention : make a single variable that hold the action type to avoid typos.

export function fetchWeather(city) {
    const url =  `${ROOT_URL}&q=${city},ca`;
    const request = axios.get(url);
    
    return {
        type: FETCH_WEATHER,
        payload: request
    }
}