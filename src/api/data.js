import axios from 'axios'

export function leftOne() {
    return axios.get('/api/leftOne')
}