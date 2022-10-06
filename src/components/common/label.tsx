import styled, { css } from 'styled-components';

const CommonLabel = ({ text, color, bgColor }: any) => {
    return (
        <CommonLabelTemplate color={color} bgColor={bgColor}>
            {text}
        </CommonLabelTemplate>
    );
};

export default CommonLabel;

const CommonLabelTemplate = styled.span<{ color: any; bgColor: any }>`
    display: inline-block;
    width: 80px;
    padding: 3px 0;
    margin-left: 10px;
    font-size: 12px;
    text-align: center;
    vertical-align: middle;
    border-radius: 10px;
    color: ${props => props.color};
    background-color: ${props => (props.bgColor ? props.bgColor : '#fff')};
    ${props =>
        props.bgColor === '#fff'
            ? css`
                  border: 1px solid;
              `
            : null};
`;
