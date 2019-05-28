console.log ('-- init script');
console.log ('-- continue script');

var myTitle;
/* the variable is undefined because it has no value assigned to it */
console.log(myTitle);
myTitle = document.getElementById('name');
/* the variable return as null because it has a wrong value assigned to it */
console.log(myTitle);
/* the value of the variable gets logged */
myTitle = document.getElementById('appTitle').innerText;
console.log(myTitle);

/* Save my name APP */

// DEFINE A VARIABLE 

var allTheNames = [];

var nameButton = document.getElementById('nameButton');
var nameInput = document.getElementById('myName');
var messageBox = document.getElementById('messageBox');



nameButton.addEventListener('click', sayMyName);
clearButton.addEventListener('click', deleteName);

function sayMyName() {
  
  //console.log(nameInput.value.lenght)
  
  if ( nameInput.value.length > 0 ) {
    allTheNames.push(nameInput.value);
    //empty the input 
    nameInput.value = "";
    //focus the cursor in the input
    nameInput.focus(); 
    
    
    //Succes
    var lastNameAdd = allTheNames[allTheNames.lenght - 1];
    updateTheMessage("You have succesfully added "+lastNameAdd+" to the list ", true);


    console.log(allTheNames);  
  } else {
    console.log("No name");

    //error
    updateTheMessage("No name enter", false );
  }
}

function updateTheMessage(messageText, messageSuccess) {
  messageBox.innerText = messageText;

  if (messageSuccess == true) {
    //this add the message-success
    messageBox.classList.add('message-success');
    //this remove the message-success with the message-error
    messageBox.classList.remove('message-error');
  } else {
    messageBox.classList.add('message-error');
    messageBox.classList.remove('message-success');
  }
}

updateTheMessage("Name uploaded", true );
  
function removeFromList(){
  var delete = document.getElementById('undo');
  delete.removeChild.allTheNames;



}
