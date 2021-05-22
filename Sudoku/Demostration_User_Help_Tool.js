function Demostrate_Show_Solution(User_Features_Index)
{
	var Guide = document.getElementById("User_Guide");
	var Timer = 0;
	Guide.innerHTML = "<h3><b>Description</b><h3>";
	
	window.setTimeout(function() {Guide.innerHTML += Blank + "When you use this feature. You will be shown Solution with all the Details in Color Form.<br></br>" + Blank + "It means Solution Matrix will be shown with Solution in Different Colors and in Parllel, The Legends will be shown to Tell the Significance of Those colors.<br></br>" + Blank + "Hence The Story Completes. :)<br></br>"}, Timer++ * 1000);
	Timer += 2;
	
	window.setTimeout( function() { Guide.innerHTML += "<br></br><b>" + User_Features[User_Features_Index][1] + "</b> Demostration<br></br>"; }, Timer * 1000);
	Timer += 1;
	
	window.setTimeout( function() { Guide.innerHTML += Blank + "At First You Need to Set Puzzle By Any Method You like:<br></br>" + Blank + "Let's Say Default Puzzle for Example.<br></br>" }, Timer * 1000);
	Timer += 2;
	
	window.setTimeout(function() {var temp = Guide.innerHTML; Load(); Default_Puzzle();	Guide.innerHTML = temp;}, Timer++ * 1000);
	Timer += 1;
	
	window.setTimeout( function() { Guide.innerHTML += Blank + "Then You can Opt For Solution Anytime While Playing By Using This Feature..<br></br>" }, Timer * 1000);
	Timer += 2;
	
	window.setTimeout( function() { Guide.innerHTML += Blank + "Click on <b>" + User_Features[User_Features_Index][1] + "</b>.<br></br>"; }, Timer * 1000);
	Timer += 1;
	
	window.setTimeout(function() { Show_Solution(Sudoku_Solution); Guide.innerHTML += Blank + "The Solution is Provided to Complete The Story"; }, Timer++ * 1000);
	Timer += 2;
	
	window.setTimeout(function() {Guide.innerHTML += Demo_Ending_Message;}, Timer * 1000);
	Timer += 1;
	
	window.setTimeout(function() { Guide.innerHTML += Blank + Play_Button }, Timer * 1000);
}

function Demostrate_Hint_Button(User_Features_Index)
{
	var Guide = document.getElementById("User_Guide");
	var Timer = 0;
	Guide.innerHTML = "<h3><b>Description</b><h3>";
		
	window.setTimeout(function() {Guide.innerHTML += Blank + "This is Additional feature to support the Player.<br></br>" + Blank + "Anytime While Playing the Game; If you need some help, You can Use it.<br></br>" + Blank + "But It is Provided only once per Game like life line, So better to use in Extremes.<br></br>" + Blank + "One Element of your choice can be discovered anytime during the Game by using this feature.<br</br>"}, Timer++ * 1000);
	Timer += 2;
	
	window.setTimeout( function() { Guide.innerHTML += "<br></br><b>" + User_Features[User_Features_Index][1] + "</b> Demostration<br></br>"; }, Timer * 1000);
	Timer += 1;
	
	window.setTimeout( function() { Guide.innerHTML += Blank + "At First You Need to Set Puzzle By Any Method You like:<br></br>" + Blank + "Let's Say Default Puzzle for Example.<br></br>" }, Timer * 1000);
	Timer += 2;
	
	window.setTimeout(function() {var temp = Guide.innerHTML; Load(); Default_Puzzle();	Guide.innerHTML = temp;}, Timer++ * 1000);
	Timer += 1;
	
	window.setTimeout( function() { Guide.innerHTML += Blank + "Then you can start Playing Like this<br></br>" }, Timer * 1000);
	Timer += 2;
	
	window.setTimeout( function() { Set_Element(37, 1) }, Timer * 1000);
	Timer += 1;
	window.setTimeout( function() { Set_Element(10, 8) }, Timer * 1000);
	Timer += 1;
	window.setTimeout( function() { Set_Element(35, 5) }, Timer * 1000);
	Timer += 1;

	window.setTimeout( function() { Guide.innerHTML += Blank + "Then If you Decide to Opt for Hint, You can have it any time By Using This Feature. For Opting for Hint<br></br>" + Blank + "Click on <b>" + User_Features[User_Features_Index][1] + "</b>.<br></br>"; }, Timer * 1000);
	Timer += 2;
	
	window.setTimeout( function() { Hint(); Guide.innerHTML += Blank + "When You Click, The Images will appear on Preview Elements.<br></br>" + Blank + "You Suppose to click on Desired Image to Uncover Element.<br></br>" + Blank + "Hence The Hint is used for that particular Game.<br></br>"}, Timer * 1000);
	Timer += 1;
	
	window.setTimeout( function() { Guide.innerHTML += Blank + "At First You Need to Set Puzzle By Any Method You like:<br></br>" + Blank + "Let's Say Default Puzzle for Example.<br></br>" }, Timer * 1000);
	Timer += 2;
	
	window.setTimeout( function() { Hint_Provider(81, true) }, Timer * 1000);
	Timer += 1;
	
	window.setTimeout(function() {Guide.innerHTML += Demo_Ending_Message;}, Timer * 1000);
	Timer += 1;
	
	window.setTimeout(function() { Guide.innerHTML += Blank + Play_Button }, Timer * 1000);
}

