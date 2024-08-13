function showPopup() {
    let content = `
            <div id="popup">
                <h1>Welcome</h1>
                <p>Welcome Ro Elzero Web School</p>
                <button>x</button>
            </div>
        `;
    document.body.innerHTML = content;
    closePopup();
}
function closePopup() {
        document.querySelector("#popup button").addEventListener("click", function () {
        document.querySelector("#popup").style.display = "none";
    });
}

setTimeout(showPopup, 5000);
