"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class W3StreamError extends Error {
    constructor(statusCode, problemDetails) {
        super(problemDetails?.title || 'W3StreamError');
        this.problemDetails = problemDetails;
        this.code = statusCode;
        this.stack = new Error().stack;
    }
}
exports.default = W3StreamError;
