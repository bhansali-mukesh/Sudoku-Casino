function Demostrate_Generate_Puzzle(User_Features_Index)
{
	var Guide = document.getElementById("User_Guide");
	var Timer = 2;
	Guide.innerHTML = "<h3><b>Description</b><h3>";
	
	window.setTimeout(function() {}, Timer++ * 1000);
	
	window.setTimeout(function() {Guide.innerHTML += Blank + "This Feature Generates Random Puzzles to play and Provide a Numerous and Interesting way to Set it for you.<br></br>"}, Timer++ * 1000);
	Timer += 2;
	
	window.setTimeout(function() {Guide.innerHTML += "<br></br><b>" + User_Features[User_Features_Index][1] + "</b> Demostration<br></br>" + Blank + "Click on <b>" + User_Features[User_Features_Index][1] + "</b>.<br></br>";}, Timer++ * 1000);
	Timer += 2;
	
	window.setTimeout( function() { var temp = Guide.innerHTML; Load();	Genrator_Engine(); Guide.innerHTML = temp;}, Timer * 1000);
	Timer += 2;
	
	window.setTimeout(function() {Guide.innerHTML += Blank + "Now you can Choose Your Level or Number Of Hints from The Drop Down Generated in Between.<br></br>"; }, Timer * 1000);
	Timer += 3;
	
	window.setTimeout(function() {Guide.innerHTML += Blank + "You Can Change Your Level like this. The Number of Hints also gets Changes Accordingly<br></br>";}, Timer * 1000);
	Timer += 2;
	
	window.setTimeout(function() { document.getElementById("Clues").value = 40; Set_Level("40"); }, Timer * 1000);
	Timer += 2;
	
	window.setTimeout(function() {document.getElementById("Hardness").value = 2; Set_Clues("2");}, Timer * 1000);
	Timer += 2;
	
	window.setTimeout(function() {Guide.innerHTML += Blank + "Now you have 2 Options.</br>" + Blank + Blank + "1." + Blank + "If You want to Set Puzzle Automatically Just Click on <b> Auto Set Button </b> and Things are Done.<br></br>";}, Timer * 1000);
	Timer += 3; 
	
	window.setTimeout('Auto_Setter();',Timer * 1000);
	Timer += 3;
	
	
	
	window.setTimeout( function() { var temp = Guide.innerHTML; Load();	Genrator_Engine(); Guide.innerHTML = temp;}, Timer * 1000);
	Timer += 2;
	
	window.setTimeout(function() {Guide.innerHTML += Blank + Blank + "2." + Blank + "If You want to Set Puzzle By YourSelf, After Selecting Level, Just Click on <b> Desired Image </b> and That will open Answer for you for That particular Element. Like This.<br></br>";}, Timer * 1000);
	Timer += 2;
	
	window.setTimeout(function() { document.getElementById("Clues").value = 40; Set_Level("40"); }, Timer * 1000);
	Timer += 2;
	
	window.setTimeout( function() { Hint_Provider(100, false) }, Timer * 1000);
	Timer += 1;
	window.setTimeout( function() { Hint_Provider(134, false) }, Timer * 1000);
	Timer += 1;
	window.setTimeout( function() { Hint_Provider(92, false) }, Timer * 1000);
	Timer += 1;
	
	window.setTimeout(function() {Guide.innerHTML += Demo_Ending_Message;}, Timer * 1000);
	
	window.setTimeout(function() { Guide.innerHTML += Blank + Play_Button }, Timer * 1000);
}

function Demostrate_Default_Puzzle(User_Features_Index)
{
	var Guide = document.getElementById("User_Guide");
	var Timer = 2;
	Guide.innerHTML = "<h3><b>Description</b><h3>";
	
	window.setTimeout(function() {}, Timer++ * 1000);
	Timer = 1;
	
	window.setTimeout(function() {Guide.innerHTML += Blank + "This Feature will set a Default Puzzle for you. If you want to play and Experiment with the Same Puzzle Everytime.<br></br>" + Blank + "You can Choose This Option.<br></br>" + Blank + "It is mainly for the purpose if you want to Understand It's Working and Experiment."}, Timer++ * 1000);
	Timer += 2;
	
	window.setTimeout(function() {Guide.innerHTML += "<br></br><b>" + User_Features[User_Features_Index][1] + "</b> Demostration<br></br>" + Blank + "Click on <b>" + User_Features[User_Features_Index][1] + "</b>.<br></br>";}, Timer++ * 1000);
	Timer += 2;
	
	window.setTimeout(function() {var temp = Guide.innerHTML; Load(); Default_Puzzle();	Guide.innerHTML = temp;}, Timer++ * 1000);
	Timer += 1;
	
	window.setTimeout(function() {Guide.innerHTML += Demo_Ending_Message;}, Timer * 1000);
	Timer += 1;
	
	window.setTimeout(function() { Guide.innerHTML += Blank + Play_Button }, Timer * 1000);
}

function Demostrate_Set_My_Puzzle(User_Features_Index)
{
	var Guide = document.getElementById("User_Guide");
	var Timer = 2;
	
	Load();
	
	Guide.innerHTML = "<h3><b>Description</b><h3>";
	
	window.setTimeout(function() {}, Timer++ * 1000);
	Timer = 1;
	
	window.setTimeout(function() {Guide.innerHTML += Blank + "It is our Very Unique and Intellingent Feature.<br></br>" + Blank + "It will set Your Own Puzzle. If you have some puzzle from mobile, internet, Newspaper or anywhere and you want us to Solve it,<br></br>" + Blank + "You can Set The Inputs and Use this feature. We will solve it for you.<br></br>" + Blank + "You can try Yourself as well.<br></br><br></br>"}, Timer++ * 1000);
	Timer += 2;
	
	window.setTimeout( function() { Guide.innerHTML += "<br></br><b>" + User_Features[User_Features_Index][1] + "</b> Demostration<br></br>"; }, Timer * 1000);
	Timer += 2;
		
	window.setTimeout( function() { Guide.innerHTML += Blank + "At First You can Set Your Inputs in First Playing Grid Like This :<br></br>" }, Timer * 1000);
	Timer += 2;
	
	window.setTimeout( function() { Set_Element(2, 9) }, Timer * 1000);
	Timer += 1;
	window.setTimeout( function() { Set_Element(36, 2) }, Timer * 1000);
	Timer += 1;
	window.setTimeout( function() { Set_Element(71, 9) }, Timer * 1000);
	Timer += 1;
	window.setTimeout( function() { Set_Element(56, 3) }, Timer * 1000);
	Timer += 1;
	
	window.setTimeout(function() {var temp = Guide.innerHTML; Load(); Default_Puzzle();	Set_Problem = false; Guide.innerHTML = temp;}, Timer++ * 1000);
	
	
	window.setTimeout(function() {Guide.innerHTML += Blank + "When You Finishes with Setting all Inputs, Click on <b>" + User_Features[User_Features_Index][1] + "</b>.<br></br>";}, Timer++ * 1000);
	Timer += 2;
	
	window.setTimeout(function() {var temp = Guide.innerHTML; Set_Puzzle('#990099');	Guide.innerHTML = temp;}, Timer++ * 1000);
	Timer += 1;
	
	window.setTimeout(function() {Guide.innerHTML += Demo_Ending_Message;}, Timer * 1000);
	Timer += 1;
	
	window.setTimeout(function() { Guide.innerHTML += Blank + Play_Button }, Timer * 1000);
}

function Set_Element(Id, Value)
{
	var Select_Drop_Down = document.getElementById(Id).firstChild
	Select_Drop_Down.value = Value;
	Preview(Select_Drop_Down,000000); 
}