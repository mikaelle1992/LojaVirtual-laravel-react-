import api from "./api";

export default class BaseService {
    constructor(uri) {
        this.path = uri;
    }

    async getAll() {
        return await api.get(`/${this.path}`)
            .then(response => response.data)
            .catch(err => console.log(err));
    }

    async getOne(id) {
        return await api.get(`/${this.path}/${id}`)
            .then(response => response.data)
            .catch(err => console.log(err));
    }

    async store(body) {
        return await api.post(`/${this.path}`, body)
            .then(response => response.data)
            .catch(err => console.log(err));
    }

    async update(id, body) {
        return await api.put(`/${this.path}/${id}`, body)
            .then(response => response.data)
            .catch(err => console.log(err));
    }

    async delete(id) {
        return await api.delete(`/${this.path}/${id}`)
        .then(response => response.data)
        .catch(err => console.log(err));
    }
}
