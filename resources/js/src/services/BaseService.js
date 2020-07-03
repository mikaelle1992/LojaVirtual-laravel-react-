import api from "./api";

export default class BaseService {
    constructor(uri){
        this.path = uri;
    }

    getAll() {
        return api.get(`/${this.path}`);
    }

    getOne(id) {
        return api.get(`/${this.path}/${id}`);
    }

    store(body) {
        return api.post(`/${this.path}`, body);
    }

    update(id, body) {
        return api.put(`/${this.path}/${id}`, body);
    }

    delete(id) {
        return api.delete(`/${this.path}/${id}`);
    }
}
