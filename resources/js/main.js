//Checkout: phase-2

//localStorage.clear();

//Client Username
let username = '';
let userClient = document.getElementsByTagName('meta')[3].content; //Check if user is signed in
let xhr = new XMLHttpRequest();
xhr.withCredentials = true;  
let url = `${location.protocol}//${location.host}`;

// Local Storage
  //Todo List Data
  let data = (localStorage.getItem('todoList') && !userClient) ? JSON.parse(localStorage.getItem('todoList')) : {
  todo: [],
  completed: [],
  deleted: [],
  };
  
  // Theme Index
  let themeIndex = (localStorage.getItem('themeIndex')) ? JSON.parse(localStorage.getItem('themeIndex')) : 0 ;

  // Night mode status
  let nightMode = (localStorage.getItem('nightMode')) ? JSON.parse(localStorage.getItem('nightMode')) : false;

  // menuOpen status
  let menuOpen = (localStorage.getItem('menuOpen')) ? JSON.parse(localStorage.getItem('menuOpen')) : false;

// SVG Icons
let removeSVG = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 22 22" style="enable-background:new 0 0 22 22;" xml:space="preserve"><rect class="noFill" width="22" height="22"/><g><g><path class="fill" d="M16.1,3.6h-1.9V3.3c0-1.3-1-2.3-2.3-2.3h-1.7C8.9,1,7.8,2,7.8,3.3v0.2H5.9c-1.3,0-2.3,1-2.3,2.3v1.3c0,0.5,0.4,0.9,0.9,1v10.5c0,1.3,1,2.3,2.3,2.3h8.5c1.3,0,2.3-1,2.3-2.3V8.2c0.5-0.1,0.9-0.5,0.9-1V5.9C18.4,4.6,17.4,3.6,16.1,3.6z M9.1,3.3c0-0.6,0.5-1.1,1.1-1.1h1.7c0.6,0,1.1,0.5,1.1,1.1v0.2H9.1V3.3z M16.3,18.7c0,0.6-0.5,1.1-1.1,1.1H6.7c-0.6,0-1.1-0.5-1.1-1.1V8.2h10.6L16.3,18.7L16.3,18.7z M17.2,7H4.8V5.9c0-0.6,0.5-1.1,1.1-1.1h10.2c0.6,0,1.1,0.5,1.1,1.1V7z"/></g><g><g><path class="fill" d="M11,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6s0.6,0.3,0.6,0.6v6.8C11.6,17.7,11.4,18,11,18z"/></g><g><path class="fill" d="M8,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8C7.4,10.2,7.7,10,8,10c0.4,0,0.6,0.3,0.6,0.6v6.8C8.7,17.7,8.4,18,8,18z"/></g><g><path class="fill" d="M14,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6c0.4,0,0.6,0.3,0.6,0.6v6.8C14.6,17.7,14.3,18,14,18z"/></g></g></g></svg>';
let completeSVG = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 22 22" style="enable-background:new 0 0 22 22;" xml:space="preserve"><rect y="0" class="noFill" width="22" height="22"/><g><path class="fill" d="M9.7,14.4L9.7,14.4c-0.2,0-0.4-0.1-0.5-0.2l-2.7-2.7c-0.3-0.3-0.3-0.8,0-1.1s0.8-0.3,1.1,0l2.1,2.1l4.8-4.8c0.3-0.3,0.8-0.3,1.1,0s0.3,0.8,0,1.1l-5.3,5.3C10.1,14.3,9.9,14.4,9.7,14.4z"/></g></svg>';
let themeSVG = '<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="-167.5 435.5 30 30" style="enable-background:new -167.5 435.5 30 30;" xml:space="preserve"><g><path class="fill" d="M-141.8,440.9c-3-3.5-7-5.4-11.2-5.4c-3.5,0-6.9,1.4-9.4,3.8c-4,3.9-5.4,8.6-3.7,12.9c1.4,3.4,4.6,5.9,7.8,5.9c0.1,0,0.2,0,0.3,0c0.5,0,0.9-0.1,1.4-0.1c0.5,0,1-0.1,1.5-0.1c1.1,0,2,0,2,2.7c0,2.9,1.8,4.9,4.3,4.9c0,0,0,0,0,0c1.8,0,3.8-1,5.8-3c2.6-2.6,4.4-6.3,4.8-10.1C-137.8,448.2-139.1,444.1-141.8,440.9z M-144.5,461c-1.6,1.6-3.1,2.4-4.3,2.4c-1.6,0-2.2-1.5-2.2-2.9c0-3.3-1.3-4.8-4.1-4.8c-0.5,0-1.1,0-1.7,0.1c-0.4,0-0.9,0.1-1.3,0.1c-0.1,0-0.1,0-0.2,0c-2.3,0-4.8-1.9-5.9-4.6c-1.4-3.4-0.2-7.3,3.2-10.6c2.1-2.1,5-3.2,8-3.2c3.6,0,7,1.7,9.6,4.7C-138.3,448.2-140,456.4-144.5,461z"/><path class="fill" d="M-148,452.3c0,1.7,1.4,3.2,3.1,3.2c1.7,0,3.1-1.4,3.1-3.2c0-1.7-1.4-3.2-3.1-3.2C-146.6,449.1-148,450.5-148,452.3z M-143.9,452.3c0,0.6-0.5,1.1-1.1,1.1c-0.6,0-1.1-0.5-1.1-1.1c0-0.6,0.5-1.1,1.1-1.1C-144.3,451.2-143.9,451.7-143.9,452.3z"/><path class="fill" d="M-144.6,444.9c0-1.7-1.4-3.2-3.1-3.2c-1.7,0-3.1,1.4-3.1,3.2c0,1.7,1.4,3.2,3.1,3.2C-146,448.1-144.6,446.7-144.6,444.9z M-148.8,444.9c0-0.6,0.5-1.1,1.1-1.1c0.6,0,1.1,0.5,1.1,1.1c0,0.6-0.5,1.1-1.1,1.1C-148.3,446-148.8,445.5-148.8,444.9z"/><path class="fill" d="M-154.9,439.5c-1.7,0-3.1,1.4-3.1,3.2c0,1.7,1.4,3.2,3.1,3.2s3.1-1.4,3.1-3.2C-151.8,440.9-153.2,439.5-154.9,439.5z M-154.9,443.7c-0.6,0-1.1-0.5-1.1-1.1c0-0.6,0.5-1.1,1.1-1.1c0.6,0,1.1,0.5,1.1,1.1C-153.8,443.2-154.3,443.7-154.9,443.7z"/><path class="fill" d="M-160.3,444.9c-1.7,0-3.1,1.4-3.1,3.2c0,1.7,1.4,3.2,3.1,3.2s3.1-1.4,3.1-3.2C-157.2,446.3-158.6,444.9-160.3,444.9z M-160.3,449.1c-0.6,0-1.1-0.5-1.1-1.1c0-0.6,0.5-1.1,1.1-1.1c0.6,0,1.1,0.5,1.1,1.1C-159.3,448.6-159.8,449.1-160.3,449.1z"/></g></svg>';

