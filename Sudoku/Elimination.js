// Eliminates Values which is impossible for each element
	function Eliminate()
	{
		for(var i=0; i<3; i++)
		{
			for(var j=0; j<3; j++)
			{
				for(var k=0; k<3; k++)
				{
					for(var l=0; l<3; l++)
					{
						if(Sudoku_Solution[i][j][k][l].length == 1)
						{
							//alert(Sudoku_Solution[i][j][k][l]);
							Element_Value = Sudoku_Solution[i][j][k][l];
							if(Elemination(i,j,k,l,Element_Value))
								return true;
						}
					}
				}
			}
		}
		return false;
	}
	
	// Eliminates Values which is impossible for a Particular Element
	function Elemination(i,j,k,l,Data)
	{
		//alert( Block_Elemination(i,j,Data) || Horizon_Elemination(i,k,Data) || Vertical_Elemination(j,l,Data)) 
		return (Block_Elemination(i,j,Data) || Horizon_Elemination(i,k,Data) || Vertical_Elemination(j,l,Data));		//Need Some Monitoring, Specially on Return Value
	}
	
	// Eliminates Values from Block which is impossible for a particular element
	function Block_Elemination(i,j,Data)
	{
		//alert("Block");
	
		for(var k=0; k<3; k++)
		{
			for(var l=0; l<3; l++)
			{
				{
					if(Sudoku_Solution[i][j][k][l].length > 1)
					{
						// Remove values(1,2,..) which is impossible on this place as other block member already has this value
						Sudoku_Solution[i][j][k][l] = Sudoku_Solution[i][j][k][l].replace(Data,"");	
						if(Sudoku_Solution[i][j][k][l].length == 1)
						{
							Total_Set++;
							if(Total_Set == Total_Number_Of_Element)
							{
								//alert("Block Elemination Successfully Solved");
								return true;
								//Show_Solution(Sudoku_Solution);
							}
							
							// If Set Call Elimination Again (Recursively) for this element
							var Element_Value = Sudoku_Solution[i][j][k][l];
							if(Elemination(i,j,k,l,Element_Value))
								return true;
						}
					}
				}
			}
		}
		return false;
	}
	
	// Eliminates Values from Horizon which is impossible for a particular element
	function Horizon_Elemination(i,k,Data)
	{
		//alert("Horizon");
		
		for(var j=0; j<3; j++)
		{
			for(var l=0; l<3; l++)
			{
				{
					if(Sudoku_Solution[i][j][k][l].length > 1)
					{
						// Remove values(1,2,..) which is impossible on this place as other member of this horizon already has this value
						Sudoku_Solution[i][j][k][l] = Sudoku_Solution[i][j][k][l].replace(Data,"");
						if(Sudoku_Solution[i][j][k][l].length == 1)
						{
							Total_Set++;
							if(Total_Set == Total_Number_Of_Element)
							{
								//alert("Horizon Elemination Successfully. Solved");
								return true;
							}
							
							// If Set Call Elimination Again (Recursively) for this element
							var Element_Value = Sudoku_Solution[i][j][k][l];
							if(Elemination(i,j,k,l,Element_Value))
								return true;
						}
					}
				}
			}
		}
		return false;
	}
	
	// Eliminates Values from Vertex which is impossible for a particular element
	function Vertical_Elemination(j,l,Data)
	{
		//alert("Vertical");
		
		for(var i=0; i<3; i++)
		{
			for(var k=0; k<3; k++)
			{
				if(Sudoku_Solution[i][j][k][l].length > 1)
				{
					// Remove values(1,2,..) which is impossible on this place as other member of this vertex already has this value
					Sudoku_Solution[i][j][k][l] = Sudoku_Solution[i][j][k][l].replace(Data,"");
					if(Sudoku_Solution[i][j][k][l].length == 1)
					{
						Total_Set++;
						if(Total_Set == Total_Number_Of_Element)
						{
							//alert("Block Elemination Successfully. Solved");
							return true;
						}
						
						// If Set Call Elimination Again (Recursively) for this element
						var Element_Value = Sudoku_Solution[i][j][k][l];
						if(Elemination(i,j,k,l,Element_Value))
								return true;
					}
				}
			}
		}
		return false;
	}