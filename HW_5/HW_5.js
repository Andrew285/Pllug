"use strict"
//Функція яка збільшує розмір шрифту всіх елементів списку animals
function changeFont(){
  document.querySelectorAll("#animals").forEach((item) => {
    item.style.fontSize = "x-large";
  });
}
// changeFont();
//Функція яка видаляє всі класи останнього елемента списку animals
function deleteAllClasses(){
  document.querySelector('#animals').lastElementChild.removeAttribute("class")
}
// deleteAllClasses();

//Функція яка змінює background-color наступного елемента після елемента з id="cat"
function changeBackgound(){
  document.querySelector("#cat").nextElementSibling.style.backgroundColor = "#ccc";
}

// changeBackgound();

//Функція яка змінює колір тексту на червоний всім елементам які мають клас dangerous
function changeColorText(){
  const str = document.querySelectorAll(".dangerous").forEach((item) => 
    item.style.color = "red");
}
// changeColorText();

//Функція яка видаляє всі елементи які мають клас pet, але якщо крім класу pet
// є ще інші класи, то вони повинні залишитись
function removeClassPet(){
  document.querySelectorAll(".pet").forEach((item) =>{
    if(item.classList.length == 1 && item.classList.contains("pet")){
      item.remove()
    }
    else{
      item.classList.remove("pet");
    }
  });
}
// removeClassPet();

//Функція яка додає додає новий елемент в список birds - після цього це має бути
// список у якому новий елемент є першим
function createFirstElementBirds(){
  const birds = document.querySelector("#birds");
  const newElem = document.createElement("LI");
  newElem.textContent = "FirstBird";
  birds.prepend(newElem);
}
// createFirstElementBirds();

//Функція яка додає додає новий елемент в список birds - після цього
// це має бути список у якому новий елемент є останнім
function createLastElementBirds(){
  const birds = document.querySelector("#birds");
  const newElem = document.createElement("LI");
  newElem.textContent = "LastBird";
  birds.append(newElem);
}
// createLastElementBirds();

//Функція яка додає додає новий список id="fish" перед списком birds
function createNewList(){
  const birds = document.querySelector("#birds");
  const container = document.querySelector(".container");
  const newList = document.createElement("UL");
  newList.setAttribute("id", "fish");
  birds.before(newList);
}
// createNewList();

//Функція яка змінює порядок елементів в списку animals -
// останній елемент стає першим, передостанній  - другим, і т.д.
function reverseOrderOfList(){
  const elements = document.getElementById("animals");
  const arr = Array.from(elements.childNodes);
  arr.reverse();
  elements.append(...arr);
}
// reverseOrderOfList();

//Функція яка перетворює класи елементів списку animals і додає до 
//цих елементів data-* атрибути з назвою класу який був прибраний. 
//Наприклад: <li class="wild dangerous">Tiger</li> => <li data-wild data-dangerous>Tiger</li>
function addDataAtrributes(){
  Array.from(document.querySelector("#animals").children).forEach((item) => {
    for(let i = 0; i < item.classList.length; i++){
    	const classValue = item.classList[i];
	    item.dataset[classValue] = classValue;
    }
    item.removeAttribute("class");
  });
}

// addDataAtrributes();