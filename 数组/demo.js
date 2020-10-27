function Person(name) {
  if (this instanceof Person) {
    this.name = name
  } else {
    throw new Error("this指向错误！")
  }
}

const person = new Person('zhangsan')
console.log(person.name)

const notPerson = Person.call(person, 'lisi')
console.log(person)