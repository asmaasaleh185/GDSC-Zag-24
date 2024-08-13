let div = document.querySelector("div");
let counter = div.innerText;
let counterInterval = setInterval(function(){
    if(counter > 0){
        counter--;
        div.textContent = counter;
    }
    else{
        clearInterval(counterInterval);
    }
},1000);