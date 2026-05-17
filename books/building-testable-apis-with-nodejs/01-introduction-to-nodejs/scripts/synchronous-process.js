const fs = require('fs')

let fileContent
const someMath = 1 + 1

try {
    fileContent = fs.readFileSync(__dirname + '/zbig-file.txt', 'utf-8');
    console.log('file has been read');
} catch (error) {
    console.log(error)
}

const text = `The sum is ${someMath}`

console.log(text)