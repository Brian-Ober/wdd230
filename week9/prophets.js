// ASYNC AWAIT FETCH

const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

async function getProphets(requestURL) {
    const response = await fetch(requestURL);
    console.log(response);
    if (response.ok) {
        const jsObject = await response.json();
        console.log(jsObject);
        const prophets =jsObject['prophets'];
        console.log(prophets[0].lastname);
        prophets.forEach(displayProphets);
    }
}

getProphets(requestURL);

function displayProphets(item) {
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let image =document.createElement('img');
    let birthdate = document.createElement('p');
    let birthplace = document.createElement('p');
    let death = document.createElement('p');
    let order = document.createElement('p');
    let length = document.createElement('p');
    let children = document.createElement('p');

    image.setAttribute('src', item.imageurl);
    image.setAttribute('alt', item.name + ' ' + item.lastname);

    h2.textContent = item.name + ' ' +item.lastname;
    birthdate.textContent = "Birthdate " + item.birthdate;
    birthplace.textContent = item.birthplace;
    death.textContent = "Date of Death " + item.death;
    order.textContent = "Order " +item.order;
    length.textContent = "Length as prophet " + item.length + " years";
    children.textContent = "Number of children " + item.numofchildren;
    

    card.appendChild(h2);
    card.appendChild(order);
    card.appendChild(birthdate);
    card.appendChild(birthplace);
    card.appendChild(death);
    card.appendChild(length);
    card.appendChild(children);
    card.appendChild(image);
    document.querySelector('.cards').appendChild(card);
}