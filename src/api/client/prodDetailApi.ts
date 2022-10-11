import axiosInstance from 'api/axiosInstance';
import { BASE_URL } from 'config';

class ProdDetailApi extends axiosInstance {
    public async get(id) {
        const { data } = await this.axios.get(`/goods/${id}`);
        return data;
    }
}

export default new ProdDetailApi(BASE_URL);
