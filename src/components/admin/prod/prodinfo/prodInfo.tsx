import styled from 'styled-components';
import { AdminSubject } from '../../../../styles/common';
import InfoDetail from './detail/infoDetial';
import InfoIamge from './image/infoImage';

const ProdInfo = () => {
    return (
        <>
            <AdminSubject>상품 정보</AdminSubject>
            <InfoTemplate>
                <InfoIamge />
                <InfoDetail />
            </InfoTemplate>
        </>
    );
};
export default ProdInfo;

const InfoTemplate = styled.div`
    display: flex;
    align-items: center;
    margin: 16px 0;
`;
