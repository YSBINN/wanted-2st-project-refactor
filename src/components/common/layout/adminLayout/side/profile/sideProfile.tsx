import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';

const SideProfile = () => {
    return (
        <ProfileTemplate>
            <div>
                <FontAwesomeIcon icon={faCircleUser} />
            </div>
            <SideInfo>
                <p>김성용 (#13579)</p>
                <p>매니저 D+365</p>
            </SideInfo>
        </ProfileTemplate>
    );
};
export default SideProfile;

const ProfileTemplate = styled.div`
    padding: 8px 32px;
    & > div:first-child {
        text-align: center;
        font-size: 96px;
        color: ${({ theme }) => theme.subColor};
    }
`;

const SideInfo = styled.div`
    margin-bottom: 16px;
    & > p {
        color: ${({ theme }) => theme.subColor};
    }

    & > p:first-child {
        font-size: 20px;
        font-weight: bold;
    }
`;
