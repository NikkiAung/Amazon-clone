import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentsSummary } from "./checkout/paymentSummary.js";
import { loadProducts, loadProductsFetch } from "../data/products.js";
import { loadCart } from "../data/cart.js";



async function loadPage(){

    try{
        await loadProductsFetch();

        const value = await new Promise((resolve) => {
            loadCart(() => {
                resolve();
            });
        });
    } catch(error) {
        console.log('Unexpected error. Please try again.');
    }
    


    renderOrderSummary();
    renderPaymentsSummary();

    return 'value2';
}

loadPage().then((value) => {
    console.log('next step');
    console.log(value);
})



/*
Promise.all([
    loadProductsFetch(),
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

/*
loadProducts(() => {
    renderOrderSummary();
    renderPaymentsSummary();
});
*/