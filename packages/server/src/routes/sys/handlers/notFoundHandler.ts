import { NextFunction, Request, Response } from "express";
import { getNotFoundResponse } from "../resolvers";

// underscore _ unused parameters
export function notFoundHandler( request: Request, response:Response, _next: NextFunction  ): void {
    const path = request.originalUrl;
    const data = getNotFoundResponse( path );
    response.status( 404 ).json( data );
}