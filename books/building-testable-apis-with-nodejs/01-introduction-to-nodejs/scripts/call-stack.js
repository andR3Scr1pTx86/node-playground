function generateBornDateFromAge(age) {
    return new Date().getFullYear() - age
}

function generateUserDescription(name, surname, age) {
    const fullName = name + ' ' + surname
    const bornDate = generateBornDateFromAge(age)

    return fullName + ' is ' + age + ' old and was born in ' + bornDate
}

const userInformation = generateUserDescription('André', 'Araujo', 28)

console.log(userInformation)