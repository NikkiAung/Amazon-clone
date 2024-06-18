import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentsSummary } from "./checkout/paymentSummary.js";
import { loadProducts } from "../data/products.js";

loadProducts(() => {
    renderOrderSummary();
    renderPaymentsSummary();
});
