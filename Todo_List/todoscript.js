const list1=[];
function addTodo1(){
    list1.push(document.querySelector('.todo-name-1').value);
    console.log(list1);
}


const list2=[];
function addTodo2(){
    list2.push(document.querySelector('.todo-name-2').value);
    renderTodoList();
    console.log(list2);
}
function renderTodoList(){
    let todolistHtml='';
    for(let i=0;i<list2.length;i++){
        const html=`
        <p>
            ${list2[i]}
            <button onclick="
                list2.splice(${i} , 1 );
                renderTodoList();
            ">Delete</button>
        </p>
        `;
        todolistHtml += html;
    }
        document.querySelector('.js-todo-list-1').innerHTML = todolistHtml;
    }

const todoListObject=[{name:undefined,dueDate: undefined}];
function addTodo(){
    let name = document.querySelector('.todo-name').value;
    let dueDate = document.querySelector('.js-todo-duedate').value;
    todoListObject.push({
        // name: name,
        // dueDate: date
        name,//Shorthand property
        dueDate//Shorthand property
    });
    renderTodoListWithDate();
    console.log(todoListObject);
}
function renderTodoListWithDate(){
    let todolistHtml='';
    for(let i=0;i<todoListObject.length;i++){
        const todoObject = todoListObject[i];
        const { name , dueDate} = todoObject;
        const html=`
        <div>${name}</div> 
        <div>${dueDate}</div>
        <div>    
            <button onclick="
                todoListObject.splice(${i} , 1 );
                renderTodoListWithDate();
            " class="delete-button">Delete</button>
        </div>
        `;
        todolistHtml += html;
    }
        document.querySelector('.js-todo-list').innerHTML = todolistHtml;
   }