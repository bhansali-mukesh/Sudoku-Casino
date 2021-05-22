var Preview_HTML;

function Hint()
{
	MAX_HINTS = 1;
	Hint_UI_Designer(true);
	document.getElementById("Hint_Button").style.display="none";
}

function Hint_UI_Designer(Hint)
{
	try
	{
		Hint_Count = 0;
		if(!Solved)
		{
			User_Message = "The Puzzle seems incorrect as I could not solve it.</br> So there will be no Hint for this puzzle :(";
			document.getElementById("User_Message").innerHTML = User_Message;
			return false;
		}
	
		//Preview_HTML = document.getElementById("Preview").innerHTML;
		//alert(Preview_HTML);

		for(var i=Edit_Preview_UI_Element_ID_Difference; i<Edit_Preview_UI_Element_ID_Difference *2; i++)
		{
			if(document.getElementById(i).innerHTML == Preview_Blank_Default)
			{
				document.getElementById(i).innerHTML = '<img src="SnMu.watch" height="21px" width="28px" onclick="Hint_Provider(' + i + ',' + Hint + ');"/>';
			}
		}
		
		return true;
	}
	catch(e)
	{
		alert("Error in Providing Hint Utility . " + e.message);
	}
}

function Hint_Provider(Preview_Id,Hint)
{
	try
	{
		Hint_Count++;
		
		if(Hint_Count == MAX_HINTS)
		{
			for(var i=Edit_Preview_UI_Element_ID_Difference; i<Edit_Preview_UI_Element_ID_Difference *2; i++)
			{
				if(document.getElementById(i).getElementsByTagName('img').length != 0)
				{
					document.getElementById(i).innerHTML = Preview_Blank_Default;
				}
			}
			
			// Fix The Level's Drop Downs
			if(!Hint)
			{
				Leveling();
				Set_Problem = true;
				Start_Watch();
			}
		}
		
		var Solution_Index = (Preview_Id - Edit_Preview_UI_Element_ID_Difference);	
		var temp = Solution_Index;
		//alert(Solution_Index);
		
		Index_1 = parseInt(temp/27);
		temp -= Index_1 *27;
		Index_2 = parseInt(temp/9);
		temp -= Index_2 *9;
		Index_3 = parseInt(temp/3);
		temp -= Index_3 *3;
		Index_4 = parseInt(temp%3);
		temp -= Index_4;
		
		var Value = Sudoku_Solution[Index_1][Index_2][Index_3][Index_4];
		//alert(Value);
		
		//	Set_Default(Solution_Index, Value, Colors[6]);
		var Drop_Down_Only_Option = '<select> <option value="'+ Value + '"><br>' + Value + '</br></option></select>';
		var Element = document.getElementById(Solution_Index).firstChild;
		
		Element.innerHTML = "";
		Element.appendChild(new Option(Value,Value));
		
		// Preview(Element, Value, Colors[6]);
		Autos_Preview(Element, Value, Colors[6]);
		return true;
	}
	catch(e)
	{
		alert("Error in Providing Hint. " + e.message);
	}
}

function Leveling()
{
	// Get Hardness Level
	var Hardness_Level = document.getElementById("Hardness");
	var Selected_Index = Hardness_Level.selectedIndex;
	var Options = Hardness_Level.getElementsByTagName("option");
	var Display_Name = Options[Selected_Index].innerHTML;
	var Value = Options[Selected_Index].value;

	// Fix The Hardness Level
	Hardness_Level.innerHTML = "";
	Hardness_Level.appendChild(new Option(Display_Name,Value));
	
	// Get Number of Clues
	var Clues = document.getElementById("Clues");
	var Selected_Index = Clues.selectedIndex;
	var Options = Clues.getElementsByTagName("option");
	var Display = Options[Selected_Index].innerHTML;
	var Value = Options[Selected_Index].value;

	// Fix Number Of Clues
	Clues.innerHTML = "";
	Clues.appendChild(new Option(Display,Value));
	
	// Enable Hint Button
	document.getElementById("Hint_Button").style.display="";
	
	return true;
}