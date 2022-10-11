import axiosInstance from 'api/axiosInstance';
import { BASE_URL } from 'config';

class AdminProdService extends axiosInstance {
    public async get(curPage) {
        const { data } = await this.axios.get(`/admin/goods?page=${curPage}`);
        return data;
    }
    public async remove(id) {
        const { data } = await this.axios.delete(`/admin/goods/:${id}`);
        return data;
    }
    public async edit({ id, showFlag }) {
        const { data } = await this.axios.put(`/admin/goods/:${id}/showflag`, { id, showFlag });
        return data;
    }
}

export default new AdminProdService(BASE_URL);
