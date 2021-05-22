// Initialize the Things
	function Load()
	{
		//Load_JuSt_Files();
		try
		{
			Add_Help_Tool();
			
			Initialize_Global_Variables();
		
			Reset_HTML_Elements();
			
			Score_Update();
			
			Vanish_Mukesh();
			
			Set_Reviewer(false);
			
			Reset_Clock();
			
			// Creating Div for Sudoku Matrices 
			Table_Space("Construction");
			Table_Space("Preview");
			Table_Space("Solution");
			
			// Creating 4 Dimensions	[3][3][3][3]
			for(var i=0; i<3; i++)
			{
				Sudoku_Data[i] = new Array(0,0,0);
				Sudoku_Solution[i] = new Array(0,0,0);
				
				for(var j=0; j<3; j++)
				{
					Sudoku_Data[i][j] = new Array(0,0,0);
					Sudoku_Solution[i][j] = new Array(0,0,0);
					
					for(var k=0; k<3; k++)
					{
						Sudoku_Data[i][j][k] = new Array(0,0,0);
						Sudoku_Solution[i][j][k]  = new Array("123456789","123456789","123456789");
					}
				}
			}
		
			Next_Id = 0;
			Construction_String = "";
			Drop_Down = '<select onchange="Preview(this,' + Preview_Color + ');"> <option value="0"><option value="1">1</option>\
			<option value="2">2</option><option value="3">3</option><option value="4">4</option>\
			<option value="5">5</option><option value="6">6</option><option value="7">7</option>\
			<option value="8">8</option><option value="9">9</option></select>';
			Preview_Blank_Default = "&nbsp;.&nbsp;.&nbsp;";
			Blank_Suffix = "&nbsp;&nbsp;&nbsp;";
			document.getElementById("User_Message").innerHTML = User_Message;
			
			Draw_Matrices();
			User_Full_Guide();
		}
		catch(e)
		{
			alert("Error While Loading. " + e.message);
		}
	}
	
	function Add_Help_Tool()
	{
		// Value, OnClick
		User_Features = new Array( 
									new Array("Generate_Puzzle", " Generate Puzzle ", "Genrator_Engine();", "Demostrate_Generate_Puzzle();"),
									new Array("Default_Puzzle", " Default Puzzle ", "Default_Puzzle();", "Demostrate_Default_Puzzle();"),
									new Array("Set_My_Puzzle", " Set My Puzzle ", "Set_Puzzle(\'#990099\');", "Demostrate_Set_My_Puzzle();"),
									new Array("Show_Solution", " Show Solution ", "Show_Solution(Sudoku_Solution);","Demostrate_Show_Solution();"), 
									new Array("Hint_Button", " One Time Hint ", "Hint();","Demostrate_Hint_Button();"),
									new Array("Scan_Review", " Scan Review ", "Scan_Review();","Demostrate_Scan_Review();"), 
									new Array("Parrellel_Checker", "Parrellel Checker", "Set_Reviewer(this.checked);","Demostrate_Parrellel_Checker();"),
									new Array("Restart_Game", "Restart Game", "Load();","Demostrate_Restart_Game();") 
								);

		var Puzzle_Tools = "";
		
		var i;
		for(i=0; i<3; i++)
		{
			Puzzle_Tools += '<input type="button" id="' + User_Features[i][0] + '" value="' + User_Features[i][1] + '" onclick="' + User_Features[i][2] + '" style="margin-left:15px;" />';
		}
	
		document.getElementById("User_Puzzle_Tools").innerHTML = Puzzle_Tools;
	
		Help_Tools = "";
		
		var j;
		for(j=i; j<6; j++)
		{
			Help_Tools += '<input type="button" id="' + User_Features[j][0] + '" value="' + User_Features[j][1] + '" onclick="' + User_Features[j][2] + '" style="margin-left:15px;" /><br></br>';
		}
	
		Help_Tools += '<input id="Reviewer_Check" type="checkbox" value=" Reviewer " onclick="' + User_Features[j][2] + '">&nbsp;' + User_Features[j][0];
		
		document.getElementById("User_Help_Tool").innerHTML = Help_Tools;
	}
	
	function Initialize_Global_Variables()
	{	
		Complexity = 0;
		Sudoku_Data = new Array(0,0,0);
		Sudoku_Solution = new Array(0,0,0);
		Total_Number_Of_Element = 81;
		Edit_Preview_UI_Element_ID_Difference = 81;
		Set_Problem = false;
		User_Message = "";
		Total_Set = 0;
		Index_1 = 0;
		Index_2 = 0;
		Index_3 = 0;
		Index_4 = 0;
		Default_Colour = '#009900';
		Conflict_Colour = '#FF8811';
		Preview_Color = '000000';
		Colors = new Array('3388ff','F0AF5A','F07F5A','2EA35A','FFFF00','444444','0000FF','E6389D');
		Steps = 0;
		Total_Blank_Element = Total_Number_Of_Element;
	}
	
	function Reset_HTML_Elements()
	{
		document.getElementById("Lever").innerHTML = '<img src="Puzzler.js" height="4px" width="6px" style="opacity:50;" onclick="Creator_Mukesh();"/>';
		document.getElementById("Hint_Button").style.display="";
		document.getElementById("Reviewer_Check").checked = false;
		document.getElementById("Legends").innerHTML = "";
		document.getElementById("Introduced_By").innerHTML = "";
		document.getElementById("Reviewers").innerHTML = "";
		document.getElementById("Greeting").innerHTML = "";
	}
	
	function loadfile(filename)
	{
		var files = document.getElementsByTagName("script");
		var file_Index;
		var Exist = false;
		for(var z=0; z<files.length; z++)
		{
			file_Index = files[z].src.indexOf(filename);
			if (file_Index != -1)	//if filename is a external file
			{ 
				Exist = true;
			}
		}
		
		if(!Exist)
		{ 
			var fileref=document.createElement('script');
			fileref.setAttribute("type","text/javascript");
			fileref.setAttribute("src", filename);
			fileref.setAttribute("id", filename);
		}
	  
		// alert(fileref);
	  
		if (typeof fileref != "undefined"){
			document.getElementsByTagName("head")[0].appendChild(fileref);
		}
	}
	
	
	function Load_JuSt_Files()
	{
		loadfile("Initialization.js");
		
		loadfile("Validation.js");
		loadfile("Preview.js");
		
		loadfile("Elimination.js");
		loadfile("Claim.js");
		loadfile("Insertion_Sort.js");
		loadfile("Group_Elimination.js");
		loadfile("Solution.js");
		
		loadfile("Set_Puzzle.js");
		loadfile("Default_Puzzle.js");
		
		loadfile("Hints.js");
		loadfile("Verification.js");
	}
	
	function removefile(filename)
	{
		var files = document.getElementsByTagName("script");
		var file_Index;
		for(var z=0; z<files.length; z++)
		{
			file_Index = files[z].src.indexOf(filename);
			if (file_Index != -1)	//if filename is a external file
			{ 
				files[z].parentNode.removeChild(files[z]);
			}
		}	
	}