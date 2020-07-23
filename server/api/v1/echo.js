const express = require('express')
const echo = express.Router()
const { body, validationResult } = require('express-validator')
const services = require('../services')

const { logger, responses } = services

const handleInputError = (req, res, next) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(422).json({
      ...responses[422],
      errors: errors.array()
    })
  }
  next()
}

const postEcho = (req, res) => {
  try {
    const { id, message, name } = req.body
    logger.info(`${name ? name : 'Someone'} shout out:\n\t-- ${message}`)
    res
      .status(201)
      .json({
        ...responses[201],
        data: [{ ...responses[201].data[0], id, name ,message }]
      })
  } catch (error) {
    logger.error(error)
    return res.status(500).json({
      ...responses[500],
      errors: [
        {
          ...responses[500].errors[0],
          msg: error.message,
          trace: JSON.stringify(error.trace)
        }
      ]
    })
  }
}

echo.post(
  '/',
  [body('message').exists().withMessage('Must provide a non empty message!')],
  handleInputError,
  postEcho
)

module.exports = echo
