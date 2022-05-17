import { MemoryRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

const theme = {};

export function Wrapper( props: React.PropsWithChildren<any> ) {
    const { children } = props;
    return (
        <ThemeProvider theme={ theme }>
            <MemoryRouter>
                { children }
            </MemoryRouter>
        </ThemeProvider>
    );
}