// Views
const viewings = {
  TASKS: 'tasks',
  DELETED: 'deleted',
  DONE_TASKS: 'completed',
}

//Initiate starting View
let view = viewings.TASKS;

//Active Elements
let isInputActive;

//Themes
const theme = function(themeName,mainColor){
  this.name = themeName;
  this.mainColor = mainColor;
};
const themes = [
  new theme('Ocean','RGBA(69,74,222,1)'),     // #454ADE RGBA(69,74,222,1)
  new theme('Pumpkin','RGBA(255,78,0,1)'),    // #FF4E00 RGBA(255,78,0,1)
  new theme('Rum','RGBA(99,21,51,1)'),        // #631533 RGBA(99,21,51,1)
  new theme('Honey','RGBA(243,167,18,1)'),    // #F3A712 RGBA(243,167,18,1)
  new theme('Salmon','RGBA(255,113,91,1)'),
  new theme('Skyblue', 'skyblue'),
  new theme('Royal','RGBA(90,45,158,1)'),     // #5A2D9E RGBA(90,45,158,1)
  new theme('Mint','RGBA(37,185,154,1)')];    // #25B99A RGBA(37,185,154,1)

//List Item Class
let listItem = function(obj){
  obj.uID=((Date.now() + Math.random()).toString()),
  obj.dateID= ((new Date()).toString()),
  obj.creationDate= (new Date()).toLocaleDateString('en-US'),
  obj.completionDate= '',
  obj.deletionDate= ''
};

