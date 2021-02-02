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

class UserClass
{
    constructor(name, age)
    {
        this.name = name
        this.age = age
        this.human = true
    }

    printNameAndAge()
    {
        console.log(this.name + ' ' + this.age)
    }
}

const userNew2 = new UserClass('Kyle', 25)
userNew2.printNameAndAge()

//console.log(userNew)
