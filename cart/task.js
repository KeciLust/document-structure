const dec = Array.from(document.querySelectorAll(`.product__quantity-control_dec`));
const inc = Array.from(document.querySelectorAll(`.product__quantity-control_inc`));
const add = Array.from(document.querySelectorAll(`.product__add`));
const value = Array.from(document.querySelectorAll(`.product__quantity-value`));
const cart = document.querySelector(`.cart__products`);
const cartAll = document.querySelector(`.cart`);
const product = Array.from(document.querySelectorAll(`.product`));
let remove = [];
dec.forEach((el, i) => {
    el.addEventListener(`click`, () => {
        if (value[i].textContent > 1) {
            --value[i].textContent;
        }
    });
});
inc.forEach((el, i) => {
    el.addEventListener(`click`, () => value[i].textContent++);
});
add.forEach((el, i) => {
el.addEventListener(`click`, () => {
    if(cart.children.length === 0){
        
        cartAll.classList.remove(`cart-none`);        
        cart.innerHTML +=`
        <div class="cart__product" data-id="${product[i].dataset.id}">
                <img class="cart__product-image" src="${product[i].querySelector(`img`).src}">
                <div class="cart__product-count">${product[i].querySelector(`.product__quantity-value`).textContent}</div>
                <div class="cart__product-remove">&times</div>
            </div>
        `;
        remove = Array.from(document.querySelectorAll(`.cart__product-remove`));
        
    }else {
        const cartId = Array.from(cart.querySelectorAll(`.cart__product`));
         const id = cartId.findIndex(elem => elem.dataset.id === product[i].dataset.id);
         if(id >- 1){
             cartId[id].querySelector(`.cart__product-count`).textContent = value[i].textContent;
         }else {
             
            cart.innerHTML +=`
            <div class="cart__product" data-id="${product[i].dataset.id}">
                    <img class="cart__product-image" src="${product[i].querySelector(`img`).src}">
                    <div class="cart__product-count">${product[i].querySelector(`.product__quantity-value`).textContent}</div>
                    <div class="cart__product-remove">&times</div>
                </div>
            `;
            remove = Array.from(document.querySelectorAll(`.cart__product-remove`));

         }
        }
        remove.forEach((el, i) => {
            el.addEventListener(`click`, () => {
                console.log(cart__products[1])
            })
        } )
    });
});


