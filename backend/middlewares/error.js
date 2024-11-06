class ErrorHandler extends Error {
    constructor(message , statusCode){
        super(message);
        this.statusCode = statusCode
    }
}

export function errorMiddleware(err , req ,res , next){
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error";

    if (err.name === "CastError") {
        const message = `Invalid ${err.path}`;
        err = new ErrorHandler(message , 400);
    }

    if (err.code === 11000) {
        const message = `Duplicate ${Object.keys(err.keyValue)} Entered`;
        err = new ErrorHandler(message , 400);
    }

    if (err.name === "jsonWebtokenError") {
        const message = "Invalid JSON Web Token";
        err = new ErrorHandler(message , 400);
    }

    if (err.name === "tokenExpiredError") {
        const message = "JSON Web Token is Expired";
        err = new ErrorHandler(message , 400);
    }

    return res.statusCode(err.statusCode).json({
        sucess : false ,
        message : err.message ,
        err : err
    })
}