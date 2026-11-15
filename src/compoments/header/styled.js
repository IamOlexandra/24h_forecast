import styled from 'styled-components';

export const StyledHeader = styled.section`
    padding-top: 12px;
    padding-bottom: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 700px) {
        flex-direction: column;
        gap: 10px 0;
    }
`;
    export const StyledNavigation = styled.nav`
        width: 455px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        @media (max-width: 830px) {
            width: 380px;
        }
        @media (max-width: 419px) {
            width: 380px;
            flex-direction: column;
            align-items: center;
            gap: 10px;
        }
    `;
        export const StyledLogoLink = styled.a`
            width: 82px;
            border-radius: 10px;

            &:hover, &:focus {
                outline: none;
                background-color: var(--accent);
            }
        `;
            export const StyledLogo = styled.img`
                width: 100%;
            `;
        export const StyledList = styled.ul`
            width: 262px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        `;
            export const StyledItem = styled.li`
                
            `;
                export const StyledLink = styled.a`
                    font-size: 12px;
                    font-family: var(--second-font);

                    &:hover, &:focus {
                        outline: none;
                        color: var(--accent-hover);
                    }
                `;
    export const StyledAccount = styled.div`
        width: 166px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    `;
        export const StyledButton = styled.button`
            background-color: var(--accent);
            border: none;
            border-radius: 10px;
            padding: 10px 20px;
            font-size: 12px;
            font-family: var(--second-font);
            cursor: pointer;
            
            &:hover, &:focus {
                outline: none;
                background-color: var(--accent-hover);
            }
        `;
        export const StyledUsername = styled.p`
            
        `;
        export const StyledIconWrap = styled.div`
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background-color: var(--pfp-background);
            overflow: none;
            display: flex;
            justify-content: center;
            align-items: center;
        `;