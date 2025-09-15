const isActive = true;

const showUser = () => console.log("Show user");
const hideUser = () => console.log("Hide user");

isActive? showUser() : hideUser() 
isActive && showUser();   // only true thakle eita dekhabe na thakle dekhabe na 

isActive || hideUser(); // only false thakle dekhabe na thakle dekhabe na 

