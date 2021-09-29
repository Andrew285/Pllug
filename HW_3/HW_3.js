"use strict"

//Створити пустий об’єкт
let emptyObject = {};

//Створити пустий об’єкт без прототипу
let emptyObj = Object.create(null);

//Додати до об’єкта будь які нові поля всіма відомими способами
emptyObject.name = "Andriy"; // first method

emptyObject["age"] = 19; // second method

//Створити пустий масив
let emptyArray = [];

//Створити пустий масив довжиною 100500 елементів
let emptyHugeArray = [100500];

//Створити масив з декількома елементами
let nameList = ["Andriy", "Vlad", "Borys"];

//Зробити заповнений масив пустим

//first method: using function
function clearArray1(array)
{
	while(array.length)
	{
		array.pop();
	}
}

clearArray1(nameList);

//second method (maybe wrong): 
//nameList = [];

//Дано масив, [1,2,3,4,5], потрібно створити функцію,
//яка видалить певний елемент з масиву за його індексом та
//поверне новий масив(оновлений- після видалення)

let numberList = [1, 2, 3, 4, 5];

function clearArrayByIndex(array)
{
	let i = 0;
	while(array.length > 0)
	{
		array.splice(i, 1);
	}
	return array;
}

console.log(clearArrayByIndex([1, 2, 3, 4, 5]));


//Створити функцію, яка приймає один масив у якості аргументу
//та повертає булеве значення в залежності чи в неї передали пустий масив чи ні

function isEmptyArray(array)
{
	if(array.length > 0)
	{
		return false;
	}
	else
	{
		return true;
	}
}

console.log(isEmptyArray(emptyArray)); //true
console.log(isEmptyArray(numberList)); //false

//Створити функцію, яка приймає один об’єкт у якості аргументу та повертає 
//булеве значення в залежності чи в неї передали пустий об’єкт чи ні;

function isEmptyObject(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

let emptyObject2 = {};
let Person =
{
	name: "John",
	age: 25
};

console.log(isEmptyObject(emptyObject2)); //true
console.log(isEmptyObject(Person)); //false

//Створити функцію, яка обєднає два масиви в один та поверне його в якості результату

function mergeArrays(arr1, arr2)
{
	return arr1.concat(arr2);
}

console.log(mergeArrays([1, 2, 3], [4, 5, 6])); //[1, 2, 3, 4, 5, 6]

//Створити функцію, яка приймає один масив чисел у якості аргументу та повертає новий 
//масив, який складається з елементів попереднього в степені 3. Для прикладу, на вході: 
//[1, 2, 3] ⇒ [1, 8, 27]

function powArray(arr)
{
	let newArr = [];
	for(let i = 0; i < arr.length; i++)
	{
		newArr[i] = Math.pow(arr[i], 3); //newArr[i] = arr[i]**3;	
	}
	return newArr;
}
console.log(powArray([1, 2, 3])); //[1, 8, 27]

//Створити функцію, яка приймає один масив чисел у якості аргументу та повертає 
//новий масив, який складається з непарних елементів вхідного масиву

function makeOddArray(arr)
{
	let newArr = [];
	for(let i = 0; i < arr.length; i++)
	{
		if(arr[i] % 2 != 0)
		{
			newArr.push(arr[i]);
		}
	}
	return newArr;
}
console.log(makeOddArray([1, 2, 3, 4, 5, 6, 7])); //[1, 3, 5, 7]

//Створити функцію, яка приймає один масив чисел у якості аргументу та повертає 
//новий масив, який складається тільки з цілих елементів вхідного масиву; Для прикладу:
// [5, 3.14, 4.1, 10, 11, 20.1] ⇒ [5, 10, 11]

function findInt(arr)
{
	let newArr = [];
	for(let i = 0; i < arr.length; i++)
	{
		if(arr[i] == Math.round(arr[i]))
		{
			newArr.push(arr[i]);
		}
	}
	return newArr;
}

console.log(findInt([5, 3.14, 4.1, 10, 11, 20.1])); //[5, 10, 11]

//Створити функцію, яка нічого не повертає

function func()
{
	return
}
console.log(func()); //undefined

//Скажіть, будь ласка, як мені відповідати вам чи задавати питання в GitHub.
//Я ще не розібрався, як саме працює pull request, тому я буду радий, якщо ви мені зможете пояснити
//і чи потрібно робити commit ваших вправок в мій код?
