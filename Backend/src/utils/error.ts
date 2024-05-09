export const errorHandler = (statusCode: Number, message: String): Error => {
    const error = new Error(statusCode.toString() + ' ' + message);
    return error;
};