//Initial Todo Render
renderList(view); 

//Initial Theme Render
themeSwitch(themeIndex);

//Set Night Mode Status
setNightMode(nightMode);

//Menu Status
menuClickEvent(menuOpen);


/////// Command Mode (Debugging) \\\\\\\\

//Command Variable
let cmdMode = false

//Sumbit Command
function sumbitCommand(value){
  let command = value.split(' ')
  let aurgument = command.slice(1,).join(' ');
  document.getElementById('item').value = ''; //Clear input bar
  //console.log(aurgument);
  switch(command[0]){
    case 'theme':
      themeSwitch(aurgument);
      break;
    case 'cmd':
      toggleCommandMode(JSON.parse(aurgument));
      break;
    case 'night':
      setNightMode(JSON.parse(aurgument));
      break;
    case 'unrender':
    case 'ur-':
      unRenderList();
      break;
    case 'render':
    case 'r-':
      renderList(aurgument);
      break;
    case 'clear':
    case 'c-':
      localStorage.clear();
      break;
    case 'view':
    case 'v-':
      console.log(view);
      break;
    case 'newList':
    case 'newlist':
    case 'nl-':
      newList(aurgument);
      break;
    case 'newItem':
    case 'ni-':
      submitItem(aurgument,true);
      break;
    default:
      console.log(`"${command[0]}" command not recognized`);
  }
}

/////// CHECK USER SIGN IN \\\\\\\\

//Set values if a user is signed in
(function profileTabUsername(){
  //Setup user's Profile Tab
  let profileTab = document.getElementById('profile');
  if(profileTab.innerText !== "Sign-In"){
    profileTab.setAttribute('data-profile',' ');
    profileTab.setAttribute('href','/auth/logout');
    document.getElementById('clientStatus').style.background = 'var(--mainAccent)';
    document.getElementById('clientStatus').innerText = 'Online';
  }else{
  profileTab.setAttribute('data-profile','(Offline)');
  profileTab.setAttribute('href','/auth/google');
    document.getElementById('clientStatus').style.background = '#444';
    document.getElementById('clientStatus').innerText = 'Offline';
  }
  //If user is signed in, fetch their tasks
  if(userClient){
    fetch(`${url}/fetch`)
    .then(res => res.json())
    .then(data => extractJSON(data)).catch(err => console.log(err));
  };
})();

/////// FETCHED JSON PRINTING \\\\\\\\

function extractJSON(dataArr){
  let arr = dataArr;
  for (let i in arr){
    if(arr[i].deletionDate){
      //console.log(`Task:${arr[i].task} = deleted`);
      data.deleted.push(arr[i]);
    } else if (arr[i].completionDate){
      //console.log(`Task:${arr[i].task} = completed`);
      data.completed.push(arr[i]);
    } else if (arr[i].creationDate){
      //console.log(`Task:${arr[i].task} = todo`);
      data.todo.push(arr[i]);
    }
    renderList(view);
  }
}

/////// POST REQUEST \\\\\\\\

