
var qno=0;
var test,test_status,question,choice=0,choices,chA,chB,chC,correct = 0;

function display(x){
	return document.getElementById(x);
}
function quesDisplay(){
	test=display("test");
	if(qno >= questions.length){
		test.innerHTML= "<h2>You got "+correct+" of "+questions.length+" questions correct.</h2><br>";
		display("test_status").innerHTML = "Test completed";
		var percentage = (correct/questions.length)*100;
		test.innerHTML +="<h2>Congratulations you got "+percentage+" percentage.</h2>";
		qno=0;
		correct=0;
		return false;
	}
	display("test_status").innerHTML = "Questions "+(qno+1)+" of "+questions.length;
	question= questions[qno][0];
	chA= questions[qno][1];
	chB= questions[qno][2];
	chC= questions[qno][3];
	test.innerHTML = "<h3>"+question+"</h3>";
	test.innerHTML += "<input type='radio' name='choices' value='A'> "+chA+"<br>";
	test.innerHTML += "<input type='radio' name='choices' value='B'> "+chB+"<br>";
	test.innerHTML += "<input type='radio' name='choices' value='C'> "+chC+"<br><br>";
	if(qno > 0){
		test.innerHTML += "<button onclick='back()'>Previous</button>";
	}
	test.innerHTML += "<button onclick='checkAnswer()'>Next</button>";
	

}

function checkAnswer(){
	choices= document.getElementsByName("choices");
	for(var i=0; i<choices.length; i += 1){
		if(choices[i].checked)
			choice = choices[i].value;
	}
		
	if(choice == questions[qno][4])
		correct++;
	if(choice == 0){
		alert("Enter your Answer");
		return false;
	}
	choice = 0;
	qno++;
	quesDisplay();
}
function back(){
	
	choices= document.getElementsByName("choices");
	if(choice == 0){
		alert("Enter your Answer");
		return false;
	}
	choice=0;
	for(var i=0; i<choices.length; i += 1){
		if(choices[i].checked)
			choice = choices[i].value;
	}
		
	if(choice == questions[qno][4])
		correct++;
	qno -= 1;
	quesDisplay();



}
window.addEventListener("load",quesDisplay,false);
