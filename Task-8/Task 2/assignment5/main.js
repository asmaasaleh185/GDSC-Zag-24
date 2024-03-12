for(let i = 0; i < 5 ; i++){
    let element = document.getElementsByTagName("img")[i];
    if (element.hasAttribute("alt") === false){
        element.setAttribute("alt", "Elzero New")
    }
    else{
        element.setAttribute("alt", "Old");
    }
}
