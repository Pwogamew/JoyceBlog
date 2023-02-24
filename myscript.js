
let namef = document.getElementById('name');
let myButtonf = document.getElementById('myButton');
let spannamef = document.getElementById('spannamef');

// Autocomplete remover //
namef.setAttribute("autocomplete", "off");
// Placeholder Illusion
spannamef.innerHTML = namef.innerHTML;
// Alphabet characters and space only
function a(event){
	var char = event.which;
	if(char >31 && char!= 32 && (char<65 || char>90) && (char < 97 || char >122)) {
		return false;
	}else{
		var badwords = /(Fuck|Shit|Admin|Mod|Stupid|Fck|Sht|Ass|Bitch|Btch|Porn|Puss|Damn|Gigolo|Slut|Tit|Cunt|Bull|Bool|Head|Master)/gi;
		var clean = namef.value.replace(badwords, "");
		namef.value = clean;
	}
}
// Copy Pasta Disabler //
namef.addEventListener('paste',e=>e.preventDefault())

if(typeof document.onselectstart!="undefined"){
	document.onselectstart=new Function ("return false");
}else{
	document.onmousedown=new Function ("return false");
	document.onmouseup=new Function ("return false");
}

document.getElementById('myButton').onclick = function(){
	//Trimming out whitespaces.
	a(event);
	if(value.length == 0){
		spannamef.classList.toggle('nochar');
		namef.classList.toggle('nochar');
	}else{
	//Clears data. Uppercase first letter of every word and lowercase others.
	namef.value = value;
	}
}
	namef.addEventListener('keyup', (e) => {
	if(e.keyCode === 13){
		namef.blur();
		myButton.onclick();
	}
})