import {Outlet} from "react-router-dom";
import styled from "styled-components";
import Sidebar from "./Sidebar";
import Header from "./Header";

const StyledAppLayout = styled.div`
    display: grid;
    grid-template-columns: 26rem 1fr;
    grid-template-rows: auto 1fr;
    height: 100vh;
`

const Main = styled.main`
    background-color: var(--color-grey-200); // value to be changed to var(--color-grey-50)
    padding: 4rem 4.8rem 6.4rem;
    overflow: scroll;
`

const Container = styled.div`
    background-color: var(--color-grey-400); // delete this line. is only for visual purposes
    max-width: 120rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
`

const AppLayout = () => {
    return (
        <StyledAppLayout>
            <Header/>
            <Sidebar/>
            <Main>
                <Container>
                    <Outlet/>
                </Container>
            </Main>
        </StyledAppLayout>
    );
};

export default AppLayout;