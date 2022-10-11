import styled from 'styled-components';

const AdminLayoutHeader = () => {
    return (
        <HeaderTemplate>
            <div>F R U I T T E</div>
        </HeaderTemplate>
    );
};
export default AdminLayoutHeader;

const HeaderTemplate = styled.div`
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${({ theme }) => theme.mainColor};

    & > div {
        margin: 0 32px;
        font-size: 24px;
        color: ${({ theme }) => theme.subColor};
    }
`;
