import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const apiService = {
    createJob: (url) => axios.post(API_BASE_URL, { url }),
    getJobStatus: (jobId) => axios.get(`${API_BASE_URL}/${jobId}`)
};

export default apiService;
