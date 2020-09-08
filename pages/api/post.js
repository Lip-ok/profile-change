import * as axios from "axios"

const instance = axios.create({
  baseURL: `http://jsonplaceholder.typicode.com/`,
  headers: {"Content-Type": "application/json", "x-token-access": Math.random()}
})

export default (req, res) => {
  if(req.method === 'POST'){
    instance.post('posts', req.body)
    .then(res => {
      res.json(res.data)
    })
    .catch((error) => {
      res.json(error)
    })
  }
}
