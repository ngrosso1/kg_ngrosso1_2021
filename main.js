var myArgs = process.argv.slice(2);
var i;
for(i = 0; i < myArgs.length; i++){
	var j, x = myArgs[i];
	for(j = 0; j < x.length; j++){
		if('0' == myArgs[i][j]) process.stdout.write('Zero');
		else if('1' == myArgs[i][j]) process.stdout.write('One');
		else if('2' == myArgs[i][j]) process.stdout.write('Two');
		else if('3' == myArgs[i][j]) process.stdout.write('Three');
		else if('4' == myArgs[i][j]) process.stdout.write('Four');
		else if('5' == myArgs[i][j]) process.stdout.write('Five');
		else if('6' == myArgs[i][j]) process.stdout.write('Six');
		else if('7' == myArgs[i][j]) process.stdout.write('Seven');
		else if('8' == myArgs[i][j]) process.stdout.write('Eight');
		else if('9' == myArgs[i][j]) process.stdout.write('Nine');
		else continue;
	}
	var y = i + 1;
	if(y != myArgs.length) process.stdout.write(',');
	else console.log();
}
