var num1 = +prompt('enter first number');
var num2 = +prompt('enter second number');
var rusult;
if (num1 < num2){
	alert('Первое число по условиям должно быть больше второго');
}else if (num1 == undefined || num1 == null || num2 == undefined || num2 == null) {
	alert('Вы не ввели чило, либо ввели его не верно!');
}else{
	var zk = prompt('enter zk');
	if (zk == "+") {
		result = num1 + num2;
	}else if (zk == "-") {
		result = num1 - num2;
	}else if (zk == "*") {
		result = num1 * num2;
	}else if (zk == "/") {
		result = num1 / num2;
	}else if (zk == "**") {
		result = num1 ** num2;
	}
}
alert(result);
var rusultConfirm = confirm('repeat action?');
if (true) {
	var num1 = +prompt('enter first number');
	var num2 = +prompt('enter second number');
	var rusult;
	if (num1 < num2){
		alert('Первое число по условиям должно быть больше второго');
	}else if (num1 == undefined || num1 == null || num2 == undefined || num2 == null) {
		alert('Вы не ввели чило, либо ввели его не верно!');
	}else{
		var zk = prompt('enter zk');
		if (zk == "+") {
			result = num1 + num2;
		}else if (zk == "-") {
			result = num1 - num2;
		}else if (zk == "*") {
			result = num1 * num2;
		}else if (zk == "/") {
			result = num1 / num2;
		}else if (zk == "**") {
			result = num1 ** num2;
		}
		alert(result);
	}
	}else if (false) {
		alert('goodbay');
	}