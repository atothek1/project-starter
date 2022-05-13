import { Request } from "express";
import { PaginationParameters } from "../types";

export function extractPaginationParameters(req:Request, orderByDefault = "modified"): PaginationParameters {
    const limit = parseInt( req.query.limit as string || "10" );
    const offset = parseInt( req.query.offset as string || "0" );
    const order = req.query.order as ( "ASC" | "DESC" ) || "ASC";
    const orderBy = req.query.orderBy as string || orderByDefault;
    return { limit, offset, order, orderBy };
}

export function extractIdParameter( req: Request ): string {
    return req.params.id as string;
}
