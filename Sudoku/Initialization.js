
var Table_Color = new Array('3388ff','00ff00','0000ff','aaaa00');

// Table Space Creation For Construction, Preview and Solution
	function Table_Space(Div_Id)
	{
		var Division = document.getElementById(Div_Id);								// Division like Construction, Preview, Solution
		
		if(Division != null)
		{
			var TD_Id;
			var Table_String = '<table>';
			
			for(var i=0; i<3; i++)
			{
				Table_String += '<tr>';
				for(var j=0; j<3; j++)
				{
					TD_Id = (i*3)+j+1;
					Table_String += '<td id="' + Div_Id + TD_Id + '" style="float:left;"> </td>';		// Div_Id + TD_Id like Construction1, Preview4, Solution9 etc
 				}
				Table_String += '</tr>';
			}
			Table_String += '</table>';
			Division.innerHTML = Table_String;
		}
	}
	
	// Draw Sudoku Matrices on Page
	function Draw_Matrices()
	{		
		var Id_Suffix;
		for(var i=0; i<3; i++)
		{
			Id_Suffix = (i*3);
			Next_Id = Sudoku_Construction("Construction" + (Id_Suffix + 1), Drop_Down, Next_Id, Table_Color[0]);
			Next_Id = Sudoku_Construction("Construction" + (Id_Suffix + 2), Drop_Down, Next_Id, Table_Color[1]);
			Next_Id = Sudoku_Construction("Construction" + (Id_Suffix + 3), Drop_Down, Next_Id, Table_Color[2]);
		}
		
		for(var i=0; i<9; i++)
		{
			Next_Id = Sudoku_Construction("Preview" + (i + 1), Preview_Blank_Default, Next_Id, Table_Color[3]);
		}
	}
	
	function Sudoku_Construction(Id, Content, Starting_Id, Color)
	{
		var Next_td_Id = 0;
		Construction_String = "<table border=1 id='" + Id + Starting_Id + "' bordercolor=#" + Color + ">";
		for(var i=0; i<3; i++)
		{
			Construction_String += "<tr>"; 
			for(var j=0; j<3; j++)
			{
				Next_td_Id = Starting_Id + (i*3+j);
				Construction_String += "<td id='" + Next_td_Id + "'>" + Content + "</td>";
			}
			Construction_String += "</tr>";
		}
		Construction_String += "</table>";
		document.getElementById(Id).innerHTML = Construction_String;
		return Next_td_Id+1;
	}