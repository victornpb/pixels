var testCase = [];
function test(input, expected){
    testCase.push({input: input, expected: expected});
}
function perform(fn){
	var result;
    for(var i=0;i<testCase.length; ++i){
		result=fn.apply(null, testCase[i].input);
      	if(result!==testCase[i].expected){
        	throw new Error('Test '+i+' failed! "'+ result +'" should be "'+ testCase[t].expected+'"');
      	}
    }
}

test(1, "1");
test(3.1415, "3.1415");
test(true, "true");
test("", "");
test([], "");
test([1,2,3], "1,2,3");
test({}, "[object Object]");
test(new Array(1000).join("verylongstring"), new Array(1000).join("verylongstring"));