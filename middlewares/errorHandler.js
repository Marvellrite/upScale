const { StatusCodes } = require("http-status-codes");
const errorHandler = async(err, req, res, next) => {
    console.log(err);
    const customError = {
        message: err.message || "Internal Server Error",
        statusCode: err.statusCode || 500
    };
    if (err.name === "CastError") {
        customError.message = "Job Not Found";
        customError.statusCode = StatusCodes.NOT_FOUND;
    }
    if (err.name === "ValidationError") {
        customError.message = `Enter Valid Values for ${Object.keys(err.errors).join(" ,")}`;
    }
    res.status(customError.statusCode).send({ message: customError.message });
    // res.status(customError.statusCode as number ).send({ err });
};
module.exports = errorHandler;
