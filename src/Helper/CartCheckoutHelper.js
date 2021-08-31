export const getBillAmount = (cart,products) =>{
    let billamount = 0;
    cart.map((item)=>{
        products.map((product)=>{
            if(item.cart_product_id === product.product_id){
                billamount = billamount + (product.product_cost * item.cart_quantity);
                console.log('innnn '+ billamount);
            }
        })
    })
    return billamount;
}

export const getGSTAmount = (cart,products) =>{
    let billamount = getBillAmount(cart,products);
    let gstamount = Math.round((18/100)*billamount);
    return gstamount;
}

export const getTotalAmount = (cart,products)=>{
    let billamount = getBillAmount(cart,products);
    let gstamount = getGSTAmount(cart,products);
    return billamount+gstamount;
}