import ApiError from '~/utils/ApiError'
import { StatusCodes } from 'http-status-codes'

const createBoard = async (req, res, next) => {
  try {
    // ket noi service
    res.status(StatusCodes.CREATED).json({ message: 'created okay'})
  } catch (error) {
    next(new ApiError(StatusCodes.INTERNAL_SERVER_ERROR, new Error(error).message))
  }
}

export const boardController = {
  createBoard
}