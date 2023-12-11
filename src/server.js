/* eslint-disable no-console */
import express from 'express'
import { CONNECT_DB, GET_DB, CLOSE_DB } from './config/mongodb'
import exitHook from 'async-exit-hook'
import { env } from '~/config/environment'
const START_SERVER = () => {
  const app = express()

  app.get('/', async (req, res) => {
    console.log(await GET_DB().listCollections().toArray())
    res.end('<h1>Hello World!</h1><hr>')
  })

  app.listen(env.APP_PORT, env.APP_HOST, () => {
    console.log(`Server running at ${ env.APP_HOST }:${ env.APP_PORT }/`)
  })

  exitHook(() => {
    console.log('exiting server')
    CLOSE_DB()
  })
}

(async () => {
  try {
    await CONNECT_DB()
    console.log('Connected to Mongodb Cloud Atlas!')
    START_SERVER()
  } catch (error) {
    console.log(error)
    process.exit(0)
  }
})()

// CONNECT_DB()
//   .then(() => console.log('Connect to Mongodb Cloud Atlas!'))
//   .then(() => START_SERVER())
//   .catch((error) => {
//     console.log(error)
//     process.exit(0)
//   })