function Demostrate_Scan_Review(User_Features_Index)
{
	var Guide = document.getElementById("User_Guide");
	var Timer = 0;
	Guide.innerHTML = "<h3><b>Description</b><h3>";
		
	window.setTimeout(function() {Guide.innerHTML += Blank + "While Playing, When You wish to check whether the Solution, You are trying, is correct till yet.<br</br>" + Blank + "You can Anytime and Any Number of time use it.<br></br>" + Blank + "It will Check All Your Input and show wrong inputs in Red Color.<br></br>";}, Timer++ * 1000);
	Timer += 2;
	
	window.setTimeout( function() { Guide.innerHTML += "<br></br><b>" + User_Features[User_Features_Index][1] + "</b> Demostration<br></br>"; }, Timer * 1000);
	Timer += 1;
	
	window.setTimeout( function() { Guide.innerHTML += Blank + "At First You Need to Set Puzzle By Any Method You like:<br></br>" + Blank + "Let's Say Default Puzzle for Example.<br></br>" }, Timer * 1000);
	Timer += 2;
	
	window.setTimeout(function() {var temp = Guide.innerHTML; Load(); Default_Puzzle();	Guide.innerHTML = temp;}, Timer++ * 1000);
	Timer += 1;
	
	window.setTimeout( function() { Guide.innerHTML += Blank + "Then you can start Playing Like this<br></br>" }, Timer * 1000);
	Timer += 2;
	
	window.setTimeout( function() { Set_Element(0, 8) }, Timer * 1000);
	Timer += 1;
	window.setTimeout( function() { Set_Element(9, 7) }, Timer * 1000);
	Timer += 1;
	window.setTimeout( function() { Set_Element(28, 1) }, Timer * 1000);
	Timer += 1;

	window.setTimeout( function() { Guide.innerHTML += Blank + "Then If you Decide to Review Your Answers, You can have it any time By Using This Feature. For Opting for Scan Review<br></br>" + Blank + "Click on <b>" + User_Features[User_Features_Index][1] + "</b>.<br></br>"; }, Timer * 1000);
	Timer += 2;
	
	window.setTimeout( function() { Scan_Review(); Guide.innerHTML += Blank + "When You Click, The Wrong Inputs will be shown in red which needs to be rectified.<br></br>";}, Timer * 1000);
	Timer += 1;
	
	window.setTimeout(function() {Guide.innerHTML += Demo_Ending_Message;}, Timer * 1000);
	Timer += 1;
	
	window.setTimeout(function() { Guide.innerHTML += Blank + Play_Button }, Timer * 1000);
}

