import { JSXElementConstructor, ReactElement, ReactFragment, ReactPortal, useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { useCallback } from 'react';
import { Link } from 'react-router-dom';

const SideList = () => {
    const [sideLst, setSideLst] = useState([
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
    const onSubjectClick = (idx: number) => {
        const copySideLst = [...sideLst];
        if (idx === 0) {
            copySideLst[0].subject.state = true;
            copySideLst[1].subject.state = false;
            return setSideLst(copySideLst);
        }
        copySideLst[0].subject.state = false;
        copySideLst[1].subject.state = true;
        console.log(copySideLst);
        return setSideLst(copySideLst);
    };

    // List click Handler
    const onListClick = (idx: number) => {
        const copySideLst = [...sideLst];
        if (idx === 0) {
            copySideLst[0].list[0].state = true;
            copySideLst[0].list[1].state = false;
            return setSideLst(copySideLst);
        }
        copySideLst[0].list[0].state = false;
        copySideLst[0].list[1].state = true;
        return setSideLst(copySideLst);
    };

    // render
    return (
        <ListTemplate>
            {sideLst.map((v, index) => (
                <li key={v.subject.name}>
                    <p onClick={() => onSubjectClick(index)}>
                        {v.subject.name}
                        <span>
                            <FontAwesomeIcon icon={v.subject.state ? faCaretUp : faCaretDown} />
                        </span>
                    </p>
                    {v.subject.state &&
                        v.list &&
                        v.list.map(
                            (
                                list: {
                                    link: string;
                                    state: any;
                                    name: string;
                                },
                                idx: number,
                            ) => (
                                <Link to={'/admin' + list.link}>
                                    <ListItem state={list?.state}>
                                        <li key={index} onClick={() => onListClick(idx)}>
                                            {list.name}
                                        </li>
                                    </ListItem>
                                </Link>
                            ),
                        )}
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
