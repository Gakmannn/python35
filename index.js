"use strict"

console.log(this)
console.log(window)
console.log(window.converter)

const converter = 'tyc'
console.log(converter)

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

const user = {
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

// Создать объект, хранящий в себе отдельно числитель и знаменатель дроби, 
// и следующие функции для работы с этим объектом.

// 1 Функция сложения 2 - х объектов - дробей.
// 2 Функция вычитания 2 - х объектов - дробей.
// 3 Функция умножения 2 - х объектов - дробей.
// 4 Функция деления 2 - х объектов - дробей.
// 5 Функция сокращения объекта - дроби.

function createFraction(numerator, denominator) {
  return {
    numerator,
    denominator
  }
}

function toCommonDenominator(fraction1, fraction2) {
  fraction1 = {...fraction1}
  fraction2 = {...fraction2}
  const commonDenominator = fraction1.denominator * fraction2.denominator
  fraction1.numerator = fraction1.numerator * fraction2.denominator
  fraction2.numerator = fraction2.numerator * fraction1.denominator
  fraction1.denominator = commonDenominator
  fraction2.denominator = commonDenominator
  return { fraction1, fraction2}
}

function reduceFraction(fraction) {
  let min = Math.min(fraction.numerator, fraction.denominator)
  for (min; min>1; min--) {
    if (fraction.numerator%min==0 && fraction.denominator%min==0) {
      fraction.numerator /= min
      fraction.denominator /= min
      break
    }
  }
  return {...fraction}
}

function fractionSum(fraction1, fraction2) {
  const fractions = toCommonDenominator(fraction1, fraction2)
  const result = {
    numerator: fractions.fraction1.numerator + fractions.fraction2.numerator,
    denominator: fractions.fraction1.denominator
  }
  return reduceFraction(result)
}

function fractionDeduction(fraction1, fraction2) {
  const fractions = toCommonDenominator(fraction1, fraction2)
  const result = {
    numerator: fractions.fraction1.numerator - fractions.fraction2.numerator,
    denominator: fractions.fraction1.denominator
  }
  return reduceFraction(result)
}

function fractionMultiplicatin(fraction1, fraction2) {
  const result = {
    numerator: fraction1.numerator * fraction2.numerator,
    denominator: fraction1.denominator * fraction2.denominator
  }
  return reduceFraction(result)
}

function fractionDivision(fraction1, fraction2) {
  const result = {
    numerator: fraction1.numerator * fraction2.denominator,
    denominator: fraction1.denominator * fraction2.numerator
  }
  return reduceFraction(result)
}

// Converter

const nuberToConvert = document.getElementById('number')
const convertFrom = document.getElementById('from')
const convertTo = document.getElementById('to')
const convertButton = document.getElementById('convert')
const convertOut = document.getElementById('out')

convertButton.addEventListener('click', ()=>{
  if (!nuberToConvert.value) {
    convertOut.innerText = 'Введите значение'
    return
  }
  if (convertFrom.value == convertTo.value) {
    convertOut.innerText = nuberToConvert.value
    return
  }
  const arr = ['b', 'kb', 'mb', 'gb']
  const indexFrom = arr.indexOf(convertFrom.value)
  const indexTo = arr.indexOf(convertTo.value)
  const multiplier = 1024**(indexFrom + 1)
  const divider = 1024**(indexTo + 1)
  convertOut.innerText = nuberToConvert.value * multiplier / divider
})

// !Методы примитивов

obj.sayMyName = function() {
  console.log(this.name)
}

obj.sayMyName()

let string = 'asd'
// string.tag = 'mystring'
console.log(string.toUpperCase())
console.log(string.tag)
console.log(String('sdfsdfsd'))
console.log(Number('12'))
console.log(Number(12))
console.log(Boolean('12'))
console.log(Boolean(''))

// Все примитивы, кроме null и undefined, предоставляют множество полезных методов.
// Формально эти методы работают с помощью временных объектов, но движки JavaScript внутренне очень хорошо оптимизируют этот процесс, так что их вызов не требует много ресурсов.

// !Числа

let billion = 1_000_000_000
billion = 1e9;  // 1 миллиард, буквально: 1 и 9 нулей
let ms = 1e-6; // шесть нулей слева от 1
console.log(0xff)
console.log(0xff.toString(2))
console.log(0xff.toString(3))
console.log(0xff.toString(4))
console.log(0xff.toString(36))

// !Округление
// ?Math.floor
// Округление в меньшую сторону: 3.1 становится 3, а - 1.1 — -2.
// ?Math.ceil
// Округление в большую сторону: 3.1 становится 4, а - 1.1 — -1.
// ?Math.round
// Округление до ближайшего целого: 3.1 становится 3, 3.6 — 4, а - 1.1 — -1.
// ?Math.trunc (не поддерживается в Internet Explorer)
// Производит удаление дробной части без округления: 3.1 становится 3, а - 1.1 — -1.

let num = 12.34243234
console.log(num.toFixed(3)) // "12.342"

// !!!Потеря точности

// ?isNaN(value) преобразует значение в число и проверяет является ли оно NaN
console.log(isNaN(NaN) ) // true
console.log(isNaN("str")) // true
console.log(isNaN(12)) // false
console.log(isNaN(Infinity)) // false

// !Значение NaN уникально тем, что оно не является равным ничему другому, даже самому себе:

console.log(NaN === NaN) // false

// ?isFinite(value) преобразует аргумент в число и возвращает true, если оно является обычным числом, т.е.не NaN / Infinity / -Infinity:

console.log(isFinite("15")); // true
console.log(isFinite("str")); // false, потому что специальное значение: NaN
console.log(isFinite(Infinity)); // false, потому что специальное значение: Infinity

// ?Сравнение Object.is
// Существует специальный метод Object.is, который сравнивает значения примерно как ===, но более надёжен в двух особых ситуациях:

// Работает с NaN: Object.is(NaN, NaN) === true, здесь он хорош.
// Значения 0 и - 0 разные: Object.is(0, -0) === false, это редко используется, но технически эти значения разные.
// Во всех других случаях Object.is(a, b) идентичен a === b.

console.log(parseInt('100px')) // 100
console.log(parseFloat('12.5em')) // 12.5

// ?Math.random()
// !Возвращает псевдослучайное число в диапазоне от 0(включительно) до 1(но не включая 1)

let company = { // тот же самый объект, сжатый для краткости
  sales: [{ name: 'John', salary: 1000 }, { name: 'Alice', salary: 600 }],
  development: {
    sites: [{ name: 'Peter', salary: 2000 }, { name: 'Alex', salary: 1800 }],
    internals: [{ name: 'Jack', salary: 1300 }]
  }
};

// Функция для подсчёта суммы зарплат
function sumSalaries(department) {
  if (Array.isArray(department)) { // случай (1)
    return department.reduce((prev, current) => prev + current.salary, 0); // сумма элементов массива
  } else { // случай (2)
    let sum = 0;
    for (let subdep of Object.values(department)) {
      console.log(subdep)
      sum += sumSalaries(subdep); // рекурсивно вызывается для подотделов, суммируя результаты
      console.log(sum)
    }
    return sum;
  }
}

sumSalaries(company)

function arrayCompare(arr1, arr2, strict) {
  if (arr1.length != arr2.length) return false
  for (let i = 0; i < arr1.length; i++) {
    if ((typeof arr1[i] == 'object' && typeof arr2[i] != 'object') 
        || (typeof arr1[i] != 'object' && typeof arr2[i] == 'object')) return false
    if (typeof arr1[i] == 'object') {
      const entr1 = Object.entries(arr1[i])
      const entr2 = Object.entries(arr2[i])
      if (entr1.length != entr2.length) return false
      for (let j = 0; j < entr1.length; j++) {
        if (!arrayCompare(entr1[j], entr2[j], strict)) return false
      }
    }
    else {
      if (strict) {
        if (arr1[i] !== arr2[i]) return false
      } else {
        if (arr1[i] != arr2[i]) return false
      }
    }
  }
  return true
}

console.log(arrayCompare([1, [2], 3, { a: 20, b: { c: 5 } }], [1, [2], 3, { a: 20, b: { c: 5 } }], true))

// If you are using VS Code extension supported by Console Ninja, such as live-server - extension, or live - preview - extension, or node, then you may simply start it after checking that it is enabled in the extension settings.


function cached() {
  const cache = {}
  console.log(cache)
  return function fib(n) {
    if (cache[n]) return cache[n]
    if (n <= 1) {
      return n
    } else {
      let res = fib(n - 1) + fib(n - 2)
      cache[n] = res
      return res
    }
  }
}

const cachedFib = cached()
console.log(cachedFib(75))

console.log(JSON.stringify(obj))
console.log(JSON.parse('{"name":"asd","age":20}'))

let a1 = 10
let a2 = 20

;[a1, a2] = [a2, a1]
console.log(a1, a2)

window.onClick = () => {
  alert('Why???')
}

const pushTheButton = document.getElementById('pushTheButton')
const pushTheButton2 = document.getElementById('pushTheButton2')
const anchor = document.getElementById('anchor')
pushTheButton.onclick = ()=>{
  alert('Why2???')
}
// переназначили
pushTheButton.onclick = ()=>{
  alert('Why3???')
}
pushTheButton.addEventListener('click', (e) => {
  console.log(e.target)
  alert('Nooo!!!!')
})
pushTheButton.addEventListener('click', (event)=>{
  alert('Nooo more!!!!')
}, { once :true})

pushTheButton2.onclick = function() {
  this.innerText = 'Просил же не нажимать'
}
pushTheButton2.addEventListener('click', function (e) {
  console.log(e)
  console.log(this)
  e.done = true
})

const bodyClick = (e) => {
  if (e.done) return
  console.log('body')
}

document.addEventListener('click', bodyClick)

document.removeEventListener('click', bodyClick)

pushTheButton2.click()

anchor?.addEventListener('click', (e)=>{
  e.preventDefault()
})

// Есть три способа назначения обработчиков событий:

// Атрибут HTML: onclick = "...".
// DOM - свойство: elem.onclick = function.
// Специальные методы: elem.addEventListener(event, handler[, phase]) для добавления, removeEventListener для удаления.
// HTML - атрибуты используются редко потому, что JavaScript в HTML - теге выглядит немного странно.К тому же много кода там не напишешь.
// DOM - свойства вполне можно использовать, но мы не можем назначить больше одного обработчика на один тип события.Во многих случаях с этим ограничением можно мириться.
// Последний способ самый гибкий, однако нужно писать больше всего кода.Есть несколько типов событий, которые работают только через него, например, DOMContentLoaded.Также addEventListener поддерживает объекты в качестве обработчиков событий.В этом случае вызывается метод объекта handleEvent.
// Не важно, как вы назначаете обработчик – он получает объект события первым аргументом.Этот объект содержит подробности о том, что произошло.
// Мы изучим больше о событиях и их типах в следующих главах.

// При наступлении события – самый глубоко вложенный элемент, на котором оно произошло, помечается как «целевой» (event.target).
// Затем событие сначала двигается вниз от корня документа к event.target, по пути вызывая обработчики, поставленные через addEventListener(...., true), где true – это сокращение для { capture: true }.
// Далее обработчики вызываются на целевом элементе.
// Далее событие двигается от event.target вверх к корню документа, по пути вызывая обработчики, поставленные через on < event > и addEventListener без третьего аргумента или с третьим аргументом равным false.
// Каждый обработчик имеет доступ к свойствам события event:

// event.target – самый глубокий элемент, на котором произошло событие.
// event.currentTarget(=this) – элемент, на котором в данный момент сработал обработчик(тот, на котором «висит» конкретный обработчик)
// event.eventPhase – на какой фазе он сработал(погружение = 1, фаза цели = 2, всплытие = 3).
// Любой обработчик может остановить событие вызовом event.stopPropagation(), но делать это не рекомендуется, так как в дальнейшем это событие может понадобиться, иногда для самых неожиданных вещей.