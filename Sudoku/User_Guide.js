var Global_Guide;
var Blank = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
var Play_Button = '<h3> <font color="223399"> Enjoy Playing. </font> </h3>' + Blank + Blank + '<input type="button" value=" Return " onclick="Guide();"; />';
var Demo_Ending_Message = "<br></br>" + Blank + "It is all about it. Puzzle is ready for playing" + Blank + ":)";

function User_Full_Guide()
{
	var User_Manual = "User_Manual";
	var Demo_Label = " Demonstrations ";
	
	Global_Guide = "<br></br>";
	
	Global_Guide = '<h4><font color="#441133">' + Blank + 'Every Demo Can Restart Your Game, So You are Advised to See Demo in Different Tab,<br></br>' + Blank + 'If your game is in Progress.<br></br>' + Blank + 'Thank You For Being Here.</font></h4>';
	
	Global_Guide += Demo_Label;
	Global_Guide += '<table id="' + User_Manual + '">';
	for(var i=0; i<User_Features.length; i++)
	{
		Global_Guide += '<tr height="50"><td>' + Blank + '</td><td>' + (i + 1 ) + '.</td>\
		<td width="200">' + User_Features[i][1] + '</td>\
		<td><input type="button" value="' + Demo_Label + '" onclick="Demonstrations(' +  i + ');" /></td></tr>';
	}
	Global_Guide += "</table>";
	
	document.getElementById("User_Guide").innerHTML = Global_Guide;
}

function Guide()
{
	Load();
}

function Demonstrations(User_Features_Index)
{
	switch(User_Features_Index)
	{
		case 0:
				Demostrate_Generate_Puzzle(User_Features_Index);
				break;
				
		case 1:
				Demostrate_Default_Puzzle(User_Features_Index);
				break;
				
		case 2:
				Demostrate_Set_My_Puzzle(User_Features_Index);
				break;
				
		case 3:
				Demostrate_Show_Solution(User_Features_Index);
				break;
		
		case 4:
				Demostrate_Hint_Button(User_Features_Index);
				break;
				
		case 5:
				Demostrate_Scan_Review(User_Features_Index);
				break;

		case 6:
				Demostrate_Parrellel_Checker(User_Features_Index);
				break;
		
		case 7:
				Demostrate_Restart_Game(User_Features_Index);
				break;
				
		default:
				alert("This Seems an Invalid Selection. No Demostration at All :( ");
	}
}

function Demostrate_Restart_Game(User_Features_Index)
{

	var Guide = document.getElementById("User_Guide");
	var Timer = 2;
	Guide.innerHTML = "<h3><b>Description</b><h3>";
	
	window.setTimeout(function() {}, Timer++ * 1000);
	Timer = 1;
	
	window.setTimeout(function() {Guide.innerHTML += Blank + "This Feature will Simply Restart Your Game.<br></br>" + Blank + "But The Good Thing is, It will not go to Server Again, Hence if you not Connected to Network, Still You can Play New Game Everytime.<br></br>" + Blank + "Hence Save Bandwidth as well."}, Timer++ * 1000);
	Timer += 2;
	
	window.setTimeout(function() {Guide.innerHTML += "<br></br><b>" + User_Features[User_Features_Index][1] + "</b> Demostration<br></br>" + Blank + "Click on <b>" + User_Features[User_Features_Index][1] + "</b>.<br></br>";}, Timer++ * 1000);
	Timer += 2;
	
	window.setTimeout(function() {var temp = Guide.innerHTML; Load(); Guide.innerHTML = temp;}, Timer++ * 1000);
	Timer += 1;
	
	
	window.setTimeout(function() {Guide.innerHTML += Blank + "Your Game has been Restarted.<br></br>";}, Timer++ * 1000);
	Timer += 2;
	
	window.setTimeout(function() {Guide.innerHTML += Demo_Ending_Message;}, Timer * 1000);
	Timer += 1;
	
	window.setTimeout(function() { Guide.innerHTML += Blank + Play_Button }, Timer * 1000);
}