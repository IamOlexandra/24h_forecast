import styled from 'styled-components';

export const StyledImages = styled.section`
    padding-bottom: 48px;
`;
    export const StyledTitle = styled.h2`
        font-size: 20px;
        margin-bottom: 40px;
    `;
    export const StyledList = styled.ul`
        position: relative;
        height: 211px;
        @media (max-width: 750px) {
            height: 600px;
        }
    `;
        export const StyledItem = styled.li`
            position: absolute;
            width: fit-content;
            height: fit-content;
            background-color: var(--image-undertone);
            display: flex;

            &:nth-child(1) {
                transform: scale(0.6);
                top: calc((50% - (105.5px * 0.6)) / 2);
                left: calc(16% - (175px * 0.6));
                z-index: 1;
            }
            &:nth-child(1) img {
                opacity: 0.5;
            }

            &:nth-child(2) {
                transform: scale(0.8);
                top: calc((50% - (105.5px * 0.8)) / 2);
                left: calc(32% - (175px * 0.8));
                z-index: 2;
            }
            &:nth-child(2) img {
                opacity: 0.8;
            }

            &:nth-child(3) {
                top: 0;
                left: calc(50% - 175px);
                z-index: 3;
            }

            &:nth-child(4) {
                transform: scale(0.8);
                top: calc((50% - (105.5px * 0.8)) / 2);
                left: calc(67% - (175px * 0.8));
                z-index: 2;
            }
            &:nth-child(4) img {
                opacity: 0.8;
            }

            &:nth-child(5) {
                transform: scale(0.6);
                top: calc((50% - (105.5px * 0.6)) / 2);
                left: calc(84% - (175px * 0.6));
                z-index: 1;
            }
            &:nth-child(5) img {
                opacity: 0.5;
            }

            @media (max-width: 750px) {
                &:nth-child(1) {
                    transform: scale(0.4);
                    top: calc(6% - (105.5px * 0.4));
                    left: calc((50% - (175px * 0.4)) / 2);
                }

                &:nth-child(2) {
                    transform: scale(0.6);
                    top: calc(22% - (105.5px * 0.6));
                    left: calc((50% - (175px * 0.6)) / 2);
                }

                &:nth-child(3) {
                    transform: scale(0.8);
                    top: calc(40% - (105.5px * 0.8));
                    left: calc((50% - (175px * 0.8)) / 2);
                }

                &:nth-child(4) {
                    transform: scale(0.6);
                    top: calc(57% - (105.5px * 0.6));
                    left: calc((50% - (175px * 0.6)) / 2);
                }

                &:nth-child(5) {
                    transform: scale(0.4);
                    top: calc(74% - (105.5px * 0.4));
                    left: calc((50% - (175px * 0.4)) / 2);
                }
            }
            @media (max-width: 500px) {
                &:nth-child(1) {
                    left: calc((25% - (175px * 0.4)) / 2);
                }

                &:nth-child(2) {
                    left: calc((25% - (175px * 0.6)) / 2);
                }

                &:nth-child(3) {
                    left: calc((25% - (175px * 0.8)) / 2);
                }

                &:nth-child(4) {
                    left: calc((25% - (175px * 0.6)) / 2);
                }

                &:nth-child(5) {
                    left: calc((25% - (175px * 0.4)) / 2);
                }
            }
        `;
            export const StyledImage = styled.img`
                height: 211px;
            `;
    export const StyledPlaceholderText = styled.p`
    
    `;