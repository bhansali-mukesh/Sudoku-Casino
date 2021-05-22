var Functions = new Array();
var Functions_Menus = new Array();

function Admins()
{
	var i = 0;
	var p = 0;
	for (var property in this)
	{
		if (this.hasOwnProperty(property) && typeof this[property] === 'function')
		{
			//console.log(property + ' is a function');
			Functions[i] = property;//i + ". " + property + "\n";
			Functions_Menus[i] = i++ + ". " + property;// + "\n";
		}
	}
	
	var Number = prompt(Functions_Menus);
	alert(this[Functions[Number]]);
	this[Functions[Number]]();
}