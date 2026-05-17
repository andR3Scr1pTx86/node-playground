const fs = require('fs')

const someMath = 1 + 1

fs.readFile(__dirname + '/zbig-file.txt', 'utf-8', function (error, content) {
    if (error) {
        return console.log(err)
    }

    console.log(content)
})

const text = `The response is ${someMath}`

console.log(text)