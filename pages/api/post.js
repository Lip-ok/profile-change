import * as axios from "axios"

const instance = axios.create({
  baseURL: `http://jsonplaceholder.typicode.com/`,
  headers: {"Content-Type": "application/json", "x-token-access": "random"}
})

export default (req, res) => {
  if(req.method === 'POST'){
    instance.post('posts', req.data)
    .then(res => {
      res.json(res.data)
    })
    .catch((error) => {
      res.json(error)
    })
  }
}
