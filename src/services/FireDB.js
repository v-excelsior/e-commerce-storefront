import axios from 'axios'

// import { sortString } from 'helpers'

export default class FireDB {
  constructor (http) {
    this.http = http
    this.full_http = http + '.json'
  }

  async getCards () {
    const cards = []

    await axios.get(this.full_http).then(res => {
      Object.keys(res.data).forEach(key => {
        cards.push({ id: key, ...res.data[key] })
      })
    })

    //TODO: return sorted data
    return cards
  }

  async addCard (card) {
    await axios.post(this.full_http, card)
  }

  async editCard (card) {
    const { id } = card

    delete card.id

    await axios.put(this.http + '/' + id + '.json', { ...card })
  }
}