import axios from 'axios'

const BASE_URL = `${process.env.REACT_APP_HOST_URI}:${process.env.REACT_APP_PORT}`

export const USER = '/user'

export const apiInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 100000
})
