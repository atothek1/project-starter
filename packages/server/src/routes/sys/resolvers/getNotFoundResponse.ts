import { envelopeResponse } from "../../../utils/response";
import { ResponseEnvelope } from "../../../types";

interface NotFoundResponse {
    readonly time: Date;
    readonly message: string;
}

export function getNotFoundResponse( path: string ): ResponseEnvelope<NotFoundResponse> {
    const data = {
        time: new Date(),
        message: `Requested resource '${path}' does not exists.`
    };
    return envelopeResponse( data );
}