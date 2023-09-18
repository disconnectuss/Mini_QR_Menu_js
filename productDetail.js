import menu from './db.js'
// product details will be shown here 
const ProDetail = document.getElementById("pro-detail");
//console.log(ProDetail)
    
    //searching parameters
    const searchParams = new URLSearchParams(window.location.search);
//console.log(searchParams);
    // fetching the id of parameters
    const paramId = searchParams.get('id')
//console.log(paramId)
    // reaching id
    const found = menu.find(card => card.id == paramId)// coz of string in 'id'
    //console.log(found)
    const productCategory = document.getElementById('pro-category')
    //console.log('progetirlidi')
    const product = document.getElementById('pro-title').innerText = `
    Gimme A Taste Menu/ ${found.category}/ Yummy ${found.title} `;

    //console.log('gimme a tas')
    

    // getting the html of the product
    ProDetail.innerHTML= `<div id="pro-detail"
    class="container my-5 d-flex flex-column gap-4"
    style="max-width: 300px; max-height:200px">
    <p class="pro-title text-bg-info text-center" style="font-size:20px">${found.title}</p>
    <img class="pro-img rounded shadow" src="${found.img}" alt="" >
    <p class="pro-price text-end text-success">${found.price}</p>
    <p class="pro-description">${found.desc}</p>
</div>`;


    