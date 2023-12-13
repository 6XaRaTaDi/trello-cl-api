class ApiError extends Error {
  constructor (statusCode, message) {
    super(message)
    this.name = 'ApiError'
    this.statusCode = statusCode

    // save stack trace
    Error.captureStackTrace(this, this.constructor)
  }
}

export default ApiError