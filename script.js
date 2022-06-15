// типтер:
//String сөздер
//Number: double, float, int
// Boolean - true, false
// Undefined- мән орнатылмаған
//Null - белгісіз мәндікөрсетеді

function plus(){
	var num1, num2, result;
	num1 = document.getElementById('n1').value;
	num1 =  parseInt(num1);

	num2 = document.getElementById('n2').value;
	num2 =  parseInt(num2);

	result = num1 + num2;
	document.getElementById('out').innerHTML = result;
}

function minus(){
	var num1, num2, result;
	num1 = document.getElementById('n1').value;
	num1 =  parseInt(num1);

	num2 = document.getElementById('n2').value;
	num2 =  parseInt(num2);

	result = num1 - num2;
	document.getElementById('out').innerHTML = result;
}

function multiply(){
	var num1, num2, result;
	num1 = document.getElementById('n1').value;
	num1 =  parseInt(num1);

	num2 = document.getElementById('n2').value;
	num2 =  parseInt(num2);

	result = num1 * num2;
	document.getElementById('out').innerHTML = result;
}

function divided(){
	var num1, num2, result;
	num1 = document.getElementById('n1').value;
	num1 =  parseInt(num1);

	num2 = document.getElementById('n2').value;
	num2 =  parseInt(num2);

	result = num1 / num2;
	document.getElementById('out').innerHTML = result;
}