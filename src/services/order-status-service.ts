import { OrderStatus } from "../entities/order-status";
import { BaseService } from "./base-service";

export class OrderStatusService extends BaseService<OrderStatus> {
  constructor() {
    super(OrderStatus);
  }
}
