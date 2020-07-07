import BaseService from "./BaseService"

export default class OrderService extends BaseService {
    // static paths = "clients";
    constructor() {
        super('orders');
    }
}
