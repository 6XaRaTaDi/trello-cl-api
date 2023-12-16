/* eslint-disable no-useless-catch */
import { slugify } from '~/utils/formatter'
import { boardModel } from '~/models/boardModel'
import ApiError from '~/utils/ApiError'
import StatusCodes from 'http-status-codes'


const createBoard = async (data) => {
  try {
    const newBoardObj = {
      ...data,
      slug: slugify(data.title)
    }
    // call model
    const createdBoard = await boardModel.createNew(newBoardObj)
    const getNewBoard = await boardModel.findBoardById(createdBoard.insertedId.toString())
    if (!getNewBoard) return {}
    return getNewBoard
  } catch (error) { throw error }
}

const getDetail = async (boardId) => {
  try {
    const result = await boardModel.getDetail(boardId.toString())
    // if (!result) return {}
    if (!result) throw new ApiError(StatusCodes.NOT_FOUND, 'Board not found!')
    return result
  } catch (error) {
    throw error
  }

}

export const boardService = {
  createBoard,
  getDetail
}