var Settled_Elements;
var Element_Probable_Locations;

function Genrator_Engine()
{	
	var t;
	for(t=0; t<10; t++)
	{
		Settled_Elements = 0;
		for(var i=0; i<3; i++)
		{
			Set_Block(i,i);
			Show_Puzzled(Sudoku_Solution);
		}
		
		if(Settled_Elements == 27)
		{
			//alert("Trying to solve this. Total Pre Set = " + Settled_Elements);
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
								Set_Auto_Generated(i,j,k,l,Sudoku_Data[i][j][k][l]);
							}
						}
					}
				}
			}
			//Show_Solution(Sudoku_Solution);
			Eliminate();
			Show_Puzzled(Sudoku_Solution);
			
			var temp;
			var Value;
			for(var i=0; i<3; i++)
			{
				for(var j=0; j<3; j++)
				{
					if(i == j)
						continue;
					
					Element_Probable_Locations = new Array(4,4,4,4,4,4,4,4,4);
					for(var k=0; k<3; k++)
					{
						for(var l=0; l<3; l++)
						{
							if(Sudoku_Solution[i][j][k][l].length > 1)
							{
								Value = Sudoku_Solution[i][j][k][l][0];
								for(var len=0; len<Sudoku_Solution[i][j][k][l].length; len++)
								{
									temp = Sudoku_Solution[i][j][k][l][len];
									if(Element_Probable_Locations[Value-1] == 0 || Element_Probable_Locations[temp-1] == 1 || (!Generator_Validate(Value,i,j,k,l)))
										Value = temp;
									
									if(Element_Probable_Locations[Value-1] > 0)
										Element_Probable_Locations[temp-1]--;
								}
								
								if(!Generator_Validate(Value,i,j,k,l))
								{
									var Ok = false;
								// alert(Value + " <YOOOO> " + i + j + k + l +  " <> " + Sudoku_Solution[i][j][k][l] + " <> " + Element_Probable_Locations);
									for(var Data=1;Data<=9; Data++)
									{
										if(Generator_Validate(Data,i,j,k,l))
										{
											alert("I am working. " + Value + " < >  " + Data  + " <> " + i+j+k+l);
											Value = Data;
											Ok = true;
											break;
										}
									}
									if(!Ok)
										alert("Not Done");
								}
																
								Sudoku_Solution[i][j][k][l] = Value;
								Element_Probable_Locations[Value-1] = 0;
								Puzzle_Block_Elemination(i,j,Value);
								//Block_Group_Elemination(i,j)
								 alert(Sudoku_Solution[i][j]);
								Show_Puzzled(Sudoku_Solution);
									
							}
						}
					}
				}
			}
			//Show_Puzzled(Sudoku_Solution);
			
			break;
		}
	}
	if(t >= 10)
	{
		alert("Not this time :(" + t);
	}
}

// Show Solution To User
	function Show_Puzzled(Data_Array)												// Data_Array = Sudoku_Solution , in general
	{		
		try
		{
			var Div_Id;
			for(var i=0; i<3; i++)
			{
				for(var j=0; j<3; j++)
				{
					Div_Id = (i*3)+j+1;
					
					Next_Id = Sudoku_Solution_Construction("Solution" + Div_Id, Data_Array,i,j, Next_Id, Colors[0]);		// Passing Portion of Solved Data to other function
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
	
	
	// Some more reliable Algorithm needed. It is not good.
	function Set_Block(i,j)
	{
		var Probable_Number;
		var Validated;
		
		//Sudoku_Temp = new Array(new Array(0,0,0), new Array(0,0,0), new Array(0,0,0));
		//Number_Element = new Array(new Array(0,0,0), new Array(0,0,0), new Array(0,0,0));
		
		for(var k=0; k<3; k++)
		{
			for(var l=0; l<3; l++)
			{
				Validated = false;
				for(var e=0; e<50; e++)
				{
					Probable_Number = parseInt(Math.random() * 10);
					if(Probable_Number == 0)
						Probable_Number = 1;
				
					if(Generator_Validate(Probable_Number,i,j,k,l))
					{
						Sudoku_Data[i][j][k][l] = Probable_Number;
						Sudoku_Solution	[i][j][k][l] = Probable_Number + "";
						Validated = true;
						Settled_Elements++;
						break;
					}
				}
			}
		}
	}
	
	function Settlement_Expert(i,j,k,l)
	{
		var Solution_Temp = new Array(new Array(0,0,0),new Array(0,0,0),new Array(0,0,0));
		alert(Sudoku_Solution[i][j]);
		for(var x=0; x<3; x++)
		{
			for(var y=0; y<3; y++)
			{
				Solution_Temp[x][y] = Sudoku_Solution[i][j][x][y];
				Sudoku_Solution[i][j][x][y] = "";
			}
		}
		Solution_Temp[k][l] = "";
		alert("After "+Solution_Temp);
		for(var s=1; s<=9; s++)
		{
			if(Generator_Horizontal_Validation(s,i,k) && Generator_Vertical_Validation(s,j,l))
			{
				Solution_Temp[k][l] += s;
			}
		}
		
		for(var x=0; x<3; x++)
		{
			for(var y=0; y<3; y++)
			{
				Sudoku_Solution[i][j][x][y] = Solution_Temp[x][y];
			}
		}
		
		Sudoku_Solution[i][j] = Solution_Temp;
		alert(Sudoku_Solution[i][j][k][l]);
	}
	
	// Eliminates Values from Block which is impossible for a particular element
	function Puzzle_Block_Elemination(i,j,Data)
	{
		//alert("Block");
	
		for(var k=0; k<3; k++)
		{
			for(var l=0; l<3; l++)
			{
				if(Sudoku_Solution[i][j][k][l].length > 1)
				{
					// Remove values(1,2,..) which is impossible on this place as other block member already has this value
					Sudoku_Solution[i][j][k][l] = Sudoku_Solution[i][j][k][l].replace(Data,"");	
					if(Sudoku_Solution[i][j][k][l].length == 1)
					{
						Settled_Elements++;
						if(Settled_Elements == Total_Number_Of_Element)
						{
							//alert("Block Elemination Successfully Solved");
							return true;
							//Show_Solution(Sudoku_Solution);
						}
						
						// If Set Call Elimination Again (Recursively) for this element
						var Element_Value = Sudoku_Solution[i][j][k][l];
						Puzzle_Block_Elemination(i,j,Element_Value);
					}
				}
			}
		}
		return false;
	}