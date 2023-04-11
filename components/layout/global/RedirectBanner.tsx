import { useState } from "react";
import styled from "styled-components"

const OuterContainer = styled.div`
    width: 100%;
    height: 40px;
    position: absolute;
    background-color: ${({ theme }) => theme.colors.background};
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const InnerContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 16px;
`;

const Content = styled.span`
    user-select: none;
    font-family: 'Inter', sans-serif;
`;

const Link = styled.a`
    text-decoration: underline;
`;

export const RedirectBanner = () => {
    const [dismissed, setDismissed] = useState(false);

    return dismissed ? <></> : (
        <OuterContainer className="no-owo">
            <InnerContainer>
                <Content>Did you make a typo? Go to <Link href="https://revolt.chat">revolt.chat</Link></Content>
                <a href='#' onClick={() => setDismissed(true)}>X</a>
            </InnerContainer>
        </OuterContainer>
    )
}