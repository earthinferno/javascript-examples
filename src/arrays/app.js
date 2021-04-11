const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = [
  'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
  'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
  'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
  'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
  'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
];

function print (output, title) {
  title && console.log(title);
  Array.isArray(output) ? output.map(output => console.log(output)) : console.log(output);
  console.log("#################");
  console.log();
}

const format = (inventor) => {
  return `Inventor: ${inventor.first} ${inventor.last}, Born: ${inventor.year}, Died: ${inventor.passed}`;
};

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
print(inventors.filter(inventor => inventor.year < 1600)
  .map(inventor => format(inventor)),
   "Filter the list of inventors for those who were born in the 1500's"
   );

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
print(inventors.map(inventor => `Inventor: ${inventor.first} ${inventor.last}`), "Filter the list of inventors for those who were born in the 1500's");

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
print(inventors
  .sort((a, b)  => a.year - b.year )
  .map(inventor => format(inventor)),
   "Sort the inventors by birthdate, oldest to youngest"
   );

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
print(
  inventors.reduce((accumulator,currentVal) => (currentVal.passed - currentVal.year) + accumulator, 0),
  "How many years did all the inventors live all together?"
);

// 5. Sort the inventors by years lived
print(inventors
  .sort((a, b)  => (b.passed - b.year)-  (a.passed - a.year) )
  .map(inventor => `${format(inventor)} Years Lived: ${inventor.passed - inventor.year}`),
   "Sort the inventors by years lived"
   );

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

const category = document.querySelector('.mw-category');
const links = Array.from(category.querySelectorAll('a'));
print(
  links
    .map(link => link.textContent)
    .filter(textContent => textContent.includes('de')),
  "create a list of Boulevards in Paris that contain 'de' anywhere in the name"
)

// 7. sort Exercise
// Sort the people alphabetically by last name
print(people
  .sort((lastPerson, nextPerson)  => {
    const [lastSurname] = lastPerson.split(', ');
    const [nextSurname] = nextPerson.split(', ');
    if (lastSurname.toLowerCase() > nextSurname.toLowerCase()) {
      return 1;
    }
    if (lastSurname.toLowerCase() < nextSurname.toLowerCase()) {
      return -1;
    }
    return 0;
  }),
   "Sort the people alphabetically by last name"
   );


// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
print(
  data.reduce((array,curr) => {
    if (!array.includes(curr)) {
      array.push(curr);
    };
    return array;
  }, []),
  `Sum up the instances ${data}`
);
