import styled from 'styled-components';
import CommonLabel from '../../../../components/label';

const AdminProdSearchHeader = () => {
    return (
        <SearchHeaderContainer>
            <SerchInputWrapper>
                <input></input>
                <button>검색</button>
            </SerchInputWrapper>
            <KeywordsWrapper>
                <CommonLabel text="비노출" />
                <CommonLabel text="신상품" />
                <CommonLabel text="MD" />
                <CommonLabel text="판매량" />
                <CommonLabel text="노출" />
                <CommonLabel text="SALE" />
                <CommonLabel text="SOLD OUT" />
                <CommonLabel text="구매량" />
            </KeywordsWrapper>
        </SearchHeaderContainer>
    );
};

export default AdminProdSearchHeader;

const SearchHeaderContainer = styled.header`
    position: relative;
    width: calc(100%-240px);
    display: flex;
    margin: 0 15% 40px;
    justify-content: flex-start;
`;

const SerchInputWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
    width: 30%;
    height: 40px;
    background-color: #fff;
    > input {
        width: 80%;
        margin-left: 10px;
        border: none;
    }
    > button {
        height: 100%;
        width: 20%;
        color: #fff;
        font-weight: bold;
        background-color: ${props => props.theme.mainColor};
    }
`;

const KeywordsWrapper = styled.div`
    position: absolute;
    right: 8%;
    width: 300px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 5px;
    margin-left: 100px;
`;
