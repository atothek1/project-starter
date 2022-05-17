import "@testing-library/jest-dom";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { renderHook } from "@atothek/testing";
import { FetchProvider } from "../FetchProvider";
import { useFetch } from "../useFetch";

const server = setupServer(
    rest.get('/test', (_req, res, ctx) => {
        return res(ctx.json({greeting: 'hello there'}))
    })
);

beforeAll( () => server.listen() );
afterEach( () => server.resetHandlers() );
afterAll( () => server.close() );

describe( "useFetch()", () => {

    const url = "/test";

    const wrapper = (props:React.PropsWithChildren<any>) => {
        const {children} = props;
        return <FetchProvider>{children}</FetchProvider>
    };

    test("success response", async () => {
        const { result, waitForNextUpdate } = renderHook( () => { return useFetch( url ) }, { wrapper } );

        expect( result.current.isLoading ).toBeTruthy();
        expect( result.current.data ).toBeNull();
        expect( result.current.error ).toBeNull();

        await waitForNextUpdate();

        expect( result.current.isLoading ).toBeFalsy();
        expect( result.current.data ).not.toBeNull();
        expect( result.current.error ).toBeNull();
    });
} );
