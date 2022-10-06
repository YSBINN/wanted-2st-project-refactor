export default class TokenService {
    static set({ key, value }) {
        localStorage.setItem(key, value);
    }
    static get(key) {
        const token = localStorage.getItem(key);
        return token;
    }
    static remove(key) {
        localStorage.removeItem(key);
    }
}
