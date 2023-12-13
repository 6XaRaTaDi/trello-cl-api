import Joi from 'joi'
import ApiError from '~/utils/ApiError'

const createBoard = async (req, res, next) => {
  const createBoardSchema = Joi.object({
    title: Joi.string().required().min(3).max(10).trim().strict(),
    description: Joi.string().required().min(3).max(256).trim().strict()
  })

  try {
    await createBoardSchema.validateAsync(req.body, { abortEarly: false })
    next()
  } catch (err) { next(new ApiError(err.statusCode, new Error(err).message)) }
}

export const boardValidation = {
  createBoard
}