import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import { config } from '../config'

const getAxiosOptions = () => {
  const options: AxiosRequestConfig = {
    baseURL: config.apiHost,
    headers: {
      'Content-Type': 'application/json'
    }
  }

  return options
}

let axiosInstance: AxiosInstance = axios.create(getAxiosOptions())

const doGet = async (address: string) => {
  return (await axiosInstance.get(address)).data
}

class API {
  getBooks = () => {
    return doGet('/books')
  }

  makeGetRequest = async () => {
    let res = await axios.get(config.apiHost + '/books')
    let data = res.data
    return data
  }
}

export const api = new API()
