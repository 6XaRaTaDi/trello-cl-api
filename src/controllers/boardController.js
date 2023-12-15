import ApiError from '~/utils/ApiError'
import { StatusCodes } from 'http-status-codes'
import { boardService } from '~/services/boardService'

const createBoard = async (req, res, next) => {
  try {
    // ket noi service
    const createdBoard = await boardService.createBoard(req.body)
    // if (createdBoard.length !== 0)
    res.status(StatusCodes.CREATED).json(createdBoard)
  } catch (error) {
    next(new ApiError(StatusCodes.INTERNAL_SERVER_ERROR, new Error(error).message))
  }
}

export const boardController = {
  createBoard
}