import axios from 'axios'

const url_base = 'http://localhost:8200/'
const apiVersion = 'v1/'
const subject = 'product/'

export const exportProductsToCsv = () => {
    return axios.get(`${url_base}${apiVersion}${subject}export`, { responseType: 'blob' })
}