function post(obj,index) {
  if(!userClient){return};                                                                    //Returns if user is not signed in
  let form = document.createElement("form");                                                  //Temp form is made
  form.setAttribute("method", 'post');
  form.setAttribute("enctype", 'multipart/form-data"');                                       //Encrypted to be parsed by multiparty
  form.setAttribute("action", '/');

  for(let key in obj) {
      if(obj.hasOwnProperty(key)) {
          let hiddenField = document.createElement("input");
          hiddenField.setAttribute("type", "text");
          hiddenField.setAttribute("name", key);
          hiddenField.setAttribute("value", obj[key]);
          form.appendChild(hiddenField);
      }
  }
  document.body.appendChild(form);  
  let formData = new FormData(form);                                                          //Convert to FormData
  xhr.onreadystatechange = ()=>{
    if(xhr.readyState == XMLHttpRequest.DONE){data.todo[index]=JSON.parse(xhr.responseText)}  //Receives the saved DB model to replace temp object 
  }
  xhr.open('POST',`${url}/task`);                                              //Open XHR Socket
  xhr.send(formData);                                                                         //Send FormData to Node
  document.body.removeChild(form);                                                            //Removes the temp form from html
}

/////// UPDATE REQUEST \\\\\\\\

function update(oldObj,newObj){                                                               //Receives the Old Model and New Model
  if(!userClient){return};
  let oldItem = JSON.stringify(oldObj);                                                       //Stringify Old Model
  let newItem = JSON.stringify(newObj);                                                       //Stringify New Model
  let sendItem = `[${oldItem},${newItem}]`;                                                   //Appends into single array with two objects                                                           
  xhr.open('POST',`${url}/update`);                                            //Open XHR Socket
  xhr.send(sendItem);                                                                         //Send to Node
}

/////// REMOVE REQUEST \\\\\\\\

function remove(obj){
  if(!userClient){return};
  let removeItem = JSON.stringify(obj);                                                       //Stringify Target Model
  xhr.open('POST',`${url}/remove`);                                            //Open Socket
  xhr.send(removeItem);                                                                       //Send to Node
}

/////// USER INTERFACE FUNCTIONS \\\\\\\\

//Menu Event Listener
document.getElementById('Menu').addEventListener('click', ()=>{
  menuOpen = !menuOpen;
  menuClickEvent(menuOpen);
})

function menuClickEvent(value){
  document.getElementById('itemBin').style.marginLeft = menuOpen ? '0' : '160px';
  document.getElementById('sideMenu').style.transform = menuOpen ? 'translateX(-200px)' : 'translateX(0px)';
  document.getElementById('itemBin').style.width = menuOpen ? '100%' : 'calc(100% - 160px)';
  document.getElementById('clientStatus').style.marginLeft = menuOpen ? '0' : '160px';
  localStorage.setItem('menuOpen', JSON.stringify(value));
}

(function clientStatus(){
  console.log(userClient ? "Online":"Offline");
  document.getElementById('clientStatus').style.background = userClient ? '--mainAccent': '#444';

})()

//Theme change click event
document.getElementById('theme').addEventListener('click', function(){
  themeIndex !== themes.length - 1 ? themeIndex ++ : themeIndex = 0; 
  themeSwitch(themeIndex);
})

//Theme Switcher
function themeSwitch(index){
  let theme = themes[index];
  document.getElementById('themeLabel').innerHTML =`Theme: ${theme.name}`;
  document.documentElement.style.setProperty('--mainAccent', theme.mainColor);
  localStorage.setItem('themeIndex', JSON.stringify(index));
}

//Night Mode toggle on click
document.getElementById('night').addEventListener('click', function(){
  nightMode = !nightMode;
  setNightMode(nightMode);
})

//Set Night Mode
function setNightMode(value){
  document.documentElement.style.setProperty('--backColor', value ? '#282828' : '#edf0f1');
  document.documentElement.style.setProperty('--itemColor', value ? '#454545' : '#fff');
  document.documentElement.style.setProperty('--containerTextColor', value ? '#aaa' : '#666');
  document.documentElement.style.setProperty('--menuHoverColor', value ? '#444' : '#aaa');
  document.documentElement.style.setProperty('--itemTextColor', value ? '#ddd' : '#444');
  document.documentElement.style.setProperty('--itemCompleteColor', value ? 'rgba(68,68,68,.3)' : 'rgba(255,255,255,.25)');
  document.getElementById('nightLabel').innerHTML =`Night Mode: ${nightMode ? 'ON' : 'OFF'}`;
  localStorage.setItem('nightMode', JSON.stringify(value));
}

