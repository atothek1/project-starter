import { Header, Main, Nav } from "@components";

interface BaseLayoutProps extends React.PropsWithChildren<any> {
}

export function BaseLayout( props: BaseLayoutProps ) {
    const { children } = props;
    return (
        <>
            <Header>Header</Header>
            <Main>{children}</Main>
            <Nav>Navigation</Nav>
        </>
    );
}