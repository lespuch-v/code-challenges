function roundToNext(n) {
    return Math.ceil(n / 5) * 5;
}

function high(x) {
    let splitWords;
    if (x.includes(' ')) {
        splitWords = x.split(" ");
    } else {
        splitWords = x.split("");
    }

    let src = 0;
    for (let i = 1; i < splitWords.length; i++) {
        src += scoreWords(splitWords[i]);
    }
    return src + 1;
}

function scoreWords(x) {
    const englishChars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let score = 0;
    let chars = x.split('')

    for (let i = 0; i < chars.length; i++) {
        let index = englishChars.indexOf(chars[i]);
        score += index + 1
    }
    return score;
}

function sum(a, b) {
    return a + b;
}

function convertToMinute(minutes) {
    return minutes > 0 ? minutes * 60 : 'error';
}

function isEven(number) {
    return number % 2 === 0
}

function convertCelsiusToFahrenheit(celsius) {
    return (celsius * (9 / 5)) + 32
}

function findLargestNumber(arr) {
    return Math.max(...arr);
}

function reverseString(str) {
    return str.split('').reverse().join('');
}

function getStringLength(str) {
    return str.length;
}

function isPalindrome(word) {
    return word === word.split('').reverse().join('');
}

function getFirstElement(arr) {
    return arr[0];
}

function countTheNumberOfVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const letters = str.split('');
    let counter = 0;

    for (let i = 0; i < letters.length; i++) {
        if (vowels.includes(letters[i])) {
            counter++
        }
    }
    return counter;
}

function findSmallestNumber(arr) {
    return Math.min(...arr)
}


function arrayContainsValue(arr, value) {
    return arr.includes(value)
}

function capitalizeFirstLetter(str) {
    return str.trim().split(' ').map(item => item[0].toUpperCase() + item.substring(1, item.length)).join(' ')
}

function makeFirstLetterUppercase(word) {
    return word[0].toUpperCase() + word.substring(1, word.length)
}

function sumOfArrayElements(arr) {
    return arr.reduce((a, b) => {
        return a + b
    })
}

function filterOddNumbers(arr) {
    return arr.filter(number => number % 2 === 0)
}

function countWords(ste) {
    return ste.split(' ').length
}

function findLongestWord(str) {
    let longestWord = '';
    let lengthOfTheLongestWOrd = 0;
    let arr = str.split(' ');

    for (let i = 0; i < arr.length; i++) {
        if (lengthOfTheLongestWOrd < arr[i].length) {
            lengthOfTheLongestWOrd = arr[i].length
            longestWord = arr[i]
        }
    }
    return longestWord;
}

function removeDuplicates(arr) {
    return [...new Set(arr)]
}

function repeatStringNTimes(str, n) {
    return str.repeat(n)
}


function caesarCipher(str, shift) {
    const result = [];

    if (!shift) {
        return 'Shift value not provided... Exiting.'
    }

    for (let i = 0; i < str.length; i++) {
        let char = str[i]

        if (char === char.toLowerCase() && /[a-z].test(char)/) {
            let shiftedChar = String.fromCharCode(((char.charCodeAt(0) - 97 + shift) % 26) + 97);
            result.push(shiftedChar)
        } else if (char === char.toUpperCase() && /[A-Z]/.test(char)) {
            let shifterChar = String.fromCharCode(((char.charCodeAt(0) - 65 + shift) % 26) + 65)
            result.push(shifterChar)
        } else {
            result.push(char)
        }
    }
    return result.join('');
}


function isPalindrome(string) {
    const forward = string
    const backwards = string.split('').reverse().join('')

    return string === backwards
}

function sumOfDigitsRecursive(num) {
    if (num < 10) {
        return num
    }

    const sum = num.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0)

    return sumOfDigitsRecursive(sum)
}

// console.log(sumOfDigitsRecursive(9875));


function getRandomNumber() {
    return Math.floor(Math.random() * 100)
}

function findMissingNumber(arr, N) {
    const expectedSum = (N * (N + 1)) / 2
    const actualSum = arr.reduce((acc, num) => {
        return acc + num
    }, 0)
    return expectedSum - actualSum
}

function countUniqueChars(arrStr) {
    const uniqueCharacter = []

    for (let i = 0; i < arrStr.length; i++) {
        if (!uniqueCharacter.includes(arrStr[i])) {
            uniqueCharacter.push(arrStr[i])
        }
    }

    return uniqueCharacter.length
}

function countUniqueCharsTwo(str) {
    const uniqueCharacters = new Set(str)
    return uniqueCharacters.size
}

function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr
}

