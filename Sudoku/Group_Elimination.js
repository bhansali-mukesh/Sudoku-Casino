// It Calculates number of group claiming the exact same numbers
// Let's say at index 2, 4 and 9 ( 146, 146, 146) we find something like this
// Here the important condition is, The number in the string ( "146" i. e. 3) must be as same as number of member in the group
// ( index 2,4,9 i. e. 3 ) 
// Then we are sure that these 3 numbers will be at these 3 places ( Although who will hold what is unDecided ),
// And we can remove these element from the rest of the elements in same row, column and block
  
function Group_Elimination()
{
	//alert("Total Set : " + Total_Set);
	for(var a=0; a<3; a++)
	{
		for(var b=0; b<3; b++)
		{
				Complexity++;
				if(Block_Group_Elemination(a,b)) return true;

				Complexity++;
				if(Horizon_Group_Elemination(a,b)) return true;

				Complexity++;
				if(Vertical_Group_Elemination(a,b)) return true;
		}
	}
	return false;
}

function Block_Group_Elemination(w,x)
{
	// Getting a sorted ordered array via Insertion Sort
	var Sorted_Data_Array = Insertion_Sort(Sudoku_Solution[w][x]);
	
	var Group_Set;
	var Count;
	var Group_Length;
	
	for(var i=0; i<8; i++)
	{
		if(Sorted_Data_Array[i] == Sorted_Data_Array[i+1])
		{
			Count = 2;
			Group_Length = Sorted_Data_Array[i].length;						// Finding The Length of the group(Actually String Length because Each Member can carry 1 Digit Number, 1 Character)
			for(var j=i+2; j<9; j++)
			{
				if(Sorted_Data_Array[j] == Sorted_Data_Array[i])
					Count++;																		// Finding Member of Group
			}
			
			if(Count == Group_Length)																// If String length and Members are equal than it is a valid group
			{
				for(var y=0; y<3; y++)
				{
					for(var z=0; z<3; z++)
					{
						if(Sudoku_Solution[w][x][y][z].length > 1 && Sudoku_Solution[w][x][y][z] != Sorted_Data_Array[i])			// If not set and not a group member
						{
							for(var r=0; r<Group_Length; r++)
							{
								Sudoku_Solution[w][x][y][z] = Sudoku_Solution[w][x][y][z].replace(Sorted_Data_Array[i][r],"");		// Removing Group Members from the rest of Block		
								if(Sudoku_Solution[w][x][y][z].length == 1)
								{
									//alert("Set = " + Sudoku_Solution[w][x][y][z]);
									Total_Set++;
									if(Total_Set == Total_Number_Of_Element)
									{
										//alert("Block Group Elemination Succeded.");
										return true;
									}
									return (Elemination(w,x,y,z,Sudoku_Solution[w][x][y][z]));
								}
							}
							//alert("Group_Length : " + Group_Length + "  Revised Array : " + Sudoku_Solution[w][x]);
						}
					}
				}
			}
		}
	}
	return false;
}
	
function Horizon_Group_Elemination(w,y)
{
	var Sorted_Data_Array = new Array(0,0,0,0,0,0,0,0,0);
	var Index;
	var Swap;
	
	Sorted_Data_Array[0] = Sudoku_Solution[w][0][y][0];
	
	// Sorting Unit via Insertion Sort to an Temporary Array
	for(var x=0; x<3; x++)
	{
		for(var z=0; z<3; z++)
		{
			Swap = 0;
			Index = x*3+z;
			for(var k=Index - 1; k>=0; k--)
			{
				if(Sudoku_Solution[w][x][y][z] >= Sorted_Data_Array[k])
				{
					Swap = k+1;														// Where to insert the New Element
					break;
				}
			}
			//alert(Swap);
			for(var l=Index-1; l>=Swap; l--)
			{
				Sorted_Data_Array[l+1] = Sorted_Data_Array[l];						// Adjust Array for making place to insert new element in sorted order
			}
			
			Sorted_Data_Array[Swap] = Sudoku_Solution[w][x][y][z];								// Insert New Element
			//alert(Swap);
		}
	}
	
	//alert("Sorted_Data_Array = " + Sorted_Data_Array);
	
	var Group_Set;
	var Count;
	var Group_Length;
	
	for(var i=0; i<8; i++)
	{
		if(Sorted_Data_Array[i] == Sorted_Data_Array[i+1])
		{
			Count = 2;
			Group_Length = Sorted_Data_Array[i].length;						// Finding The Length of the group(String Length as Each Member can carry 1 Digit Number)
			for(var j=i+2; j<9; j++)
			{
				if(Sorted_Data_Array[j] == Sorted_Data_Array[i])
				{
					Count++;																		// Finding Member of Group
				}
			}
			
			if(Count == Group_Length)																// If String length and Members are equal than it is a valid group
			{//alert("I AM THRIVING " + Count + " " + Group_Length);
				for(var x=0; x<3; x++)
				{
					for(var z=0; z<3; z++)
					{
						if(Sudoku_Solution[w][x][y][z].length > 1 && Sudoku_Solution[w][x][y][z] != Sorted_Data_Array[i])			// If not set and not a group member
						{
							for(var r=0; r<Group_Length; r++)
							{
								
								Sudoku_Solution[w][x][y][z] = Sudoku_Solution[w][x][y][z].replace(Sorted_Data_Array[i][r],"");		// Removing Group Members from the rest of Unit		
								if(Sudoku_Solution[w][x][y][z].length == 1)
								{
									//alert("Set = " + Sudoku_Solution[w][x][y][z]);
									Total_Set++;
									if(Total_Set == Total_Number_Of_Element)
									{
										//alert("Horizontal Group Elemination Succeded.");
										return true;
									}
									return (Elemination(w,x,y,z,Sudoku_Solution[w][x][y][z]));
								}
							}
							//alert("Group_Length : " + Group_Length + "  Revised Array : " + Sudoku_Solution[w][x]);
						}
					}
				}
			}
		}
	}
	//alert("Sorted_Data_Array = " + Sorted_Data_Array);
	return false;
}