//Task Button
document.getElementById('tasks').addEventListener('click', function(){
  renderList(viewings.TASKS);
});

//Delete Button
document.getElementById('deleted').addEventListener('click', function(){
  renderList(viewings.DELETED);
});

//Completed Button
document.getElementById('done').addEventListener('click', function(){
  renderList(viewings.DONE_TASKS);
});

//Focus on input on load
document.getElementById('item').focus();

//Add button pressed
document.getElementById('add').addEventListener('click', function(){
  let value = document.getElementById('item').value;
  if(value){submitItem(value)}
})

//Header Logo and input bar transitions
function headerStyling(){
  document.getElementById('item').style.marginLeft = (isInputActive) ? '55px': '200px';
  document.getElementById('item').style.width = (isInputActive) ? 'calc(100% - 55px)': 'calc(100% - 200px)';
  document.getElementById('logo').style.width = (isInputActive) ? '0px': '140px';  
  document.getElementById('logoSvg').style.width = (isInputActive) ? '0px': '140px';    
}

//Track click focus changes
document.body.addEventListener('click',()=>{
  if(document.activeElement !== document.getElementById('item')){
    isInputActive = false;
    headerStyling();
    console.log('Input bar in not active')}
})

//'Enter' press = submit
document.getElementById('item').addEventListener('keydown',function (e) {
  let value = document.getElementById('item').value;
  isInputActive = (document.activeElement === this && value.length > -1)
  headerStyling();
  if (e.key === "Enter" && value) {return submitItem(value)};
  if (document.activeElement === this){
    switch(e.key){
      case "ArrowUp":
        cycleInputHistory('UP');
        break;
      case "ArrowDown":
        cycleInputHistory('DOWN');
      break;
    }
  
  }})

//Toggle CommandMode
function toggleCommandMode(status) {
  status ? document.getElementById('themeLabel').innerHTML = `Theme: ${'cmd'}` : themeSwitch(themeIndex);
  status ? document.documentElement.style.setProperty('--mainAccent', '#000') : themeSwitch(themeIndex);
  document.getElementById('item').value = '';
}

//Store input history to be recalled again (Like command prompt)
let inputHistory = [];
let inputHistoryIndex = -1;

function cycleInputHistory(direction){
  switch(direction){
    case "UP":
      if(!inputHistory[inputHistoryIndex + 1]){return};
      inputHistoryIndex ++;
      break;
    case "DOWN":
      if(!inputHistory[inputHistoryIndex - 1] && inputHistoryIndex - 1 !== -1){return};
      inputHistoryIndex --;
      break;
  }
  if(inputHistory[inputHistoryIndex] === undefined){return document.getElementById('item').value = ''};
  document.getElementById('item').value = inputHistory[inputHistoryIndex];
}

//Submit item
function submitItem(value,override){
  //Push submit to history
  inputHistory.push(value);
  inputHistoryIndex = -1;
  //Command Mode Check
  switch(value){
    case "```":
      cmdMode = !cmdMode;
      toggleCommandMode(cmdMode); //toggle Command Mode
      break;
    default:
      if(cmdMode && !override){sumbitCommand(value);return;} //Submit Command
      else{
        //Normal Submit
        view !== viewings.TASKS ? renderList(viewings.TASKS): 0; //Switch to task list before submit
        let newItem = {
          task: value
        };
        listItem(newItem);                                                //Mixin Object
        data.todo.push(newItem);                                          //Push to Data
        addItemTodo(newItem);                                             //Render Item
        post(newItem,data.todo.findIndex((item => item === newItem)));    //POST (If signed-in)
        document.getElementById('item').value = '';                       //Clear Input Bar
        dataObjectUpdate();                                               //Save Data Array
      }
  }
};

/////// RENDERING FUNCTIONS \\\\\\\

