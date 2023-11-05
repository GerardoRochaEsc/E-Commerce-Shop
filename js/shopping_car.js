//Bringing the localStorage object and parsing it to an array 
let productsInCart = localStorage.getItem("products-in-cart");
productsInCart = JSON.parse(productsInCart);

//DOM
const containerCartEmpty = document.querySelector("#cart-empty");
const containerCartProducts = document.querySelector("#cart-products");
const containerCartActions = document.querySelector("#cart-actions");
const containerCartPurchased = document.querySelector("#cart-purchased");
let deleteButtons = document.querySelectorAll("#cart-product-delete");
const emptyCartButton = document.querySelector("#cart-actions-empty");
const totalContainer = document.querySelector("#total");
const buyButton = document.querySelector("#cart-actions-buy");

//Functiopn that loas the products
function loadProducts(){
if(productsInCart && productsInCart.length > 0){ //Checking if the localStorage array is empty 

    containerCartEmpty.classList.add("disabled");
    containerCartProducts.classList.remove("disabled");
    containerCartActions.classList.remove("disabled");
    containerCartPurchased.classList.add("disabled");

    containerCartProducts.innerHTML = "";
    //Looping through every object in our productsInCart variable ([]) and creating
    //a div HTML label with the key values.
    productsInCart.forEach(product => { 

        const div = document.createElement("div");
        div.classList.add("cart-product");
        div.innerHTML = `
        <img class="cart-product-image" src="${product.image}" alt="${product.tittle}" />
        <div class="cart-product-tittle">
          <small>Tittle</small>
          <h3>${product.tittle}</h3>
        </div>
        <div class="cart-product-quantity">
          <small>Quantity</small>
          <p>${product.quantity}</p>
        </div>
        <div class="cart-product-price">
          <small>Price</small>
          <p>$${product.price}</p>
        </div>
        <div class="cart-product-subtotal">
          <small>Subtotal</small>
          <p>$${product.price * product.quantity}</p>
        </div>
        <button class="cart-product-delete" id="${product.id}"><i class="bi bi-trash-fill"></i></button>
        `;
        //Joining all the individual products into 1 with append()
        containerCartProducts.append(div);

    })


} else {
    
  containerCartEmpty.classList.remove("disabled");
  containerCartProducts.classList.add("disabled");
  containerCartActions.classList.add("disabled");
  containerCartPurchased.classList.add("disabled");

}
updateDeleteButtons();
updateTotal();
};

loadProducts();


//function to call the deleteFromCart and create an EventListener for every indiviual delete button bringing
//all the buttons with a class (.cart-product-delete)
function updateDeleteButtons(){
  deleteButtons = document.querySelectorAll(".cart-product-delete");

  deleteButtons.forEach((button) => {
      button.addEventListener("click", deleteFromCart);
  });
};

//Creating an idButton variable that gets the id from the individual delete button of each <div>
//then, that idButton is used to find a product with the same id in our productsInCart array
function deleteFromCart(e) {
    const idButton = e.currentTarget.id;
    const index = productsInCart.findIndex(product => product.id === idButton);
//Using splice() with the index that were we found our product and re loading the products
    productsInCart.splice(index, 1);
    loadProducts();

    localStorage.setItem("products-in-cart", JSON.stringify(productsInCart));
}

//Adding an EventListener to the emptyCartButtton
emptyCartButton.addEventListener("click", emptyShoopingCart);
function emptyShoopingCart(){

  productsInCart.length = 0;
  localStorage.setItem("products-in-cart", JSON.stringify(productsInCart));
  loadProducts();
}

//Function to update the total of the prices in our Shooping Cart together
function updateTotal(){
  const totalCalculated = productsInCart.reduce((counter, product) => counter + (product.price * product.quantity), 0);
  total.innerText = `$${totalCalculated}`;
}

//Adding our buyShoopingCart function, very similar to the deleteFromCart because we reiniciate our array and 
//we show our thank you message to the buyer
buyButton.addEventListener("click", buyShoopingCart);
function buyShoopingCart(){

  productsInCart.length = 0;
  localStorage.setItem("products-in-cart", JSON.stringify(productsInCart));

  containerCartEmpty.classList.add("disabled");
  containerCartProducts.classList.add("disabled");
  containerCartActions.classList.add("disabled");
  containerCartPurchased.classList.remove("disabled");
  
}
