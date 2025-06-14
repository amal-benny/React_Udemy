const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

//Destructuring
const book = getBook(3);

/*
const book = getBook(3);
book;

const { title, author, pages, genres, hasMovieAdaptation, publicationDate } = book;

console.log(title, author, genres);

// const primaryGenre = genres[0];
// const secondaryGenre = genres[1];

const [primaryGenre, ...otherGenres] = genres;

console.log(primaryGenre, otherGenres);

const newG = [...genres, 'epic fantasy']
newG;

const updatedBook = {...book, moviePublicationDate: "2001-12-19", pages:1089};
updatedBook;

// function getYear(str) {
//   return str.split("-")[0];
// }

const getYear = (str) => str.split("-")[0];
console.log(getYear(publicationDate))

const summary = `${title}, ${pages}--pages long book, was written by ${author} and published in
 ${getYear(publicationDate)}`
summary;


const range = pages > 1000 ? "Over a thousand"  :  "less than 1000";
range;
console.log(`The book has ${range} pages`)

console.log(true && 'some String');
console.log(hasMovieAdaptation && "This has a movie")

console.log(book.translations.spanish);

const Spanish = book.translations.spanish || "Not Translated into spanish";
Spanish;

const dataw = book.translations.spanish ?? "no data";
dataw;

function getTotal(book) {
  const goodread = book.reviews.goodreads.reviewsCount;
  const librarything = book.reviews.librarything?.reviewsCount ?? 0;
  return goodread + librarything;
} 

console.log(getTotal(book))
*/

// const books = getBooks();
// books;

// const titles = books.map((book) => book.title);
// titles;

// const essentials = books.map(book => ({
//   title: book.title,
//   author: book.author,
// }));
// essentials;

// const long = books.filter(book => book.pages > 500).filter(book => book.hasMovieAdaptation);
// long;

// const  pagesall = books.reduce((acc, book)=> acc + book.pages , 0);
// pagesall;

// const x = [3,5,2,64,23,7,24];
// const sorted =x.slice().sort((a,b)=> b-a);
// sorted;
// x;

// const sortpage = books.slice().sort((a,b) => a.id - b.id);
// sortpage;

// const newBook = {
//   id:6,
//   title: "Wings of Fire",
//   author: "APJ Abdul Kalam"
// };

// const BooksAfter = [...books, newBook];
// BooksAfter;

// const bookdelete = BooksAfter.filter(book => book.id !== 3);
// bookdelete;

// const bookupdate = bookdelete.map(book => book.id === 1 ? {...book, pages : 12} : book);
// bookupdate;

// fetch("https://jsonplaceholder.typicode.com/todos").then(res =>res.json()).then(data => console.log(data));

// console.log("Hello World!");

// async function getTodos() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/todos");
//   const data = await res.json();
//   console.log(data);

//   return data;
// }
// const todos = getTodos();
// console.log(todos);
