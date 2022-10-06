import styled from 'styled-components';

const Button = ({
    children,
    size,
    fontSzie,
    mainColor,
    subColor,
    padding,
    margin,
    width,
    height,
    disabled,
    onClick,
    onKeyPress,
    type,
    style,
}: any) => {
    return (
        <ButtonWrapper
            type={type}
            size={size}
            width={width}
            height={height}
            padding={padding}
            margin={margin}
            fontSzie={fontSzie}
            mainColor={mainColor}
            subColor={subColor}
            disabled={disabled}
            style={style}
            onClick={onClick}
            onKeyPress={onKeyPress}
        >
            {children}
        </ButtonWrapper>
    );
};
export default Button;

const ButtonWrapper = styled.button<any>`
    width: ${props =>
        props.width
            ? props.width
            : props.size === 'small'
            ? '4rem'
            : props.size === 'medium'
            ? '7rem'
            : props.size === 'large'
            ? '10rem'
            : props.size === 'full' && '100%'};
    ${props => (props.height ? `height: ${props.height}` : 'aspect-ratio: 5 / 1')};
    font-size: ${props => props.fontSzie && props.fontSzie};
    margin: ${props => props.margin && props.margin};
    padding: ${props => props.padding && props.padding};
    background-color: ${props => (props.mainColor ? props.mainColor : props.theme.mainColor)};
    color: ${props => (props.subColor ? props.subColor : props.theme.subColor)};
    border-radius: 8px;

    :hover {
        opacity: 0.6;
    }
`;
