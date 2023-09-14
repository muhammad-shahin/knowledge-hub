// get stored cart if cart is empty return a empty array
const getStoredBookmark = () => {
    const getStoredCart = localStorage.getItem('cart');
    if(getStoredCart){
        const cart = JSON.parse(getStoredCart);
        return cart;
    }
    return [];
}
// save newly added item into local storage
const saveCartToLS = (cart) => {
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
}
// adding the id of clicked item in local storage
const addToLS = (id) => {
    const storedCart = getStoredCart();
    storedCart.push(id);
    saveCartToLS(storedCart);
}
// remove from local storage
const removeFromLS = (id) => {
    const cart = getStoredCart();
    // get index of the item you want to remove
    const getIndexOfRemoveItem = cart.indexOf(id);
    // removing the item
    if(getIndexOfRemoveItem !== -1){
        cart.splice(getIndexOfRemoveItem, 1)
    }
    saveCartToLS(cart);
}

export {addToLS, getStoredCart, removeFromLS}