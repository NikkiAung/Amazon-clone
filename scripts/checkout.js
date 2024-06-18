import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentsSummary } from "./checkout/paymentSummary.js";
import { loadProducts } from "../data/products.js";
import { loadCart } from "../data/cart.js";
/*
loadProducts(() => {
    renderOrderSummary();
    renderPaymentsSummary();
});
*/

Promise.all([
    new Promise((resolve) => {
        loadProducts(() => {
            resolve();
        });
    }),

    new Promise((resolve) => {
        loadCart(() => {
            resolve();
        });
    })

]).then(() =>{
    renderOrderSummary();
    renderPaymentsSummary();  
});

/*
new Promise((resolve) => {
    loadProducts(() => {
        resolve();
    });

}).then(() => {
    return new Promise((resolve) => {
        loadCart(() => {
            resolve();
        });
    });
}).then(() => {
    renderOrderSummary();
    renderPaymentsSummary();
});
*/