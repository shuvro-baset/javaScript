/*
play with dom
 *
 */
console.log(document.title) // using document we can access all tag or element from the html page.
console.log(document.head)
console.dir(document.head) // it return all the property from head object. Actually in javascript everything is object

// we can change the html element using dom 
// document.title = "play with dom" // in html file title was set (DOM - Document Object Model) but now it will set the new one.
// document.all return special object which arrange in an array. we can iterate it using for loop and can access all the elements


// document.innerText returns browser output but document.textContent returns html output


// --  querySelector always picks first element and only one element
let lastItems = document.querySelectorAll('.item:last-child');
console.log(lastItems)

// ----parent child relationship----
const grandParent = document.querySelector('.todo-list'); // main parent element
const g_parent = grandParent.children // calling child of grand parent (it return a list)
console.log(g_parent)
const parent_two_child = g_parent[1].children
console.log(parent_two_child)

const parent = document.querySelector('#items'); // taking parent by selecting ul(id=items)
const children = parent.children // calling all child of ul parent
console.log(children);
const child_of_parent = document.querySelector('.item') // we can also find the parent of children (descending order)
console.log("here is parent of ", child_of_parent.parentElement)
const child_grant_parent = child_of_parent.closest('.todo-list')
console.log(child_grant_parent)
// we can access siblings using nextElementSiblings and previousElementSiblings method.


// ----creating an element-----
const divElement = document.createElement('div'); // we will create a div name divElement
divElement.className = 'red'; // set a class into divElement as class name 'red'
divElement.setAttribute('id', 'red_id'); // set a id attributes into divElement as id name 'red_id'
divElement.setAttribute('title', 'red div title'); // set a title attributes into divElement as 'red div title'

const container = document.querySelector('.todo-list'); // finding main container where we put this div. 
const h2Element = container.querySelector('h2'); // we take another reference element where we use new div after or before.
container.insertBefore(divElement, h2Element) // finally set the divElement before the h2Element . 'insertBefore' function take two parameter first one is for value 2nd is for reference element

// container.appendChild(divElement) --> it will set into last element of the container.

// ---- event listeners ---- //  
const headerElement = document.querySelector('#header'); //  
headerElement.addEventListener('click', (event) => {
    console.log(event);
})





// ----- TO-DO Project ------ // 
// --select elements & assign them to variables.
// select input text 
let newTask = document.querySelector('#new-task');
// select form 
let form = document.querySelector('form');
// select ul using items id
let todoUl = document.querySelector('#items');
// select right ul for completed task div.
let completeUl = document.querySelector('.complete-list ul');


// functions
let createTask = function (task) {
    let listItem = document.createElement('li'); // create li element
    let checkBox = document.createElement('input'); // create checkbox element
    let label = document.createElement('label'); // create label element

    label.innerText = task; // passing inner text
    checkBox.type = 'checkbox'; // setting input type as checkbox
 
    listItem.appendChild(checkBox); // appending checkbox item 
    listItem.appendChild(label); // appending label

    return listItem;
}

let addTask = function (event) {
    event.preventDefault(); // stopping reload when form submitted.
    let listItem = createTask(newTask.value); // calling createTask funct and passing newTask value into createTask function.
    todoUl.appendChild(listItem);
    newTask.value = ""; // blank newTask input value.
    // bind the new list item to the incomplete list with checkbox.
    bindInCompleteItems(listItem, completeTask);
}

// complete task function. it is called when checkbox is clicked from incomplete task panel.
let completeTask = function () {
    let listItem = this.parentNode; // finding list item.
    let deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';
    deleteBtn.className = 'delete';
    listItem.appendChild(deleteBtn);

    let checkBox = listItem.querySelector('input[type="checkbox"]');
    checkBox.remove();
    completeUl.appendChild(listItem);
    bindCompleteItems(listItem, deleteTask);
}

let deleteTask = function () {
    let listItem = this.parentNode;
    let ul = listItem.parentNode;
    ul.removeChild(listItem);
}

// binding incomplete items when clicked the checkbox item from incomplete task panel.
let bindInCompleteItems = function (taskItem, checkboxClick) {
    let checkBox = taskItem.querySelector('input[type="checkbox"]');
    checkBox.onchange = checkboxClick;
}

let bindCompleteItems = function (taskItem, deleteButtonClick) {
    let deleteButton = taskItem.querySelector('.delete');
    deleteButton.onclick = deleteButtonClick;
}

for (let i = 0; i < todoUl.children.length; i++) {
    bindInCompleteItems(todoUl.children[i], completeTask);
}

for (let i = 0; i < completeUl.children.length; i++) {
    bindCompleteItems(completeUl.children[i], deleteTask);
}

form.addEventListener('submit', addTask);