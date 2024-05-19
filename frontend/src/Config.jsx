import axios from 'axios';

// Set Axios to include credentials with requests
axios.defaults.withCredentials = true;




const Axios = axios.create({
    baseURL: 'https://finaldashboard-api.vercel.app',
    withCredentials: true,

});

export default Axios;
