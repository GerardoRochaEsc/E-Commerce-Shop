//Global variables
const ALL_THE_PRODUCTS= "All the products";


//Products: Adding our object-product array with every product that I want to add to my shop
const products = [
    //Coats
    {
        id: "coat-01",
        tittle: "Cout 01",
        image:"./img/coats/01.jpg",
        category:{
            name: "Coats",
            id: "coats"
        },
        price:1025
    },
    {
        id: "coat-02",
        tittle: "Cout 02",
        image:"./img/coats/02.jpg",
        category:{
            name: "Coats",
            id: "coats"
        },
        price: 667
    },
    {
        id: "coat-03",
        tittle: "Cout 03",
        image:"./img/coats/03.jpg",
        category:{
            name: "Coats",
            id: "coats"
        },
        price: 545
    },
    {
        id: "coat-04",
        tittle: "Cout 04",
        image:"./img/coats/04.jpg",
        category:{
            name: "Coats",
            id: "coats"
        },
        price: 1055
    },
    {
        id: "coat-05",
        tittle: "Cout 05",
        image:"./img/coats/05.jpg",
        category:{
            name: "Coats",
            id: "coats"
        },
        price: 1100
    },
    {
        id: "coat-06",
        tittle: "Cout 06",
        image:"./img/coats/06.jpg",
        category:{
            name: "Coats",
            id: "coats"
        },
        price:1025
    },
    //T-shirts
    {
        id: "tshirt-01",
        tittle: "Tshirt 01",
        image: "./img/tshirts/01.jpg",
        category:{
            name: "Tshirts",
            id: "tshirts",
        },
        price:400
    },
    {
        id: "tshirt-02",
        tittle: "Tshirt 02",
        image: "./img/tshirts/02.jpg",
        category:{
            name: "Tshirts",
            id: "tshirts",
        },
        price:225
    },
    {
        id: "tshirt-03",
        tittle: "Tshirt 03",
        image: "./img/tshirts/03.jpg",
        category:{
            name: "Tshirts",
            id: "tshirts",
        },
        price:350
    },
    {
        id: "tshirt-04",
        tittle: "Tshirt 04",
        image: "./img/tshirts/04.jpg",
        category:{
            name: "Tshirts",
            id: "tshirts",
        },
        price:300
    },
    {
        id: "tshirt-05",
        tittle: "Tshirt 05",
        image: "./img/tshirts/05.jpg",
        category:{
            name: "Tshirts",
            id: "tshirts",
        },
        price:420
    },
    {
        id: "tshirt-06",
        tittle: "Tshirt 06",
        image: "./img/tshirts/06.jpg",
        category:{
            name: "Tshirts",
            id: "tshirts",
        },
        price:250
    },
    {
        id: "tshirt-07",
        tittle: "Tshirt 07",
        image: "./img/tshirts/07.jpg",
        category:{
            name: "Tshirts",
            id: "tshirts",
        },
        price:250
    },
    {
        id: "tshirt-08",
        tittle: "Tshirt 08",
        image: "./img/tshirts/08.jpg",
        category:{
            name: "Tshirts",
            id: "tshirts",
        },
        price:250
    },
    //Pants
    {
        id: "pant-01",
        tittle: "Pant 01",
        image: "./img/pants/01.jpg",
        category:{
            name: "Pants",
            id: "pants",
        },
        price:780
    },
    {
        id: "pant-02",
        tittle: "Pant 02",
        image: "./img/pants/02.jpg",
        category:{
            name: "Pants",
            id: "pants",
        },
        price:520
    },
    {
        id: "pant-03",
        tittle: "Pant 03",
        image: "./img/pants/03.jpg",
        category:{
            name: "Pants",
            id: "pants",
        },
        price:600
    },
    {
        id: "pant-04",
        tittle: "Pant 04",
        image: "./img/pants/04.jpg",
        category:{
            name: "Pants",
            id: "pants",
        },
        price:540
    },
    {
        id: "pant-05",
        tittle: "Pant 05",
        image: "./img/pants/05.jpg",
        category:{
            name: "Pants",
            id: "pants",
        },
        price:810
    },
];

