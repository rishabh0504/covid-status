import React from 'react';
import axios from 'axios';
import { API_ENDPOINT, X_RAPIDAPI_KEY, X_RAPIDAPI_HOST } from '../config/api_config';

// Setting default base url
axios.defaults.baseURL = API_ENDPOINT;
axios.defaults.headers = {
    'x-rapidapi-key': X_RAPIDAPI_KEY,
    'x-rapidapi-host': X_RAPIDAPI_HOST,
    'useQueryString': true
}

export const getStatistics = async () => {
    try {
        const data = await axios.get(`/statistics`);
        return data.data;
    } catch (error) {
        return []
    }
};

// export const getGistForked = async (gistId) => {
//     try {
//         const data = await axios.get(`gists/${gistId}/forks`);
//         return data.data;
//     } catch (error) {
//         return []
//     }
// };