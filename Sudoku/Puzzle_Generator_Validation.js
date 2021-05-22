// Validate Element Value., if can exist at this place
	function Generator_Validate(Value,Index_1,Index_2,Index_3,Index_4)
	{
		try
		{
			if(Value > 0)
				if(Generator_Block_Validation(Value,Index_1,Index_2) && Generator_Horizontal_Validation(Value,Index_1,Index_3) && Generator_Vertical_Validation(Value,Index_2,Index_4))
					return true;

			return false;
		}
		catch(e)
		{
			alert("Error in Validation Check. " + e.message);
		}
	}
	
	// Check if Element Value is Already exist in same Block
	function Generator_Block_Validation(Value,Index_1,Index_2)
	{
		for(var i=0; i<3; i++)
		{
			for(var j=0; j<3; j++)
			{
				if(Sudoku_Solution[Index_1][Index_2][i][j] == Value)
				{
					//alert(Value + " is Already in this Block. Choose Other.");
					return false;
				}
			}
		}
		return true;
	}
	
	// Check if Element Value is Already exist in same Horizon
	function Generator_Horizontal_Validation(Value,Index_1,Index_3)
	{
		for(var i=0; i<3; i++)
		{
			for(var j=0; j<3; j++)
			{
				if(Sudoku_Solution[Index_1][i][Index_3][j] == Value)
				{
					//alert(Value + " is Already in this Horizontal Line. Choose Other.");
					return false;
				}
			}
		}
		return true;
	}
	
	// Check if Element Value is Already exist in same Vertex
	function Generator_Vertical_Validation(Value,Index_2,Index_4)
	{
		for(var i=0; i<3; i++)
		{
			for(var j=0; j<3; j++)
			{
				if(Sudoku_Solution[i][Index_2][j][Index_4] == Value)
				{
					//alert(Value + " is Already in this Vertical Line. Choose Other.");
					return false;
				}
			}
		}
		return true;
	}