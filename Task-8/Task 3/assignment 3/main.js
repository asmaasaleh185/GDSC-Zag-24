window.onload = function(){
    let element = document.querySelector("div");
    let next = element.nextElementSibling;
    
    next.remove();
    
    let div1 = document.createElement("div");
    div1.textContent = "End";
    div1.className = "End";
    div1.setAttribute("title", "End Element");
    div1.setAttribute("data-value", "End");
    
    element.after(div1);

    let div2 = document.createElement("div");
    div2.textContent = "Start";
    div2.className = "start";
    div2.setAttribute("title", "Start Element");
    div2.setAttribute("data-value", "Start");

    element.before(div2);
}