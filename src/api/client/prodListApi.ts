import axiosInstance from 'api/axiosInstance';
import { BASE_URL } from 'config';

class ProdListApi extends axiosInstance {
    public async get() {
        const { data } = await this.axios.get(`/goods?page=5`);
        return data;
    }
}

export default new ProdListApi(BASE_URL);
