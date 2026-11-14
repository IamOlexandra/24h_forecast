import styled from 'styled-components';

export const StyledCities = styled.section`
    padding-top: 60px;
    padding-bottom: 80px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 60px 0;
`;
    export const StyledItem = styled.div`
        background-color: var(--element1);
        padding: 15px 30px 15px 30px;
        border-radius: 20px;
        width: 320px;

        &:last-child {
            justify-self: center
        }
    `;
        export const StyledLocation = styled.div`
            display: flex;
            justify-content: space-between;
            margin-bottom: 15px;

        `;
            export const StyledLocationText = styled.p`
                font-size: 14px;
            `;
        
        export const StyledButtonWrap = styled.div`
            display: flex;
            gap: 10px;
            justify-content: center;
            margin-bottom: 22px;
        `;
            export const StyledButton = styled.button`
                font-size: 10px;
                padding: 8px 18px;
                background-color: var(--accent);
                border: none;
                border-radius: 10px;
                cursor: pointer;

                &:hover, &:focus {
                    outline: none;
                    background-color: var(--accent-hover);
                }
            `;
        export const StyledWeatherIconWrap = styled.div`
            width: fit-content;
            margin: 0 auto 15px;
        `;
        export const StyledTemperature = styled.p`
            font-size: 32px;
            text-align: center;
            margin-bottom: 39px;
        `;
        export const StyledOptions = styled.div`
            display: flex;
            justify-content: space-between;
            align-items: center;
        `;
        export const StyledButtonPlacing = styled.div`
            display: flex;
            justify-content: space-between;
        `;
            export const StyledOptionsIconButton = styled.button`
                background-color: transparent;
                border: none;
                border-radius: 50%;
                cursor: pointer;

                &:hover, &:focus {
                    outline: none;
                    background-color: var(--element2);
                }
            `;
                export const StyledOptionsIconWrap = styled.div`
                    width: 40px;
                    height: 40px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    overflow: hidden;
                `;