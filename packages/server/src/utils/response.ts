import type { Pagination, ResponseEnvelope } from "../types";

export function envelopeResponse<TData = unknown>( data: TData, pagination?: Pagination ): ResponseEnvelope<TData> {
    return { pagination, data };
}