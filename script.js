const container = document.querySelector('.container');
const showFive = document.getElementById('five');   
const showAll = document.getElementById('all');

function renderProducts(products) {
    container.innerHTML =''
    products.forEach(tovar => {
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
        addBtn.classList.add('added')
        
        addBtn.onclick = () => {
            addBtn.classList.toggle('add');
            addBtn.classList.toggle('added');
            addBtn.innerText = addBtn.classList.contains('add') ? 'Добавлено' : 'Добавить в корзину';
        }

        image.src = tovar.image;
        name.innerHTML = tovar.title;
        description.innerHTML = tovar.description;
        dolar.src = './images/dollar.svg';
        text.innerHTML = tovar.price;
        star.src = './images/star.svg';
        txt.innerHTML = tovar.rating.rate;
        box.src = './images/box.svg';
        tt.innerHTML = tovar.rating.count;
        addBtn.innerHTML = 'Добавить в корзину'; 

        price.append(dolar, text);
        stars.append(star, txt);
        dostavka.append(box, tt);
        details.append(price, stars, dostavka);
        firstSide.append(image);
        secondSide.append(name, description, details, addBtn);
        product.append(firstSide, secondSide);
        
        container.append(product);
    });
}

renderProducts(arr);

showFive.onclick = () => {
    renderProducts(arr.slice(0, 5));
}
showAll.onclick = () => {
    renderProducts(arr);
}