//List Renderer
function renderList(renderView){
  unRenderList(); //Unrender anything present if present
  view = renderView;
  console.log(`Currently viewing: ${view}`);
  switch (renderView){
    case viewings.TASKS:
    //Render uncomplete task
      if (!data.todo.length && !data.completed.length) return;
      //Render uncomplete tasks
      for (let i in data.todo){
      let value = data.todo[i];
      addItemTodo(value);
      }
      //render complete tasks
      for (let i in data.completed){
      let value = data.completed[i];
      addItemTodo(value, true);
      }
      break;
    case viewings.DELETED: //Render deleted tasks only
      for (let i in data.deleted){
      let value = data.deleted[i];
      addItemTodo(value);
      }
      break;
    case viewings.DONE_TASKS: //Render completed tasks only
      for (let i in data.completed){
      let value = data.completed[i];
      addItemTodo(value, true);
      }
      break;
    default: 
    console.log(`Viewing: ${renderView} resulted in a error`);
  }
};

//List Unrender
function unRenderList(){
  let items = document.querySelectorAll("li");
  if (items[0]){
  for (let i = 0; i < items.length; i++){
  items[i].parentNode.removeChild(items[i]);
  }}

  let list = document.querySelectorAll('ul');
  if (list[0]){
  for (let i = 0; i < list.length; i++){
  list[i].parentNode.removeChild(list[i]);
  }}

  console.log('Unrender done');
};

/////// LOCAL STORAGE SAVING \\\\\\\

//Save Local Storage
function dataObjectUpdate(){
  localStorage.setItem('todoList', JSON.stringify(data));
  let cols = document.querySelectorAll('ul.todoList li');
[].forEach.call(cols, addDnDHandlers);
  console.log(data);
};

/////// ITEM MANIPULATION FUNCTIONS \\\\\\\

//ADD item
function addItemTodo(obj, completed){
  //Create list elem and add text
  let item = document.createElement('li');
  item.innerText = obj.task;
  //Create button elements
  let buttons = document.createElement('div');
  buttons.classList.add ('buttons');

  let remove = document.createElement('button');
  remove.classList.add ('remove');
  remove.innerHTML = removeSVG;
  remove.addEventListener('click', removeItem);
  
  let complete = document.createElement('button');
  complete.classList.add ('complete');
  complete.innerHTML = completeSVG;
  complete.addEventListener('click', completeItem);
  
  //Appends elems together
  buttons.appendChild(remove);
  buttons.appendChild(complete);
  item.appendChild(buttons);
  
  
  //Assign className to item
  if (view !== viewings.DELETED){completed ? item.className = "complete" : item.className = "uncomplete";}
  else {item.className = "deleted";}
  
  //Assign Object and DOM manipulations
  
  let itemIndex;
  switch (item.className){
    case 'uncomplete':
    itemIndex = data.todo.indexOf(obj.task);
    item.setAttribute('data-date', obj.creationDate);
    item.setAttribute('data-dateID', obj.uID);
    item.setAttribute('title',`Made: ${obj.creationDate}`);
      break;
    case 'complete':
    itemIndex = data.completed.indexOf(obj.task);
    item.setAttribute('data-date', obj.completionDate);
    item.setAttribute('data-dateID', obj.uID);
    item.setAttribute('title',`Made: ${obj.creationDate}\nDone: ${obj.completionDate}`);
      break;
    case 'deleted':
    itemIndex = data.deleted.indexOf(obj.task);
    item.setAttribute('data-date', obj.deletionDate);
    item.setAttribute('data-dateID', obj.uID);
    item.setAttribute('title',`Deleted: ${obj.deletionDate}`);
      break;
  }

  item.setAttribute('draggable', 'true');

  //Decide which list to add to
  let list;

  if (!document.getElementById(item.getAttribute('data-date'))) newList(item.getAttribute('data-date'));
  list = document.getElementById(item.getAttribute('data-date'));

  function newList(listValue){
    let container = document.getElementById('itemBin');
    let newList = document.createElement('ul');
    newList.className = 'todoList'
    newList.id = listValue;
    container.insertBefore(newList, container.childNodes[0]);
    console.log(newList.id);
    //make list header with date
    let listHeader = document.createElement('p');
    listHeader.setAttribute('data-date',newList.id);
    listHeader.setAttribute('class','listHeader');
    listHeader.innerText = newList.id;
    newList.appendChild(listHeader);
  }

  //Insert to list
  list.insertBefore(item, list.childNodes[complete ? document.getElementsByClassName("uncomplete").length : 0]);
}

