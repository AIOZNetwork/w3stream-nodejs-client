import ProblemDetails from './model/ProblemDetails';

export default class W3StreamError extends Error {
  private problemDetails?: ProblemDetails;
  private code: number;

  constructor(statusCode: number, problemDetails?: ProblemDetails) {
    super(problemDetails?.title || 'W3StreamError');

    this.problemDetails = problemDetails;
    this.code = statusCode;
    this.stack = new Error().stack;
  }
}
