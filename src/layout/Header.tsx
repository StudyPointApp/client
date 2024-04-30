import styled from "styled-components";

const StyledHeader = styled.header`
    background-color: var(--color-grey-0);
    padding: 1.2rem 4.8rem;
    border-bottom: 1px solid var(--color-grey-100);
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Title = styled.h1`
    color: var(--color-brand-600);
`;

const Header = () => {

    return (
        <StyledHeader>
            <Title>Study App</Title>
        </StyledHeader>
    );
};

export default Header;