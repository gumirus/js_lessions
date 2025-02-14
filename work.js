//  1. Типы данных в JavaScript имеет 8 основных типов данных:
// Примитивные типы:
// 1. string
const name = 'Руслан' // string Строка: name - это строка, представляющая имя человека.
let name2 = 'Руслан'
console.log(typeof name2) // "string"
// 2. number
const yearBirth = 1982 // number Число: yearBirth - это число, представляющее год рождения.
let age = 25
console.log(typeof age) // "number"
// 3. Boolean
const isStudent = true // Example of a boolean value
let isStudent2 = true
console.log(typeof isStudent2) // "boolean"
// 4. BigInt
const largeNumber = 1234567890123456789012345678901234567890n // Example of a BigInt
let bigNumber = 123456789012345678901234567890n
console.log(typeof bigNumber) // "bigint"
// 5. Null
const emptyValue = null // Example of a null value
let emptyValue2 = null
console.log(typeof emptyValue2) // "object" (это ошибка в JS)
// 6. Undefined
let uninitializedVariable // Example of an undefined value
let uninitialized
console.log(typeof uninitialized) // "undefined"
// 6. Symbol
const uniqueId = Symbol('id') // Example of a Symbol
let uniqueId2 = Symbol('id')
console.log(typeof uniqueId2) // "symbol"

// Сложные типы:

// 8. Object - объекты Объект - это структура данных с ключами и значениями let user = { name: "Руслан", age: 25 }; console.log(user.name); // "Руслан"
const personalInfo = {
  name: 'Руслан', // string Строка: name - это строка, представляющая имя человека.
  yearBirth: 1982, // number Число: yearBirth - это число, представляющее год рождения.
  isStudent: true, // boolean Логическое значение: isStudent - это логическое значение, указывающее, является ли человек студентом.
  emptyValue: null, // null: emptyValue имеет значение null, указывающее на преднамеренное отсутствие значения.
  uninitializedVariable: undefined, // undefined: uninitializedVariable имеет значение undefined, представляющее переменную, которая была объявлена, но ей не присвоено значение.
  uniqueId: Symbol('id'), // Symbol: UniqueID - это значение символа, которое является уникальным и неизменяемым.
  largeNumber: 1234567890123456789012345678901234567890n, // number BigInt: largeNumber - это значение BigInt, представляющее очень большое целое число.
  hobbies: ['reading', 'coding'], // Array: hobbies - это массив, содержащий хобби человека
}

// Object-arrey Массив - это упорядоченная коллекция значений let numbers = [1, 2, 3, 4, 5]; console.log(numbers[0]); // 1
const personals = [
  {
    name: 'Руслан',
    yearBirth: 1982,
    isStudent: true,
    hobbies: ['reading', 'coding'],
  },
  {
    name: 'Владилен',
    yearBirth: 1992,
    isStudent: false,
    hobbies: ['bloger', 'traveling', 'hiking'],
  },
]

const personalInfoArray = [
  {
    name: 'Руслан', // string
    yearBirth: 1982, // number
    isStudent: true, // boolean
    emptyValue: null, // null
    uninitializedVariable: undefined, // undefined
    uniqueId: Symbol('id'), // Symbol
    largeNumber: 1234567890123456789012345678901234567890n, // BigInt
    hobbies: ['reading', 'coding'], // Array
  },
]

// Logging examples to the console
console.log('Boolean:', isStudent)
console.log('BigInt:', largeNumber)
console.log('Null:', emptyValue)
console.log('Undefined:', uninitializedVariable)
console.log('Object:', personalInfo)
console.log('Arreys:', personals)
console.log('Arrey:', personalInfoArray[0]) // Доступ к объекту в массиве
console.log('Arrey:', personalInfoArray[0].name) // Доступ к свойству объекта в массиве
console.log('Symbol:', uniqueId)

// 2. Логические операторы
// 1. - && (И)
console.log(true && false) // false

// 2. || (ИЛИ)
console.log(true || false) // true

// 3. ! (НЕ)
console.log(!true) // false

// 4. Тернарный оператор
let age3 = 18
let message = age3 >= 18 ? 'Взрослый' : 'Ребёнок'
console.log(message) // "Взрослый"

// 3. Циклы в JavaScript
// 1. For Loop
for (let i = 0; i < 5; i++) {
  console.log(i)
}

// 2. While Loop
let i = 0
while (i < 5) {
  console.log(i)
  i++
}

// forEach (для массивов)
let numbers = [1, 2, 3, 4, 5]
numbers.forEach((num) => console.log(num))

// 4. Работа с this, bind, call, apply
// 1. Пример использования this
const user = {
  name: 'Руслан',
  sayHello() {
    console.log(`Привет, ${this.name}`)
  },
}
user.sayHello() // Привет, Руслан

// 2. Методы call, apply, bind
// a) call - вызывает функцию с конкретным this
function greet() {
  console.log(`Привет, ${this.name}`)
}
const user2 = { name: 'Руслан' }
greet.call(user2)

// b) apply - как call, но аргументы передаются массивом
greet.apply(user)

// c) bind - создаёт новую функцию с привязанным this
const boundGreet = greet.bind(user)
boundGreet()

// 5. Практические задачи
// Задача 1: Создать функцию bind
function myBind(func, context) {
  return function (...args) {
    return func.apply(context, args)
  }
}
const user4 = { name: 'Руслан' }
function greet() {
  console.log(`Привет, ${this.name}`)
}
const boundGreet1 = myBind(greet, user4)
boundGreet() // "Привет, Руслан"

// Задача 2: Реализация debounce
function debounce(func, delay) {
  let timeout
  return function (...args) {
    clearTimeout(timeout)
    timeout = setTimeout(() => func.apply(this, args), delay)
  }
}
