const services = [
  { service: "Kloklippning", image: "Kloklippning.jpg", price: 150 },
  { service: "Pälsvård", image: "Pälsvårdad.jpg", price: 200 },
  { service: "Umgås med kammen", image: "Redo för att kammas.jpg", price: 50 },
];
const shoppingCart = [];
const cartSection = document.querySelector(".customerCart-section");
const productSection = document.querySelector(".product-section");
const addOrRemoveSection = document.querySelector(".addOrRemove-section");

for (const service of services) {
  const productCard = document.createElement("div");
  productCard.classList.add("product-card");

  const productImage = document.createElement("img");

  productImage.src = service.image;
  productImage.setAttribute("alt", "Cute cat");
  const productName = document.createElement("h3");
  productName.textContent = service.service;

  const productPrice = document.createElement("p");
  productPrice.textContent = service.price + ":-";

  productCard.appendChild(productImage);
  productCard.appendChild(productName);
  productCard.appendChild(productPrice);
  productSection.appendChild(productCard);
}
function updateCartList() {
  cartSection.innerHTML = "";
  for (const item of shoppingCart) {
    const productDiv = document.createElement("div");
    productDiv.id = item.service.replace(/\s+/g, "-").toLowerCase();
    productDiv.textContent = `${item.service} ${item.price}:- `;
    cartSection.appendChild(productDiv);
  }
}
function addToCart(product) {
  shoppingCart.push(product);
  updateCartList();
}
function removeFromCart(productName) {
  const indexToRemove = shoppingCart.findIndex(
    (product) => product.service === productName
  );

  if (indexToRemove !== -1) {
    shoppingCart.splice(indexToRemove, 1);
    updateCartList();
  } else {
    console.log("Produkten finns inte i kundvagnen.");
  }
}
const addFurCare = document.getElementById("add-pälsvård");
const addNailClipping = document.getElementById("add-kloklippning");
const addPlayTime = document.getElementById("add-umgåsMedKam");
const removeFurCare = document.getElementById("remove-pälsvård");
const removeNailClipping = document.getElementById("remove-kloklippning");
const removePlayTime = document.getElementById("remove-umgåsMedKam");
addFurCare.addEventListener("click", () => {
  const addProduct = {
    service: "Pälsvård",
    image: "Pälsvårdad.jpg",
    price: 200,
  };
  addToCart(addProduct);
});
addNailClipping.addEventListener("click", () => {
  const addProduct = {
    service: "Kloklippning",
    image: "Kloklippning.jpg",
    price: 150,
  };
  addToCart(addProduct);
});
addPlayTime.addEventListener("click", () => {
  const addProduct = {
    service: "Umgås med kammen",
    image: "Redo för att kammas.jpg",
    price: 50,
  };
  addToCart(addProduct);
});
removeFurCare.addEventListener("click", () => {
  removeFromCart("Pälsvård");
});

removeNailClipping.addEventListener("click", () => {
  removeFromCart("Kloklippning");
});

removePlayTime.addEventListener("click", () => {
  removeFromCart("Umgås med kammen");
});
console.log(shoppingCart);
