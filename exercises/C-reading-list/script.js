function readingList(books) {
  let content = document.querySelector("#content");
  cardPerBook(books);
}

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    bookImage:
      "https://images-eu.ssl-images-amazon.com/images/I/410RTQezHYL._SY291_BO1,204,203,200_QL40_ML2_.jpg",
    alreadyRead: false,
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    bookImage:
      "https://images-eu.ssl-images-amazon.com/images/I/41m1rQjm5tL._SY291_BO1,204,203,200_QL40_ML2_.jpg",
    alreadyRead: true,
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    bookImage:
      "https://images-eu.ssl-images-amazon.com/images/I/51cUVaBWZzL._SX218_BO1,204,203,200_QL40_ML2_.jpg",
    alreadyRead: true,
  },
];

function cardPerBook(readingList) {
  let list = document.createElement("ul");
  content.appendChild(list);

  readingList.forEach((element) => {
    let li = document.createElement("li");
    list.appendChild(li);

    let titleAndAuthor = document.createElement("p");
    li.appendChild(titleAndAuthor);
    titleAndAuthor.innerText = `${element.title} - ${element.author}`;

    let bookImage = document.createElement("img");
    li.appendChild(bookImage);
    bookImage.src = element.bookImage;
  });
}

readingList(books);
