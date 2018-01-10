'use strict';
let [ price, quantity ] = [ 5.99, 10 ]
let productView = {
    price: 7.99,
    quantity: 1,
    calculateValue() {
        return this.price * this.quantity
    }
}
// console.info(productView.calculateValue())

// #########################################################################

let field = 'dynamicField'
let price2 = 5.99
let productView2 = {
    [field + "-001"]: price2
}
// console.info(productView2)

// ##########################################################################
let ident = 'productId'
let productView3 = {
    get [ident]() {
        return `${ident} has been gotten`
    },
    set [ident](value) {

    }

}
console.log(productView3.productId)