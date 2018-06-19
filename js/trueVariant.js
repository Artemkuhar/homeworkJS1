var num1, num2, sing, result;
function assNum(){
	num1 = +prompt('Enter first number');
	num2 = +prompt('Enter second number');
		for (i = num1; num1 < num2;){
			alert('by hypothesis, the first number must be greater than the second');
			assNum();
		}
}
assNum();
function action (x, y){
	sing = prompt('Enter Sing');
	if (sing == "+") {
		result = x + y;
	}else if (sing == "-") {
		result = x - y;
	}else if (sing == "*") {
		result = x * y;
	}else if (sing == "/") {
		result = x / y;
	}else if (sing == "**") {
		result = x ** y;
	}
	alert(result);
}
action(num1, num2);
function repeatConf (){
	var conf = confirm('reapeat action?');
	if (conf == true){
		assNum();
		action(num1, num2);
		repeatConf();
	}else{
		alert('goodbay');
	}
}
repeatConf();
