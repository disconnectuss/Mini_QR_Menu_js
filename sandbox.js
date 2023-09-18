import menu from './db.js'
import { buttonsData } from './db.js';

// HTML babies
const menuContainer = document.getElementById("menu-container")
const btnArea = document.getElementById('btn-area')

document.addEventListener('DOMContentLoaded', () => { // arrow usage if there are more than a function use bracelets
    displayMenuCards(menu);
    showButtons('all');
})
//fuction for displaying menu items
function displayMenuCards(menuCards) {
// create an Html for each object and turn it to an array
let displayMenu = menuCards.map(
    (card) => `
    <a href="/productDetail.html?id=${card.id}" id="card" class="menu-card d-flex flex-wrap gap-3 flex-column flex-md-row text-decoration-none text-dark">
                <img class="rounded shadow" src=${card.img} alt="">
                <div>
                    <div class="d-flex justify-content-between">
                        <h2>${card.title}</h2>
                        <p class="text-success">${card.price}</p>
                    </div>
                    <p>${card.desc}</p>
                </div>
        </a>`
);
 displayMenu = displayMenu.join('') //join method is for removing coommas and making html from array

// sending menu cards to Html
menuContainer.innerHTML = displayMenu;

}

// fetching buttons from Html
btnArea.addEventListener('click', searchCategory )

//function for clicked buttons and displaying accordig to the categories
function searchCategory(e){
    const cardCategory = e.target.dataset.category
// displaying filtered cards
    const filterredItem = menu.filter((menuItem) => menuItem.category === cardCategory);
if(cardCategory === "all"){
    displayMenuCards(menu)
     return; // makes the function stop or use else 
} 
displayMenuCards(filterredItem)

showButtons(cardCategory)

}

function showButtons (active){
       // clear showbuttons function
    btnArea.innerHTML ='';
    buttonsData.forEach((btn) => {
        // constructing an html button
        const buttonItem = document.createElement('button');
        // adding class to buttons
        buttonItem.className = 'btn btn-outline-dark filter-btn'
        // changing the text
        buttonItem.innerText = btn.text
        // defining the data of button
        buttonItem.dataset.category = btn.data
     
     // for active class
     if (buttonItem.dataset.category === active){
        buttonItem.classList.add('bg-dark');
        buttonItem.classList.add('text-light');
    }
    
        // sending buttons to html
       btnArea.appendChild(buttonItem)
})
   
}
