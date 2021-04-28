function add(a, b) {
return a+b
}
var myArgs = process.argv.slice(2);
console.log('myArgs: ', myArgs);
var i;
for(i = 0; i < myArgs.length; i++){
	var x = myArgs[i];
	var j;
	for(j = 0; j < x.length; j++){
		if('0' == myArgs[i][j]) console.log('Zero');
	}
}
