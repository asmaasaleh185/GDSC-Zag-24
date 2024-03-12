for(let i = 1; i <= 10; i++){
    let element = document.createElement("div");
    let image = document.createElement("img");
    image.setAttribute("decoding", "async");
    image.setAttribute("src", "https://elzero.org/wp-content/themes/elzero/imgs/logo.png");
    image.setAttribute("alt", "Elzero Logo");

    element.appendChild(image);

    document.body.appendChild(element);
}