//COMPLETE Item
function completeItem(){
  let completedItem = this.parentNode.parentNode;
  let listParent = completedItem.parentNode;
  let itemClass = completedItem.className;
  let itemValue = completedItem.innerText;
  let itemIndex;
  let itemPush;
  
  switch (itemClass){
    //Change item for 'uncomplete' to 'complete'
    case 'uncomplete':            
      //Find and temp clone index
      itemIndex = data.todo.findIndex((item => item.task === itemValue));
      itemPush = data.todo[itemIndex];
      itemPush.completionDate = (new Date()).toLocaleDateString('en-US');
      update(data.todo[itemIndex],itemPush);
      //Update timestamp values
      completedItem.setAttribute('title',`Made: ${itemPush.creationDate}\nDone: ${itemPush.completionDate}`);
      completedItem.setAttribute('data-date', itemPush.completionDate);
      //Object and list mutations
      data.completed.push(itemPush);
      data.todo.splice(itemIndex,1);
      //Rendering and DOM manipulation
      completedItem.className = "complete";
      listParent.removeChild(completedItem);
      listParent.insertBefore(completedItem, listParent.childNodes[document.getElementsByClassName("uncomplete").length]); //Insert under last uncomplete object
      break;
    //Change item from "complete" to "uncomplete"
    case 'complete':              
      //Find and temp clone index
      itemIndex = data.completed.findIndex((item => item.task === itemValue));
      itemPush = data.completed[itemIndex];
      itemPush.completionDate = '';
      update(data.completed[itemIndex],itemPush);
      //Update timestamp values
      completedItem.setAttribute('title',`Made:${itemPush.creationDate}`);
      //Object and list mutations
      data.todo.push(itemPush);
      data.completed.splice(itemIndex,1);
      //Rendering and DOM manipulation
      completedItem.className = "uncomplete";
      listParent.removeChild(completedItem);
      if(view === viewings.DONE_TASKS){
        listParent.childNodes[0] ? 0 : listParent.parentNode.removeChild(listParent);
        dataObjectUpdate();
        return;}
      listParent.insertBefore(completedItem, listParent.childNodes[0]);
      break;
  }
  dataObjectUpdate();
}

//REMOVE Item
function removeItem(){
  let deletingItem = this.parentNode.parentNode;
  let itemClass = deletingItem.className;
  let itemValue = deletingItem.innerText; //Gets the text only, not list item
  let parentList = deletingItem.parentNode;
  let itemIndex;
  let itemPush;

  //Array Mutation and className change
  switch (itemClass){
    case 'uncomplete':
      //Find and temp store item object
      itemIndex = data.todo.findIndex((item => item.task === itemValue));
      itemPush = data.todo[itemIndex];
      itemPush.deletionDate = (new Date()).toLocaleDateString('en-US');
      update(data.todo[itemIndex],itemPush);
      //Set Class and push/transfer
      itemClass = 'deleted';
      data.deleted.push(itemPush)
      data.todo.splice(itemIndex,1);
      break;
    case 'complete':
      //Find and temp store item object
      itemIndex = data.completed.findIndex((item => item.task === itemValue));
      itemPush = data.completed[itemIndex];
      itemPush.deletionDate = (new Date()).toLocaleDateString('en-US');
      update(data.completed[itemIndex],itemPush);
      //Set class and push/transfer
      itemClass = 'deleted';
      data.deleted.push(itemPush)
      data.completed.splice(itemIndex,1);
      break;
    case 'deleted':
      //Find and delete item
      itemIndex = data.deleted.findIndex((item => item.task === itemValue));
      remove(data.deleted[itemIndex]);
      data.deleted.splice(itemIndex,1);
      break;
  }

  //Remove item from the list it's in
  parentList.removeChild(deletingItem);
  //If item was the last in its list, delete the list
  if(!parentList.childNodes[1]){                              //Index 1 because list header will always be at index 0
    parentList.parentNode.removeChild(parentList);
    dataObjectUpdate();
    return;
  }
  dataObjectUpdate();
}


