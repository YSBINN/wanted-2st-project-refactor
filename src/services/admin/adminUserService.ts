import { axiosApiInstance } from '../../utils/axios';

export default class AdminUserService {
    static login(data) {
        return axiosApiInstance.post('/admin/user/login', data);
    }
}
