import styled from 'styled-components';

export const StyledProperties = styled.section`

`;
    export const StyledList = styled.ul`
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(2, 1fr);
        gap: 40px 58px;
        background-color: var(--element1);
        padding: 40px 77px;
        border-radius: 20px;
        margin-bottom: 80px;
    `;
        export const StyledItem = styled.li`
            background-color: var(--element2);
            flex: 1 1 0px;
            min-height: 215px;
            padding: 20px 30px;
            border-radius: 10px;
        `;
            export const StyledHeading = styled.h3`
                text-align: center;
                margin-bottom: 10px;
            `;
            export const StyledInfo = styled.p`
                text-align: center;
                font-size: 32px;
                margin-bottom: 23px;
            `;
            export const StyledIconWrap = styled.div`
                width: 82px;
                margin: 0 auto;
            `;