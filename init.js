(function () {
var fiel = document.querySelector('#field');
for (var c = 0; c < 9; c++) {
var span = document.createElement('span');
fiel.appendChild(span);
}
var field = document.querySelectorAll('#field span');
var wrapp = document.querySelector('.wrapp');
var leftSector = document.querySelector('.left p');
var rightSector = document.querySelector('.right p');
var button,activeToken,timerId,
timerId2,target,dataToken,
new_string,tokenText,
arr = [],str,clear,
digit,rand,volume,red,dataToken2;
var num = 1;
var progress = document.querySelector('footer p');
leftSector.innerHTML = 0;
rightSector.innerHTML = 0;
function randomNumber (m,n){//случайные числа
  m = parseInt(m);
  n = parseInt(n);
  return Math.floor( Math.random() * (n - m + 1) ) + m;
}
	function restGame(sector) {//кнопка сброса поля
		button = document.querySelector('.button');
		button.onclick= function(e) {
			sector.innerHTML = num++;
			for(var i = 0; i < field.length; i++){
				field[i].classList.remove("active_token");
				field[i].classList.remove("red");
			}
			button.remove();
			return arr.length = 0;
		}
	}
	function winBot() {//выиграл компьютер
		wrapp.insertAdjacentHTML('afterEnd', '<button class="button">Победил компьютер, начать занова?</button>');
		restGame(rightSector);
	}
		function drawn() { //ничья
			var activeTokenCol = document.querySelectorAll('#field .active_token').length;
			var redCol = document.querySelectorAll('#field .red').length;
			if(activeTokenCol == redCol){
				wrapp.insertAdjacentHTML('afterEnd', '<button class="button">Ничья, начать занова?</button>');
				button = document.querySelector('.button');
				button.onclick= function(e) {
					for(var i = 0; i < field.length; i++){
						field[i].classList.remove("active_token");
						field[i].classList.remove("red");
					}
					button.remove();
					return arr.length = 0;
				}
			}
		}
	function funcBot(token) {//интелект
	volume = token.toString();
	volume = volume.length;
	red = document.querySelectorAll('#field .red');
		setTimeout( avtoBot, 500);
		function avtoBot() {
	if(volume == '1'){




			if(token == '1'){
				rand = randomNumber(1,3);

				if(rand == 1 ){
					digit = 1;
					field[digit].classList.add("red");
				}else if (rand == 2) {
					digit = 3;
					field[digit].classList.add("red");
				}else if (rand == 3) {
					digit = 4;
					field[digit].classList.add("red");
				}
			}else if(token == '2'){
				rand = randomNumber(1,5);

				if(rand == 1 ){
					digit = 0;
					field[digit].classList.add("red");
				}else if (rand == 2) {
					digit = 2;
					field[digit].classList.add("red");
				}else if (rand == 3) {
					digit = 3;
					field[digit].classList.add("red");
				}else if (rand == 4) {
					digit = 4;
					field[digit].classList.add("red");
				}else if (rand == 5) {
					digit = 5;
					field[digit].classList.add("red");
				}
			}else if(token == '3'){
				rand = randomNumber(1,3);

				if(rand == 1 ){
					digit = 1;
					field[digit].classList.add("red");
				}else if (rand == 2) {
					digit = 4;
					field[digit].classList.add("red");
				}else if (rand == 3) {
					digit = 5;
					field[digit].classList.add("red");
				}
			}else if(token == '4'){
				rand = randomNumber(1,6);

				if(rand == 1 ){
					digit = 0;
					field[digit].classList.add("red");
				}else if (rand == 2) {
					digit = 1;
					field[digit].classList.add("red");
				}else if (rand == 3) {
					digit = 4;
					field[digit].classList.add("red");
				}else if (rand == 4) {
					digit = 4;
					field[digit].classList.add("red");
				}else if (rand == 5) {
					digit = 6;
					field[digit].classList.add("red");
				}else if (rand == 6) {
					digit = 7;
					field[digit].classList.add("red");
				}
			}else if(token == '5'){
				rand = randomNumber(1,8);

				if(rand == 1 ){
					digit = 0;
					field[digit].classList.add("red");
				}else if (rand == 2) {
					digit = 1;
					field[digit].classList.add("red");
				}else if (rand == 3) {
					digit = 2;
					field[digit].classList.add("red");
				}else if (rand == 4) {
					digit = 3;
					field[digit].classList.add("red");
				}else if (rand == 5) {
					digit = 5;
					field[digit].classList.add("red");
				}else if (rand == 6) {
					digit = 6;
					field[digit].classList.add("red");
				}else if (rand == 7) {
					digit = 7;
					field[digit].classList.add("red");
				}else if (rand == 8) {
					digit = 8;
					field[digit].classList.add("red");
				}
			}else if(token == '6'){
				rand = randomNumber(1,6);

				if(rand == 1 ){
					digit = 2;
					field[digit].classList.add("red");
				}else if (rand == 2) {
					digit = 1;
					field[digit].classList.add("red");
				}else if (rand == 3) {
					digit = 2;
					field[digit].classList.add("red");
				}else if (rand == 4) {
					digit = 4;
					field[digit].classList.add("red");
				}else if (rand == 5) {
					digit = 7;
					field[digit].classList.add("red");
				}else if (rand == 6) {
					digit = 8;
					field[digit].classList.add("red");
				}
			}else if(token == '7'){
				rand = randomNumber(1,3);

				if(rand == 1 ){
					digit = 3;
					field[digit].classList.add("red");
				}else if (rand == 2) {
					digit = 4;
					field[digit].classList.add("red");
				}else if (rand == 3) {
					digit = 7;
					field[digit].classList.add("red");
				}
			}else if(token == '8'){
				rand = randomNumber(1,5);

				if(rand == 1 ){
					digit = 3;
					field[digit].classList.add("red");
				}else if (rand == 2) {
					digit = 4;
					field[digit].classList.add("red");
				}else if (rand == 3) {
					digit = 5;
					field[digit].classList.add("red");
				}else if (rand == 4) {
					digit = 6;
					field[digit].classList.add("red");
				}else if (rand == 5) {
					digit = 8;
					field[digit].classList.add("red");
				}
			}else if(token == '9'){
				rand = randomNumber(1,3);

				if(rand == 1 ){
					digit = 4;
					field[digit].classList.add("red");
				}else if (rand == 2) {
					digit = 5;
					field[digit].classList.add("red");
				}else if (rand == 3) {
					digit = 7;
					field[digit].classList.add("red");
				}
			}

		}else if (volume == '2') {
		//console.log('два символа \n' + 'token ' + token);
		if(token == '14'){
			if(field[4].classList.contains("red")){
					field[6].classList.add("red");
			}else {
				rand = randomNumber(1,2);
				if(rand==1){
					field[4].classList.add("red");
				}else if(rand==2){
					field[6].classList.add("red");
				}
			}
		}else if(token == '12'){

			if(field[4].classList.contains("red")){
				rand = randomNumber(1,2);
				if(rand==1){
					field[2].classList.add("red");
				}else if(rand==2){
					field[5].classList.add("red");
				}
			}else {
				rand = randomNumber(1,2);
				if(rand==1){
					field[2].classList.add("red");
				}else if(rand==2){
					field[5].classList.add("red");
				}
			}
		}else if(token == '25'){
			if(field[3].classList.contains("red")){
				rand = randomNumber(1,4);
				if(rand==1){
					field[5].classList.add("red");
				}else if(rand==2){
					field[6].classList.add("red");
				}else if(rand==3){
					field[7].classList.add("red");
				}else if(rand==4){
					field[8].classList.add("red");
				}
			}else if(field[5].classList.contains("red")){
				rand = randomNumber(1,4);
				if(rand==1){
					field[3].classList.add("red");
				}else if(rand==2){
					field[6].classList.add("red");
				}else if(rand==3){
					field[7].classList.add("red");
				}else if(rand==4){
					field[8].classList.add("red");
				}
			}else {
				rand = randomNumber(1, 5);
				if (rand == 1) {
					field[3].classList.add("red");
				} else if (rand == 2) {
					field[5].classList.add("red");
				} else if (rand == 3) {
					field[6].classList.add("red");
				} else if (rand == 4) {
					field[7].classList.add("red");
				} else if (rand == 5) {
					field[8].classList.add("red");
				}
			}
		}else if(token == '21') {
			if(field[5].classList.contains("red")){
				rand = randomNumber(1,2);
				if (rand == 1) {
					field[2].classList.add("red");
				}else {
					field[3].classList.add("red");
				}
			}else if(field[4].classList.contains("red")){
				rand = randomNumber(1,2);
				if (rand == 1) {
					field[2].classList.add("red");
				}else {
					field[3].classList.add("red");
				}
			}else if(field[3].classList.contains("red")){
				rand = randomNumber(1,2);

				if (rand == 1) {
					field[2].classList.add("red");
				}else {
					field[4].classList.add("red");
				}
			}else if(field[2].classList.contains("red")){
				rand = randomNumber(1,2);
				if (rand == 1) {
					field[3].classList.add("red");
				}else {
					field[4].classList.add("red");
				}
			}
		}else if(token == '23') {
			if(field[3].classList.contains("red")||field[4].classList.contains("red")||field[5].classList.contains("red")){
				field[0].classList.add("red");
			}else if(field[0].classList.contains("red")||field[4].classList.contains("red")||field[5].classList.contains("red")){
				field[3].classList.add("red");
			}else if(field[0].classList.contains("red")||field[3].classList.contains("red")||field[5].classList.contains("red")){
				field[4].classList.add("red");
			}else if(field[0].classList.contains("red")||field[3].classList.contains("red")||field[4].classList.contains("red")){
				field[5].classList.add("red");
			}
		}
	}else if (volume == '3'){

		if(token == '254'){
			if(field[7].classList.contains("red")){
				rand = randomNumber(1,2);

				if (rand == 1) {
					field[5].classList.add("red");
				}else {
					field[6].classList.add("red");
				}
			}else if(field[5].classList.contains("red")){
					field[7].classList.add("red");
			}else if(field[6].classList.contains("red")){
				field[5].classList.add("red");
			}
		}else if(token == '142'){

			rand = randomNumber(1,2);

			if (rand == 1) {
				field[2].classList.add("red");
			}else {
				field[6].classList.add("red");
			}

		}else if(token == '145'){

			rand = randomNumber(1,2);

			if (rand == 1) {
				field[5].classList.add("red");
			}else {
				field[8].classList.add("red");
			}


		}else if(token == '124' || token == '214'){
			field[6].classList.add("red");
		}else if(token == '236'){
			field[8].classList.add("red");
		}else if(token == '215'){
			rand = randomNumber(1,2);
			if (rand == 1) {
				field[7].classList.add("red");
			}else if(rand == 2){
				field[8].classList.add("red");
			}
		}else if(token == '235'){
			rand = randomNumber(1,2);
			if (rand == 1) {
				field[7].classList.add("red");
			}else if(rand == 2){
				field[6].classList.add("red");
			}
		}else if(token == '125'){


			if(field[2].classList.contains("red")){
				rand = randomNumber(1,2);
				if (rand == 1) {
					field[7].classList.add("red");
				}else if(rand == 2){
					field[8].classList.add("red");
				}
			}else {
				rand = randomNumber(1,3);
				if (rand == 1) {
					field[7].classList.add("red");
				}else if(rand == 2){
					field[8].classList.add("red");
				}else {
					field[2].classList.add("red");
				}
			}


		}
	}else if (volume == '4'){
		if(token == '2541'){
				rand = randomNumber(1,2);
				if (rand == 1) {
					field[2].classList.add("red");
				}else {
					field[6].classList.add("red");
				}
			drawn();
		}else if(token == '2547'){
				field[0].classList.add("red");
		}else if(token == '2145'){
			rand = randomNumber(1,2);
			if (rand == 1) {
				field[7].classList.add("red");
			}else {
				field[6].classList.add("red");
			}
		}
	}else if (volume == '5'){
	}
		progress.style.display = "none";
	}
}
function botFunc(token) {
	function  machine() {
  		progress.style.display = "block";
  		funcBot(token);
	}
setTimeout( machine, 200);
}
function dataTokenFunc(dataToken) {
			arr.push(dataToken);
			str = arr.join('');
	//console.log(str);
	comboFunc(str);
	botFunc(str);
}
function comboFunc(token) {//комбинации выиграша
	if(token == 159 || token == 123 || token == 456 || token == 3569 || token == 987
		|| token == 789 || token == 147  || token == 741  || token == 2358
		|| token == 321 || token == 2357 || token == 213 || token == 2158 || token == 1243
		|| token == 963 || token == 852 || token == 1258 || token == 1259 || token == 21458 || token == 21459
		|| token == 1456 || token == 951 || token == 753 || token == 654
		|| token == 258 || token == 369 || token == 357|| token == 1432){
		wrapp.insertAdjacentHTML('afterEnd', '<button class="button">Поздравляем, начать занова?</button>');
	restGame(leftSector);
	}
}
for(var i = 0; i < field.length; i++){
field[i].setAttribute('data-token', i+1);
field[i].onmouseover = function(e) {
var thisO = this;
	if(!this.classList.contains("active_token")){

		timerId = setInterval(function() {
	thisO.classList.add("active");
	}, 500);
		timerId2 = setInterval(function() {
	thisO.classList.remove("active");
	}, 1000);
}
  };
field[i].onmouseout = function(e) {
	clearInterval(timerId);
	clearInterval(timerId2);
	this.classList.remove("active");
  };
field[i].onclick= function(e) {
	clearInterval(timerId);
	clearInterval(timerId2);
	this.classList.remove("active");
    this.classList.add("active_token");
	dataToken = this.getAttribute('data-token');
	dataTokenFunc(dataToken);
}
}
})();