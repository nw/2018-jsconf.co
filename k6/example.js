import http from 'k6/http'
import { check, group } from 'k6'

let endpoint = 'http://localhost:8080'

export default function () {
  group('login workflow', function () {
    let token = null

    group('POST /login', function () {
      let res = http.post(`${endpoint}/login`, { adminId: 'test' })
      let body = JSON.parse(res.body)
      token = body.token

      check(res, {
        'status was ok': (r) => r.status === 200,
        'has a token': (r) => !!body.token,
        'request duration': (r) => r.timings.duration < 200
      })
    })
  })
}