function Vertical_Group_Elemination(x,z)
{
	//var Data_Array = new Array(["189","3479","36"],["189","127","57"],["29","189","123"]);
	//Sudoku_Solution
	var Sorted_Data_Array = new Array(0,0,0,0,0,0,0,0,0);
	var Index;
	var Swap;
	
	Sorted_Data_Array[0] = Sudoku_Solution[0][x][0][z];
	
	// Sorting Unit via Insertion Sort to an Temporary Array
	for(var w=0; w<3; w++)
	{
		for(var y=0; y<3; y++)
		{
			Swap = 0;
			Index = w*3+y;
			for(var k=Index - 1; k>=0; k--)
			{
				if(Sudoku_Solution[w][x][y][z] >= Sorted_Data_Array[k])
				{
					Swap = k+1;														// Where to insert the New Element
					break;
				}
			}
			//alert(Swap);
			for(var l=Index-1; l>=Swap; l--)
			{
				Sorted_Data_Array[l+1] = Sorted_Data_Array[l];						// Adjust Array for making place to insert new element in sorted order
			}
			
			Sorted_Data_Array[Swap] = Sudoku_Solution[w][x][y][z];								// Insert New Element
			//alert(Swap);
		}
	}
	
	//alert("Sorted_Data_Array = " + Sorted_Data_Array);
	
	var Group_Set;
	var Count;
	var Group_Length;
	
	for(var i=0; i<8; i++)
	{
		if(Sorted_Data_Array[i] == Sorted_Data_Array[i+1])
		{
			Count = 2;
			Group_Length = Sorted_Data_Array[i].length;						// Finding The Length of the group(String Length as Each Member can carry 1 Digit Number)
			for(var j=i+2; j<9; j++)
			{
				if(Sorted_Data_Array[j] == Sorted_Data_Array[i])
				{
					Count++;																		// Finding Member of Group
				}
			}
			
			if(Count == Group_Length)																// If String length and Members are equal than it is a valid group
			{//alert("I AM THRIVING " + Count + " " + Group_Length);
				for(var w=0; w<3; w++)
				{
					for(var y=0; y<3; y++)
					{
						if(Sudoku_Solution[w][x][y][z].length > 1 && Sudoku_Solution[w][x][y][z] != Sorted_Data_Array[i])			// If not set and not a group member
						{
							for(var r=0; r<Group_Length; r++)
							{
								Sudoku_Solution[w][x][y][z] = Sudoku_Solution[w][x][y][z].replace(Sorted_Data_Array[i][r],"");		// Removing Group Members from the rest of Unit		
								if(Sudoku_Solution[w][x][y][z].length == 1)
								{
									//alert("Set = " + Sudoku_Solution[w][x][y][z]);
									Total_Set++;
									if(Total_Set == Total_Number_Of_Element)
									{
										//alert("Vertical Group Elemination Succeded.");
										return true;
									}
									return (Elemination(w,x,y,z,Sudoku_Solution[w][x][y][z]));
								}
							}
							//alert("Group_Length : " + Group_Length + "  Revised Array : " + Sudoku_Solution[w][x]);
						}
					}
				}
			}
		}
	}
	//alert("Sorted_Data_Array = " + Sorted_Data_Array);
	return false;
}