function scrambleWords(sentence) {
    const words = sentence.split(" ");

    const extractedLetters = [];
    const test = []

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > 3) {
            let firstLetter = words[i][0]
            let middleLetter = words[i][words[i].length / 2]
            let lestLetter = words[i][words.length - 1]
            extractedLetters.push(firstLetter)
            extractedLetters.push(middleLetter)
            extractedLetters.push(lestLetter)
        } else {
            test.push(words[i])
        }
    }

    return shuffleArray(extractedLetters).join("") + shuffleArray(test).join("")
}

function flattenArray(arr) {
    return arr.flat();
}

function areAnagrams(str1, str2) {
    const normalize = str => str.replace(/\s+/g, "").toLowerCase();

    const normalizeString1 = normalize(str1)
    const normalizeString2 = normalize(str2)

    if (normalizeString1.length !== normalizeString2.length) {
        return false;
    }

    return normalizeString1.split("").sort().join('') === normalizeString2.split('').sort().join('');
}

function sumTwoNumber(n1, n2) {
    return n1 + n2
}

function minuteConverter(minutes) {
    return minutes * 60
}

function evenChecker(number) {
    return number % 2 == 0
}

function convertCelsiusToFahrenheitTwo(celsius) {
    return (celsius * (9 / 5)) + 32
}

function largestNumberFinder(arr) {
    return Math.max(...arr)
}

function reverseString(str) {
    return str.split("").reverse().join('')
}

function findTheLengthsString(str) {
    return str.length
}

function palindromeChecker(str) {
    const backwards = str.split('').reverse().join('')

    return str === backwards
}

function firstElement(arr) {
    return arr[0]
}

function countTheNumberOfVowels(word) {
    const vowels = ['a', 'e', 'i', 'o', 'u']
    let count = 0;

    for (let i = 0; i < word.length; i++) {
        if (vowels.includes(word[i])) {
            count++
        }
    }

    return count
}

function findSmallestNumberTwo(arr) {
    return Math.min(...arr)
}

function arrayContainsValue(arr, value) {
    if (arr.includes(value)) {
        return true
    }
    return false
}

function capiralizeTheFirstLetter(str) {
    return str[0].toUpperCase() + str.substring(1, str.length)
}

function sumArray(arr) {
    return arr.reduce((acc, curr) => acc + curr)
}

function filterOutOddNum(arr) {
    return arr.filter(item => item % 2 !== 1)
}

function countNumberOfWordsInString(str) {
    return str.split(' ').length
}

function factorialNumber(num) {
    let result = 1;

    if (num == 0 || num == 1) {
        return 1
    }

    for (let i = 2; i <= num; i++) {
        result = result * i
    }
    return result
}

function findLongestWordInString(str) {
    let lengthOfTheWOrd = 0;
    let longestWord = '';

    const words = str.split(' ')

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > lengthOfTheWOrd) {
            lengthOfTheWOrd = words[i].length
            longestWord = words[i]
        }
    }
    return longestWord
}

function removeDuplicatesTwo(arr) {
    return new Set(...arr)
}

function repeatString(str, n) {
    return str.repeat(n)
}

function calcFibonacci(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;

    let a = 0, b = 1, temp;

    for (let i = 2; i <= n; i++) {
        temp = a + b;
        a = b;
        b = temp;
    }
    return b
}

function flattenArrarTwo(arr) {
    return arr.flat()
}

function areAnagrams(str1, str2) {
    const cleanString = (str) => {
        let cleaned = '';
        for (let i = 0; i < str.length; i++) {
            let char = str[i].toLowerCase();
            if (char >= 'a' && char <= 'z') {
                cleaned += char;
            }
        }
        return cleaned.split('').sort().join('');
    };

    return cleanString(str1) === cleanString(str2);
}

function chunkArray(arr, size) {
    let result = []

    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size))
    }

    return result
}

function binarySearch(arr, target) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        let middle = Math.floor((low + high) / 2);

        if (arr[middle] === target) {
            return middle;
        } else if (arr[middle] < target) {
            low = middle + 1;
        } else {
            high = middle - 1;
        }
    }

    return -1;
}



function binarySearchTwo(arr, target) {
    let low = 0
    let hight = arr.length - 1

    while (low <= hight) {
        let middle = Math.floor((low + hight) / 2)

        if (arr[middle] === target) {
            return middle
        } else if (arr[middle] < target) {
            low = middle + 1
        } else {
            hight = middle - 1
        }
    }

    return - 1
}

function countDuplicates(arr) {
    let itesm = new Set([...arr])
    let result = arr.length - itesm.size
    return result
}

console.log(countDuplicates([0, 1, 1, 2, 2, 3, 1, 5]));
