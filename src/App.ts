import * as express from 'express'
import * as bodyParser from 'body-parser'
import { test } from './test'

class App {
  public express

  constructor () {
    this.express = express()
    this.mountRoutes()
  }

  private mountRoutes (): void {
    const router = express.Router()
    router.get('/', (req, res) => {
      res.json({
        status: 'online'
      })
    })

    router.post('/test', (req, res) => {
      const contentType = req.headers['content-type'];
      if (!contentType || contentType.indexOf('text/plain') !== 0) return res.sendStatus(400)

      const message = req.body
      res.json(test(message))
    })

    this.express.use(bodyParser.text())
    this.express.use('/', router)
  }
}

export default new App().express
