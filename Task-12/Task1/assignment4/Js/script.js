let jsonData = `[
    {
        "id": 1,
        "title": "Title 1",
        "content": "Article Number 1 Content",
        "category": "Science",
        "author": "John Doe"
    },
    {
        "id": 2,
        "title": "Title 2",
        "content": "Article Number 2 Content",
        "category": "Technology",
        "author": "John Doe"
    },
    {
        "id": 3,
        "title": "Title 3",
        "content": "Article Number 3 Content",
        "category": "Sports",
        "author": "John Doe"
    },
    {
        "id": 4,
        "title": "Title 4",
        "content": "Article Number 4 Content",
        "category": "Education",
        "author": "John Doe"
    },
    {
        "id": 5,
        "title": "Title 5",
        "content": "Article Number 5 Content",
        "category": "Health",
        "author": "John Doe"
    }
]`;

let mainData = JSON.parse(jsonData);

let div = document.getElementById("data");
let divContent ="";

mainData.forEach((article) => {
  divContent += `
  <div>
    <h2>${article.title}</h2>
    <p>${article.content}</p>
    <p>Author: ${article.author}</p>
    <p>Category: ${article.category}</p>
  </div>
  `;
});

div.innerHTML = divContent;
