function Set_Default(Id, Value, Color)
{
	Element = document.getElementById(Id).firstChild;
	Element.options[Value].selected = true;
	
	Preview(Element,Color);
}

function Default_Puzzle()
{
	Load();
	for(var i=0; i<Edit_Preview_UI_Element_ID_Difference; i++)
		document.getElementById(i).firstChild.options[0].selected = true;
	
		// Default Genius Problem
	{
		Set_Default(2,9, Colors[5]);
		Set_Default(4,6, Colors[5]);
		Set_Default(7,5, Colors[5]);
		
		Set_Default(11,1, Colors[5])
		Set_Default(13,5, Colors[5]);
		
		Set_Default(18,3, Colors[5]);
		Set_Default(21,8, Colors[5]);
		Set_Default(24,2, Colors[5]);
		//////////////////
		
		Set_Default(27,7, Colors[5]);
		Set_Default(30,4, Colors[5]);
		
		Set_Default(36,2, Colors[5]);
		Set_Default(38,5, Colors[5]);
		Set_Default(42,3, Colors[5]);
		Set_Default(44,6, Colors[5]);
		
		Set_Default(50,5, Colors[5]);
		Set_Default(53,9, Colors[5]);
		//////////////////
		
		Set_Default(56,3, Colors[5]);
		Set_Default(59,4, Colors[5]);
		Set_Default(62,8, Colors[5]);
		
		Set_Default(67,7, Colors[5]);
		Set_Default(69,9, Colors[5]);
		
		Set_Default(73,4, Colors[5]);
		Set_Default(76,1, Colors[5]);
		Set_Default(78,6, Colors[5]);
	}
	
	
	// Default Problem
	/*{
		Set_Default(4,4, Colors[5]);
		Set_Default(7,3, Colors[5]);
		
		Set_Default(11,7, Colors[5]);
		Set_Default(12,2, Colors[5])
		Set_Default(14,6, Colors[5]);
		
		Set_Default(19,9, Colors[5]);
		Set_Default(21,8, Colors[5]);
		Set_Default(24,5, Colors[5]);
		//////////////////
		
		Set_Default(27,8, Colors[5]);
		Set_Default(30,7, Colors[5]);
		Set_Default(33,2, Colors[5]);
		
		Set_Default(37,9, Colors[5]);
		Set_Default(43,1, Colors[5]);
		
		Set_Default(47,4, Colors[5]);
		Set_Default(50,6, Colors[5]);
		Set_Default(53,9, Colors[5]);
		//////////////////
		
		Set_Default(56,5, Colors[5]);
		Set_Default(59,1, Colors[5]);
		Set_Default(61,7, Colors[5]);
		
		Set_Default(66,4, Colors[5]);
		Set_Default(68,3, Colors[5]);
		Set_Default(69,8, Colors[5]);
		
		Set_Default(73,3, Colors[5]);
		Set_Default(76,2, Colors[5]);
	}*/
	
	/*{
		Set_Default(0,7, Colors[5]);
		Set_Default(5,1, Colors[5]);
		Set_Default(7,3, Colors[5]);
		Set_Default(8,6, Colors[5]);
		
		Set_Default(12,4, Colors[5]);
		Set_Default(13,5, Colors[5]);
		Set_Default(14,7, Colors[5]);
		
		Set_Default(19,9, Colors[5]);
		
		Set_Default(27,2, Colors[5]);
		Set_Default(30,5, Colors[5]);
		Set_Default(33,4, Colors[5]);
		
		Set_Default(37,6, Colors[5]);
		Set_Default(43,1, Colors[5]);
		
		Set_Default(47,8, Colors[5]);
		Set_Default(50,7, Colors[5]);
		Set_Default(53,2, Colors[5]);
		
		Set_Default(61,8, Colors[5]);
		
		Set_Default(66,2, Colors[5]);
		Set_Default(67,9, Colors[5]);
		Set_Default(68,3, Colors[5]);
		
		Set_Default(72,6, Colors[5]);
		Set_Default(73,5, Colors[5]);
		Set_Default(75,8, Colors[5]);
		Set_Default(80,3, Colors[5]);
	}*/
	
	//Set_Problem = false;
	Set_Puzzle(Default_Colour);
	//alert(Sudoku_Data);
	return true;
}