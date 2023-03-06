const peopleNames = ["ana", "paulo", "jose", "joao", "paulo"];

peopleNames.reduce((a, b) => {
  a[b] ? (a[b] += 1) : (a[b] = 1);
  return a;
}, {});


const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];
const studentAverage = () => 
  students.map((student, index) => ({
    name: student,
    average: (grades[index].reduce((a, b) => a + b)) / grades[index].length, 
  }));

// =======================================================================//
  // Fonte: <https://restcountries.com/v2/all>
const countries = [
  {
    name: 'Afghanistan',
    region: 'Asia',
    currencies: [{ code: 'AFN', name: 'Afghan afghani' }],
    capital: 'Kabul',
    population: 40218234,
    area: 652230
  },
  {
    name: 'Åland Islands',
    region: 'Europe',
    currencies: [{ code: 'EUR', name: 'Euro' }],
    capital: 'Mariehamn',
    population: 28875,
    area: 1580
  },
  {
    name: 'Albania',
    region: 'Europe',
    currencies: [{ code: 'ALL', name: 'Albanian lek' }],
    capital: 'Tirana',
    population: 2837743,
    area: 28748
  },
  {
    name: 'Algeria',
    region: 'Africa',
    currencies: [{ code: 'DZD', name: 'Algerian dinar' }],
    capital: 'Algiers',
    population: 44700000,
    area: 2381741
  },
  {
    name: 'American Samoa',
    region: 'Oceania',
    currencies: [{ code: 'USD', name: 'United States Dollar' }],
    capital: 'Pago Pago',
    population: 55197,
    area: 199
  },
  {
    name: 'Andorra',
    region: 'Europe',
    currencies: [{ code: 'EUR', name: 'Euro' }],
    capital: 'Andorra la Vella',
    population: 77265,
    area: 468
  },
  {
    name: 'Angola',
    region: 'Africa',
    currencies: [{ code: 'AOA', name: 'Angolan kwanza' }],
    capital: 'Luanda',
    population: 32866268,
    area: 1246700
  },
  {
    name: 'Anguilla',
    region: 'Americas',
    currencies: [{ code: 'XCD', name: 'East Caribbean dollar' }],
    capital: 'The Valley',
    population: 13452,
    area: 91
  }
];

// 1 - Calcule a quantidade total da população de todos os países.

const getPopulation = () => 
  countries.map((country) => country.population).reduce((a, b) => a + b);

// 2 - Calcule a área total de todos os países.

const getTotalArea = () => 
  countries.map((country) => country.area).reduce((a, b) => a + b);

// 3 - Encontre o país com o maior nome.

const longestName = () =>
  countries.sort((a, b) => b.name.length - a.name.length)[0];

// 4 - Retorne a quantidade de vezes que a letra a maiúscula ou minúscula aparece no array de nomes.
const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];
const expectedResult = 20;
const countA = () => {
  const totalLetters = names.reduce((a, b) => a + b).toLowerCase();
  const splitedAs = totalLetters.split('a').join('');
  return totalLetters.length - splitedAs.length;
}
