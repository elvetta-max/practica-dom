
const imagenes = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
]

let random = Math.floor((Math.random() * 5) + 1)

const welcomeImgContainer = document.querySelector("#welcomeImgContainer")
const mainImg = document.createElement('img')
mainImg.src = `assets/${random}.jpg`;
mainImg.id = "mainImg";
mainImg.title = "titulo de imagen";
mainImg.alt="es una imagen";

welcomeImgContainer.append(mainImg);





const discover = document.querySelector("#discover")
const fragment = document.createDocumentFragment()



imagenes.forEach((imagen, indice) => {
    const img = document.createElement('img');
    img.src = 'assets/' + imagen;
    img.alt = "Imagen" + indice;
    img.title = "Titulo" + indice;
    img.className = "discoverItem"
    fragment.append(img)
})

discover.append(fragment);
