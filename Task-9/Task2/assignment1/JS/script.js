function applyOptions(){
    let font = localStorage.getItem("fontType") || "Open Sans";
    let color = localStorage.getItem("fontColor") || "Black";
    let size = localStorage.getItem("fontSize") || "16";

    document.body.style.fontFamily = font;
    document.body.style.color = color;
    document.body.style.fontSize = `${size}px`;

    document.getElementById("fontType").value = font;
    document.getElementById("fontColor").value = color;
    document.getElementById("fontSize").value = size;
}
function savechanges(){
    let font = document.getElementById("fontType").value;
    let color = document.getElementById("fontColor").value;
    let size = document.getElementById("fontSize").value;
    localStorage.setItem('fontType', font);
    localStorage.setItem('fontColor', color);
    localStorage.setItem('fontSize', size);
    applyOptions();
}

window.onload = applyOptions;

document.getElementById("fontType").addEventListener("change", savechanges);
document.getElementById("fontColor").addEventListener("change", savechanges);
document.getElementById("fontSize").addEventListener("change", savechanges);