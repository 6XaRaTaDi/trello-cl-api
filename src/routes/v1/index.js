import { StatusCodes } from 'http-status-codes'
import express from 'express'
import boardRoutes from './boardRoutes'

const Router = express.Router()

Router.get('/status', (req, res) => {
  res.status(StatusCodes.OK).json({ message: 'apis are ready to use' })
})

// list router
Router.use('/boards', boardRoutes)

export const APIs_v1 = Router