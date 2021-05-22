var MAX_TRY = 101;
var Settled_Elements;
var Element_Probable_Locations;

function Genrator_Engine()
{
	Load();
	Puzzle_Classifier();
	Level_Value = document.getElementById("Hardness").value;
	Set_Clues(Level_Value);
	
	// Disable Hint Button
	document.getElementById("Hint_Button").style.display="none";
	
	var Times;
	for(Times=0; Times<MAX_TRY; Times++)
	{
		Zero_Solution();
		Settled_Elements = 0;
		for(var i=0; i<3; i++)
			Set_Block(i,i);
		
		Eliminate();
		//Show_Puzzled(Sudoku_Solution);
		//alert("Default Set (For Debugging)");
		
		for(var i=0; i<3; i++)
		{
			for(var j=0; j<3; j++)
			{
				if(i == j)
				{
					var Neighbourhood_Blocks = new Array(j,(j +1)%3,(j+2)%3);
					
					for(var k=0; k<3; k++)
					{
						var Neighbourhood_Block_Rows = new Array(k,(k +1)%3,(k+2)%3);
						
						for(var l=0; l<3; l++)
						{
							var Element_Length = 9;
							var One = 0;
							var Two = 0;
							var Three = 0;
							var Four = 0;
						
							for(var x=1; x<Neighbourhood_Blocks.length; x++)
							{
								for(var y=1; y<Neighbourhood_Block_Rows.length; y++)
								{
									for(var z=0; z<3; z++)
									{
										var Block_Index = Neighbourhood_Blocks[x];
										var Row_Index = Neighbourhood_Block_Rows[y];
										
										Data_Length = Sudoku_Solution[i][Block_Index][Row_Index][z].length;
										
										if(Data_Length > 1)
										{
											if(Generator_Validate(Sudoku_Solution[i][j][k][l],i,Block_Index,Row_Index,z))
											{
												if(Data_Length < Element_Length)
												{
													Element_Length = Data_Length;
													One = i;
													Two = Block_Index;
													Three = Row_Index
													Four = z;
												}
											}
										}
									}
								}
							}

							if(One != 0 || Two != 0)
							{	
								Sudoku_Solution[One][Two][Three][Four] =  Sudoku_Solution[i][j][k][l];
								Settled_Elements++;
								Elemination(One,Two,Three,Four,Sudoku_Solution[i][j][k][l]);
								//Show_Puzzled(Sudoku_Solution);
							}
						}
					}
				}
			}
		}
		//Show_Puzzled(Sudoku_Solution);
		if(Verify_Solution() == Total_Number_Of_Element)
		{
			Solved = true;
			break;
		}
	}
	
	if(Times >= MAX_TRY)
	{
		alert("Not this time :(\n Please try Again");
	}
	//alert(Sudoku_Data);
	Hint_UI_Designer(false);
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
						Sudoku_Solution	[i][j][k][l] = Probable_Number + "";
						Validated = true;
						Settled_Elements++;
						break;
					}
				}
			}
		}
	}