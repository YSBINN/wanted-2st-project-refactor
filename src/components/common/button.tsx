import styled from 'styled-components';

const CommonButton = ({ text, color, bgColor, onClick }: any) => {
    return (
        <CommonButtonTemplate color={color} bgColor={bgColor} onClick={onClick}>
            {text}
        </CommonButtonTemplate>
    );
};

export default CommonButton;

const CommonButtonTemplate = styled.button<CommonButtonTemplateProps>`
    box-sizing: border-box;
    margin-left: 15px;
    padding: 3px 25px;
    color: ${props => props.color};
    background-color: ${props => props.bgColor};
    border: 1px solid ${props => props.color};
    border-radius: 5px;
`;

interface CommonButtonTemplateProps {
    color: string;
    bgColor: string;
}
