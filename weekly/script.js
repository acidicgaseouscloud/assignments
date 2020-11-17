var parent = document.getElementById('myButton');

var otherParent = document.getElementById("myMsg")

var msg = document.createElement("p")
msg.textContent = "Hey our button works!"

parent.addEventListener('click', () => {
    parent.textContent = "You clicked a button!";
    otherParent.appendChild(msg);
})


//let button = document.createElement('button');
//button.textContent = "Try This!";

// parent.insertAfter(button, parent.firstChild);

//console.log("test")

/*document.body.insertAdjacentHTML( 'afterbegin', '<div id="myID">...</div>' );*/


/* var link = document.createElement('a');
link.setAttribute('href', 'mypage.htm');
var parent = document.getElementById('div');
parent.insertAfter(link, parent.firstChild);*/

/* document.getElementById("myButton").addEventListener("click", function(){
	document.getElementById("btn").innerHTML = "You clicked a button"
})*/

