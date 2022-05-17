import { rest } from "msw";
import { setupServer } from "msw/node";
import { waitFor, screen, render } from "@atothek/testing";
import { FetchProvider } from "../FetchProvider";
import { useFetch } from "../useFetch";

const server = setupServer(
    rest.get('/test', (_req, res, ctx) => {
        return res(ctx.json({info: 'success'}))
    }),

    rest.all('*', (_req, res, ctx) => {
        return res( ctx.status(  404 ) )
    })
);

beforeAll( () => server.listen() );
afterEach( () => server.resetHandlers() );
afterAll( () => server.close() );

describe( "augmented useFetch()", () => {
    function useTest(){
        return useFetch<{readonly info: string}>( "/test" );
    }
    function TestUseFetch() {
        const { isLoading, data, error } = useTest();

        if( isLoading ) {
            return ( <p data-testid="status-info">loading</p> );
        }

        if( error !== null ) {
            return ( <p data-testid="status-info">has error, {error.status}</p> );
        }

        return ( <p data-testid="status-info">was a {data?.info}</p> );
    }

    test( "success fetch response", async () => {

        render( <FetchProvider><TestUseFetch /></FetchProvider> );

        expect(screen.getByTestId("status-info")).toHaveTextContent("loading");

        // wait for next render cycle after data arrived
        await waitFor( () => screen.getByText("was a success") );

        expect(screen.getByTestId("status-info")).toHaveTextContent("was a success");
    });
} );
describe( "direct useFetch()", () => {

    function TestUseFetch( props: { readonly url: string } ) {
        const { url } = props;
        const { isLoading, data, error } = useFetch<{readonly info: string}>( url );

        if( isLoading ) {
            return ( <p data-testid="status-info">loading</p> );
        }

        if( error !== null ) {
            return ( <p data-testid="status-info">has error, {error.status}</p> );
        }

        return ( <p data-testid="status-info">was a {data?.info}</p> );
    }

    test( "success fetch response", async () => {

        render( <FetchProvider><TestUseFetch url="/test" /></FetchProvider> );

        expect(screen.getByTestId("status-info")).toHaveTextContent("loading");

        // wait for next render cycle after data arrived
        await waitFor( () => screen.getByText("was a success") );

        expect(screen.getByTestId("status-info")).toHaveTextContent("was a success");
    });

    test( "error fetch response", async () => {

        render( <FetchProvider><TestUseFetch url="/unknown" /></FetchProvider> );

        expect(screen.getByTestId("status-info")).toHaveTextContent("loading");

        // wait for next render cycle after data arrived
        await waitFor( () => screen.getByText("has error, 404") );

        expect(screen.getByTestId("status-info")).toHaveTextContent("has error, 404");
    });
} );
