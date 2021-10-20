import { Order } from "../entities/order";
import { BaseService } from "./base-service";

export class OrderService extends BaseService<Order> {
  constructor() {
    super(Order);
  }
}
