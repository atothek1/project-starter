import { Header, Main, Nav } from "@components";
import { Outlet } from "react-router-dom";

interface BaseLayoutProps {
    readonly headerElement:React.ReactNode;
    readonly navigationElement: React.ReactNode;
}

export function BaseLayout( props: BaseLayoutProps ) {
    const { headerElement, navigationElement } = props;
    return (
        <>
            <Header>{ headerElement }</Header>
            <Main>
                <Outlet />
            </Main>
            <Nav>{ navigationElement }</Nav>
        </>
    );
}