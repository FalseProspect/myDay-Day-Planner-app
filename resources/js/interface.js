//USER INTERFACE FUNCTIONS:

//Menu Event Listener
document.getElementById('Menu').addEventListener('click', ()=>{
    menuOpen = !menuOpen;
    menuClickEvent(menuOpen);
  })
  
  function menuClickEvent(value){
    document.getElementById('itemBin').style.marginLeft = menuOpen ? '150px' : '0';
    document.getElementById('sideMenu').style.transform = menuOpen ? 'translateX(0px)' : 'translateX(-200px)' ;
    document.getElementById('itemBin').style.width = menuOpen ? 'calc(100% - 150px)' : '100%';
    document.getElementById('clientStatus').style.marginLeft = menuOpen ? '80px' : '0';
    localStorage.setItem('menuOpen', JSON.stringify(value));
  }
  
  //Theme change click event
  document.getElementById('theme').addEventListener('click', function(){
    themeIndex !== themes.length - 1 ? themeIndex ++ : themeIndex = 0; 
    themeSwitch(themeIndex);
  })
  
  //Theme Switcher
  function themeSwitch(index){
    let theme = themes[index];
    document.getElementById('themeLabel').innerHTML = theme.name;
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
    document.getElementById('nightLabel').innerHTML =`Night: ${nightMode ? 'ON' : 'OFF'}`;
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
    let value = document.getElementById('item').value.trim();
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
  document.body.addEventListener('click',(c)=>{
    if(document.activeElement !== document.getElementById('item')){
      isInputActive = false;
      headerStyling();}
  
  })
  
  
  let focusedItem;
  document.addEventListener('click',(c)=>{
    //Update edited item on click away
    if(focusedItem && c.target !== focusedItem.element){
      itemEditUpdate()
    }
  })
  
  document.addEventListener('keydown',(e)=>{
    //Update edited item on "Enter"
    if (e.key === "Enter" && focusedItem) {return itemEditUpdate()};
  })
  
  function toggleItemEdit(item){
    elem = item
    elemVal = item.value
    console.log(elem)
    if(elem.className !== 'uncomplete') return
    let buttons = elem.getElementsByTagName('div')[0]
    let input = document.createElement('input')
    input.value = elem.innerText
    
    //Get item data
    itemIndex = data.todo.findIndex((item => item.task === elem.innerText));
    itemPush = data.todo[itemIndex];
    
    console.log(itemPush)
    elem.innerText = ''
    elem.appendChild(input)
    elem.appendChild(buttons)
    elem.getElementsByTagName('input')[0].focus()
    focusedItem = {
      element : elem,
      itemIndex : itemIndex,
      item : itemPush
    }
  }
  
  function itemEditUpdate(){
    elem = focusedItem.element
    let inputVal = elem.getElementsByTagName('input')[0].value
    let buttons = elem.getElementsByTagName('div')[0]
    let itemPush = focusedItem.item
    let itemIndex = focusedItem.itemIndex
    elem.innerText = inputVal
    elem.appendChild(buttons)
    itemPush.task = inputVal
    update(data.todo[itemIndex],itemPush)
    dataObjectUpdate()
    focusedItem = null
  }
  
  //'Enter' press = submit
  document.getElementById('item').addEventListener('keydown',function (e) {
    let value = document.getElementById('item').value.trim();
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
    }
  })
  
  //Toggle CommandMode
  function toggleCommandMode(status) {
    status ? document.getElementById('themeLabel').innerHTML = `Void` : themeSwitch(themeIndex);
    status ? document.documentElement.style.setProperty('--mainAccent', '#000') : themeSwitch(themeIndex);
    document.getElementById('item').value = '';
  }
  
  //Store input history to be recalled again (Like command prompt)
  let inputHistory = [];
  let inputHistoryIndex = -1;
  
  function cycleInputHistory(direction){
    switch(direction){
      case "DOWN":
        if(!inputHistory[inputHistoryIndex + 1]){return};
        inputHistoryIndex ++;
        break;
      case "UP":
        if(!inputHistory[inputHistoryIndex - 1] && inputHistoryIndex - 1 !== -1){return};
        inputHistoryIndex --;
        break;
    }
    if(inputHistory[inputHistoryIndex] === undefined){return document.getElementById('item').value = ''};
    document.getElementById('item').value = inputHistory[inputHistoryIndex];
  }

  let touchsurface = document.body,
        startX,
        startY,
        dist,
        thresholdRight = 150, //required min distance traveled to be considered swipe right
        thresholdLeft = -150, //required min distance traveled to be considered swipe left
        allowedTime = 200, // maximum time allowed to travel that distance
        elapsedTime,
        startTime

let doubleTapSurface = document.querySelectorAll('ul.todoList li')

let dblTouch = 0;
function dblTapEvent(elem){
  elem.addEventListener('touchstart', (e)=>{
    dblTouch ++
    setTimeout(()=>{
      dblTouch = 0;
    }, 500)
    if(dblTouch === 2) toggleItemEdit(elem)
    console.log(dblTouch)})
}

let cols = document.querySelectorAll('ul.todoList li');
[].forEach.call(cols, dblTapEvent);
 
function swipeRight(){
  console.log('swipe right')
  menuOpen = true;
  menuClickEvent(menuOpen);
}
function swipeLeft(){
  console.log('swipe left')
  menuOpen = false;
  menuClickEvent(menuOpen);
}

 
touchsurface.addEventListener('touchstart', function(e){
  if(focusedItem)return
    var touchobj = e.changedTouches[0]
    dist = 0
    startX = touchobj.pageX
    startY = touchobj.pageY
    startTime = new Date().getTime() // record time when finger first makes contact with surface
    // e.preventDefault()
}, false)
 
touchsurface.addEventListener('touchmove', function(e){
  if(focusedItem)return
    // e.preventDefault() // prevent scrolling when inside DIV
}, false)

touchsurface.addEventListener('touchend', function(e){
    if(focusedItem)return
    var touchobj = e.changedTouches[0]
    dist = touchobj.pageX - startX // get total dist traveled by finger while in contact with surface
    elapsedTime = new Date().getTime() - startTime // get time elapsed
    // check that elapsed time is within specified, horizontal dist traveled >= threshold, and vertical dist traveled <= 100
    if(elapsedTime <= allowedTime && dist >= thresholdRight && Math.abs(touchobj.pageY - startY) <= 100){
      console.log('swipe right')
      swipeRight()}
    else if(elapsedTime <= allowedTime && dist <= thresholdLeft && Math.abs(touchobj.pageY - startY) <= 100){
      console.log('swipe left')
      swipeLeft()}
    // e.preventDefault()
}, false)
