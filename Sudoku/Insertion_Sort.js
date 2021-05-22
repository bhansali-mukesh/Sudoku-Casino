// Insertion Sort, Utility Function
function Insertion_Sort(Two_D_Data_Array)
{
	var Sorted_1D_Data_Array = new Array(0,0,0,0,0,0,0,0,0);
	var Index;
	var Swap;
	
	Sorted_1D_Data_Array[0] = Two_D_Data_Array[0][0];
	// Sorting Unit via Insertion Sort to an Temporary Array
	for(var y=0; y<3; y++)
	{
		for(var z=0; z<3; z++)
		{
			Swap = 0;
			Index = y*3+z;
			for(var k=Index - 1; k>=0; k--)
			{
				if(Two_D_Data_Array[y][z] >= Sorted_1D_Data_Array[k])
				{
					Swap = k+1;														// Where to insert the New Element
					break;
				}
			}
			//alert(Swap);
			for(var l=Index-1; l>=Swap; l--)
			{//alert("Swaping...");
				Sorted_1D_Data_Array[l+1] = Sorted_1D_Data_Array[l];						// Adjust Array for making place to insert new element in sorted order
			}
			
			Sorted_1D_Data_Array[Swap] = Two_D_Data_Array[y][z];								// Insert New Element
			//alert(Swap);
			//alert(Sorted_1D_Data_Array + " < 1D 2D > " + Two_D_Data_Array);
		}
	}
		//alert("Insertion Sorted : " + Sorted_1D_Data_Array);
		return Sorted_1D_Data_Array;
}

// Insertion Sort from one Dimensional Array
function Insertion_Sort_1D(One_D_Array)
{
	var Sorted_1D_Data_Array = new Array(0,0,0,0,0,0,0,0,0);
	var Index;
	var Swap;
	
	// Sorting Unit via Insertion Sort to an Temporary Array
	for(var y=0; y<One_D_Array.length; y++)
	{
			Swap = 0;
			for(var k=y-1; k>=0; k--)
			{
				if(One_D_Array[y] >= Sorted_1D_Data_Array[k])
				{
					Swap = k+1;														// Where to insert the New Element
					break;
				}
			}
			//alert(Swap);
			for(var l=y-1; l>=Swap; l--)
			{//alert("Swaping...");
				Sorted_1D_Data_Array[l+1] = Sorted_1D_Data_Array[l];						// Adjust Array for making place to insert new element in sorted order
			}
			
			Sorted_1D_Data_Array[Swap] = One_D_Array[y];								// Insert New Element
			//alert(Swap);
			//alert(Sorted_1D_Data_Array + " < 1D 2D > " + One_D_Array);
		}
		//alert("Insertion Sorted : " + Sorted_1D_Data_Array);
		return Sorted_1D_Data_Array;
}