const cartCounter = document.querySelector('.cart__counter');

if (cartCounter.textContent != "0") {
    cartCounter.classList.add('_active');
} else {
    cartCounter.classList.remove('_active');
}


function сartCounterPlus() {
    cartCounter.textContent = parseInt(cartCounter.textContent) + 1;

    cartCounter.classList.add('_active');
}

function сartCounterMinus() {
    cartCounter.textContent = parseInt(cartCounter.textContent) - 1;

    if (parseInt(cartCounter.textContent) < 1) {
        cartCounter.classList.remove('_active');

        // window.location.reload();
    } 
}

const itemCounters = document.querySelectorAll('.item__btns');

if (itemCounters.length > 0) {
    for (let counters of itemCounters) {
        counters.addEventListener("click", (e) => {
            if (e.target.classList.contains('js-plus')) {
                let text = e.target.previousElementSibling;
                
                let num = parseInt(text.textContent);

                text.textContent = ++num;
                console.log(text);
            } else if (e.target.classList.contains('js-minus')) {
                let text = e.target.nextElementSibling;

                let num = parseInt(text.textContent);

                
                if (num > 1) {
                    text.textContent = --num;
                } else {
                    window.location.reload();                  
                }
            }

            reloadTotalPrice();
        })
    }
}

function reloadTotalPrice() {
    const totalPrice = document.querySelector('.price--int');

    let totalPriceNum = 0;

    const items = document.querySelectorAll('.item');
    
    for (let item of items) {
        const price = item.querySelector('.item__price--int');
        let priceNum = parseInt(price.textContent);
        
        const count = item.querySelector('.item__counter');
        let countNum = parseInt(count.textContent);
        
        totalPriceNum += (priceNum * countNum);       
    }

    totalPrice.textContent = totalPriceNum;
}


function addToCart(itemId) {
    $.post('/functions/add_to_cart.php', {id: String(itemId)}, function(data){});

    // window.location.reload();
    сartCounterPlus(); 
}

function deleteFromCart(itemId) {
    $.post('/functions/delete_from_cart.php', {id: String(itemId)}, function(data){});

    window.location.reload();
}

function cartPlus(itemId) {
    $.post('/functions/cart_plus.php', {id: String(itemId)}, function(data){});

    // window.location.reload();
    сartCounterPlus();
}

function cartMinus(itemId) {
    $.post('/functions/cart_minus.php', {id: String(itemId)}, function(data){});

    // window.location.reload();
    сartCounterMinus();
}