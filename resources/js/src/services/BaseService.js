import api from "./api";

export default class BaseService {
    constructor(uri){
        this.path = uri;
    }

    getAll() {
        return api.get(`/${this.path}`);
    }

    get(id) {
        return api.get(`/${this.path}/${id}`);
    }

    store(data) {
        return api.post(`/${this.path}`, data);
    }

    update(id, data) {
        return api.put(`/${this.path}/${id}`, data);
    }

    delete(id) {
        return api.delete(`/${this.path}/${id}`);
    }

    deleteAll() {
        return api.delete(`/${this.path}`);
    }

    findBy(title) {

        return api.get(`/${this.path}?title=${title}`);
    }
}
