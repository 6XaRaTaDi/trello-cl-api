import { StatusCodes } from 'http-status-codes'
import express from 'express'
import { boardController } from '~/controllers/boardController'
import { boardValidation } from '~/validations/boardValidation'

const BoardRoutes = express.Router()

BoardRoutes.route('/')
  .get((req, res) => {
    res.status(StatusCodes.OK).json('get board okay')
  })
  .post(boardValidation.createBoard, boardController.createBoard)

BoardRoutes.route('/:id')
  .get(boardController.getDetails)
  // .put(boardValidation.updateBoard, )

export default BoardRoutes