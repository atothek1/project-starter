import { Provider } from "./useFetchContext";

export interface FetchOptions {
    readonly baseUrl?: string;
}

interface FetchProviderProps extends React.PropsWithChildren<unknown> {
    readonly options?: FetchOptions;
}

export function FetchProvider(props: FetchProviderProps) {
    const { children, options } = props;

    const baseUrl =
        ( options && options.baseUrl ) ? options.baseUrl : window.location.href.endsWith("/")
            ? window.location.href.substring(0, window.location.href.length - 1)
            : window.location.href;

    const sanitizedOptions = {
        baseUrl
    };

    return (
        <Provider value={sanitizedOptions}>{children}</Provider>
    );
}
