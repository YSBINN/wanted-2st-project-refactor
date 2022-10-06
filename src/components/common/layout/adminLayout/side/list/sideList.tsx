import { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { useCallback } from 'react';
import { Link } from 'react-router-dom';

const SideList = () => {
    const [sideLst, setSideList] = useState([
        {
            subject: { name: '상품관리', state: true },
            list: [
                { name: '- 상품목록', state: true, link: '/prodList' },
                { name: '- 상품등록', state: false, link: '/prod' },
            ],
        },
        {
            subject: { name: '회원관리', state: false },
        },
    ]);

    // subject click Handler
    const onSubjectClick = useCallback(
        (e: any) => {
            const index = e.currentTarget.getAttribute('data-index');
            const List = [...sideLst];
            List[index].subject.state === true
                ? (List[index].subject.state = false)
                : (List[index].subject.state = true);
            setSideList(List);
        },
        [sideLst],
    );

    // List click Handler
    const onListClick = useCallback(
        (e: any) => {
            const parentIndx: number = e.target.parentNode.getAttribute('parentData') || 0;
            const index: number = e.currentTarget.getAttribute('data-index');
            const List = [...sideLst];
            List.map(v => {
                v.list?.map(list => {
                    if (list.state) {
                        list.state = false;
                    }
                });
            });
            List[parentIndx].list[index].state = true;
            setSideList(List);
        },
        [sideLst],
    );

    // render
    return (
        <ListTemplate>
            {sideLst.map((v, index) => (
                <li key={index}>
                    <p data-index={index} onClick={onSubjectClick}>
                        {v.subject.name}
                        <span>
                            <FontAwesomeIcon icon={v.subject.state ? faCaretUp : faCaretDown} />
                        </span>
                    </p>
                    {v.subject.state &&
                        v.list &&
                        v.list.map((list, index) => (
                            <Link to={'/admin' + list.link}>
                                <ListItem parentData={index} state={list.state}>
                                    <li key={index} data-index={index} onClick={onListClick}>
                                        {list.name}
                                    </li>
                                </ListItem>
                            </Link>
                        ))}
                </li>
            ))}
        </ListTemplate>
    );
};
export default SideList;

// style

const ListTemplate = styled.ul`
    width: 100%;
    font-size: 20px;
    color: ${({ theme }) => theme.subColor};
    margin-top: 32px;

    & > li {
        margin: 24px 0;
        & > p {
            padding-left: 16px;
            & > span {
                margin-left: 8px;
            }
        }
    }
`;

const ListItem = styled.ul<any>`
    ${props => props.state && ' background-color: #3D603A'};
    font-size: 16px;

    & > li {
        padding: 2px 32px;
    }
`;
