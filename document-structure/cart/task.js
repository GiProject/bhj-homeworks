const cartItem = document.createElement('div');
cartItem.classList.add('cart__product');
const cartItemImg = document.createElement('img');
cartItemImg.classList.add('cart__product-image');
cartItem.appendChild(cartItemImg);
const cartItemCount = document.createElement('div');
cartItemCount.classList.add('cart__product-count');
cartItem.appendChild(cartItemCount);
const cart = document.querySelector('.cart__products');
document.querySelectorAll('.product').forEach(counter => {
    counter.addEventListener('click', e => {
        let productCounter = e.currentTarget.querySelector('.product__quantity-value'),
            productCount = parseInt(productCounter.textContent.trim());
        if (e.target.classList.contains('product__quantity-control_dec')) {
            productCount = productCount <= 1 ? 1 : --productCount;
            productCounter.textContent = productCount;
        }
        if (e.target.classList.contains('product__quantity-control_inc')) {
            productCount = productCount < 0 ? 0 : ++productCount;
            productCounter.textContent = productCount;
        }
        if (e.target.classList.contains('product__add')) {
            let product = e.currentTarget,
                productId = product.getAttribute('data-id'),
                cartInnerItem = cart.querySelector(`[data-id="${productId}"]`);
            if (cartInnerItem) {
                let cartInnerItemCounter = cartInnerItem.querySelector('.cart__product-count');
                cartInnerItemCounter.textContent = parseInt(cartInnerItemCounter.textContent) + productCount;
            } else {
                let newCartItem = cartItem.cloneNode(true);
                newCartItem.setAttribute('data-id', productId);
                newCartItem
                    .querySelector('.cart__product-image')
                    .setAttribute('src', product.querySelector('.product__image').getAttribute('src'));
                newCartItem.querySelector('.cart__product-count').textContent = productCount;
                cart.appendChild(newCartItem);
            }
        }
    });


});