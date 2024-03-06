import axios from 'axios'

export function mapCom(){
    return axios.get('http://172.20.10.3:3000/getPt')
}
export function cityTemp(){
    return axios.get('http://172.20.10.3:3000/getAlltempOfProvince')
}
export function leftOne() {
    return axios.get('/api/leftOne');
}

export function leftTwo() {
    return axios.get('/api/leftTwo');
}

export function leftThree() {
    return axios.get('/api/leftThree');
}
export function middleTwo() {
    return axios.get('/api/middleTwo');
}

export function rightOne() {
    return axios.get('/api/rightOne');
}

export function rightTwo() {
    return axios.get('/api/rightTwo');
}