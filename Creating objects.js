function createUser(name, age)
{
    return {name: name, age: age, human: true}
}

const user = createUser('Kyle', 25)
console.log(user)
const date = new Date()
console.log(date.getMonth())

function User(name, age)
{
    this.name = name
    this.age = age
    this.human = true
}

const userNew = new User('Kyle', 25)

console.log(userNew)
