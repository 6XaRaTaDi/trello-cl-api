import { StatusCodes } from 'http-status-codes'
import express from 'express'


const BoardRoutes = express.Router()

BoardRoutes.route('/')
  .get((req, res) => {
    res.status(StatusCodes.OK).json('get board okay')
  })
  .post((req, res) => {
	  res.status(StatusCodes.CREATED).json('created board')
  })

export default BoardRoutes