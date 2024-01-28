import axios from 'axios'

const BASE_URL = `${process.env.REACT_APP_HOST_URI}:${process.env.REACT_APP_PORT}`

const AUTH = '/auth'
export const REGISTER = `${AUTH}/register`
export const PROFILE = `${AUTH}/profile`
export const LOGIN = `${AUTH}/login`

const PRODUCT = '/product'
export const GET_PRODUCTS = `${PRODUCT}`

export const apiInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 100000
})
