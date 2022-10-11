import axiosInstance from 'api/axiosInstance';
import { BASE_URL } from 'config';

class AdminUserService extends axiosInstance {
    public async postLogin(formData) {
        const { data } = await this.axios.post('/admin/user/login', formData);
        return data;
    }
}

export default new AdminUserService(BASE_URL);
