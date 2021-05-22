var Levels = new Array("Easy", "Medium", "Hard", "Genius", "Extra Easy");
var Mininum_Hints = 20;
var Maximum_Hints = 45;

function Puzzle_Classifier()
{
	var Level_Drop_Down = '<select id="Hardness" onchange="Set_Clues(this.value);">';
	
	for(var L=0; L<Levels.length; L++)
	{
		Level_Drop_Down += '<option value="' + L + '">' + Levels[L] + '</option>';
	}
	
	Level_Drop_Down += '</select>';
	Level_Drop_Down +='<br></br><select id="Clues" onchange="Set_Level(this.value);">';
	
	for(var Hints=Mininum_Hints; Hints<=Maximum_Hints; Hints++)
	{
		Level_Drop_Down += '<option value="' + Hints + '">' + Hints + '</option>';
	}
	
	Level_Drop_Down += '</select>';
	Level_Drop_Down +='<br></br><input type="button" id="Setter" value="Auto Set" onclick="Auto_Setter();" />';
	
	
	document.getElementById("Lever").innerHTML = Level_Drop_Down;
	
	return true;
}

function Set_Clues(Value)
{
	var Clues = document.getElementById("Clues");
	
	switch(Value)
	{
		case "0":
				Clues.value = 37;
				break;
				
		case "1":
				Clues.value = 32;
				break;
				
		case "2":
				Clues.value = 30;
				break;
				
		case "3":
				Clues.value = 27;
				break;
		
		case "4":
				Clues.value = 40;
				break;
				
		default:
				alert("This Seems an Invalid Selection. Are you Plan to Fill a Complete Blank Puzzle ? No Clues at All. :( ");
				Clues.value = 0;
	}
	MAX_HINTS = Clues.value;
	return true;
}

function Set_Level(Value)
{
	var Hardness = document.getElementById("Hardness");
	
	if(Value >= 25 && Value < 28)
		Hardness.value = 3;
			else if(Value >= 28 && Value < 31 )
				Hardness.value = 2;
					else if(Value >= 31 && Value < 33)
						Hardness.value = 1;
							else if(Value >= 33 && Value < 38)
								Hardness.value = 0;
									else
										Hardness.value = 4;
										
	MAX_HINTS = Value;
	return true;
}

function Auto_Setter()
{
	Leveling();
	var Index_Array = Random_Indices(MAX_HINTS);
	Auto_Puzzle_Setting(Index_Array);
		
	document.getElementById("Setter").style.display = "none";
	
	return true;
}

function Random_Indices(Value)
{
	var Indices = new Array();
	var Index = 0;
	
	for(var k=0; k<Value; k++)
	{
		for(var e=0; e<50; e++)
		{
			Probable_Number = parseInt(Math.random() * 80);
			var duplicate = false;
		
			for(p=0; p<Indices.length; p++)
			{
				if(Indices[p] == Probable_Number)
				{
					duplicate = true;
					break;
				}
			}
			
			if(!duplicate)
			{
				Indices[Index++] = Probable_Number;
				break;
			}
		}
		
		if(Index <= k)
		{
			for(v=0; v<Total_Number_Of_Element; v++)
			{
				var Duplicated = false;
				for(p=0; p<Indices.length; p++)
				{
					if(Indices[p] == v)
					{
						Duplicated = true;
						break;
					}
				}
				if(!Duplicated)
				{
					Indices[Index++] = v;
					break;
				}
			}
		}
	}
	return Indices;
}

function Auto_Puzzle_Setting(Index_Array)
{
	for(var S=0; S<Index_Array.length; S++)
	{
		Hint_Provider(Index_Array[S] + Edit_Preview_UI_Element_ID_Difference);
	}
}