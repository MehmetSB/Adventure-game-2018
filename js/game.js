// javascript for  adventure game
var knop1 = document.getElementById('option1');
var knop2 = document.getElementById('option2');
var knop3 = document.getElementById('option3');
var img = document.getElementById('level_image');
var lvl = document.getElementById('title');
var h1 = document.getElementById("h1");
var item = document.getElementById("inventoryItem")
var HasKey = false;
var HasKnife = false;
var HasClothes = false;
//Startpage
knop1.style.visibility='hidden';
knop2.innerHTML='Start';
knop3.style.visibility='hidden';
item.style.display="none";
lvl.style.visibility='hidden';
knop2.onclick = function(){
	level1();
}

function level1(){
	img.src="img/prisoncell.jpg"
	h1.innerHTML="This is your cell."
	item.style.display="none"
	knop1.style.visibility='visible';
	knop2.style.visibility='visible';
	knop3.style.visibility='visible';
	knop1.innerHTML ="Look outside"
	knop2.innerHTML ="Open the door"
	knop3.innerHTML ="Look under the bed"
	knop1.setAttribute("onClick", "level2();");
	knop3.setAttribute("onClick", "level3();");
	knop2.onclick = function(){
		if(HasKey){
			level4();}
			else {
				alert("You don't have a key.");}
		}
	}

function level2(){
	img.src="img/keys2.jpg"
	h1.innerHTML="Another inmate offers you a key."
	knop1.style.visibility='hidden';
	knop2.style.visibility='hidden';
	knop3.style.visibility='visible';
	knop3.innerHTML ="Go back to your room"
	knop3.setAttribute("onClick", "level1();");
	item.style.display="block"
	item.innerHTML = "<img src='./img/keys.png' alt='Keys'>";
	item.onclick = function(){
	item.style.display="none";
	alert("You have a key!");
	HasKey = true;
	}
}

function level3(){
	img.src="img/underbed.jpg"
	h1.innerHTML="Maybe you hid something under the bed."
	knop1.style.visibility='hidden';
	knop2.style.visibility='hidden';
	knop3.style.visibility='visible';
	knop3.innerHTML ="Back"
	knop3.setAttribute("onClick", "level1();");
	item.style.display="block"
	item.innerHTML = "<img src='./img/knife.png' alt='Knife'>";
	item.onclick = function(){
	item.style.display="none";
	alert("You picked up your knife!");
	HasKnife = true;
	}
}

function level4(){
	img.src="img/run.jpg"
	h1.innerHTML="You escaped your prison."
	knop2.style.visibility='hidden';
	knop1.innerHTML ="Run"
	knop3.innerHTML ="Go upstairs"
	knop1.setAttribute("onClick", "level5();");
	knop3.setAttribute("onClick", "level6();");
}

function level5(){
	img.src="img/fail.jpg"
	h1.innerHTML="A guard heard you and putted you back in your cell."
	knop1.style.visibility='hidden';
	knop2.style.visibility='visible';
	knop3.style.visibility='hidden';
	knop2.innerHTML="Play again."
	knop2.onclick = function(){
	location.reload();}
}
function level6(){
	img.src="img/helping.png"
	h1.innerHTML="An inmate asked for your help.(Be careful)."
	knop2.style.visibility='hidden';
	knop1.innerHTML ="Accept"
	knop3.innerHTML ="Decline"
	knop3.setAttribute("onClick", "level8();");
	knop1.onclick = function(){
	alert("The inmate betrayed you.");
	level7();}
}

function level7(){
	img.src="img/dead.jpg"
	item.style.display="none"
	h1.innerHTML="You got killed."
	knop1.style.visibility='hidden';
	knop2.style.visibility='visible';
	knop3.style.visibility='hidden';
	knop2.innerHTML ="Play again"
	knop2.onclick = function(){
		location.reload();
	}
}

function level8(){
	img.src="img/killing.jpg"
	h1.innerHTML="A guard is walking around."
	knop1.innerHTML ="Attack"
	knop1.onclick = function(){
		if(HasKnife){
			level9();}
			else {
				alert("You don't have a weapon.");
				level7();
			}
		}
	knop3.innerHTML ="Run"
	knop3.setAttribute("onClick", "level5();");
}

function level9(){
	img.src="img/deadguard.png"
	h1.innerHTML="You killed the guard."
	knop1.style.visibility='hidden';
	knop2.style.visibility='visible';
	knop3.style.visibility='hidden';
	knop2.innerHTML="Walk away."
	knop2.onclick = function(){
		if(HasClothes){
			level10();}
			else {
				level7();
			}
		}
	item.style.display="block"
	item.innerHTML = "<img src='./img/clothes.png' alt='clothes'>";
	item.onclick = function(){
	item.style.display="none";
	alert("You wore his clothes!");
	HasClothes = true;
	}
}

function level10(){
	img.src="img/end.jpg"
	h1.innerHTML="You have successfully escaped your prison."
	knop2.innerHTML="Play again."
	knop2.onclick = function(){
		location.reload();
	}
}
