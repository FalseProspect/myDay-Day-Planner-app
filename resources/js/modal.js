console.log('Modal');


(function createSelf(){

  let self = document.getElementById('modal');
  let selfStyle = document.getElementById('modal-style');
  let slide = 0;


  const info = {
    slide: ['1/4','2/4','3/4','4/4'],
    graphic: ['resources/Icons/myDayAppLogoV2.png','resources/Icons/myDayAppLogoV2.png','resources/Icons/myDayAppLogoV2.png','resources/Icons/myDayAppLogoV2.png'],
    topic: ['Welcome','Tutroial:','Extras:','Done!'],
    info: [
      `The myDay:Day Planner is an easy to use note-taking web application to allow easy planning, scheduling and overview of your day.<br>`,
      `It's easy to use!<br>
        - Used the input bar at the top of the application to describe a task, event, or activity<br>
        - Use the submit button or "Enter" key to add it to your day<br>
        - To mark an item complete, press the (Checkmark) button<br>
        - To remove an item, press the (Trash can) button<br>
        - To edit an item, double click the item text area<br>
        - The menu can be opened using the button in the top left corner, to access other useful settings and filters
      `,
      `- Sign in using google to save and sync your day across your devices<br>
        - Use schedule your day by including a @ symbol followed by a time (eg. @12:00PM)<br>
        - Tag events in your day by using the # symbol followed by your desired tag, and they can be filter using the sidebar<br>
        - Personalize your Day Planner app using our collection of themes aswell as a dark mode option
      `,
      `That's it! Your ready to be more productive using myDay: Day Planner.<br>
        If you wish to access the tutorial again or review other special setting, they can be found in the settings menu.`]
  };

  console.log(info.graphic[0]);

  let logo = '<svg id="logoSvg" height="150" width="600" xml:space="preserve" viewBox="-174 376 600 150" y="0px" x="0px" id="Layer_2" ><defs id="defs17"><filter style="color-interpolation-filters:sRGB" id="filter282"><feBlend mode="darken" in2="BackgroundImage" id="feBlend284"/></filter></defs><g transform="translate(-36)" id="g12"><path id="path2" d="m -91.6,414 c 4.1,0 8.1,0.6 12.1,1.7 3.9,1.2 7.4,2.9 10.3,5.2 3,-2 6.4,-3.6 10.1,-5 3.8,-1.3 8.3,-1.9 13.6,-1.9 3.8,0 7.5,0.5 11.2,1.5 3.6,1 6.9,2.6 9.8,4.7 2.9,2.2 5.1,5 6.8,8.5 1.7,3.6 2.6,7.9 2.6,13 V 489 c -1,0.3 -2.6,0.6 -4.7,0.9 -2.2,0.3 -4.4,0.5 -6.7,0.5 -2.2,0 -4.2,-0.2 -5.9,-0.5 -1.8,-0.3 -3.2,-0.9 -4.4,-1.8 -1.2,-0.9 -2.1,-2.1 -2.8,-3.7 -0.7,-1.5 -1,-3.6 -1,-6.1 v -35.9 c 0,-3 -0.9,-5.2 -2.6,-6.5 -1.7,-1.4 -4,-2 -6.9,-2 -1.4,0 -2.9,0.3 -4.5,1 -1.6,0.7 -2.8,1.3 -3.6,2 0.1,0.4 0.2,0.8 0.2,1.1 0,0.4 0,0.7 0,1 v 50 c -1.1,0.3 -2.7,0.6 -4.9,0.9 -2.2,0.3 -4.3,0.5 -6.5,0.5 -2.2,0 -4.2,-0.2 -5.9,-0.5 -1.8,-0.3 -3.2,-0.9 -4.4,-1.8 -1.2,-0.9 -2.1,-2.1 -2.8,-3.7 -0.7,-1.5 -1,-3.6 -1,-6.1 v -35.9 c 0,-3 -0.9,-5.2 -2.8,-6.5 -1.9,-1.4 -4.1,-2 -6.7,-2 -1.8,0 -3.4,0.3 -4.6,0.8 -1.3,0.6 -2.4,1.1 -3.3,1.6 V 489 c -1,0.3 -2.6,0.6 -4.7,0.9 -2.2,0.3 -4.4,0.5 -6.7,0.5 -2.2,0 -4.2,-0.2 -5.9,-0.5 -1.8,-0.3 -3.2,-0.9 -4.4,-1.8 -1.2,-0.9 -2.1,-2.1 -2.8,-3.7 -0.7,-1.5 -1,-3.6 -1,-6.1 V 433 c 0,-2.7 0.6,-4.8 1.7,-6.4 1.1,-1.6 2.7,-3.1 4.7,-4.5 3.4,-2.4 7.6,-4.4 12.7,-5.9 5,-1.5 10.2,-2.2 15.7,-2.2 z" class="fill"/><path id="path4" d="M 9.5,470.5 C 8.4,468 7.2,465.2 6,462.1 4.7,459 3.5,455.5 2.1,451.5 c -1.4,-4 -2.8,-8.6 -4.2,-13.7 -1.5,-5.1 -3,-11.1 -4.6,-17.8 1.4,-1.4 3.3,-2.6 5.6,-3.7 2.3,-1 4.9,-1.6 7.7,-1.6 3.5,0 6.4,0.7 8.7,2.2 2.3,1.5 4,4.2 5.1,8.2 l 11.9,41.3 h 0.6 c 1.2,-3.4 2.4,-7.1 3.5,-11.1 1.1,-4 2.3,-8.1 3.4,-12.4 1.1,-4.2 2.1,-8.5 3.1,-12.8 0.9,-4.2 1.8,-8.4 2.5,-12.5 3.6,-1.9 7.5,-2.9 11.9,-2.9 3.5,0 6.4,0.8 8.7,2.3 2.3,1.5 3.4,4.1 3.4,7.8 0,2.7 -0.4,5.8 -1,9.4 -0.7,3.6 -1.6,7.3 -2.8,11.3 -1.2,4 -2.5,8.1 -4.1,12.4 -1.6,4.3 -3.2,8.4 -4.9,12.5 -1.7,4.1 -3.4,8 -5.3,11.6 -1.8,3.7 -3.6,6.9 -5.3,9.8 -2.8,4.9 -5.4,8.9 -7.8,12 -2.4,3.1 -4.7,5.5 -6.9,7.3 -2.2,1.7 -4.4,2.9 -6.6,3.6 -2.2,0.6 -4.5,1 -6.9,1 -4.2,0 -7.6,-1.3 -10.2,-3.8 -2.6,-2.5 -4.2,-5.8 -4.6,-9.8 3.2,-2.5 6.4,-5.3 9.6,-8.3 3.2,-3.1 6.1,-6.2 8.7,-9.4 -1.7,-0.5 -3.5,-1.7 -5.5,-3.5 -1.8,-1.8 -4,-5.3 -6.3,-10.4 z" class="fill"/><path id="path6" d="m 117.2,491.5 c -1.7,0 -3.7,-0.1 -5.9,-0.2 -2.2,-0.1 -4.5,-0.3 -6.8,-0.6 -2.4,-0.3 -4.7,-0.7 -7,-1.1 -2.4,-0.5 -4.5,-1.1 -6.5,-1.9 -5.5,-2.1 -8.3,-5.8 -8.3,-11 v -70.1 c 0,-2.1 0.6,-3.7 1.7,-4.9 1.1,-1.1 2.7,-2.1 4.7,-2.8 4.3,-1.4 8.8,-2.3 13.6,-2.8 4.8,-0.5 9.1,-0.7 12.9,-0.7 7.8,0 14.9,1 21.2,2.9 6.3,1.9 11.8,4.8 16.3,8.8 4.5,4 8.1,8.9 10.6,14.9 2.5,6 3.8,13.1 3.8,21.3 0,8 -1.2,15 -3.6,20.9 -2.4,6 -5.8,11 -10.3,15 -4.5,4 -9.8,7.1 -16,9.1 -6,2.2 -12.9,3.2 -20.4,3.2 z m -8.4,-21.9 c 1.1,0.2 2.4,0.4 4,0.5 1.6,0.1 3.1,0.2 4.5,0.2 3.4,0 6.5,-0.5 9.4,-1.5 2.8,-1 5.3,-2.5 7.3,-4.6 2,-2.1 3.6,-4.8 4.8,-8.2 1.1,-3.3 1.7,-7.4 1.7,-12.1 0,-9 -2.1,-15.8 -6.3,-20.3 -4.2,-4.5 -9.8,-6.8 -16.8,-6.8 -1.4,0 -2.8,0.1 -4.3,0.1 -1.5,0.1 -2.9,0.3 -4.4,0.4 v 52.3 z" class="fill"/><path id="path8" d="m 210.7,414 c 5.4,0 10.3,0.6 14.8,1.6 4.4,1.1 8.3,2.8 11.4,5 3.2,2.3 5.6,5.1 7.3,8.6 1.7,3.4 2.5,7.5 2.5,12.2 V 475 c 0,2.6 -0.7,4.7 -2.2,6.4 -1.5,1.6 -3.2,3.1 -5.2,4.3 -6.5,3.9 -15.7,5.9 -27.5,5.9 -5.3,0 -10.1,-0.5 -14.3,-1.5 -4.3,-1 -7.9,-2.5 -11,-4.5 -3.1,-2 -5.4,-4.5 -7,-7.7 -1.6,-3.1 -2.5,-6.7 -2.5,-10.8 0,-6.9 2,-12.2 6.1,-15.9 4.1,-3.7 10.4,-6 19.1,-6.9 l 19.6,-2.1 v -1 c 0,-2.9 -1.3,-5 -3.8,-6.2 -2.5,-1.2 -6.2,-1.9 -11,-1.9 -3.8,0 -7.5,0.4 -11.1,1.2 -3.6,0.8 -6.9,1.8 -9.8,3 -1.3,-0.9 -2.4,-2.3 -3.3,-4.1 -0.9,-1.8 -1.3,-3.8 -1.3,-5.8 0,-2.6 0.6,-4.7 1.9,-6.2 1.2,-1.5 3.2,-2.9 5.8,-4 2.9,-1.1 6.3,-1.9 10.3,-2.4 3.9,-0.5 7.7,-0.8 11.2,-0.8 z m 1.2,58.9 c 1.7,0 3.6,-0.2 5.6,-0.5 2,-0.3 3.6,-0.8 4.6,-1.4 v -12 l -10.8,0.9 c -2.8,0.2 -5.1,0.8 -6.9,1.8 -1.8,1 -2.7,2.5 -2.7,4.5 0,2 0.8,3.6 2.3,4.9 1.5,1.2 4.2,1.8 7.9,1.8 z" class="fill"/><path id="path10" d="m 271.9,470.5 c -1.1,-2.5 -2.3,-5.3 -3.5,-8.4 -1.3,-3.1 -2.5,-6.6 -3.9,-10.6 -1.4,-4 -2.8,-8.6 -4.2,-13.7 -1.5,-5.1 -3,-11.1 -4.6,-17.8 1.4,-1.4 3.3,-2.6 5.6,-3.7 2.3,-1 4.9,-1.6 7.7,-1.6 3.5,0 6.4,0.7 8.7,2.2 2.3,1.5 4,4.2 5.1,8.2 l 11.8,41.3 h 0.6 c 1.2,-3.4 2.4,-7.1 3.5,-11.1 1.1,-4 2.3,-8.1 3.4,-12.4 1.1,-4.2 2.1,-8.5 3.1,-12.8 0.9,-4.2 1.8,-8.4 2.5,-12.5 3.6,-1.9 7.5,-2.9 11.9,-2.9 3.5,0 6.4,0.8 8.7,2.3 2.3,1.5 3.5,4.1 3.5,7.8 0,2.7 -0.4,5.8 -1,9.4 -0.7,3.6 -1.6,7.3 -2.8,11.3 -1.2,4 -2.5,8.1 -4,12.4 -1.6,4.3 -3.2,8.4 -4.9,12.5 -1.7,4.1 -3.5,8 -5.3,11.6 -1.8,3.7 -3.6,6.9 -5.3,9.8 -2.8,4.9 -5.4,8.9 -7.8,12 -2.4,3.1 -4.7,5.5 -6.9,7.3 -2.2,1.7 -4.4,2.9 -6.6,3.6 -2.2,0.6 -4.5,1 -6.9,1 -4.2,0 -7.6,-1.3 -10.2,-3.8 -2.6,-2.5 -4.2,-5.8 -4.7,-9.8 3.2,-2.5 6.4,-5.3 9.6,-8.3 3.2,-3.1 6.1,-6.2 8.7,-9.4 -1.7,-0.5 -3.5,-1.7 -5.5,-3.5 -1.9,-1.8 -4,-5.3 -6.3,-10.4 z" class="fill"/></g><g transform="matrix(1.7158322,0,0,1.7158322,316.05545,400.33184)" id="g91" style="enable-background:new"><g id="layer1" style="display:inline" transform="translate(0,-12.5)"><g id="g480" transform="translate(0,14)"><path class="fill" id="path4-3" d="m 26,2.5 c 1.654,0 3,1.346 3,3 0,1.654 -1.346,3 -3,3 -0.553,0 -1,0.447 -1,1 0,0.553 0.447,1 1,1 2.757,0 5,-2.243 5,-5 0,-2.757 -2.243,-5 -5,-5 -0.553,0 -1,0.447 -1,1 0,0.553 0.447,1 1,1 z" style="display:inline;enable-background:new"/><path class="fill" id="path6-6" d="m 32,2.5 c 1.654,0 3,1.346 3,3 0,1.654 -1.346,3 -3,3 -0.553,0 -1,0.447 -1,1 0,0.553 0.447,1 1,1 2.757,0 5,-2.243 5,-5 0,-2.757 -2.243,-5 -5,-5 -0.553,0 -1,0.447 -1,1 0,0.553 0.447,1 1,1 z" style="display:inline;enable-background:new"/><path class="fill" d="m 44,2.5 c 1.654,0 3,1.346 3,3 0,1.654 -1.346,3 -3,3 -0.553,0 -1,0.447 -1,1 0,0.553 0.447,1 1,1 2.757,0 5,-2.243 5,-5 0,-2.757 -2.243,-5 -5,-5 -0.553,0 -1,0.447 -1,1 0,0.553 0.447,1 1,1 z" id="path70" style="display:inline;enable-background:new"/><path class="fill" id="path72" d="m 38,2.5 c 1.654,0 3,1.346 3,3 0,1.654 -1.346,3 -3,3 -0.553,0 -1,0.447 -1,1 0,0.553 0.447,1 1,1 2.757,0 5,-2.243 5,-5 0,-2.757 -2.243,-5 -5,-5 -0.553,0 -1,0.447 -1,1 0,0.553 0.447,1 1,1 z" style="display:inline;enable-background:new"/><path class="fill" d="m 20,2.5 c 1.654,0 3,1.346 3,3 0,1.654 -1.346,3 -3,3 -0.553,0 -1,0.447 -1,1 0,0.553 0.447,1 1,1 2.757,0 5,-2.243 5,-5 0,-2.757 -2.243,-5 -5,-5 -0.553,0 -1,0.447 -1,1 0,0.553 0.447,1 1,1 z" id="path74" style="display:inline;enable-background:new"/><path class="fill" id="path76" d="m 14,2.5 c 1.654,0 3,1.346 3,3 0,1.654 -1.346,3 -3,3 -0.553,0 -1,0.447 -1,1 0,0.553 0.447,1 1,1 2.757,0 5,-2.243 5,-5 0,-2.757 -2.243,-5 -5,-5 -0.553,0 -1,0.447 -1,1 0,0.553 0.447,1 1,1 z" style="display:inline;enable-background:new"/><path class="fill" id="path117" d="M 54.899,4.5 C 54.434,2.221 52.415,0.5 50,0.5 c -0.553,0 -1,0.447 -1,1 0,0.553 0.447,1 1,1 1.654,0 3,1.346 3,3 0,1.654 -1.346,3 -3,3 -0.553,0 -1,0.447 -1,1 0,0.553 0.447,1 1,1 2.414,0 4.434,-1.721 4.899,-4 H 56 v 9 H 2 v -9 h 2 3 c 0.553,0 1,-0.447 1,-1 0,-0.553 -0.447,-1 -1,-1 H 5.184 C 5.598,3.338 6.698,2.5 8,2.5 c 1.654,0 3,1.346 3,3 0,1.654 -1.346,3 -3,3 -0.553,0 -1,0.447 -1,1 0,0.553 0.447,1 1,1 2.757,0 5,-2.243 5,-5 0,-2.757 -2.243,-5 -5,-5 -2.414,0 -4.434,1.721 -4.899,4 H 0 v 13 40 h 58 v -40 -13 z M 56,55.5 H 2 v -38 h 54 z" style="display:inline;filter:url(#filter282);enable-background:new"/><g transform="matrix(0.10308601,0,0,0.10308601,2948.452,21.014951)" id="g296" style="clip-rule:evenodd;display:inline;fill-rule:evenodd;filter:url(#filter282);image-rendering:optimizeQuality;shape-rendering:geometricPrecision;text-rendering:geometricPrecision;enable-background:new"><g id="g8" transform="translate(-28536.086,-0.43961864)"><path class="fill" d="m 0,43 c 2,-4 6,-9 13,-7 6,2 10,8 13,16 C 50,25 70,6 94,0 97,0 98,0 96,2 70,20 45,47 25,82 24,83 23,83 22,82 18,72 15,62 10,52 8,47 5,43 0,43 Z" id="path6-3"/></g></g><g style="clip-rule:evenodd;display:inline;fill-rule:evenodd;filter:url(#filter282);image-rendering:optimizeQuality;shape-rendering:geometricPrecision;text-rendering:geometricPrecision;enable-background:new" id="g335" transform="matrix(0.10308601,0,0,0.10308601,2948.452,31.057476)"><g transform="translate(-28536.086,-0.43961864)" id="g333"><path id="path331" d="m 0,43 c 2,-4 6,-9 13,-7 6,2 10,8 13,16 C 50,25 70,6 94,0 97,0 98,0 96,2 70,20 45,47 25,82 24,83 23,83 22,82 18,72 15,62 10,52 8,47 5,43 0,43 Z" class="fill"/></g></g><g transform="matrix(0.10308601,0,0,0.10308601,2948.452,41.057476)" id="g341" style="clip-rule:evenodd;display:inline;fill-rule:evenodd;filter:url(#filter282);image-rendering:optimizeQuality;shape-rendering:geometricPrecision;text-rendering:geometricPrecision;enable-background:new"><g id="g339" transform="translate(-28536.086,-0.43961864)"><path class="fill" d="m 0,43 c 2,-4 6,-9 13,-7 6,2 10,8 13,16 C 50,25 70,6 94,0 97,0 98,0 96,2 70,20 45,47 25,82 24,83 23,83 22,82 18,72 15,62 10,52 8,47 5,43 0,43 Z" id="path337"/></g></g><g id="g360" style="display:inline;filter:url(#filter282);enable-background:new"><path class="fill" id="path351" d="m 27,-21 a 1,0.99999994 0 0 1 -0.5,0.866025 1,0.99999994 0 0 1 -1,0 A 1,0.99999994 0 0 1 25,-21 l 1,0 z" transform="rotate(90)" style="stroke-width:1.02814031"/><rect class="fill" id="rect353" width="25.721867" height="2" x="20.946529" y="25" style="stroke-width:3.27127481"/><path class="fill" style="stroke-width:1.02814031" transform="rotate(-90)" d="m -25,46.602085 a 1,0.99999994 0 0 1 -0.5,0.866025 1,0.99999994 0 0 1 -1,0 1,0.99999994 0 0 1 -0.5,-0.866025 l 1,0 z" id="path355"/></g><g transform="translate(0,10)" id="g368" style="display:inline;filter:url(#filter282);enable-background:new"><path class="fill" style="stroke-width:1.02814031" transform="rotate(90)" d="m 27,-21 a 1,0.99999994 0 0 1 -0.5,0.866025 1,0.99999994 0 0 1 -1,0 A 1,0.99999994 0 0 1 25,-21 l 1,0 z" id="path362"/><rect class="fill" style="stroke-width:3.27127481" y="25" x="20.946529" height="2" width="25.721867" id="rect364"/><path class="fill" id="path366" d="m -25,46.602085 a 1,0.99999994 0 0 1 -0.5,0.866025 1,0.99999994 0 0 1 -1,0 1,0.99999994 0 0 1 -0.5,-0.866025 l 1,0 z" transform="rotate(-90)" style="stroke-width:1.02814031"/></g><g class="fill" id="g376" transform="translate(0,20)" style="display:inline;filter:url(#filter282);enable-background:new"><path class="fill" id="path370" d="m 27,-21 a 1,0.99999994 0 0 1 -0.5,0.866025 1,0.99999994 0 0 1 -1,0 A 1,0.99999994 0 0 1 25,-21 l 1,0 z" transform="rotate(90)" style="stroke-width:1.02814031"/><rect class="fill" id="rect372" width="25.721867" height="2" x="20.946529" y="25" style="stroke-width:3.27127481"/><path class="fill" style="stroke-width:1.02814031" transform="rotate(-90)" d="m -25,46.602085 a 1,0.99999994 0 0 1 -0.5,0.866025 1,0.99999994 0 0 1 -1,0 1,0.99999994 0 0 1 -0.5,-0.866025 l 1,0 z" id="path374"/></g></g></g></g></svg>'

  function makeElement(elemTag, classname, id){
    let elem = document.createElement(elemTag);
    classname ? elem.setAttribute('class',classname) : 0;
    id ? elem.id = id : 0; 
    return elem;
  }


  let background = makeElement('div','modal-background');

  let container = makeElement('div','modal-container');

  let titleBar = makeElement('div','titleBar');
    let slideNum = makeElement('span','slideNum');
    let modalTitleLogo = makeElement('span','modalTitleLogo');
    let modalExit = makeElement('span','modalExit');
    modalExit.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 16 16" style="enable-background:new 0 0 16 16;" xml:space="preserve"><g><g><path d="M16,8c0,0.5-0.5,1-1,1H9v6c0,0.5-0.5,1-1,1s-1-0.5-1-1V9H1C0.5,9,0,8.5,0,8s0.5-1,1-1h6V1c0-0.5,0.5-1,1-1s1,0.5,1,1v6h6C15.5,7,16,7.5,16,8z"/></g></g></svg>';
    modalTitleLogo.innerHTML = logo;
    titleBar.appendChild(slideNum);
    titleBar.appendChild(modalTitleLogo);
    titleBar.appendChild(modalExit);
    container.appendChild(titleBar);

  let modalGraphic = makeElement('div','modal-Graphic');
    modalGraphicImg = makeElement('img',0,'modal-Graphic-Img')
    modalGraphic.appendChild(modalGraphicImg);
    container.appendChild(modalGraphic);

  let modalTopicInfo = makeElement('div','modal-topicInfo');
    let topicH1= makeElement('h1');
    let topicHr = makeElement('hr');
    modalTopicInfo.appendChild(topicH1);
    modalTopicInfo.appendChild(topicHr);
    container.appendChild(modalTopicInfo);

  let modalContent = makeElement('div', 'modal-Content');
  let modalContentInnerText = makeElement('p');
    modalContentInnerText.classList.add('fadein');
    modalContent.appendChild(modalContentInnerText);
    container.appendChild(modalContent);

  let modalButtonContainer = makeElement('div','modal-button-container');
    let secondaryBtn = makeElement('button','secondaryBtn');
      secondaryBtn.innerText = 'Back';
    let primaryBtn = makeElement('button','primaryBtn');
      primaryBtn.innerText = 'Next';
    modalButtonContainer.appendChild(secondaryBtn);
    modalButtonContainer.appendChild(primaryBtn);
    container.appendChild(modalButtonContainer);
    
  background.appendChild(container);

  //Add to screen
  document.body.appendChild(background);



  background.addEventListener('click',(c)=>{
    if(c.target !== background)return;
    removeSelf();
  })

  
  function removeSelf(){
    document.body.removeChild(background);
    document.head.removeChild(selfStyle);
    document.body.removeChild(self);
  }

  modalExit.addEventListener('click',()=>removeSelf());

  primaryBtn.addEventListener('click',()=>{
    slide++;
    displaySlide(slide)
  });
  
  secondaryBtn.addEventListener('click',()=>{
    slide--;
    displaySlide(slide);
  });

  function displaySlide(slideVal){
    let lastSlide = 3;
    secondaryBtn.style.visibility = slideVal > 0 ? 'visible' : 'hidden';
    if (slideVal > lastSlide) return removeSelf();
    // slide = slideVal;
    console.log(slide);

    //Render Elems
    modalContentInnerText.classList.remove('fadein');
    modalContentInnerText.style.opacity='0';
    setTimeout(()=>{
      modalContentInnerText.classList.add('fadein');
      modalContentInnerText.style.opacity='1';
      modalContentInnerText.innerHTML = info.info[slide];
    },700);
    slideNum.innerText = info.slide[slide]; 
    modalGraphicImg.setAttribute('src', info.graphic[slide]);
    topicH1.innerText= info.topic[slide];
  }
  
  displaySlide(0);

})()