import axios from 'axios';


const apiService = axios.create({
        baseURL: 'https://api-d1-test.herokuapp.com/api'
    })

export default apiService;


//https://api-d1-test.herokuapp.com/api/filter
//https://api-d1-test.herokuapp.com/api/journey/​:idFiltro
//https://api-d1-test.herokuapp.com/api/journey