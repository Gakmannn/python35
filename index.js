const obj = {
  name: 'asd',
  age: 20,
  surename: undefined
}

const arr = ['name', 'age']

// Доступ к объекту через квадратные скобки и ключ, возвращает значение этого ключа
obj['name'] == obj.name

obj['surename']

console.log(`'surename' in obj`, 'surename' in obj)
console.log(`'surename1' in obj`, 'surename1' in obj)

// for of применяется для обхода массивоподобных объектов
for (let el of arr) {
  console.log(el, obj[el])
}

// for in применяется для обхода объектов
for (let key in obj) {
  console.log(key, obj[key])
}

// !Переменная, которой присвоен объект, хранит не сам объект, а его «адрес в памяти» – другими словами, «ссылку» на него.
// !Клонирование и объединение, Object.assign

user = {
  name: "John",
  age: 30,
  drivePermission: {
    A: true,
    B: true,
    C: false
  },
  // canDriveC() {
  //   return this.drivePermission.C
  // }
}

let obj1 = new Object()
console.log('obj1 == {}', obj1 == {})
console.log('{}.toString()', {}.toString())
console.log('obj1.toString() == {}.toString()', obj1.toString() == {}.toString())

console.log('[1, 2, 3] == [1, 2, 3]', [1, 2, 3] == [1, 2, 3])
console.log('[1, 2, 3].toString() == [1, 2, 3].toString()', [1, 2, 3].toString(),  
[1, 2, 3].toString() == [1, 2, 3].toString())


console.log('Object', Object)
console.log('Object.keys(user)', Object.keys(user))
console.log('Object.values(user)', Object.values(user))
console.log('Object.entries(user)', Object.entries(user))

let clone = {} // новый пустой объект

// 1 вариант клонирования - перебор в цилке. Для объектов с глубокой вложенностью необходима рекурсия
// Малоиспользуемый вариант
// for (let key in user) {
//   clone[key] = user[key]
// }

// 2 метод - Object.assign
Object.assign(clone, user, {drivePermission:{...user.drivePermission}})
// clone = Object.assign({}, user, {drivePermission:{...user.drivePermission}})
// user.drivePermission.C = true
console.log(clone)

// 3 метод - Spred оператор (оператор расширения)
// clone = { ...user, drivePermission: { ...user.drivePermission } }

// 4 метод - преобразование в JSON и обратно. 
// !Не копирует методы объекта
// clone = JSON.parse(JSON.stringify(user))
// console.log(JSON.stringify(user))
// console.log(clone)

// 5 structuredClone() (При копировании метода вызывается ошибка, копирует вложенные объекты)
// clone = structuredClone(user)
// console.log(clone)

// теперь clone это полностью независимый объект с тем же содержимым
// clone.name = "Pete" // изменим в нём данные
// clone.drivePermission.C = true
// console.log(user) // все ещё John в первоначальном объекте
// console.log(clone) // все ещё John в первоначальном объекте

// !Object.assign(dest, [src1, src2, src3...])
// Первый аргумент dest — целевой объект.
// Остальные аргументы src1, ..., srcN(может быть столько, сколько необходимо) являются исходными объектами
// Метод копирует свойства всех исходных объектов src1, ..., srcN в целевой объект dest.Другими словами, свойства всех аргументов, начиная со второго, копируются в первый объект.
// Возвращает объект dest.

// !Объекты присваиваются и копируются по ссылке. Другими словами, переменная хранит не «значение объекта», а «ссылку» (адрес в памяти) на это значение. Таким образом, копирование такой переменной или передача её в качестве аргумента функции копирует эту ссылку, а не сам объект.

// !Все операции с использованием скопированных ссылок(например, добавление / удаление свойств) выполняются с одним и тем же объектом.

// !Чтобы создать «реальную копию» (клон), мы можем использовать Object.assign для так называемой «поверхностной копии» (вложенные объекты копируются по ссылке) или функцию «глубокого клонирования», такую как _.cloneDeep(obj).

let a = 0
a += 10 // 0 + 10 = 10
a -= 5  // 10 - 5 = 5
a **= 2 // 5 ^ 2 = 25
a *= 4  // 25 * 4 == 100
a /= 10 // 100/ 10 = 10
a %= 3  // 10 %3 = 1


// Строгое не строгое равенство (неравенство)

console.log(`1 == '1'`, 1 == '1') // True
console.log(`'1' == 1`, '1' == 1) // True
console.log(`1 === '1'`, 1 === '1') // False
console.log(`1 === 1`, 1 === 1) // True
console.log(`'1' === '1'`, '1' === '1') // True

/*
  !Исключением typeof 
  является выражение «typeof null», результат которого представляет собой «object». 
  Это сделано по историческим причинам с целью «обратной совместимости» программ в различных версиях
  языка.Проверить, что переменная «х» содержит именно
  значение «null» можно строгим сравнением «x === null».
*/

let b 

if (a==1) {
  b = 2
} else {
  b = 5
}

b = a == 1 ? 2 : 5



console.log(func1()) // undefined

// Function Declaration (Объявление Функции). Всегда всплывает. Доступно в любом месте скрипта
function func1() {
  // если нет явного return, то просходит неявный return undefined
}

// Function Expression. Не всплывает. Доступна после присваивания (ниже по коду)
const func2 = function(a) {
  return a * 2
}

const func3 = (a) => a * 2 // Если в стрелочной функции не используются фигурные скобки, то результат возвращается неявно 
const func4 = (a) => { return a * 2 } // Явный возврат


a = 99

console.log(func2(4)) // 8
console.log(a = func3(a)) // 198
console.log(func4(a)) // 396

{
  
  let obj, clone, a, b
  console.log(obj, clone , a, b)
  
}

function newFunc(a,b) {
  // arguments не доступен в стрелочной функции. Представляет из себя массивоподобный объект с аргументами, переданными функции
  console.log(arguments)
  // let a = arguments[0]
  // let b = arguments[1]
  return a+b*b+a/b
}

// ... в парамеррах функции передают оставшиеся параметры в переменную, следующую за точками
function newFunc2(a,b, ...rest) {
  console.log(rest)
  // let a = rest[0]
  // let b = rest[1]
  return a+b*b+a/b
}

console.log(newFunc(1465,a+b,234,234,234,234,234,234,2))
console.log(newFunc2(1465,a+b,234,234,234,234,234,234,2))

console.log(0/0)

// «Чистые» функции - это любые функции, выходные данные которых получены исключительно из их входных данных и не вызывают побочных эффектов в приложении.Математические функции являются примерами «чистых» функций. 

// «Нечистые» функции бывают разных форм и размеров.Вот некоторые примеры:
// функции, вывод которых зависит от внешнего / глобального состояния;
// функции, которые возвращают разные выходные данные при одинаковых входных;
// функции, которые изменяют состояние приложения;
// функции, которые изменяют «внешний мир».


// Функциональное программирование основано на использовании «чистых» функций и строгом контроле побочных эффектов. Способность распознавать любой тип функции является ключевым для функционального программирования.

// «Чистая» функция - это функция, которая выводит свои данные основываясь исключительно на свои входные данные и не вызывает побочных эффектов в приложении.

