//Eliminates Values which is impossible for each element
// It calculates how many group member ( either in row, column or in block ) is claiming a number ( 0 - 9 ) and eliminates
// Let's number 4 is claimed by index 3 and 8 ( [3]: 46, [8]: 478 ) but 2 is claimed by only 6 index 5 in block ( [5]: 1569 )
// So 6 is assigned to index 5 ( As he is the only 1 claiming number 6, in the block )
	function Claim()
	{
		//Show_Solution(Sudoku_Solution);
		for(var i=0; i<3; i++)
		{
			for(var j=0; j<3; j++)
			{
				if(Claiming(i,j))
					return true;
			}
		}
		return false;
	}
	
	// Eliminates Values which is impossible for a Particular Element
	function Claiming(i,j)
	{
		//alert( Block_Elemination(i,j,Data) || Horizon_Elemination(i,k,Data) || Vertical_Elemination(j,l,Data)) 
		return (Block_Claiming(i,j) || Horizon_Claiming(i,j) || Vertical_Claiming(i,j));		//Need Some Monitoring, Specially on Return Value
		//return Vertical_Claiming(i,j);
	}
	
	// Eliminates Values from Block which is impossible for a particular element
	function Block_Claiming(i,j)
	{
		//alert("Block");
		var Claim_Array = new Array("","","","","","","","","");
		var Claim_Index;
		var Value_Length;
		var Value;
		var Claim_Array_Number = new Array(0,0,0,0,0,0,0,0,0);
		
		for(var k=0; k<3; k++)
		{
			for(var l=0; l<3; l++)
			{
				Value = Sudoku_Solution[i][j][k][l] + "";
				Value_Length = Value.length;
				
				//alert(Value + " < Value  Length > " + Value_Length);
				//if(Value_Length > 1)
				{
					for(var v=0; v<Value_Length; v++)
					{
						Claim_Index = parseInt(k*3+l+1);
						Claim_Array[Value[v]-1] += Claim_Index;
					}
				}
			}
		}
		//alert(Claim_Array);
		
		for(var s=0; s<9; s++)
		{
			Claim_Array_Number[s] = parseInt(Claim_Array[s]);
		}
	
		//alert(Claim_Array_Number);
		var Values = Claim_Group_Elimination(Claim_Array_Number);
		if(Values == 0)
			return true;

		//alert(" Before : " + Sudoku_Solution[i][j]);
		for(var k=0; k<3; k++)
		{
			for(var l=0; l<3; l++)
			{
				Sudoku_Solution[i][j][k][l] = "";
			}
		}
		var First_Index = 0;
		var	Second_Index = 0;
		
		for(var s=0; s<9; s++)
		{
			for(var z=0; z<Values[s].length; z++)
			{
				Value = (Values[s][z]-1);
				First_Index = parseInt(Value/3);
				Second_Index = Value%3;
				try{
				Sudoku_Solution[i][j][First_Index][Second_Index] += (s+1);
				}
				catch(e)
				{
					// alert(Value + " < Value, Indexs >" + First_Index + "," + Second_Index);
					User_Message = "The Problem seems Very Incorrect.";
					document.getElementById("User_Message").innerHTML = User_Message;
				}
			}
		}
		//alert("After : " + Sudoku_Solution[i][j]);
			
		return false;
	}
	
	// Eliminates Values from Horizon which is impossible for a particular element
	function Horizon_Claiming(i,k)
	{
		//alert("Horizon");

		var Claim_Array = new Array("","","","","","","","","");
		var Claim_Index;
		var Value_Length;
		var Value;
		var Claim_Array_Number = new Array(0,0,0,0,0,0,0,0,0);
		
		for(var j=0; j<3; j++)
		{
			for(var l=0; l<3; l++)
			{
				Value = Sudoku_Solution[i][j][k][l] + "";
				Value_Length = Value.length;
				//alert(Value + " < Value  Length > " + Value_Length);
				//if(Value_Length > 1)
				{
					for(var v=0; v<Value_Length; v++)
					{
						Claim_Index = parseInt(j*3+l+1);
						Claim_Array[Value[v]-1] += Claim_Index;
					}
				}
			}
		}
		//alert(Claim_Array);
		
		for(var s=0; s<9; s++)
		{
			Claim_Array_Number[s] = parseInt(Claim_Array[s]);
		}
	
		//alert(Claim_Array_Number);
		var Values = Claim_Group_Elimination(Claim_Array_Number);
		if(Values == 0)
			return true;

		//alert(" Before : " + Claim_Array_Number);
			
		for(var j=0; j<3; j++)
		{
			for(var l=0; l<3; l++)
			{
				Sudoku_Solution[i][j][k][l] = "";
			}
		}
		var First_Index = 0;
		var	Second_Index = 0;
		
		for(var s=0; s<9; s++)
		{
			for(var z=0; z<Values[s].length; z++)
			{
				Value = (Values[s][z]-1);
				First_Index = parseInt(Value/3);
				Second_Index = Value%3;
				try{
				Sudoku_Solution[i][First_Index][k][Second_Index] += (s+1);
				}
				catch(e)
				{
					// alert(Value + " < Value, Indexs >" + First_Index + "," + Second_Index);
					User_Message = "The Problem seems Very Incorrect.";
					document.getElementById("User_Message").innerHTML = User_Message;
				}
			}
		}
		//alert("After : " + Values);
			
		return false;
	}
	
	// Eliminates Values from Vertex which is impossible for a particular element
	function Vertical_Claiming(j,l)
	{
		//alert("Vertical");
		var Claim_Array = new Array("","","","","","","","","");
		var Claim_Index;
		var Value_Length;
		var Value;
		var Claim_Array_Number = new Array(0,0,0,0,0,0,0,0,0);
		
		for(var i=0; i<3; i++)
		{
			for(var k=0; k<3; k++)
			{
				Value = Sudoku_Solution[i][j][k][l] + "";
				Value_Length = Value.length;
				//alert(Value + " < Value  Length > " + Value_Length);
				//if(Value_Length > 1)
				{
					for(var v=0; v<Value_Length; v++)
					{
						Claim_Index = parseInt(i*3+k+1);
						Claim_Array[Value[v]-1] += Claim_Index;
					}
				}
			}
		}
		//alert(Claim_Array);
		
		for(var s=0; s<9; s++)
		{
			Claim_Array_Number[s] = parseInt(Claim_Array[s]);
		}
	
		var Values = Claim_Group_Elimination(Claim_Array_Number);
		if(Values == 0)
			return true;

		//alert("Before : > " + Claim_Array_Number);
			
		for(var i=0; i<3; i++)
		{
			for(var k=0; k<3; k++)
			{
				Sudoku_Solution[i][j][k][l] = "";
			}
		}
		var First_Index = 0;
		var	Second_Index = 0;
		
		for(var s=0; s<9; s++)
		{
			for(var z=0; z<Values[s].length; z++)
			{
				Value = (Values[s][z]-1);
				First_Index = parseInt(Value/3);
				Second_Index = Value%3;
				try{
					Sudoku_Solution[First_Index][j][Second_Index][l] += (s+1);
				}
				catch(e)
				{
					// alert(Value + " < Value, Indexs >" + First_Index + "," + Second_Index);
					User_Message = "The Problem seems Very Incorrect.";
					document.getElementById("User_Message").innerHTML = User_Message;
				}
			}
		}
		//alert("After : " + Values);
			
		return false;
	}
	
	function Claim_Group_Elimination(Data_Array)
	{
		//alert("Data : " + Data_Array);
		// Getting a sorted ordered array (1 Dimensional) via Insertion Sort
		var Sorted_Data_Array = Insertion_Sort_1D(Data_Array);
		
		for(var si=0; si<9; si++)
		{
			Sorted_Data_Array[si] = Sorted_Data_Array[si] + "";
			Data_Array[si] = Data_Array[si] + "";
		}
		
		var Count;
		var Group_Length;
		
		var loop = true;
		
		while(loop)
		{
			//alert("Sorted : " + Sorted_Data_Array);
			loop = false;
			for(var i=0; i<8; i++)
			{
				// If 2 Numbers are equal (538 and 538) in the block
				if(Sorted_Data_Array[i] != 100 && Sorted_Data_Array[i] == Sorted_Data_Array[i+1])
				{
					Count = 2;
					// Finding The Length of the group(Actually String Length because Each Member can carry 1 Digit Number, 1 Character)
					Group_Length = Sorted_Data_Array[i].length;
					for(var j=i+2; j<9; j++)
					{
						// Finding Other Member of Block which has the same value (538) and Counting, How Many From The Same Block, Holds The Same Value. 
						if(Sorted_Data_Array[i] == Sorted_Data_Array[j])
							Count++;
					}
					
					var Group_Data = Sorted_Data_Array[i];
					// If String length and Members are equal than it is a valid group, Meaning Other Block Member Can Not Have Any Number(5,3,8) of This String (538, if 3 Member of Block contains this String Value)
					if(Count == Group_Length)
					{
						//alert("Group Elimination Found : " + Group_Data);
						
						for(var y=0; y<9; y++)
						{
							if(Data_Array[y].length > 1)			// If not set and not a group member
							{
								if(Data_Array[y] != Group_Data)
								{
									for(var r=0; r<Group_Length; r++)
									{
										if(Data_Array[y].length > 1)
										{
											Data_Array[y] = Data_Array[y].replace(Group_Data[r],"");		// Removing Group Members from the rest of Block		
											if(Data_Array[y].length == 1)
											{
												//alert("Set = " + Data_Array[y]+ " Data "+ Group_Data+" DA "+ Data_Array);
												Total_Set++;
												if(Total_Set == Total_Number_Of_Element)
												{
													//alert("Claim Block Group Elemination Succeded.");
													return 0;
												}
											}
											loop = true;
										}
									}
								}
							}
							if(Sorted_Data_Array[y] == Group_Data)
							{
								Sorted_Data_Array[y] = 100;
							}
						}
					}
				}
			}
		}
		return Data_Array;
	}