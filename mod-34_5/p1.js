function showMessage () {
  setTimeout(() => {
    console.log("This message will appeared after 5 sec");
    
  },5000)
}
function showMessage2 () {
  setTimeout(() => {
    console.log("This message will appeared after .5 sec");
    
  },50)
}
showMessage();
showMessage2();
