import { useEffect, useReducer } from "react";

interface DefaultError {
    readonly status: number;
}
export interface UseFetchState<TData = unknown, TError = DefaultError> {
    readonly isLoading: boolean;
    readonly data: TData | null;
    readonly error: TError | null;
}

enum ActionTypes {
    loading = 0,
    response = 1,
    error = 2
}
interface Action<TType = unknown, TPayload = unknown> {
    readonly type: TType;
    readonly payload: TPayload;
}

function reducer(
    state: UseFetchState,
    action: Action<ActionTypes>
): UseFetchState {

    switch (action.type) {
        case ActionTypes.loading:
            return { ...state, isLoading: true };
        case ActionTypes.response:
            return { ...state, isLoading: false, data: action.payload };
        case ActionTypes.error:
            return { ...state, isLoading: false, error: action.payload as DefaultError };
        default:
            return state;
    }
}


export function useFetch<TData>(
    url: string,
    options = {}
): UseFetchState<TData> {
    const [{ isLoading, error, data }, dispatch] = useReducer(reducer, {
        isLoading: false,
        data: null,
        error: null
    });

    // Serialize the "fetch" options so it may become
    // a dependency to the "useEffect" below.
    const serializedOptions = JSON.stringify(options);

    useEffect(() => {
        dispatch({ type: ActionTypes.loading, payload: null });

        fetch(url, JSON.parse(serializedOptions))
            .then((res) => {
                if( res.status >= 400 ) {
                    throw { status: res.status };
                }
                return res.json();
            })
            .then((data) => dispatch({ type: ActionTypes.response, payload: data }))
            .catch((error) => dispatch({ type: ActionTypes.error, payload: error }));
    }, [url, serializedOptions]);

    return { isLoading, error, data } as UseFetchState<TData>;
}
