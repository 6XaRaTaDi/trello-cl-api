/* eslint-disable no-unused-vars */
import { StatusCodes } from 'http-status-codes'
import { env } from '~/config/environment'

export const errorHandlingMiddleware = (err, req, res, next) => {
  if (!err.StatusCode) err.statusCode = StatusCodes.INTERNAL_SERVER_ERROR

  const responseError = {
    statusCode: err.statusCode,
    message: err.message || StatusCodes[err.statusCode],
    stack: err.stack
  }

  console.log('🚀 ~ file: errorHandlingMiddlewares.js:16 ~ errorHandlingMiddleware ~ env.BUILD_MODE:', env.BUILD_MODE)
  // show stack trace in dev mode
  if (env.BUILD_MODE !== 'dev') delete responseError.stack
  res.status(responseError.statusCode).json(responseError)
}