//DOM
const productContainer = document.querySelector("#product-container");
const buttonsCategory = document.querySelectorAll(".button-category");
const mainTittle = document.querySelector("#main-tittle");
let addButtons = document.querySelectorAll(".product-added");
const cartNumber = document.querySelector("#number");

//Function to create my html objects
function loadProducts(chosenProducts){

    productContainer.innerHTML="";

    chosenProducts.forEach(product => {

        const div = document.createElement("div");
        div.classList.add("product");
        div.innerHTML = `
        <img class="product-image" src="${product.image}" alt="${product.tittle}">
        <div class="product-details">
          <h3 class="product-tittle">${product.tittle}</h3>
          <p class="product-price">$${product.price}</p>
          <button class="product-added" id="${product.id}">Add</button>
        </div>
        `;
        productContainer.append(div);
    })
    //We add this function because we are inicializating the list without values on top, so we need to update the info
    updateAddButtons();
    // console.log(AddButtons);
};

loadProducts(products);

//Event Listener to add the active class to our current active button using a forEach()
//to loop between our .button-menu category
buttonsCategory.forEach(button => {
    button.addEventListener("click",(e) =>{
        //Here I am using another forEach because I have to remove the active status to all the buttons before
        //adding a new one, otherwise every clicked button is gonna be active.
        buttonsCategory.forEach(button => button.classList.remove("active"));
        //Here .currentTarget is used because if you just use a target and you click on top of the icon
        //The event is not going to run 
        e.currentTarget.classList.add("active");

        if(e.currentTarget.id !="all"){
            const productCategory = products.find(product => product.category.id === e.currentTarget.id)
            console.log(productCategory)
            mainTittle.innerText = productCategory.category.name;;

            const productsButton = products.filter(product => product.category.id === e.currentTarget.id);
            loadProducts(productsButton);
        } else {
            mainTittle.innerText = ALL_THE_PRODUCTS;
            loadProducts(products);
        }

    })
});

//On this function I am linking my variable with the buttons class .product-added and we are giving each of them using a 
//forEach(), an Event listener and a function addToTheCart
function updateAddButtons(){
    addButtons = document.querySelectorAll(".product-added");
    addButtons.forEach((button) => {
        button.addEventListener("click", addToTheCart);
    });
};

//Declaring our products cart empty array
let productsInCart;

let productsInCartLS = localStorage.getItem("products-in-cart");


if(productsInCartLS){
    productsInCart = JSON.parse(productsInCartLS);
    updateCartNumber();
} else {
    productsInCart=[];
}

//On this function first we create an (idButtton) variable that is going to recieve a click (e) that links the function with 
//the button's product id (e.currentTarget.id), then there is another variable initialization (addedProduct) that uses fin() ith
//an arrow function to an element of our main array (products)("list of objects") that has the same id as the button id that I press
function addToTheCart(e){

    const idButton = e.currentTarget.id;
    const addedProduct = products.find(product => product.id === idButton);
    
    //If statement using some() returns true if the product's(objects) id is duplicated in the productsInCart array and false if it is not.
    if(productsInCart.some(product => product.id === idButton)){
        const index = productsInCart.findIndex(product => product.id === idButton);
        productsInCart[index].quantity++;
    } else {
    //Here I am adding push() the object that matches product and button's id to our empty array that we created before
    addedProduct.quantity = 1;
    productsInCart.push(addedProduct);
    }
    updateCartNumber();
    
    localStorage.setItem("products-in-cart", JSON.stringify(productsInCart));
};

//Function to update the cart number <span> beside the shooping cart icon
function updateCartNumber(){
    let newcartNumber = productsInCart.reduce((counter, product) => counter + product.quantity, 0);
    cartNumber.innerText = newcartNumber;
}