function Demostrate_Parrellel_Checker(User_Features_Index)
{
	var Guide = document.getElementById("User_Guide");
	var Timer = 0;
	Guide.innerHTML = "<h3><b>Description</b><h3>";
		
	window.setTimeout(function() {Guide.innerHTML += Blank + "It is a different form of Reviewer, If this option is selected, It will check your current input and verify whether it is right.<br></br>" + Blank + "It will also show wrong inputs in Red.<br></br>" + Blank + "It can also be used to play double player and check who is more clever." + Blank + " :)";}, Timer++ * 1000);
	Timer += 2;
	
	window.setTimeout( function() { Guide.innerHTML += "<br></br><b>" + User_Features[User_Features_Index][1] + "</b> Demostration<br></br>"; }, Timer * 1000);
	Timer += 1;
	
	window.setTimeout( function() { Guide.innerHTML += Blank + "At First You Need to Set Puzzle By Any Method You like:<br></br>" + Blank + "Let's Say Default Puzzle for Example.<br></br>" }, Timer * 1000);
	Timer += 2;
	
	window.setTimeout(function() {var temp = Guide.innerHTML; Load(); Default_Puzzle();	Guide.innerHTML = temp;}, Timer++ * 1000);
	Timer += 1;
	
	window.setTimeout( function() { Guide.innerHTML += Blank + "Then you can start Playing Like this<br></br>" }, Timer * 1000);
	Timer += 2;
	
	window.setTimeout( function() { Set_Element(0, 8) }, Timer * 1000);
	Timer += 1;
	window.setTimeout( function() { Set_Element(9, 7) }, Timer * 1000);
	Timer += 1;
	window.setTimeout( function() { Set_Element(28, 1) }, Timer * 1000);
	Timer += 1;
	
	window.setTimeout( function() { Guide.innerHTML += Blank + "However some Inputs are wrong but no one is complaining as this feature is turned off.<br></br>" + Blank + "Let's Check this option and play Again.<br></br>"; }, Timer * 1000);
	Timer += 2;
		
	// window.setTimeout( function() { Guide.innerHTML += Blank + "At First You Need to Set Puzzle By Any Method You like:<br></br>" + Blank + "Let's Say Default Puzzle for Example.<br></br>" }, Timer * 1000);
	// Timer += 2;
	
	window.setTimeout(function() {var temp = Guide.innerHTML; Load(); Default_Puzzle();	Guide.innerHTML = temp;}, Timer++ * 1000);
	Timer += 1;
	
	// window.setTimeout( function() { Guide.innerHTML += Blank + "Then you can start Playing Like this<br></br>" }, Timer * 1000);
	// Timer += 2;
	
	window.setTimeout( function() { Set_Reviewer(true); }, Timer * 1000);
	Timer += 2;
	
	window.setTimeout( function() { Set_Element(0, 8) }, Timer * 1000);
	Timer += 1;
	window.setTimeout( function() { Set_Element(9, 7) }, Timer * 1000);
	Timer += 1;
	window.setTimeout( function() { Set_Element(28, 1) }, Timer * 1000);
	Timer += 1;
	
	
	window.setTimeout( function() { Guide.innerHTML += Blank + "As We Can See, The Same Inputs are now Getting Verified and colored Accordingly.<br></br>" + Blank + "That's How It works in Parellel.<br></br>"; }, Timer * 1000);
	Timer += 2;
	
	window.setTimeout(function() {Guide.innerHTML += Demo_Ending_Message;}, Timer * 1000);
	Timer += 1;
	
	window.setTimeout(function() { Guide.innerHTML += Blank + Play_Button }, Timer * 1000);
}