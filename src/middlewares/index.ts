
import { NextFunction, Response, Request } from "express";
interface Error {
    httpStatusCode: number;
    message: string;

}

export const badRequestHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err.httpStatusCode === 400) {
        res.status(400).json({
            success: false,
            errors: err.message || "Bad Request",
        });
    }
    next(err);
};
export const forbiddenError = (err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err.httpStatusCode === 403) {
        res.status(400).json({
            success: false,
            errors: err.message || "Forbidden",
        });
    }
    next(err);
};
export const notFoundHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err.httpStatusCode === 404) {
        res.status(404).json({
            success: false,
            errors: err.message || "Not Found",
        });
    }
    next(err);
};
export const unauthorizedError = (err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err.httpStatusCode === 401) {
        res.status(401).json({
            success: false,
            errors: err.message || "Unauthorized",
        });
    }
    next(err);
};
export const genericErrorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    if (!res.headersSent) {
        res.status(err.httpStatusCode || 500).json({
            success: false,
            errors: err.message || "Internal Server Error",
        });
    }
};