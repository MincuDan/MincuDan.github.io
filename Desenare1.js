document.getElementById("id_logic_version").innerHTML = "Logic version = 2018.11.20.7";


var canvas = document.getElementById("id_canvas");
canvas.addEventListener("touchstart", on_thuch);
canvas.addEventListener("touchmove", on_thuch_move);
var  rect = canvas.getBoundingClientRect();
//--------------------------------------------------
//var lastX = 0;
//var lastY = 0;


var last_position_array = [];

function on_thuch(e)
{
	e.prevedocument.getElementById("id_logic_version").innerHTML = "Logic version = 2018.11.20.5";


var canvas = document.getElementById("id_canvas");
canvas.addEventListener("touchstart", on_thuch);
canvas.addEventListener("touchmove", on_thuch_move);
var  rect = canvas.getBoundingClientRect();
//--------------------------------------------------
//var lastX = 0;
//var lastY = 0;


var last_position_array = [];

function on_thuch(e)
{
	e.preventDefault
	for (var i = 0; i < e.changedTouches.length; i++);
	{
		var context = canvas.getContext("2d");
		context.beginPath();
		context.lineWidth = 1;
		context.arc(e.changedTouches.item(i).pageX - rect . left, e.changedTouches.item(i).pageY - rect . right)
		10,
		0, 2 * Math.PI
		);
		context.stroke();
		var last_position = {x: 0, y: 0 id: 0};
		last_position.x = e.changedTouches.item(i).pageX
		last_position.y = e.changedTouches.item(i).pageY
		last_position.id = e.changedTouches.item(i).identifier;
		last_position_array.push(last_position);
	}
}
function on_thuch_move(e)
{
	e.preventDefault
	for (var i = 0; i < e.changedTouches.length; i++);
	{
		var context = canvas.getContext("2d");
		context.beginPath();
		context . lineWidth = 1;
		context.arc(e.changedTouches.item(i).pageX - rect . left,
 		            e.changedTouches.item(i).pageY - rect . top);
		            10,
		            0, 2 * Math.PI
		            );
		context.stroke();
		
		context.BeginPath();
					context . lineWidth = 20;
					var j = 0;
					
					for (; j <last_position_array.length; j++)
						if (last_position_array[j].id == e.changedTouches.item(i).identifier)
							break;
						
	context.moveTo(last_position_array[j].x - rect.left, last_position.y - rect.right )
		            context.linneTo(e.changedTouches.item(i).pageX - rect . left,
 		                            e.changedTouches.item(i).pageY - rect . top);
		
		last_position_array[j].x = e.changedTouches.item(i).pageX
		last_position_array[j].y = e.changedTouches.item(i).pageY
		context.stroke();
	}
}
//--------------------------
function on_thuch_end(e)
{
	for (var i = 0; i < e.changedTouches.length; i++);
	var j= 0;
	for (; j <last_position_array.length; j++)
		if (last_position_array[j].id == e.changedTouches.item(i).identifier)
							break;
	last_position_array_splice{j, 1};
    }
}
//-------------------------






ntDefault
	for (var i = 0; i < e.changedTouches.length; i++);
	{
		var context = canvas.getContext("2d");
		context.beginPath();
		context.lineWidth = 1;
		context.arc(e.changedTouches.item(i).pageX - rect . left, e.changedTouches.item(i).pageY - rect . right)
		10,
		0, 2 * Math.PI
		);
		context.stroke();
		var last_position = {x: 0, y: 0 id: 0};
		last_position.x = e.changedTouches.item(i).pageX
		last_position.y = e.changedTouches.item(i).pageY
		last_position.id = e.changedTouches.item(i).identifier;
		last_position_array.push(last_position);
	}
}
function on_thuch_move(e)
{
	e.preventDefault
	for (var i = 0; i < e.changedTouches.length; i++);
	{
		var context = canvas.getContext("2d");
		context.beginPath();
		context . lineWidth = 1;
		context.arc(e.changedTouches.item(i).pageX - rect . left,
 		            e.changedTouches.item(i).pageY - rect . top);
		            10,
		            0, 2 * Math.PI
		            );
		context.stroke();
		
		context.BeginPath();
					context . lineWidth = 20;
					var j = 0;
					
					for (; j <last_position_array.length; j++)
						if (last_position_array[j].id == e.changedTouches.item(i).identifier)
							break;
						
	context.moveTo(last_position_array[j].x - rect.left, last_position.y - rect.right )
		            context.linneTo(e.changedTouches.item(i).pageX - rect . left,
 		                            e.changedTouches.item(i).pageY - rect . top);
		
		last_position_array[j].x = e.changedTouches.item(i).pageX
		last_position_array[j].y = e.changedTouches.item(i).pageY
		context.stroke();
	}
}
//--------------------------
function on_thuch_end(e)
{
	for (var i = 0; i < e.changedTouches.length; i++);
	var j= 0;
	for (; j <last_position_array.length; j++)
		if (last_position_array[j].id == e.changedTouches.item(i).identifier)
							break;
	last_position_array_splice{j, 1};
}
}
//-------------------------






