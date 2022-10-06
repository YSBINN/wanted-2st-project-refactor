import { axiosApiInstance } from '../../utils/axios';

export default class AdminProdService {
    static get(curPage) {
        return axiosApiInstance.get(`/admin/goods?page=${curPage}`);
    }
    static remove(id) {
        return axiosApiInstance.delete(`/admin/goods/:${id}`);
    }
    static edit({ id, showFlag }) {
        return axiosApiInstance.put(`/admin/goods/:${id}/showflag`, { id, showFlag });
    }
}
