import http from 'k6/http'
import { sleep } from 'k6'

export let options = {
  stages: [
    { duration: '30s', target: 25 },
    { duration: '30s', target: 100 }
  ],
  noConnectionReuse: true
}

export default function () {
  http.get(`http://${__ENV.BACKEND}/`)
  sleep(0.75)
}
