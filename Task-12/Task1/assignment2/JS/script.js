let request = new XMLHttpRequest();
request.open("GET", "JS/articles.json");
request.send();

request.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    let jsData = JSON.parse(this.responseText);
    for (let i = 0; i < jsData.length; i++) {
      console.log(jsData[i]);
    }
  }
};
request.onload = function(){
    console.log("Data Loaded");
}