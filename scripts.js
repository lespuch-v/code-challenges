// Task: Write a function that takes an array of numbers and returns the sum of all positive numbers in the array.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Requirements:
//     1. The function should be named 'sumPositiveNumbers'
// 2. It should take one parameter: an array of numbers
// 3. It should return a number
// 4. Only positive numbers should be included in the sum
// 5. If there are no positive numbers, the function should return 0
//
// Example:
// sumPositiveNumbers([1, -4, 7, 12, -3, 0]) should return 20
function sumPositiveNumbers(numbers) {
    var result = 0;
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] >= 0) {
            result += numbers[i];
        }
    }
    return result;
}
//console.log(sumPositiveNumbers([1, -4, 7, 12, -3, 0])); // Expected output: 20
//console.log(sumPositiveNumbers([-1, -2, -3])); // Expected output: 0
//console.log(sumPositiveNumbers([0, 0, 0])); // Expected output: 0
/*
Task: Create a function that takes a string and returns a new string with the first letter of each word capitalized.

Requirements:
1. The function should be named 'capitalizeWords'
2. It should take one parameter: a string
3. It should return a string
4. The first letter of each word should be capitalized
5. Words are separated by a single space
6. The original spacing should be maintained
7. If the input is an empty string, return an empty string

Example:
capitalizeWords("hello world") should return "Hello World"
capitalizeWords("typescript is awesome") should return "Typescript Is Awesome"
*/
function capitalizeWords(input) {
    return input.toUpperCase().split(' ').map(function (item) { return item.charAt(0) + item.substring(1, item.length).toLowerCase(); }).join(' ');
}
//console.log(capitalizeWords("hello world")) // should return "Hello World"
//console.log(capitalizeWords("typescript is awesome")) // should return "Typescript Is Awesome"
/*
Task: Create a simple book management system using TypeScript classes.

Requirements:
1. Create a `Book` class with the following properties:
   - title (string)
   - author (string)
   - isbn (string)
   - available (boolean)

2. Create a `Library` class with the following:
   - A private array to store books
   - A method to add a book to the library
   - A method to remove a book from the library by ISBN
   - A method to check out a book (set available to false) by ISBN
   - A method to return a book (set available to true) by ISBN
   - A method to list all books
   - A method to list only available books

3. Use TypeScript features like access modifiers, parameter properties, and method signatures.

Example usage:
const library = new Library();
library.addBook(new Book("The Great Gatsby", "F. Scott Fitzgerald", "9780743273565", true));
library.addBook(new Book("To Kill a Mockingbird", "Harper Lee", "9780446310789", true));
library.listBooks();
library.checkOutBook("9780743273565");
library.listAvailableBooks();
*/
var Book = /** @class */ (function () {
    function Book(title, author, isbn, available) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.available = available;
    }
    return Book;
}());
var Library = /** @class */ (function () {
    function Library(books) {
        if (books === void 0) { books = []; }
        this.allBooksInLibrary = books;
    }
    Library.prototype.addBook = function (book) {
        this.allBooksInLibrary.push(book);
    };
    Library.prototype.getAllBooks = function () {
        return __spreadArray([], this.allBooksInLibrary, true);
    };
    Library.prototype.removeBook = function (isbn) {
        this.allBooksInLibrary = this.allBooksInLibrary.filter(function (book) { return book.isbn !== isbn; });
        console.log('Book removed:', isbn);
    };
    Library.prototype.checkOutAvailableBook = function (isbn) {
        for (var i = 0; i < this.allBooksInLibrary.length; i++) {
            if (this.allBooksInLibrary[i].available && this.allBooksInLibrary[i].isbn === isbn) {
                console.log('Your book is available: ✅');
                this.allBooksInLibrary[i].available = false;
                console.log(this.allBooksInLibrary[i].available);
                return this.allBooksInLibrary[i];
            }
        }
        return 'Your book is not available. ❌';
    };
    Library.prototype.returnBook = function (isbn) {
        for (var i = 0; i < this.allBooksInLibrary.length; i++) {
            if (this.allBooksInLibrary[i].isbn === isbn && !this.allBooksInLibrary[i].available) {
                this.allBooksInLibrary[i].available = true;
            }
        }
    };
    Library.prototype.getAvailableBooks = function () {
        console.log('------------------------------');
        for (var i = 0; i < this.allBooksInLibrary.length; i++) {
            if (this.allBooksInLibrary[i].available) {
                console.log('|' + this.allBooksInLibrary[i].title + ' '.repeat(Math.abs(this.allBooksInLibrary[i].title.length - 27)), '|');
            }
        }
        console.log('------------------------------');
    };
    return Library;
}());
var greatGatsby = new Book('The Great Gatsby', 'F. Scott Fitzgerald', '9780743273565', false);
var lordOfTheRing = new Book('Lord of The Ring', 'Tolkien', '489498494964949', false);
var killAMockingbird = new Book("To Kill a Mockingbird", "Harper Lee", "9780446310789", true);
var library = new Library();
library.addBook(greatGatsby);
library.addBook(lordOfTheRing);
library.addBook(killAMockingbird);
// library.returnBook('9780743273565');
// library.returnBook('489498494964949');
// library.getAvailableBooks();
// Write a function that takes two numbers as parameters and returns their sum.
function sumTwo(a, b) {
    return a + b;
}
// Write a function that takes a string as input and returns the reversed string.
function reverseString(str) {
    return str.split('').reverse().join('');
}
// Write a function that takes an array of numbers and returns the largest number.
function findLargest(numbers) {
    // Your code here
    return Math.max.apply(Math, numbers);
}
// Write a function that determines whether a given number is prime.
function isPrime(num) {
    if (num <= 1)
        return false;
    for (var i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0)
            return false;
    }
    return true;
}
// console.log(isPrime(4))
// 6. Count Vowels in a String
// Write a function that counts the number of vowels in a given string.
// function countVowels(str: string): number {
//     const vowels: string[] = ['i', 'a', 'o', 'u', 'e', 'y']
//     let letters: string[] = str.split('');
//     let count: number = 0;
//
//     for (let i = 0; i < letters.length; i++){
//         if(vowels.includes(letters[i])){
//             count++
//         }
//     }
//     return count;
// }
// 7. Find the First Non-Repeated Character
// Write a function that finds the first non-repeated character in a string.
function firstNonRepeatedChar(str) {
    var letters = str.split('');
    var myMap = new Map();
    // Count the occurrences of each character
    for (var i = 0; i < letters.length; i++) {
        var char = letters[i];
        myMap.set(char, (myMap.get(char) || 0) + 1);
    }
    // Find the first non-repeated character
    // for (let [char, count] of myMap) {
    //     if (count === 1) {
    //         return char;
    //     }
    // }
    return null; // Return null if no non-repeated character is found
}
// Write a function that generates the first n numbers of the Fibonacci sequence.
// function generateFibonacci(n: number): number[] {
//     // Your code here
// }
// 9. Check if a String is a Palindrome
// Write a function that determines whether a given string is a palindrome.
function isPalindrome(str) {
    var backwards = str.split('').reverse().join('');
    return backwards == str;
}
// // Write a function that finds the missing number in an array of integers from 1 to n.
// function findMissingNumber(numbers: number[]): number {
//     // Your code here
// }
// Write a function that calculates the factorial of a given number.
function factorial(n) {
    var result = 1;
    for (var i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}
// console.log(factorial(5))
function fizzBuzzTwo() {
    for (var i = 1; i <= 100; i++) {
        if (i % 5 == 0 && i % 3 == 0) {
            console.log('FizzBuzz');
        }
        else if (i % 5 == 0) {
            console.log('Buzz');
        }
        else if (i % 3 == 0) {
            console.log('Fizz');
        }
        else {
            console.log(i);
        }
    }
}
function reverseStringTwo(str) {
    var reverseString = '';
    for (var i = str.length - 1; i >= 0; i--) {
        reverseString += str[i];
    }
    return reverseString;
}
function fizzBuzzRedux(num) {
    if (num < 0)
        return 'negative numbers are not allowed';
    return (num % 5 === 0 && num % 3 === 0) ? 'FizzBuzz' : num % 3 === 0 ? 'Buzz' : num % 5 === 0 ? 'Fizz' : num;
}
function wordReverser(str) {
    str.split(' ').reverse().join(' ');
}
function countVowels(str) {
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var count = 0;
    var letters = str.split('');
    for (var i = 0; i < letters.length; i++) {
        if (vowels.includes(letters[i])) {
            count++;
        }
    }
    return count;
}
function flattenArray(arr) {
    return arr.flat(Infinity);
}
function frequencyCounter(arr) {
    var dataObject = {};
    for (var i = 0; i < arr.length; i++) {
        if (dataObject[arr[i]] === undefined) {
            dataObject[arr[i]] = 0;
        }
        else {
            dataObject[arr[i]]++;
        }
    }
    return dataObject;
}
function palindromeChecker(str) {
    var forward = str.split('').filter(function (space) { return space !== ' '; });
    var backwards = str.split('').filter(function (space) { return space !== ' '; }).reverse();
    return forward.join('') === backwards.join('');
}
function findMissingNumber(array) {
    var arrayLength = array.length;
    var calculateSum = arrayLength * (arrayLength + 1) / 2;
    var actualSum = array.reduce(function (a, b) { return a + b; });
    return calculateSum - actualSum;
}
function nonRepeatingCharacter(str) {
    var letters = str.split('');
    var dataObj = {};
    for (var i = 0; i < letters.length; i++) {
        if (dataObj[letters[i]] === undefined) {
            dataObj[letters[i]] = 1;
        }
        else {
            dataObj[letters[i]]++;
        }
    }
    for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
        var char = str_1[_i];
        if (dataObj[char] === 1) {
            return char;
        }
    }
}
console.log(nonRepeatingCharacter('leetcode'));
