import { envelopeResponse } from "../../../utils/response";
import { ResponseEnvelope } from "../../../types";

interface PingResponse {
    readonly time: Date;
}

export function getPingResponse(): ResponseEnvelope<PingResponse> {
    const data = { time: new Date() };
    return envelopeResponse( data );
}