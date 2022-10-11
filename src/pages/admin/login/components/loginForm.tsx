import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../../../assets/img/logo.png';
import { useInput } from '../../../../hooks/useInupt';
import AdminUserApi from '../../../../api/admin/adminUserApi';
import TokenService from '../../../../services/tokenService';

const AdminLoginForm = () => {
    const [email, onChangeEmail] = useInput('');
    const [password, onChangePassword] = useInput('');
    const navigate = useNavigate();

    const onAdminLogin = useCallback(async () => {
        try {
            const res = await AdminUserApi.postLogin({ email, password });
            if (!res.message) {
                alert('아이디와 비밀번호를 다시 확인해주세요');
            } else {
                TokenService.set({ key: 'token', value: res.data.token });
                if (TokenService.get('token')) {
                    navigate('/admin/prodList');
                } else {
                    alert('다시 한번 시도해주세요');
                }
            }
        } catch (error) {
            console.error(error);
            throw new Error(`${error}`);
        }
    }, [email, password]);

    return (
        <LoginFromTemplate>
            <div className="logo">
                <img src={logo} />
                <p>F R U I T T E</p>
            </div>
            <div className="form">
                <p>
                    <EmailInput
                        type="text"
                        placeholder="id"
                        value={email}
                        onChange={onChangeEmail}
                    />
                </p>
                <p>
                    <PasswordInput
                        placeholder="PASSWORD"
                        type="password"
                        value={password}
                        onChange={onChangePassword}
                    />
                </p>
                <p>
                    <SubmitButton onClick={onAdminLogin}>L O G I N</SubmitButton>
                </p>
            </div>
        </LoginFromTemplate>
    );
};
export default AdminLoginForm;

const LoginFromTemplate = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    & > .logo {
        font-size: 24px;
        font-weight: bold;
        color: ${props => props.theme.subColor};

        & > img {
            margin: 0 auto;
            margin-bottom: 8px;
            width: 64px;
            height: 64px;
        }
    }

    & > .form {
        background-color: ${props => props.theme.subColor};
        margin-top: 16px;
        padding: 32px 64px;
        border-radius: 16px;

        & > p {
            text-align: center;
        }
    }
`;

const EmailInput = styled.input`
    font-size: 12px;
    margin: 8px 0;
    background-color: ${props => props.theme.mainColor};
    color: black;
    width: 200px;
    height: 32px;
    border-bottom: 1px solid black;
    text-align: center;
    border: none;
`;

const PasswordInput = styled.input`
    font-size: 12px;
    margin: 8px 0;
    background-color: ${props => props.theme.mainColor};
    color: black;
    width: 280px;
    height: 32px;
    border-bottom: 1px solid black;
    text-align: center;
    border: none;
`;

const SubmitButton = styled.button`
    width: 220px;
    font-size: 16px;
    margin: 16px 0 0 0;
    padding: 4px 32px;
    background-color: #61ca3c;
    color: ${props => props.theme.subColor};
    border-radius: 8px;
    font-weight: bold;

    :hover {
        opacity: 0.6;
    }
`;
