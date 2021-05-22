function Set_Puzzle(Color)
{
	try
	{
		if( !Set_Problem )
		{
			for(var i=0; i<Edit_Preview_UI_Element_ID_Difference; i++)
			{
				Value  = document.getElementById(i).firstChild.value;
				if(Value > 0 )
				{
					var Drop_Down_Only_Option = '<select> <option value="'+ Value + '">' + Value + '</option></select>';
					document.getElementById(i).innerHTML = Drop_Down_Only_Option;
					document.getElementById(i+Edit_Preview_UI_Element_ID_Difference).innerHTML = "<font color='" + Color + "'>" + Value + Blank_Suffix + "</font>";
				}
			}
			Set_Problem = true;
			Start_Watch();
		}
		else
		{
			var flag = confirm("Problem is Already Set. Do you want to set it Again ?.");
			if(flag)
			{
				//Solved = false;
				Set_Problem = false;
				Set_Puzzle(Color);
			}
		}
		if(!Solution())
		{
			User_Message = "The Puzzle seems incorrect as I could not solve it. </br>If you think it is correct, you can proceed.";
			document.getElementById("User_Message").innerHTML = User_Message;
		}
		
		return Set_Problem;
	}
	catch(e)
	{
		alert("Error in Setting Puzzle. " + e.message);
	}
}