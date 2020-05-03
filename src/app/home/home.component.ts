import { Component, OnInit } from '@angular/core';
import { JsonPipe } from '@angular/common';

//import { unlink } from 'fs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html', 
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
     // var form = document.getElementById("form");
      var inputDes = <HTMLInputElement>document.getElementById("description");
      var inputAssign = <HTMLInputElement>document.getElementById("assigned")
      var inputdate = <HTMLInputElement>document.getElementById("date");
      var addBtn = document.getElementById("btnAdd");
      var resetBtn = document.getElementById("btnReset");
      var list = document.getElementById("the-table");
      var delBtn;
      var id = 1;
      
    

//Event Listener
  document.addEventListener('DOMContentLoaded',getTodos);
  addBtn.addEventListener('click', addTodo);
  resetBtn.addEventListener('click',resetTodo);
  list.addEventListener('click',func);
  


function addTodo()
{
  //console.log(inputDes.value);
  if(inputDes.value === ""  || inputAssign.value === "" || inputdate.value === "")
    alert("you must enter some value");
 else
    {
      var inputText = inputDes.value;
      console.log(inputText);
      var inputDate = inputdate.value;
      var inputAss = inputAssign.value;
      var myObj1 = {des:inputText,ass:inputAss,da:inputDate};
      saveLocalTodos(myObj1);
      var item = `<tr>
                  <div class="card-body">
                    <td >${inputText}</th>
                    <td >${inputDate}</th>
                    <td >
                    
                         <button type="button" id = "done" class="btn btn-link border-right ">done</button>
                          <button type="button" id = "del" class="btn btn-link ">delete</button>
                          
                    </td>
                    </div>
                  </tr>`;
      list.insertAdjacentHTML('beforeend',item);
      id++;
      resetTodo();
     
      //console.log(delBtn.value);
      //delBtn = document.getElementById("del");
     // delBtn.addEventListener('click',remove);
      //console.log(list);
      
    }
    
}
   
    
function resetTodo()
{
  inputDes.value="";
  inputAssign.value="";
  inputdate.value="";
}
function func(event)
{
    const element = event.target;
    if(element.id === 'del')
    {
      const todo = element.parentElement;
      const todo1 = todo.parentElement;
      console.log(todo);
      removeLocalTodos(todo1);
      todo1.remove();


    }
    if(element.id === 'edit')
    {
     console.log("edit task");
    }
    if(element.id === 'done')
    {
      const todo = element.parentElement;
      const todo1 = todo.parentElement;
      todo1.remove();
    } 
}
function saveLocalTodos(myObj1)
{
  var myObj;
  if(localStorage.getItem('myObj') === null){

    myObj = [];
  }
  else{
    myObj=JSON.parse(localStorage.getItem('myObj'));
  }
  myObj.push(myObj1);
  localStorage.setItem('myObj',JSON.stringify(myObj));
}
function getTodos()
{
  console.log("hello");
  var myObj;
  if(localStorage.getItem('myObj') === null){

    myObj = [];
  }
  else{
    myObj=JSON.parse(localStorage.getItem('myObj'));
  }

  myObj.forEach(function(myObj1){

    var inputText = myObj1.des;
    var inputDate = myObj1.da;
    var inputAss = myObj1.ass;
    var item = `<tr>
    <div class="card-body">
      <td >${inputText}</th>
      <td >${inputDate}</th>
      <td >
      
           <button type="button" class="btn btn-link border-right ">done</button>
            <button type="button" class="btn btn-link ">delete</button>
            
      </td>
      </div>
    </tr>`;
    list.insertAdjacentHTML('beforeend',item);


  });


}
function removeLocalTodos(myObj1)
{
  var myObj;
  if(localStorage.getItem('myObj') === null){

    myObj = [];
  }
  else{
    myObj=JSON.parse(localStorage.getItem('myObj'));
  }
  const des1 =  (myObj1.children[0].innerText);
  const ass1 =  (myObj1.children[1].innerText);
  const da1 =   (myObj1.children[2].innerText);
  var todo = {des1,ass1,da1};
  myObj.splice(myObj.indexOf(todo),1);
  localStorage.setItem('myObj',JSON.stringify(myObj));
  
}

  }
}



