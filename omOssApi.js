

const randomCatSection = document.querySelector(".randomCat-section");

async function randomCatImg() {
    try {
      const response = await fetch("https://cataas.com/api/cats?tags=cute");
      const catData = await response.json();
      console.log(catData);
      
       const catImgUrl = catData[0].url;

      const catGif = document.createElement("img");
      catGif.src = catImgUrl;
      randomCatSection.appendChild(catGif);
  
  
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }
     randomCatImg();
  