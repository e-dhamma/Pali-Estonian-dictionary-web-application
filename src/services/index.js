import axios from 'axios'

export class LetterToAdminService {
  constructor () {
    this.lettersToAdmin = axios.create({ baseURL: 'http://127.0.0.1:8000/api' })
  }
  save (letter) {
    this.lettersToAdmin.post('/letter-to-admin/', letter)
  }
}

export class TermCommentService {
  constructor () {
    this.termComments = axios.create({ baseURL: 'http://127.0.0.1:8000/api' })
  }
  save (comment) {
    this.termComments.post('/term-comment/', comment)
  }
}

export class TermListService {
  constructor () {
    this.termList = axios.create({ baseURL: 'http://127.0.0.1:8000/api' }) // Why is it nessasary?
  }
  get () {
    axios.get('http://127.0.0.1:8000/api/term-list/').then(function (response) { console.log(response.data) })
  }
}
