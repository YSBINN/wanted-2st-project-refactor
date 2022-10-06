import { axiosApiInstance } from '../../utils/axios';

export default class AdminService {
    static get(id) {
        const res = axiosApiInstance.get(`/goods/${id}`);
        return res;
    }
}
