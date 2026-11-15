import styled from 'styled-components';

export const StyledFooter = styled.section`
    background-color: var(--accent);
    padding-top: 40px;
    padding-bottom: 64px;
`;
    export const StyledContentWrap = styled.div`
        width: 549px;
        max-width: 100%;
        display: flex;
        gap: 30px 60px;
        justify-content: space-between;
        flex-wrap: wrap;
        @media (max-width: 577px) {
            justify-content: center;
        }
    `;
        export const StyledColumn = styled.div`
            &:nth-child(3) h3 {
                @media (max-width: 577px) {
                    text-align: center;
                }
            }
        `;
            export const StyledLogoLink = styled.a`
                display: flex;
                border-radius: 10px;
                
                &:hover, &:focus {
                    outline: none;
                    background-color: var(--element1);
                }
            `;
                export const StyledLogo = styled.img`
                    width: 90px;
                `;
            export const StyledColumnTitle = styled.h3`
                font-family: var(--second-font);
                margin-bottom: 10px
            `;
            export const StyledAdress = styled.a`
                font-family: var(--second-font);                
                font-size: 12px;

                &:hover, &:focus {
                    outline: none;
                    color: var(--element1);
                }
            `;
            export const StyledSocialsList = styled.ul`
                display: flex;
                gap: 20px;
            `;
                export const StyledSocialsItem = styled.li`
                    width: 40px;                    
                    height: 40px;

                    &:nth-child(1) a {
                        background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);
                    }
                    &:nth-child(2) a {
                        background-color: #3b5998;
                    }
                    &:nth-child(3) a {
                        background-color: #25d366;
                    }

                    & a:hover, & a:focus {
                        outline: none;
                        background: var(--text);
                    }
                `;
                    export const StyledSocialsLink = styled.a`
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        width: 100%;
                        height: 100%;
                        border-radius: 50%;
                        cursor: pointer;
                    `;
                        export const StyledSocialsIconWrap = styled.div`
                            width: fit-content;
                            display: flex;
                        `;