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


updateCartCount(); 
renderProducts(arr); 

showFive.onclick = () => {
    renderProducts(arr.slice(0, 5)); 
};
showAll.onclick = () => {
    renderProducts(arr); 
};


