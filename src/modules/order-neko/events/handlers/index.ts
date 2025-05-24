import { SendMailHandler } from "./send-mail.handler";
import { UpdateStockHandler } from "./update-stock.handler";
import { UpdateToCashierHandler } from "./update-to-cashier.handler";


export const OrderNekoEvents = [
    SendMailHandler,
    UpdateStockHandler,
    UpdateToCashierHandler
];