console.log('Q: 1');

const strings = ['jolly', 'world', 'javascript', 'twist', 'language'];

const reverseString = strings.map((string) =>
  string.split('').reverse().join('')
);
console.log(reverseString);

console.log('Q: 2');

const phrases = ['hello', 'how are you', 'good morning', 'have a nice day'];

const addSymbol = phrases.map((phrase) => phrase + '..!');
console.log(addSymbol);

console.log('Q: 3');

const shoppingCart = {
  bread: 25,
  jam: 59,
  butter: 42,
};

const convertObjToArr = Object.values(shoppingCart).map(
  (price) => 'Rs.' + price
);
console.log(convertObjToArr);

console.log('Q: 4');

const products = [
  { id: 101, name: 'Laptop' },
  { id: 102, name: 'Phone' },
  { id: 103, name: 'Tablet' },
];

const extractProductName = products.map((product) => product.name);
console.log(extractProductName);

console.log('Q: 5');

const temperatures = [-5, 40, 20, 25, -10, 35];

const hotTemperatures = temperatures.filter((temp) => temp > 30);
console.log(hotTemperatures);

console.log('Q: 6');

const tasks = [
  { id: 1, title: 'Note 1', deliveryPriority: 'low' },
  { id: 2, title: 'Note 2', deliveryPriority: 'medium' },
  { id: 3, title: 'Note 3', deliveryPriority: 'high' },
  { id: 4, title: 'Note 4', deliveryPriority: 'low' },
];

const extractTasks = tasks.filter((task) => task.deliveryPriority === 'low');
console.log(extractTasks);

console.log('Q: 7');

const sentences = [
  'JavaScript is a programming language.',
  'Python is also a programming language.',
  'JavaScript frameworks are popular.',
  'I love to learn new programming languages.',
];

const extrctNoJavascriptWord = sentences.filter(
  (sentence) => !sentence.includes('JavaScript')
);
console.log(extrctNoJavascriptWord);

console.log('Q: 8');

const students = [
  { name: 'Alice', GPA: 3.5 },
  { name: 'Bob', GPA: 2.8 },
  { name: 'Charlie', GPA: 3.2 },
  { name: 'David', GPA: 2.9 },
];

const studentWithGpaGreater = students.filter((student) => student.GPA > 2.9);
console.log(studentWithGpaGreater);

console.log('Q: 9');

const words = ['apple', 'banana', 'kiwi', 'gem', 'grape'];

const smallestWord = words.reduce((smallestWord, currentWord) => {
  return smallestWord.length < currentWord.length ? smallestWord : currentWord;
});
console.log(smallestWord);

console.log('Q: 10');

const num = [10, 25, 8, 30, 15];

const highestValue = Math.max(...num);
console.log(highestValue);

console.log('Q: 11');

const countries = [
  { country: 'USA', capital: 'Washington, D.C.' },
  { country: 'France', capital: 'Paris' },
  { country: 'Japan', capital: 'Tokyo' },
];

const convertSingleObj = countries.reduce((acc, curr) => {
  acc[curr.country] = curr.capital;
  return acc;
}, {});
console.log(convertSingleObj);

console.log('Q: 12');

const books = [
  { title: 'Book 1', author: 'Alice' },
  { title: 'Book 2', author: 'Bob' },
  { title: 'Book 3', author: 'Charlie' },
  { title: 'Book 4', author: 'Anna' },
];

const booksAuthorNameWithA = books.filter((book) => book.author.includes('A'));
console.log(booksAuthorNameWithA);

console.log('Q: 13');

const wordsFilter = ['level', 'apple', 'radar', 'banana', 'civic'];

const palindromeWords = wordsFilter.filter((word) => word === word.split('').reverse().join('')
);

console.log(palindromeWords);
