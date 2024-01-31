const authenticationError = require("./authenticationError.js")
const BadRequest = require("./badRequest.js")
const NotFound = require("./notFound.js")
const PaymentRequired = require("./paymentRequired.js")
module.exports = { authenticationError, BadRequest, NotFound, PaymentRequired }