import axios from 'axios'

export default class LetterToAdminService {
  constructor () {
    this.lettersToAdmin = axios.create({ baseURL: 'http://127.0.0.1:8000/api' })
  }
  save (letter) {
    this.lettersToAdmin.post('/letter-to-admin/', letter)
  }
}
