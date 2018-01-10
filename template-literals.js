'use strict';

function processInvoice(segments, ...values) {
    console.log(segments)
    console.log(values)
}

let invoiceNum = '1350'
let amount = '2000'

processInvoice `Invoice: ${invoiceNum} for ${amount}`