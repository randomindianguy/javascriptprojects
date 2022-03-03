//set initial count
let count = 0;

//select value & buttons

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn")

//we can run a for each loop on a nodeList

btns.forEach(function(btn){    //we can give a parameter to call each and every item
    btn.addEventListener('click', function(e){  //function(e)is an event object function to actively check which button is getting clicked on
    const styles = e.currentTarget.classList; // to check what classList my button has. this will help in easily identifying, and then manipulating values on screen
    if(styles.contains("decrease")){ //i'm looking for my decrease class here
        count--;
    }

    else if(styles.contains("increase")){
        count++;
    }
    else{
        count = 0;
    }
    if(count > 0){
        value.style.color = "green";
    }

    if(count < 0){
        value.style.color = "red";
    }

    if(count === 0){
        value.style.color = "#222";
    }
    value.textContent = count;
    }) //we are looping over the list to basically call all the buttons. This particular code will tell you which exact button was pressed.
})