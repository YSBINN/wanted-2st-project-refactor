import styled from 'styled-components';
import SideList from './list/sideList';
import SideProfile from './profile/sideProfile';

const AdminLayoutSide = () => {
    return (
        <SideTemplate>
            <SideProfile />
            <SdieLogo>F R U I T T E</SdieLogo>
            <SideList />
        </SideTemplate>
    );
};
export default AdminLayoutSide;

const SideTemplate = styled.div`
    width: 240px;
    background-color: ${({ theme }) => theme.mainColor};
    height: calc(100vh - 48px);
`;

const SdieLogo = styled.div`
    text-align: center;
    font-size: 24px;
    color: ${({ theme }) => theme.subColor};
    border-top: 3px solid ${({ theme }) => theme.subColor};
    border-bottom: 3px solid ${({ theme }) => theme.subColor};
    padding: 24px 0;
    font-weight: bold;
`;
