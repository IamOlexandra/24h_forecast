import styled from 'styled-components';

export const StyledSignUp = styled.div`
    width: 100%;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    background-color: #00000099;
    z-index: 5;
`;
    export const StyledModal = styled.div`
        background-color: var(--background);
        border-radius: 25px;
        padding: 30px 50px 22px;
        width: 400px;
        position: fixed;
        left: calc(50% - 200px);
        top: 20vh;

        @media (max-width: 400px) {
            width: 100%;
            left: 0;
        }
    `;
        export const StyledTitle = styled.h2`
            font-style: 20px;
            margin-bottom: 17px;
            text-align: center;
        `;
        export const StyledForm = styled.form`
            margin-bottom: 17px;
        `;
            export const StyledWrap = styled.div`
                margin-bottom: 25px;
                display: flex;
                flex-direction: column;
            `;
                export const StyledLabel = styled.label`
                    font-size: 12px;
                    margin-bottom: 15px;
                `;
                export const StyledInput = styled.input`
                    font-size: 12px;
                    border: none;
                    background-color: var(--element1);
                    border-radius: 10px;
                    padding: 12px 20px;

                    &:hover, &:focus {
                        outline: none;
                        background-color: var(--element3);
                    }
                `;
            export const StyledButton = styled.button`
                font-size: 12px;
                padding: 10px 30px;
                background-color: var(--accent);
                border: none;
                border-radius: 10px;
                cursor: pointer;
                display: block;
                margin: 0 auto;

                &:hover, &:focus {
                    outline: none;
                    background-color: var(--accent-hover);
                }
            `;
        export const StyledText = styled.p`
            font-size: 10px;
            width: fit-content;
            margin: 0 auto;
            text-align: center;
        `;
            export const StyledSwitcher = styled.button`
                font-size: inherit;
                background-color: transparent;
                border: none;
                text-decoration: underline;
                cursor: pointer;

                &:hover, &:focus {
                    outline: none;
                    color: var(--accent-hover);
                }
            `;