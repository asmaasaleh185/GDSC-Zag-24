function saveData(){
    let input1 = document.getElementsByClassName("input1")[0].value;
    let input2 = document.getElementsByClassName("input2")[0].value;
    let input3 = document.getElementsByClassName("input3")[0].value;
    let option = document.getElementById("selectBox").value;

    sessionStorage.setItem("user_name", input1);
    sessionStorage.setItem("email", input2);
    sessionStorage.setItem("password", input3);
    sessionStorage.setItem("address", option);
}

function loadData(){
    if (sessionStorage.getItem("user_name")) {
        document.getElementsByClassName("input1")[0].value = sessionStorage.getItem("user_name");
    }
    if (sessionStorage.getItem("email")) {
        document.getElementsByClassName("input2")[0].value = sessionStorage.getItem("email");
    }
    if (sessionStorage.getItem("password")) {
        document.getElementsByClassName("input3")[0].value = sessionStorage.getItem("password");
    }
    if (sessionStorage.getItem("address")) {
        document.getElementById("selectBox").value = sessionStorage.getItem("address");
    }


}



document.getElementsByClassName("input1")[0].addEventListener("input", saveData);
document.getElementsByClassName("input2")[0].addEventListener("input", saveData);
document.getElementsByClassName("input3")[0].addEventListener("input", saveData);
document.getElementById("selectBox").addEventListener("input", saveData);


window.onload = loadData;