/////// LIST ITEM REORDERING \\\\\\\

let dragSrcEl = null;
let draggingIndex = undefined;
let dropIndex = undefined;
function handleDragStart(e) {
  dragSrcEl = this;
  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/html', this.outerHTML);

  switch(this.getAttribute("class")){
    case 'uncomplete':
      draggingIndex = data.todo.findIndex((item => item.uID === this.getAttribute('data-dateid')));
      break;
    case 'complete':
      draggingIndex = data.completed.findIndex((item => item.uID === this.getAttribute('data-dateid')));
      break;
    case 'deleted':
      draggingIndex = data.deleted.findIndex((item => item.uID === this.getAttribute('data-dateid')));
      break;
  };
  console.log(`Dragging Index: ${draggingIndex}`);
  this.classList.add('dragElem');
}
function handleDragOver(e) {
  if (e.preventDefault) {
    e.preventDefault(); // Necessary. Allows us to drop.
  }
  this.classList.add('over');
  e.dataTransfer.dropEffect = 'move';                           // See the section on the DataTransfer object.
  return false;
}

function handleDragEnter(e) {}                                  // this / e.target is the current hover target.

function handleDragLeave(e) {this.classList.remove('over')}     // this / e.target is previous target element.

function handleDrop(e) {
  if (e.stopPropagation) {e.stopPropagation()}                  // Stops some browsers from redirecting.
  
  // Don't do anything if dropping the same column we're dragging.
  if (dragSrcEl != this) {
    let itemClass = this.getAttribute("class").split(' ')[0];
    switch(itemClass){
      case 'uncomplete':
        dropIndex = data.todo.findIndex((item => item.uID === this.getAttribute('data-dateid')));
        break;
      case 'complete':
        dropIndex = data.completed.findIndex((item => item.uID === this.getAttribute('data-dateid')));
        break;
      case 'deleted':
        dropIndex = data.deleted.findIndex((item => item.uID === this.getAttribute('data-dateid')));
        break;
    };
    console.log(`Dropping in to index pos: ${dropIndex - 1}`);
    reorderList(draggingIndex,dropIndex, itemClass);
    this.parentNode.removeChild(dragSrcEl);
    var dropHTML = e.dataTransfer.getData('text/html');
    this.insertAdjacentHTML('beforebegin',dropHTML);
    var dropElem = this.previousSibling;
    addDnDHandlers(dropElem);
  }
  this.classList.remove('over');
  return false;
}

function reorderList(pos1,pos2,listClass){
  let index1 = pos1;
  let index2 = pos2 - 1;
  let list = listClass;
  let data1;
  let data2;
  switch(list){
    case 'uncomplete':
      data1 = data.todo[index1];
      data2 = data.todo[index2];
      console.log(`Data 1: ${data1}`);      
      console.log(`Data 2: ${data2}`);
      data.todo[index2] = data1;
      data.todo[index1] = data2;
      break;
    case 'complete':
      data1 = data.todo[index1];
      data2 = data.todo[index2];
      data.completed[index2] = data1;
      data.completed[index1] = data2;
      break;
    case 'deleted':
      data1 = data.todo[index1];
      data2 = data.todo[index2];
      data.deleted[index2] = data1;
      data.deleted[index1] = data2;
      break;
  };
  dataObjectUpdate();
}

function handleDragEnd(e) {
  // this/e.target is the source node.
  this.classList.remove('over');
}

function addDnDHandlers(elem) {
  elem.addEventListener('dragstart', handleDragStart, false);
  elem.addEventListener('dragenter', handleDragEnter, false)
  elem.addEventListener('dragover', handleDragOver, false);
  elem.addEventListener('dragleave', handleDragLeave, false);
  elem.addEventListener('drop', handleDrop, false);
  elem.addEventListener('dragend', handleDragEnd, false);
}

let cols = document.querySelectorAll('ul.todoList li');
[].forEach.call(cols, addDnDHandlers);