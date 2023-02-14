const link ="https://fakestoreapi.com/products";
let products=[];
let viewData=document.getElementById("viewData");


async function getProduct(){
    let response = await fetch(link);
    products = await response.json();
    console.log(products);
    display();
}

getProduct();

function display(){
    let data ='';
    products.forEach(product=>{
        data +=`
        <div class="col-md-3">
            <div class="card my-3">
                    <img src="${product.image}" class="card-img-top m-auto" alt="...">
                <div class="card-body">
                    <h5 class="">${product.title}</h5>
                    <p class="card-text">${product.description}</p>
                </div>
                <div class="info d-flex justify-content-around mt-2 py-2">
                    <span class="price d-inline">Price: ${product.price}$</span>
                    <span class="rate d-inline">Rating: ${product.rating.rate}</span>
                </div>
                <a href="#" class="btn btn-primary">Buy Now</a>
            </div>
        </div>
        `
    })
    viewData.innerHTML=data;
}