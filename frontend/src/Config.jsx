import axios from 'axios';

// Set Axios to include credentials with requests
axios.defaults.withCredentials = true;




const Axios = axios.create({
    baseURL: 'https://finaldashboard-ug97.onrender.com',
    withCredentials: true,

});

export default Axios;
