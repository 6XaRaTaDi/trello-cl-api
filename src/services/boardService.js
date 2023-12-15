import { slugify } from '~/utils/formatter'
import { boardModel } from '~/models/boardModel'


const createBoard = async (data) => {
  const newBoardObj = {
    ...data,
    slug: slugify(data.title)
  }
  // call model
  const createdBoard = await boardModel.createNew(newBoardObj)
  const getNewBoard = await boardModel.findBoardById(createdBoard.insertedId.toString())
  if (!getNewBoard) return {}
  return getNewBoard
}

export const boardService = {
  createBoard
}