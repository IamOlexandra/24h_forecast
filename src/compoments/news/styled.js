import styled from 'styled-components';

export const StyledNews = styled.section`
    padding-bottom: 80px;
`;
    export const StyledTitle = styled.h2`
        font-size: 20px;
        margin-bottom: 40px;
    `;
    export const StyledList = styled.ul`
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 0 20px;
    `;
        export const StyledItem = styled.li`
            width: 270px;
            margin-bottom: 40px;
            border-radius: 10px;

            @media (max-width: 675px) {
                width: 100%;
            }
        `;
            export const StyledLink = styled.a`
                display: block;
                border-radius: 10px;

                &:hover, &:focus {
                    outline: none;
                    background-color: var(--element1);
                }
            `;
                export const StyledImageWrap = styled.div`
                    width: 100%;
                    height: 208px;
                    background-color: var(--element3);
                    border-radius: 10px;
                    margin-bottom: 20px;
                    display: flex;
                    justify-content: center;
                    align-self: center;
                    overflow: hidden;

                    @media (max-width: 675px) {
                        height: calc(99vw / 2);
                    }
                `;
                    export const StyledImage = styled.img`
                        height: 100%;
                    `;
                    export const StyledImagePlaceholderText = styled.p`
                        color: var(--element1);
                        margin-top: 20px;
                        text-align: center;
                    `;
                export const StyledText = styled.h3`
                    padding: 0 10px 20px 10px;
                `;
    export const StyledButton = styled.button`
        padding: 10px 30px;
        background-color: var(--accent);
        border: none;
        border-radius: 10px;
        cursor: pointer;

        &:hover, &:focus {
            outline: none;
            background-color: var(--accent-hover);
        }
    `;
    export const StyledPlaceholderText = styled.p`

    `;