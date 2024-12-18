// Task: Write a function that takes an array of numbers and returns the sum of all positive numbers in the array.

// Requirements:
//     1. The function should be named 'sumPositiveNumbers'
// 2. It should take one parameter: an array of numbers
// 3. It should return a number
// 4. Only positive numbers should be included in the sum
// 5. If there are no positive numbers, the function should return 0
//
// Example:
// sumPositiveNumbers([1, -4, 7, 12, -3, 0]) should return 20

function sumPositiveNumbers(numbers: number[]): number {
    let result: number = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] >= 0){
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

function capitalizeWords(input: string): string {
    return input.toUpperCase().split(' ').map(item => item.charAt(0) +item.substring(1, item.length).toLowerCase()).join(' ')
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

class Book {
    public title: string;
    public author: string;
    public isbn: string;
    public available: boolean;

    constructor(title: string, author: string, isbn: string, available: boolean) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.available = available;
    }
}

class Library {
    private allBooksInLibrary: Book[]

    constructor(books: Book[] = []) {
        this.allBooksInLibrary = books
    }

    public addBook(book: Book): void{
        this.allBooksInLibrary.push(book);
    }

    public getAllBooks(): Book[] {
        return [...this.allBooksInLibrary];
    }

    public removeBook(isbn: string): void {
        this.allBooksInLibrary = this.allBooksInLibrary.filter(book => book.isbn !== isbn);


        console.log('Book removed:', isbn)
    }

    public checkOutAvailableBook(isbn: string): any {
         for(let i = 0; i < this.allBooksInLibrary.length; i++){
             if (this.allBooksInLibrary[i].available && this.allBooksInLibrary[i].isbn === isbn){
                 console.log('Your book is available: ✅');
                 this.allBooksInLibrary[i].available = false;
                 console.log(this.allBooksInLibrary[i].available)
                 return this.allBooksInLibrary[i];
             }
         }
         return 'Your book is not available. ❌'
    }

    public returnBook (isbn: string) {
        for(let i = 0; i < this.allBooksInLibrary.length; i++) {
            if(this.allBooksInLibrary[i].isbn === isbn && !this.allBooksInLibrary[i].available){
                this.allBooksInLibrary[i].available = true;
            }
        }
    }

    public getAvailableBooks(): void{
        console.log('------------------------------');
        for(let i = 0; i< this.allBooksInLibrary.length; i++){
            if(this.allBooksInLibrary[i].available){
                console.log('|' + this.allBooksInLibrary[i].title + (' ' as any).repeat(Math.abs(this.allBooksInLibrary[i].title.length - 27)), '|');
            }
        }
        console.log('------------------------------');
    }
}

const greatGatsby = new Book('The Great Gatsby', 'F. Scott Fitzgerald', '9780743273565', false);
const lordOfTheRing = new Book('Lord of The Ring', 'Tolkien', '489498494964949', false);
const killAMockingbird = new Book("To Kill a Mockingbird", "Harper Lee", "9780446310789", true)

const library = new Library();
library.addBook(greatGatsby);
library.addBook(lordOfTheRing);
library.addBook(killAMockingbird);

// library.returnBook('9780743273565');
// library.returnBook('489498494964949');
// library.getAvailableBooks();

// Write a function that takes two numbers as parameters and returns their sum.
function sumTwo(a: number, b: number): number {
    return a + b;
}

// Write a function that takes a string as input and returns the reversed string.
function reverseString(str: string): string {
    return str.split('').reverse().join('')
}


// Write a function that takes an array of numbers and returns the largest number.
function findLargest(numbers: number[]): number {
    // Your code here
    return Math.max(...numbers)
}



// Write a function that determines whether a given number is prime.
function isPrime(num: number): boolean {
    if(num <= 1) return false;

    for (let i = 2; i <= Math.sqrt(num); i++){
        if(num % i === 0) return false;
    }

    return true
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
function firstNonRepeatedChar(str: string): any {
    const letters: string[] = str.split('');
    const myMap = new Map<string, number>();

    // Count the occurrences of each character
    for (let i = 0; i < letters.length; i++) {
        let char = letters[i];
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
function isPalindrome(str: string): boolean {
    const backwards = str.split('').reverse().join('')
    return backwards == str
}

// // Write a function that finds the missing number in an array of integers from 1 to n.
// function findMissingNumber(numbers: number[]): number {
//     // Your code here
// }

// Write a function that calculates the factorial of a given number.
function factorial(n: number) {
    let result = 1;
    for (let i = 1; i <= n; i++){
        result *= i
    }
    return result
}

// console.log(factorial(5))

function fizzBuzzTwo(){
    for (let i = 1; i <= 100; i++){
        if (i %5 == 0 && i %3 == 0){
            console.log('FizzBuzz')
        }else if (i %5 == 0){
            console.log('Buzz')
        }else if (i %3 == 0){
            console.log('Fizz')
        }else {
            console.log(i)
        }
    }
}

function reverseStringTwo(str: string): string {
    let reverseString = '';
   for (let i = str.length - 1; i >= 0; i--){
       reverseString += str[i]
   }
   return reverseString
}

function fizzBuzzRedux(num: number): string | number{
    if (num < 0) return 'negative numbers are not allowed';

    return (num %5 === 0 && num%3 === 0) ? 'FizzBuzz' : num %3 === 0 ? 'Buzz': num %5 === 0 ? 'Fizz' : num;
}

function wordReverser(str: string){
    str.split(' ').reverse().join(' ')
}

function countVowels(str: string): number{
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    const letters = str.split('');

    for (let i = 0; i < letters.length; i++){
       if(vowels.includes(letters[i])) {
           count++;
       }
    }
    return count;
}


function flattenArray(arr: any): any {
    return arr.flat(Infinity)
}

function frequencyCounter(arr: any[]): any{
    let dataObject = {}

    for (let i = 0; i < arr.length; i++) {
        if(dataObject[arr[i]] === undefined){
            dataObject[arr[i]] = 0;
        }else{
            dataObject[arr[i]]++;
        }
    }
    return dataObject;
}


function palindromeChecker(str: string):boolean {
    const forward = str.split('').filter(space => space !== ' ');
    const backwards = str.split('').filter(space => space !== ' ').reverse();

    return forward.join('') === backwards.join('');
}

function findMissingNumber(array: number[]) {
    const arrayLength = array.length;

    let calculateSum = arrayLength * (arrayLength + 1) / 2;
    let actualSum = array.reduce((a, b) => a + b);

    return calculateSum - actualSum;
}


function nonRepeatingCharacter(str: string): any {
    const letters = str.split('')
    const dataObj: { [key: string]: number } = {}

    for (let i = 0; i < letters.length; i++){
        if (dataObj[letters[i]] === undefined){
            dataObj[letters[i]] = 1
        }else {
            dataObj[letters[i]]++
        }
    }

    for (const char of str){
        if(dataObj[char] === 1){
            return char
        }
    }
}

function arraySumCalculator(arr: number[]): number{
    return arr.reduce((a, b) => a + b, 0)
}

function stringForLoopReversal(str: string): string {
    let letters = str.split('');
    let result = '';

    for(let i= letters.length -1; i>=0; i--){
        result += letters[i];
    }
    return result
}

function vowelCounter(str: string): number {
    if (!str) return -1;

    const vowels = ['a', 'e', 'i', 'o', 'u']
    const letters = str.split('')
    let count = 0;

    for (let i = 0; i < letters.length; i++) {
        if (vowels.includes(letters[i])){
            count++
        }
    }
    return count
}

function fizzBuzz(): void {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log('FizzBuzz');
        } else if (i % 5 == 0) {
            console.log('Buzz');
        } else if (i % 3 == 0) {
            console.log('Fizz')
        } else {
            console.log(i)
        }
    }
}

function evenNumberCounter(numberArray: number[]): number {
    let count = 0;

    for (let i = 0; i < numberArray.length; i++) {
        if (numberArray[i] % 2 == 0) {
            count++;
        }
    }

    return count
}

function duplicateRemovalItems(arr: Array<string | number>): Array<string | number>{
    return Array.from(new Set(arr))
}

function wordFrequencyCounter(str: string): { [key: string]: number } {
    const words = str.split(' ');
    const wordCountMap: { [key: string]: number } = {};

    for (let i = 0; i < words.length; i++){
        if (wordCountMap[words[i]] === undefined){
            wordCountMap[words[i]] = 1
        }else {
            wordCountMap[words[i]]++
        }
    }
    return wordCountMap
}

// console.log(wordFrequencyCounter("hello world hello everyone hello"))

interface Temperature {
    value: number;
    unit: "C" | "F";
}

function celsiusToFahrenheit(num: number): Temperature {
    return {
        value: (num * (9/5)) + 32,
        unit: 'F'
    }
}

function fahrenheitToCelsius(num: number): Temperature {
    return {
        value: (num - 32) * 5/9,
        unit: 'C'
    }
}

function stringReverser(str: string): string {
    if(typeof str !== 'string') {
        throw new Error('Input must be a string!')
    }

    if (str === '') return '';

    return str.split('').reverse().join('')
}

console.log(stringReverser('hello'))