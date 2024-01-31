const StatusCodes = require("http-status-codes");
class PaymentRequired extends Error {
    message;
    statusCode = StatusCodes.PAYMENT_REQUIRED;
    constructor(message) {
        super(message);
        this.message = message;
        this.message = message;
    }
}
module.exports = PaymentRequired;
