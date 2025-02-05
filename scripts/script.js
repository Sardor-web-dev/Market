const container = document.querySelector('.container');
const showFive = document.getElementById('five');   
const showAll = document.getElementById('all');
const countText = document.querySelector('.count p'); 
const CartWindow = document.querySelector(".cart");
const CartBtn = document.getElementById("cartBtn");
const texts = document.querySelector(".texts");
const Close = document.getElementById("close")
let CartList = document.querySelector(".list");

let cartCount = 0;
let cart = [];

CartBtn.onclick = () => {
    CartWindow.classList.add('cart_active');
    texts.style.display = "flex";
    CartList.style.display = "grid";
};

Close.onclick = () => {
    CartWindow.classList.remove('cart_active');
    texts.style.display = "none";
    CartList.style.display = "none";

};

document.onclick = (e) => {
    if (!CartWindow.contains(e.target) && e.target !== CartBtn) {
        CartWindow.classList.remove('cart_active');
    texts.style.display = "none";
    CartList.style.display = "none";

    }
};
function renderCart() {
    CartList.innerHTML = ''; 
    for (let cartProduct of cart) {
        const product = document.createElement('div');
        product.classList.add('product');

        const firstSide = document.createElement('div');
        firstSide.classList.add('first_side');
        // firstSide.style.width = '72,8px';
        // firstSide.style.height = '39,8px';
        const image = document.createElement('img');
        image.src = cartProduct.image;
        firstSide.append(image);

        const secondSide = document.createElement('div');
        secondSide.classList.add('second_side');
        // secondSide.style.width = '72,8px';
        // secondSide.style.height = '55px';
        const name = document.createElement('p');
        name.innerHTML = cartProduct.title;
        const description = document.createElement('span');
        description.classList.add('description');
        description.innerHTML = cartProduct.description;

        const price = document.createElement('div');
        price.classList.add('price');
        const dolar = document.createElement('img');
        dolar.src = './images/dollar.svg';
        const text = document.createElement('span');
        text.innerHTML = cartProduct.price;
        price.append(dolar, text);

        secondSide.append(name, description, price);
        product.append(firstSide, secondSide);
        CartList.append(product);
    }
}

function updateCartCount() {
    countText.innerHTML = `В корзине: ${cartCount} ${cartCount > 1 ? 'товара' : 'товар'}`;
};

function renderProducts(products) {
    container.innerHTML = '';
    for(let tovar of products) {
            const product = document.createElement('div');
            const firstSide = document.createElement('div');
            const image = document.createElement('img');
            const secondSide = document.createElement('div');
            const name = document.createElement('p');
            const description = document.createElement('span');
            const details = document.createElement('div');
            const price = document.createElement('div');
            const dolar = document.createElement('img');
            const text = document.createElement('span');
            const stars = document.createElement('div');
            const star = document.createElement('img');
            const txt = document.createElement('span');
            const dostavka = document.createElement('div');
            const box = document.createElement('img');
            const tt = document.createElement('span');
            const addBtn = document.createElement('button');
            
            product.classList.add('product');
            firstSide.classList.add('first_side');
            secondSide.classList.add('second_side');
            description.classList.add('description');
            details.classList.add('details');
            price.classList.add('price');
            text.classList.add('details_text');
            stars.classList.add('stars');
            txt.classList.add('details_text');
            dostavka.classList.add('dostavka');
            tt.classList.add('details_text');
            addBtn.classList.add('added');
    
            const isAdded = cart.some(item => item.id === tovar.id);
            if (isAdded) {
                addBtn.innerText = 'Добавлено';
                addBtn.classList.remove('add');
                addBtn.classList.add('added');
            } else {
                addBtn.innerText = 'Добавить в корзину';
                addBtn.classList.remove('added');
                addBtn.classList.add('add');
            }
    
            addBtn.onclick = () => {
                if (addBtn.classList.contains('add')) {
                    addBtn.innerText = 'Добавлено';
                    addBtn.classList.remove('add');
                    addBtn.classList.add('added');
                    cart.push(tovar); 
                    cartCount++; 
                } else {
                    addBtn.innerText = 'Добавить в корзину';
                    addBtn.classList.remove('added');
                    addBtn.classList.add('add');
                    cart = cart.filter(item => item.id !== tovar.id); 
                    cartCount--; 
                }
                updateCartCount(); 
                renderCart();
            };
    
    
            image.src = tovar.image;
            name.innerHTML = tovar.title;
            description.innerHTML = tovar.description;
            dolar.src = './images/dollar.svg';
            text.innerHTML = tovar.price;
            star.src = './images/star.svg';
            txt.innerHTML = tovar.rating.rate;
            box.src = './images/box.svg';
            tt.innerHTML = tovar.rating.count;
    
            price.append(dolar, text);
            stars.append(star, txt);
            dostavka.append(box, tt);
            details.append(price, stars, dostavka);
            firstSide.append(image);
            secondSide.append(name, description, details, addBtn);
            product.append(firstSide, secondSide);
    
            container.append(product);
    }
};

updateCartCount(); 
renderProducts(arr); 

showFive.onclick = () => {
    renderProducts(arr.slice(0, 5)); 
};
showAll.onclick = () => {
    renderProducts(arr); 
};


