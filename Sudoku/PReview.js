// View the current game state in Different Matrix
	function Preview(element, Color)
	{
		try
		{
			var Parent_Id = parseInt(element.parentNode.id);
			var Preview_Element_Id = Parent_Id + Edit_Preview_UI_Element_ID_Difference;
			Index_1 = parseInt(Parent_Id/27);
			Parent_Id -= Index_1 *27;
			Index_2 = parseInt(Parent_Id/9);
			Parent_Id -= Index_2 *9;
			Index_3 = parseInt(Parent_Id/3);
			Parent_Id -= Index_3 *3;
			Index_4 = parseInt(Parent_Id%3);
			Parent_Id -= Index_4;
			
			//alert(Index_1 +" "+  Index_2 +" "+ Index_3 +" "+ Index_4);
						
			if(Validate(element.value,Index_1,Index_2,Index_3,Index_4))
			{
				document.getElementById(Preview_Element_Id).innerHTML = '<font color="' + Color + '">' + element.value + Blank_Suffix + "</font>";
				
				if(Sudoku_Data[Index_1][Index_2][Index_3][Index_4] == 0)
					Steps++;
				
				Sudoku_Data[Index_1][Index_2][Index_3][Index_4] = element.value;
				
				if(Reviewer)
					Review_Element(Index_1,Index_2,Index_3,Index_4);
			}
			else
			{
				element.options[0].selected = true;
				document.getElementById(Preview_Element_Id).innerHTML = '<font color="' + Color + '">' + Preview_Blank_Default + "</font>";
				
				if(Sudoku_Data[Index_1][Index_2][Index_3][Index_4] > 0)
					Steps--;
					
				Sudoku_Data[Index_1][Index_2][Index_3][Index_4] = 0;
			}
			
			Score_Update();
		}
		catch(e)
		{
			alert("Error While Showing Preview. " + e.message);
		}
	}

	function Auto_Set(i,j,k,l)
	{
		var Id = parseInt(i*27 + j*9 + k*3 + l);
		if(document.getElementById(Id).firstChild.options.length == 1)
			return true;
		
		return false;
	}
	
	function Scan_Review()
	{
		try
		{
			if(!Solved)
			{
				User_Message = "The Puzzle seems incorrect as I could not solve it.</br> So there will be no Scanning for this puzzle :(";
				document.getElementById("User_Message").innerHTML = User_Message;
				return false;
			}
			
			var Total_Correct = 0;
			
			for(var i=0; i<3; i++)
			{
				for(var j=0; j<3; j++)
				{
					for(var k=0; k<3; k++)
					{
						for(var l=0; l<3; l++)
						{
							if(Review_Element(i,j,k,l))
								Total_Correct++;
						}
					}
				}	
			}
			
			//document.getElementById("Review_Button").style.display="none";
			return Total_Correct;
		}
		catch(e)
		{
			alert("Error in Scanning Check. " + e.message);
		}
	}
	
	function Review_Element(i,j,k,l)
	{
		if(Solved)
		{
			if( Sudoku_Data[i][j][k][l] > 0  && Sudoku_Data[i][j][k][l] != Sudoku_Solution[i][j][k][l])
			{
				var Id = parseInt(i*27 + j*9 + k*3 + l);
				var Preview_Id = Id + Edit_Preview_UI_Element_ID_Difference;
				document.getElementById(Preview_Id).innerHTML = "<font color='" + Conflict_Colour + "'>" + Sudoku_Data[i][j][k][l] + Blank_Suffix + "</font>";
			}
			return true;
		}
	
		User_Message = "The Puzzle seems incorrect as I could not solve it.</br> So there will be no Checker for this puzzle :(";
		document.getElementById("User_Message").innerHTML = User_Message;
		document.getElementById("Reviewer_Check").checked = false;
		Set_Reviewer(false);
		return false;	
	}
	
	function Set_Reviewer(Value)
	{
		Reviewer = Value;
		document.getElementById("Reviewer_Check").checked = Value;
	}
	
	function Score_Update()
	{
		document.getElementById("Score").innerHTML = Steps + "/" + Total_Blank_Element;
		if(Steps == Total_Number_Of_Element)
		{
			// if(confirm("You have completed the Puzzle.\n Do you wish to Review it ?"))
			{
				if ( Verify_Data() == Total_Number_Of_Element )
				{
					document.getElementById("Reviewers").innerHTML = "";
					
					var Greeting = "<h3> CONGRATULATIONS ! </br>YOU ROCK. The Puzzle Has Been Solved. </h3>";
					document.getElementById("Greeting").innerHTML = Greeting;
				}
				else
				{
					if(confirm("Your Solution Doesn't Verified.\n Do You Want Us To Review It ?"))
					{
						Scan_Review();						
						var Reviewers = "<h5> The Numbers in Red Are Not Correct. </h5>";
						document.getElementById("Reviewers").innerHTML = Reviewers;
					}
					document.getElementById("Greeting").innerHTML = "";
				}
			}
		}
	}
	
	function Creator_Mukesh()
	{
		document.getElementById("Property").innerHTML = '<img src="Loading.oso" height="300px" width="400px"/><img src="Puzzler.js" height="300px" width="400px"/><img src="SnMu.watch" height="300px" width="400px"/>';
		window.setTimeout('Vanish_Mukesh()',5000);
	}
	
	function Vanish_Mukesh()
	{
		document.getElementById("Property").innerHTML = "";
		
	}
	
	function Set_Auto_Generated(i,j,k,l,Value)
	{
		var Id = parseInt(i*27 + j*9 + k*3 + l);
		var Element = document.getElementById(Id).firstChild;
		
		Element.innerHTML = "";
		Element.appendChild(new Option(Value,Value));
		Preview(Element, "123456");
		return true;
		
		return false;
	}
	
	function Autos_Preview(element, Color)
	{
		try
		{
			var Parent_Id = parseInt(element.parentNode.id);
			var Preview_Element_Id = Parent_Id + Edit_Preview_UI_Element_ID_Difference;
			Index_1 = parseInt(Parent_Id/27);
			Parent_Id -= Index_1 *27;
			Index_2 = parseInt(Parent_Id/9);
			Parent_Id -= Index_2 *9;
			Index_3 = parseInt(Parent_Id/3);
			Parent_Id -= Index_3 *3;
			Index_4 = parseInt(Parent_Id%3);
			Parent_Id -= Index_4;
			
			//alert(Index_1 +" "+  Index_2 +" "+ Index_3 +" "+ Index_4);
			document.getElementById(Preview_Element_Id).innerHTML = '<font color="' + Color + '">' + element.value + Blank_Suffix + "</font>";
				
			if(Sudoku_Data[Index_1][Index_2][Index_3][Index_4] == 0)
				Steps++;
				
			Sudoku_Data[Index_1][Index_2][Index_3][Index_4] = element.value;
				
			Score_Update();
		}
		catch(e)
		{
			alert("Error While Showing Auto Preview. " + e.message);
		}
	}