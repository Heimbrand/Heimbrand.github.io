const services = [
  { service: "Kloklippning", image: "Kloklippning.jpg", price: 150 },
  { service: "Pälsvård", image: "Pälsvårdad.jpg", price: 200 },
  { service: "Umgås med kammen", image: "Redo för att kammas.jpg", price: 50 },
];

const myServices = document.querySelector(".product-section");

for (const service of services) {


  const productCard = document.createElement("div");
  productCard.classList.add("product-card");

  const productImage = document.createElement("img");
  productImage.src = service.image;

  const productName = document.createElement("h3");
  productName.textContent = service.service;

  const productPrice = document.createElement("p");
  productPrice.textContent = service.price + ":-";

  productCard.appendChild(productImage);
  productCard.appendChild(productName);
  productCard.appendChild(productPrice);
  myServices.appendChild(productCard);


}