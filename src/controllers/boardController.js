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

const getDetails = async (req, res, next) => {
  try {
    const boardId = req.params.id
    const board = await boardService.getDetail(boardId)
    res.status(StatusCodes.OK).json(board)
  } catch (error) { next(error) }
}

export const boardController = {
  createBoard,
  getDetails
}