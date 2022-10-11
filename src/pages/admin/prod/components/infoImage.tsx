import styled from 'styled-components';

const InfoIamge = () => {
    return (
        <InfoMainImage>
            <label htmlFor="prod_main_image">
                +
                <p>
                    상품 대표 이미지를 등록 <br />
                    해주세요
                </p>
            </label>
            <input type="file" id="prod_main_image" style={{ display: 'none' }} />
        </InfoMainImage>
    );
};
export default InfoIamge;

const InfoMainImage = styled.div`
    & > label {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 260px;
        height: 260px;
        background-color: #fff;
        font-size: 48px;
        font-weight: bold;
        line-height: 0.4;

        & > p {
            display: block;
            text-align: center;
            font-size: 10px;
            margin-top: 16px;
            line-height: 1.2;
            color: #ccc;
        }
    }
`;
