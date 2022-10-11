import { useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { useInput } from '../../../../hooks/useInupt';
import { AdminSubject } from '../../../../styles/common';
import Input from '../../../../components/input/input';
import ProdTable from './prodTable';

const ProdOrign = ({ prodOrigin, setProdOrigin }: any) => {
    const [optionName, onChangeOptionName, setOptionName] = useInput('');
    const [optionContent, onChangeOptionContent, setOptionContent] = useInput('');

    const onAddProdOption = useCallback(() => {
        if (optionName.trim() === '' && optionContent.trim() === '') {
            return;
        }
        setProdOrigin([...prodOrigin, { name: optionName, content: optionContent }]);
    }, [prodOrigin, optionName, optionContent]);

    useEffect(() => {
        setOptionName('');
        setOptionContent('');
    }, [prodOrigin]);

    return (
        <>
            <ProdOptionTemplate>
                <AdminSubject>상품 제공 공시</AdminSubject>
                <ProdOptionForm>
                    <Input
                        width="20%"
                        mainColor="#fff"
                        subColor="#222"
                        placeholder="--명칭--"
                        style={{ textAlign: 'center' }}
                        value={optionName}
                        onChange={onChangeOptionName}
                    />
                    <span>
                        <Input
                            width="760px"
                            mainColor="#fff"
                            subColor="#222"
                            margin="0 8px"
                            value={optionContent}
                            onChange={onChangeOptionContent}
                        />
                    </span>
                    <Button onClick={onAddProdOption}>추가</Button>
                </ProdOptionForm>
            </ProdOptionTemplate>
            <ProdTable type="origin" data={prodOrigin} />
        </>
    );
};
export default ProdOrign;

const ProdOptionTemplate = styled.div`
    margin: 16px 0;
`;

const ProdOptionForm = styled.div`
    margin-top: 8px;
    display: flex;
    justify-content: space-between;
`;

const Button = styled.button`
    width: 4rem;
    background-color: #61ca3c;
    padding: 1px;
    font-size: 12px;
    color: ${props => props.theme.subColor};
    border-radius: 8px;

    :hover {
        opacity: 0.6;
    }
`;
