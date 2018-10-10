
//HoFoPM: A schematic app to make and administrate a To-Do list. 
//To create a new To-Do, you may press the top "New matter" button and write it down in the new input gap.
//To tick any To-Do, indicating its completion, just click on its checkbox.
//To delete any To-Do, just click on its "Delete" button.

//variable block
const list = document.getElementById('todo-list') //html link with every ToDo
const itemCountSpan = document.getElementById('item-count') //html link with Item Count
let uncheckedCountSpan = document.getElementById('unchecked-count') //html link with Unchecked Count
let tdcompt=0; //ToDo counter
let chcompt=0; //checked ToDo counter
let checkbox; 
let boto;
let fila;

//one and only function block. Reacts to 'New matter to do' button. Consists of five sublocks: li, checkbox, delete button, appends & updates
function newTodo() {

  //li subblock
  list.appendChild(document.createElement("li"))
  fila=document.getElementsByTagName("li")[tdcompt]
  //Checkbox subblock
  checkbox=document.createElement("input")
  checkbox.setAttribute("type", "checkbox")
  checkbox.setAttribute("class", "separa") //Setting css graphical spacing class
  checkbox.addEventListener("change", function() { //Checkbox listening function. Adds/takes check counts and updates html
    if(this.checked) chcompt++;
    else chcompt--;
    actualitza();
  });
  //Delete button subblock
  boto=document.createElement("button")
  boto.innerHTML="Delete"
  boto.setAttribute("class", "separa") //Setting css graphical spacing class
  boto.addEventListener("click",function(){ //button listening function. Removes its li, takes check/ToDo counts and updates html
    this.parentElement.parentElement.removeChild(this.parentElement)
    tdcompt--
    if(this.parentElement.firstChild.checked) chcompt-- //if the button's ToDo was checked, we take one check count
    actualitza();
  })
  //append subblock
  fila.appendChild(checkbox)
  fila.appendChild(document.createElement("input"))
  fila.appendChild(boto)
  //update subblock
  tdcompt++
  actualitza();
  function actualitza(){
    itemCountSpan.innerHTML=tdcompt
    uncheckedCountSpan.innerHTML=tdcompt-chcompt;
  }
}