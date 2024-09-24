import ProblemDetails from './model/ProblemDetails';
export default class W3StreamError extends Error {
    private problemDetails?;
    private code;
    constructor(statusCode: number, problemDetails?: ProblemDetails);
}
