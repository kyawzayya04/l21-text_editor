var gettextarea = document.getElementById("textarea");
var getdivarea = document.getElementById("divarea");
getdivarea.contentEditable = true;
getdivarea.spellCheck = false;

var getbtns = document.querySelectorAll(".btn");
// console.log(getbtns);

getbtns.forEach(function(getbtn){

	getbtn.addEventListener("click",function(){
		// var getcommand = getbtn.getAttribute("data-command");
		var getcommand = getbtn.dataset["command"];
		// console.log(getcommand);

		if(getcommand === "cleartext"){
			getdivarea.innerHTML = "";
		}else if(getcommand === "createLink"){
								// message			   default
			let geturl = prompt("Enter Your Website Link","https://");
			document.execCommand(getcommand,false,geturl);
		}else if(getcommand === "insertImage"){
								// message
			let geturl = prompt("Enter Your Image URL");
			document.execCommand(getcommand,false,geturl);
		}else if(getcommand === "foreColor"){
			// console.log(getbtn.value);
			document.execCommand(getcommand,false,getbtn.value);
		}else if(getcommand === "backColor"){
			document.execCommand(getcommand,false,getbtn.value);
		}else if(getcommand === "fontName"){
			document.execCommand(getcommand,false,getbtn.value);
		}else if(getcommand === "paste"){
			navigator.clipboard.readText().then(function(cliptext){
				console.log(cliptext);
				getdivarea.innerHTML += cliptext;
			});
		}else{
			document.execCommand(getcommand,false,null);
		}

	})

})

// function boldfun(){
// 	gettextarea.style.fontWeight = "bold";
// }

// function italicfun(){
// 	gettextarea.style.fontStyle = "italic";
// }

// function underlinefun(){
// 	gettextarea.style.textDecoration = "underline";
// }

// function lalgfun(){
// 	gettextarea.style.textAlign = "left";
// }

// function calgfun(){
// 	gettextarea.style.textAlign = "center";
// }

// function ralgfun(){
// 	gettextarea.style.textAlign = "right";
// }

function upcasefun(){
	gettextarea.style.textTransform = "uppercase";
}

function lowcasefun(){
	gettextarea.style.textTransform = "lowercase";
}

function capcasefun(){
	gettextarea.style.textTransform = "capitalize";
}

// function clearfun(){
// 	gettextarea.style.fontWeight = "normal";
// 	gettextarea.style.fontStyle = "normal";
// 	gettextarea.style.textDecoration = "none";
// 	gettextarea.style.textAlign = "left";
// 	gettextarea.value = "";
// }
			// string		boolean			value
// execCommand(aCommandName,aShowDefaultUI,aValueArgument);

// sShowDefaultUI ( boolean )
// true
// false