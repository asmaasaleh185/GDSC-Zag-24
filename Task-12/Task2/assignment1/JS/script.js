function getArticles() {
  return new Promise((resolve, reject) => {
    const jsonData = [
      {
        userId: 10,
        title: "Article Title Number 1",
        description: "Article Description Number 1",
      },
      {
        userId: 5,
        title: "Article Title Number 2",
        description: "Article Description Number 2",
      },
      {
        userId: 5,
        title: "Article Title Number 3",
        description: "Article Description Number 3",
      },
      {
        userId: 5,
        title: "Article Title Number 4",
        description: "Article Description Number 4",
      },
      {
        userId: 5,
        title: "Article Title Number 5",
        description: "Article Description Number 5",
      },
      {
        userId: 5,
        title: "Article Title Number 6",
        description: "Article Description Number 6",
      },
      {
        userId: 25,
        title: "Article Title Number 7",
        description: "Article Description Number 7",
      },
      {
        userId: 25,
        title: "Article Title Number 8",
        description: "Article Description Number 8",
      },
      {
        userId: 15,
        title: "Article Title Number 9",
        description: "Article Description Number 9",
      },
      {
        userId: 15,
        title: "Article Title Number 10",
        description: "Article Description Number 10",
      },
    ];
    setTimeout(() => {
      if (jsonData.length > 0) {
        resolve(jsonData);
      } else {
        reject(Error("No Articles Found"));
      }
    }, 1000);
  });
}

function displayArticles() {
  getArticles()
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
    .catch((reject) => console.log(reject));
}

displayArticles();
