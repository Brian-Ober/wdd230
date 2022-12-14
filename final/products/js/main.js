const requestURL = 'https://brian-ober.github.io/wdd230/final/products/products.json';

async function getProducts(requestURL) {
    const response = await fetch(requestURL);
    console.log(response);
    if (response.ok) {
        const jsObject = await response.json();
        console.log(jsObject);
        const products =jsObject['Products'];
        console.log(products[0].flagname);
        products.forEach(displayProducts);
    }
}
getProducts(requestURL);

const date_now = new Date();
console.log(date_now)
const full_date = new Intl.DateTimeFormat('en-US', { dateStyle: 'full'}).format(date_now)
console.log(full_date)
document.querySelector('.dateformat').textContent = full_date;

function displayProducts(item) {
    let card = document.createElement('section');
    let image = document.createElement('img');
    let title = document.createElement('p');
    image.setAttribute('src', item.flag);
    image.setAttribute('alt', item.flagname);
    title.textContent = item.flagname;

    card.appendChild(image);
    card.appendChild(title);
    document.querySelector('#catalogue').appendChild(card);
}

function togglemenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}

let date = new Date();
let year = date.getFullYear();

document.querySelector('.year').textContent = year;

let updated = document.lastModified;
document.querySelector('.lastupdated').textContent = updated;

function hiddenview(event) {
    document.querySelector('#hiddenform').style.display = "grid";
    document.querySelector('#catalogue').style.display = "none";
}
document.querySelector("#goblinflag").addEventListener("click", hiddenview);