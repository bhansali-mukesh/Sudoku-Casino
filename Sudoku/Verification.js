	function Verify_Solution()
	{
		//alert("Verifying : " + Total_Set);
		var Settled = 0;
		var Data;
		
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
							Data = Sudoku_Solution[i][j][k][l];
							Sudoku_Solution[i][j][k][l] = "123456789";
							if(Generator_Validate(Data,i,j,k,l))
							{
								Sudoku_Solution[i][j][k][l] = Data;
								Settled++;
							}
						}
					}
				}
			}
		}
		// alert(Settled);
		return Settled;
	}
	
	function Verify_Data()
	{
		//alert("Verifying : " + Total_Set);
		var Settled = 0;
		
		for(var i=0; i<3; i++)
		{
			for(var j=0; j<3; j++)
			{
				for(var k=0; k<3; k++)
				{
					for(var l=0; l<3; l++)
					{
						 if(Sudoku_Data[i][j][k][l] > 0)
						{
							if(Sudoku_Solution[i][j][k][l] == Sudoku_Data[i][j][k][l])
							{
								Settled++;
							}
						}
					}
				}
			}
		}
		// alert(Settled);
		return Settled;
	}