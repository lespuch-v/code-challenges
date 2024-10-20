function reverseArray(arr) {
    return arr.reverse()
}


function sumAllElements(arr) {
    return arr.reduce((acc, prev) => {
        return acc + prev
    })
}

function largestElement(arr) {
    return Math.max(...arr)
}


function filterEvenNumbers(arr) {
    return arr.filter(item => item % 2 == 0)
}


function removeDuplicates(arr) {
    return new Set([...arr])
}


function secondLargest(arr) {
    const sorted = arr.sort((a, b) => b - a)

    return sorted[1]
}


function isSorted(arr) {
    return arr.sort()
}

function isPalindrome(str) {
    const backwards = str.split('').reverse().join('')
    return str == backwards
}

function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        if (i % 2 == 0 && i % 5 == 0) {
            console.log('FizzBuzz');
        } else if (i % 3 == 0) {
            console.log('Fizz')
        } else if (i % 5 == 0) {
            console.log('Buzz')
        } else {
            console.log(i)
        }
    }
}

