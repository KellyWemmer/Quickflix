import Axios from 'axios'
import { baseURL } from '../env'
export const api = Axios.create({
  baseURL,
  timeout: 8000
})

export const ottApi = Axios.create({
  baseURL: 'https://ott-details.p.rapidapi.com/advancedsearch',
  params: {
    // start_year: '',
    // end_year: '',
    // min_imdb: '',
    // max_imdb: '',
    // genre: '',
    // language: '',
    // type: '',
    // sort: 'latest',
    // page: '1',
  },
  headers: {
    'X-RapidAPI-Key': '6f085c5252msh0103404eeb5c985p1bd3e1jsndb9b1d4a5d8e',
    'X-RapidAPI-Host': 'ott-details.p.rapidapi.com'
  }
});
