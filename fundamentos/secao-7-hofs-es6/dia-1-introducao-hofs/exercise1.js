const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:

const authorBornIn1947 = (array) => (array.find((book) => book.author.birthYear === 1947)).author.name;

const smallerName = (array) => {
  let nameBook = array[0].name;
  array.forEach((element) => {
    if (element.name.length < nameBook.length) {
      nameBook = element.name
    }
  });
  return nameBook;
}

const getNamedBook26Char = (array) => array.find((book) => book.name.length === 26);

function everyoneWasBornOnSecXX(array) {
  return array.every((book) => (1900 < book.author.birthYear && book.author.birthYear <= 2000));
}

const someBookWasReleaseOnThe80s = (array) => array.some((book) => (1980 <= book.releaseYear && book.releaseYear < 1990));

// const authorUnique = (array) => {
//   for (let index = 0; index < array.length; index += 1) {
//     let same = 0;
//     const date = array[index].author.birthYear;
//     for (let index2 = 0; index2 < array.length; index2 += 1) {
//       const date2 = array[index2].author.birthYear;
//       if (date2 === date) {
//         same += 1;
//       }
//     }
//     if (same >= 2) {
//       return false
//     }
//   }
//   return true;
// }

// const authorUnique = (array) => {
//   const birthYears = array.map((book) => book.author.birthYear)
//   let verify = true;
//   birthYears.sort((a, b) => {
//     if (a > b || b > a) {
//       return a - b;
//     }
//     if (a === b) {
//       verify = false;
//       return a - b;
//     }
//   });
//   return verify;
// }

const authorUnique = (array) => {
  const birthYears = array.map((book) => book.author.birthYear);
  const uniqueBirthYears = new Set(birthYears);
  return uniqueBirthYears.size === birthYears.length;
}

console.log(authorUnique(books));