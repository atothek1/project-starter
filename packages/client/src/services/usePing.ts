import { ResponseEnvelope } from "@atothek/server/src/types";
import { useFetch, useFetchContext } from "../context";

export function usePing(){
    const { baseUrl } = useFetchContext();
    // unfold response
    const { data, ...rest } = useFetch<ResponseEnvelope<{ readonly time: Date }>>( `${baseUrl}/sys/ping` );
    return { data: data !== null ? data.data : null, ...rest };
}