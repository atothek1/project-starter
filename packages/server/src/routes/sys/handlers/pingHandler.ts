import { NextFunction, Request, Response } from "express";
import { getPingResponse } from "../resolvers";

// underscore _ unused parameters
export function pingHandler( _request: Request, response:Response, _next: NextFunction  ): void {
    const data = getPingResponse();
    response.status( 200 ).json( data );
}