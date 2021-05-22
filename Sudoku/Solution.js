var Color_Solution = new Array(new Array("3388ff","SOLUTION BORDER"), new Array("AA9922","NOT FILLED YET"), new Array("2F62A2","FILLED BY PUZZLE OR HINT PROVIDED"), new Array("00DD00","FILLED BY USER AND IS CORRECT"), new Array("DD0000","FILLED BY USER BUT IS INCORRECT"), new Array("222222","REMAIN UNSOLVED"));
var Minimum_Pre_Set_Elements = 20;
	
	// Make Solution Matrix on initial Stage
	function Zero_Solution()
	{
		for(var i=0; i<3; i++)
			for(var j=0; j<3; j++)
				for(var k=0; k<3; k++)
					Sudoku_Solution[i][j][k]  = new Array("123456789","123456789","123456789");
	}

	// Set Initial Values 
	function Pre_Set(Minimum_Hint)
	{
		for(var i=0; i<3; i++)
		{
			for(var j=0; j<3; j++)
			{
				for(var k=0; k<3; k++)
				{
					for(var l=0; l<3; l++)
					{
						if( Sudoku_Data[i][j][k][l] > 0 )
						{
							if(Auto_Set(i,j,k,l))
							{
								Sudoku_Solution[i][j][k][l] = Sudoku_Data[i][j][k][l];
								Total_Set++;
							}
						}							
					}
				}
			}
		}
		
		// Total_Blank_Element = Total_Number_Of_Element - Total_Set;
		// Steps = 0;
		Score_Update();
		
		if(Total_Set < Minimum_Hint)
		{
			User_Message = "Too less hint, Unjustified and Painful :(</br>" + "I exprcted at least " + Minimum_Hint + " Hints but found just " + Total_Set + ". &nbsp;Quiting...";
			document.getElementById("User_Message").innerHTML = User_Message;
			return false;
		}
		
		return true;
	}	


	function Solution()
	{
		//Set_Puzzle();
		
		Zero_Solution();
		Total_Set = 0;
		
		if(Pre_Set(Minimum_Pre_Set_Elements))
		{
			for(var M=0; M<7; M++)
			{
				Complexity++;
				
				if(Eliminate() || Claim() || Group_Elimination())
				{
					Total_Set = Verify_Solution();
					if(Total_Set == Total_Number_Of_Element)
					{		
						Solved = true;
						return Solved;
					}
				}
			}
			User_Message = "<pre>Something went wrong. Most probably puzzle is not proper. I could not solve it.<br></br> It is So Complex, more than the level : " + Complexity + " I could Solve only " + Total_Set + " Elements :(.</pre>";
		
			//document.getElementById("User_Message").innerHTML = User_Message;
			//Show_Solution(Sudoku_Solution);
			Solved = false;
			return Solved;
		}
		User_Message = "<font color='" + Colors[7] + "'> I need at least " + Minimum_Pre_Set_Elements + " to proceed for Solution. It is not Justified and Painful. Not Looking for a Solution. :(</font>";
		return false;
	}
	
	
	// Show Solution To User
	function Show_Solution(Data_Array)												// Data_Array = Sudoku_Solution , in general
	{		
		try
		{
			if(!Solved)
				Solution();
			
			if(Total_Set == Total_Number_Of_Element)
			{
				if(Complexity == 1)
					User_Message = "<pre>It is very easy with the Complexity of level : " + Complexity + "</pre>";
				else
					User_Message = "<pre>It is of Complexity level : " + Complexity + "</pre>";
			}
			
			var Div_Id;
			for(var i=0; i<3; i++)
			{
				for(var j=0; j<3; j++)
				{
					Div_Id = (i*3)+j+1;
					
					Next_Id = Sudoku_Solution_Construction("Solution" + Div_Id, Data_Array,i,j, Next_Id, Color_Solution[0][0]);		// Passing Portion of Solved Data to other function
				}
			}
			
			document.getElementById("User_Message").innerHTML = User_Message;
			return true;
		}
		catch(e)
		{
			alert("Error in Displaying Solution. " + e.message);
		}
	}
	
	function Sudoku_Solution_Construction(Id, Data_Array,S,M, Starting_Id, Color)
	{ 
		var Next_td_Id = 0;
		var Data_Color = Color;
		
		Construction_String = "<table border=1 id='" + Id + Starting_Id + "' bordercolor=#" + Color + ">";		// Need Perhaps More
		
		for(var i=0; i<3; i++)
		{
			Construction_String += "<tr>"; 
			for(var j=0; j<3; j++)
			{
				Next_td_Id = Starting_Id + (i*3+j);
				
				if(Sudoku_Solution[S][M][i][j].length > 1)
					Data_Color = Color_Solution[5][0];							// Remain Unsolved					
				else if(Sudoku_Data[S][M][i][j] == 0)									// Data is not filled yet
						Data_Color = Color_Solution[1][0];
				else if(Sudoku_Data[S][M][i][j] < 10)
						if(Auto_Set(S,M,i,j))
							Data_Color = Color_Solution[2][0];						// Data is filled By Puzzle itself or given as a hint
						else if(Sudoku_Data[S][M][i][j] == Sudoku_Solution[S][M][i][j])
								Data_Color = Color_Solution[3][0];					// Data is filled By User and Correct
							else
								Data_Color = Color_Solution[4][0];					// Data is filled By User but incorrect

				Construction_String += "<td id='" + Next_td_Id + "'><font color='" + Data_Color + "'>" + Data_Array[S][M][i][j] + Blank_Suffix + "</font></td>";		// Creating Solved Data Portion
			}
			Construction_String += "</tr>";
		}
		Construction_String += "</table>";
		document.getElementById(Id).innerHTML = Construction_String;													// Showing Solved Data Portion on Page
		
		Legends_Information(Color_Solution, 0, 10);
		
		document.getElementById("Introduced_By").innerHTML = '<input type="button" value=" Brought To You By " onclick="Creator_Mukesh();" />';
		
		return Next_td_Id+1;
	}
	
	function Legends_Information(Colors_Menu, Height, Width)
	{
		var Legend_Table = '<h3>LEGENDS</h3><table>';
		
		for(var i=0; i<Colors_Menu.length; i++)
		{
			Legend_Table +='<tr>';
			Legend_Table += '<td bgcolor="' + Colors_Menu[i][0] + '" height="' + Height + 'px" width="' + Width + 'px"></td>\
							<td>' + Colors_Menu[i][1] + '</td></tr>';
		}
		Legend_Table +='</table>';
		
		document.getElementById("Legends").innerHTML = Legend_Table;
	}