// Product Controller - It is a Glue B/w View and Model
// Controller - I/O View Layer

import productOperations from "../services/product-operations.js";

// Data Exchange B/w View and Model.
async function loadPizzas(){
    const pizzas = await productOperations.loadProducts();
    console.log('Pizzas are ', pizzas);
    for(let pizza of pizzas){
        preparePizzaCard(pizza);
    }
}
loadPizzas();

/*
 <div class="col-4">
                  <div class="card" style="width: 18rem;">
                    <img src="..." class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>
                  </div>
*/

function preparePizzaCard(pizza){
    const outputDiv = document.querySelector('#output');
    const colDiv = document.createElement('div');
    colDiv.className = 'col-4';
    const cardDiv = document.createElement('div');
    cardDiv.className = 'card';
    cardDiv.style = "width: 18rem;";
    colDiv.appendChild(cardDiv);
    const img = document.createElement('img');
    img.src = pizza.url;
    img.className = 'card-img-top';
    cardDiv.appendChild(img);
    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';
    cardDiv.appendChild(cardBody);
    const h5 = document.createElement('h5');
    h5.className = 'card-title';
    h5.innerText = pizza.name;
    const pTag = document.createElement('p');
    pTag.className = 'card-text';
    pTag.innerText = pizza.desc;
    const button = document.createElement('button');
    button.setAttribute('product-id', pizza.id);
    button.addEventListener('click',addpizzaToCart);
    button.innerText = 'Add to Cart';
    button.className = 'btn btn-primary';
    cardBody.appendChild(h5);
    cardBody.appendChild(pTag);
    cardBody.appendChild(button);
    outputDiv.appendChild(colDiv);
    return outputDiv;
}

function addpizzaToCart(){
  const pizzaId = this.getAttribute('product-id');
  console.log('Current Button Clicked ', pizzaId);
  const pizza =productOperations.searchProducts(pizzaId);
  console.log('Pizza ', pizza);
  pizza.isAddedInCart = !pizza.isAddedInCart;
  if(pizza.isAddedInCart){
      this.className = 'btn btn-danger';
      this.innerText = 'Remove from Cart';
      productOperations.addToCart(pizza);
    }
    else{
        this.className = 'btn btn-primary';
        this.innerText = 'Add in Cart';
        productOperations.removeFromCart(pizza);
    }
    printCart();

}

