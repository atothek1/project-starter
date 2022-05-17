import { useEffect, useReducer } from "react";

export interface UseFetchState<TData = unknown, TError = unknown> {
    readonly isLoading: boolean;
    readonly data: TData;
    readonly error: TError;
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
            return { ...state, isLoading: false, error: action.payload };
        default:
            return state;
    }
}

export function useFetch<TData, TError>(
    url: string,
    options = {}
): UseFetchState<TData, TError> {
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
            .then((res) => res.json())
            .then((data) => dispatch({ type: ActionTypes.response, payload: data }))
            .catch((error) => dispatch({ type: ActionTypes.error, payload: error }));
    }, [url, serializedOptions]);

    return { isLoading, error, data } as UseFetchState<TData, TError>;
}
