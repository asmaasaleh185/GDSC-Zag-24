window.onload = function(){
    let addInput = document.querySelector(".classes-to-add");
    let removeInput = document.querySelector(".classes-to-remove");
    let classesListDiv = document.querySelector('.classes-list div');
    let currentDiv = document.querySelector(".current");

    function updatedClass(){
        classesListDiv.innerHTML = '';
        let classes = currentDiv.className.split(" ").sort();
        // console.log(classes)
        if(currentDiv.classList.length === 0){
            classesListDiv.textContent = "No Classes To Show";
        }
        else {
            classes.forEach(className => {
                let span = document.createElement("span");
                span.textContent = className;
                classesListDiv.appendChild(span);
            });
        }
    }
    function addClass(event){
        let classToAdd = event.target.value.toLowerCase().split(/\s+/);
        classToAdd.forEach(className => {
            if (className){
                currentDiv.classList.add(className);
            }
        });
        event.target.value = '';
        updatedClass();
    }
    function removeClass(event){
        let classToRemove = event.target.value.toLowerCase().split(/\s+/);
        classToRemove.forEach(className => {
            if (className) {
                currentDiv.classList.remove(className);
            }
        });
        event.target.value = '';
        updatedClass();
    }
    addInput.addEventListener('blur', addClass);
    removeInput.addEventListener('blur', removeClass);
}