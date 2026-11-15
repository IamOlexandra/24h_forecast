import styled from 'styled-components';
import image from "../../images/background.png";

export const StyledHero = styled.section`
    background-image: linear-gradient(90deg, #0000007a 0%, #0000007a 0%), url(${image});
    background-size: cover;
    background-position: center;
`;
    export const StyledTitle = styled.h1`
        padding-top: 100px;
        color: var(--background);
        font-size: 40px;
        text-align: center;
        margin-bottom: 80px;

        @media (max-width: 600px) {
            font-size: 30px;
        }
    `;
    export const StyledWrap = styled.div`
        width: fit-content;
        min-height: 144px;
        display: flex;
        margin: 0 auto 80px auto;

        @media (max-width: 600px) {
            flex-direction: column;
            max-width: 261px;
            border-left: solid 3px var(--background);
            padding-left: 25px;
        }
    `;
        export const StyledText = styled.p`
            color: var(--background);
            padding-right: 51px;
            border-right: solid 3px var(--background);
            max-width: 400px;
            text-align: right;
            font-size: 24px;

            @media (max-width: 600px) {
                padding-right: 0px;
                border-right: none;
                text-align: left;
                margin-bottom: 20px;
                font-size: 20px;
            }
        `;
        export const StyledDate = styled.p`
            color: var(--background);
            padding-left: 51px;
            max-width: 399px;
            font-size: 24px;

            @media (max-width: 600px) {
                padding-left: 0px;
                font-size: 20px;
            }
        `;
    export const StyledInputWrap = styled.div`
        margin: 0 auto;
        display: flex;
        max-width: 625px;
        width: 100%;
        padding-bottom: 100px;
    `;
        export const StyledInput = styled.input`
            background-color: var(--element1);
            border-radius: 10px 0 0 10px;
            border: none;
            padding: 12px 0px 12px 29px;
            font-size: 14px;
            width: 100%;

            &:hover, &:focus {
                outline: none;
                background-color: var(--element3);
            }
        `;
        export const StyledButton = styled.button`
            background-color: var(--accent);
            border-radius: 0 10px 10px 0;
            min-width: 45px;
            border: none;
            border-left: solid 3px var(--text);
            border-right: solid 3px var(--accent);
            cursor: pointer;

            &:hover, &:focus {
                outline: none;
                background-color: var(--accent-hover);
                border-right-color: var(--accent-hover);
            }
        `;
            export const StyledIconWrap = styled.div`
                padding-top: 4px;
                width: fit-content;
                height: fit-content;
                margin: auto;
            `;