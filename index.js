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

