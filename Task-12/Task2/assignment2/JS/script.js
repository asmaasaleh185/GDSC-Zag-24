function displayArticles() {
  fetch("JS/data.json")
    .then((response) => {
      // console.log(response)
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((articles) => {
      const firstFiveArticles = articles.slice(0, 5);
      firstFiveArticles.forEach((article) => {
        let div = document.createElement("div");
        let h3 = document.createElement("h3");
        h3.innerText = `${article.title}`;
        div.appendChild(h3);
        let p = document.createElement("p");
        p.innerText = `${article.description}`;
        div.appendChild(p);
        document.body.appendChild(div);
      });
    })
    .catch((error) => {
      console.log("Error fetching articles:", error.message);
    });
}

displayArticles();
