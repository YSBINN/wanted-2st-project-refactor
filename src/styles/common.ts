import styled, { css } from 'styled-components';

export const FlexBox = css`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const AdminSubject = styled.div`
    font-weight: bold;

    & span {
        font-size: 10px;
        font-weight: normal;
    }
`;
