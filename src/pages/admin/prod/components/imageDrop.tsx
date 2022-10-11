import Dropzone from 'react-dropzone';
import styled from 'styled-components';

const ImageDorpozne = ({ onDropHandler }: any) => {
    return (
        <Dropzone onDrop={onDropHandler}>
            {({ getRootProps, getInputProps }) => (
                <InfoImageForm className="inputBox" {...getRootProps()}>
                    <input {...getInputProps()} id="file" />+<p>이미지를 등록해주세요</p>
                </InfoImageForm>
            )}
        </Dropzone>
    );
};
export default ImageDorpozne;

const InfoImageForm = styled.div`
    width: 100%;
    height: 100px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 0.5rem;
    font-size: 36px;
    font-weight: bold;

    & > p {
        font-size: 0.625rem;
        color: #999;
    }
`;
