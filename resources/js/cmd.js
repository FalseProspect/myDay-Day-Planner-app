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
    document.getElementById('themeLabel').innerHTML = "Custom";
    document.documentElement.style.setProperty('--mainAccent', aurgument);
      break;
    case 'cmd':
      toggleCommandMode(JSON.parse(aurgument));
      break;
    case 'night':
      setNightMode(JSON.parse(aurgument));
      break;
    case 'unrender':
    case '-ur':
      unRenderList();
      break;
    case 'render':
    case '-r':
      renderList(aurgument);
      break;
    case 'clear':
    case '-c':
      localStorage.clear();
      break;
    case 'view':
    case '-v':
      console.log(view);
      break;
    case 'newList':
    case 'newlist':
    case '-nl':
      newList(aurgument);
      break;
    case 'newItem':
    case '-ni':
      submitItem(aurgument,true);
      break;
    default:
      console.log(`"${command[0]}" command not recognized`);
  }
}
