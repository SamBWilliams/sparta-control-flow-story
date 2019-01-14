
var start = prompt("You awake in a dark room, with exits all around you. *Type 'help' for instructions*");
var items = [];
var response = "help";

//debugger
if (start == response){
    alert("*INSTRUCTIONS* 'check' - gives description of surroundings. 'pick' - picks up item, 'use' - uses item 'bag' - checks items");
}else{
    alert("Type 'help' for instructions");
};

var actionCompleted = false;



// while(firstRoom !== "left" || "right"){
while(actionCompleted == false){

    var firstRoom = prompt("What action do you wish to take?");
    //debugger;

    switch(firstRoom){
        case "check":
            alert("There is a locked door in front of you and a path way to the left")
        break;

        case "left":
            alert("You enter the pathway on your left");
            var decision = prompt("You see something glistening in the corner of the room, what would you like to check? Type check to see whats there");
            
            if (decision == "check"){
                alert("Its a key!");
            } else if (decision == "pick"){
                items.push("Key");
                alert("Key added to bag");
                console.log(items);
                //actionCompleted = true;
            }    
        break;

        case "bag":

            if (items.length = 1){
                alert(items);
            actionCompleted = true;
            } else {
                alert("bag empty");
            }
        break;
            

        default:
        break;

    }
    // break;
} 



