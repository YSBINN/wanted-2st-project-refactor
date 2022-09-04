import styled from 'styled-components';

const Input = ({
    type,
    padding,
    margin,
    fontSzie,
    mainColor,
    subColor,
    width,
    height,
    style,
    placeholder,
}) => {
    return type === 'textarea' ? (
        <TextAreaWrapper
            width={width}
            height={height}
            padding={padding}
            margin={margin}
            fontSzie={fontSzie}
            mainColor={mainColor}
            subColor={subColor}
            style={style}
            placeholder={placeholder}
        ></TextAreaWrapper>
    ) : (
        <InputWrapper
            type={type}
            width={width}
            height={height}
            padding={padding}
            margin={margin}
            fontSzie={fontSzie}
            mainColor={mainColor}
            subColor={subColor}
            style={style}
            placeholder={placeholder}
        />
    );
};
export default Input;

const InputWrapper = styled.input`
    width: ${props => props.width && props.width};
    height: ${props => props.height && props.height};
    margin: ${props => props.margin && props.margin};
    padding: ${props => props.padding && props.padding};
    font-size: ${props => props.fontSzie && props.fontSzie};
    background-color: ${props => (props.mainColor ? props.mainColor : props.theme.mainColor)};
    color: ${props => (props.subColor ? props.subColor : props.theme.subColor)};
    border: none;

    :focus {
        outline: none;
    }
    ::placeholder {
        padding-left: 0;
        text-align: center;
        color: #ccc;
    }
`;

const TextAreaWrapper = styled.textarea`
    resize: none;
    width: ${props => props.width && props.width};
    height: ${props => props.height && props.height};
    margin: ${props => props.margin && props.margin};
    padding: ${props => props.padding && props.padding};
    font-size: ${props => props.fontSzie && props.fontSzie};
    background-color: ${props => (props.mainColor ? props.mainColor : props.theme.mainColor)};
    color: ${props => (props.subColor ? props.subColor : props.theme.subColor)};
    border: none;

    :focus {
        outline: none;
    }
    ::placeholder {
        padding-left: 0;
        color: #ccc;
    }
`;
