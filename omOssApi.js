
const contactSection = document.querySelector(".contact-section")

async function randomCatImg() {
  try {
    const response = await fetch("https://cataas.com/api/cats?tags=cute");
    const catData = await response.json();
    console.log(catData);

    const randomCatIndex = Math.floor(Math.random() * catData.length);
    const randomCat = catData[randomCatIndex];
    const catImgUrl = `https://cataas.com/cat/${randomCat._id}`;

    const catGif = document.createElement("img");
    catGif.src = catImgUrl;
    catGif.setAttribute("alt", "Cute cat");
    
    contactSection.appendChild(catGif);
  } catch (error) {
    console.error("An error occurred:", error);
  }
}
randomCatImg();

console.log(randomCatImg);
