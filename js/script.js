
const imagenes = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
]
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
